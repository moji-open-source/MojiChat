use std::sync::{Arc, Mutex};

use once_cell::sync::OnceCell;
use tauri::{AppHandle, Manager};

use super::window_manager::{WindowConfig, WindowType};

#[derive(Debug, Default, Clone)]
pub struct Handle {
  pub app_handle: Arc<Mutex<Option<AppHandle>>>,
}

impl Handle {
  pub fn global() -> &'static Handle {
    static HANDLE: OnceCell<Handle> = OnceCell::new();

    HANDLE.get_or_init(|| Handle {
      app_handle: Arc::new(Mutex::new(None)),
    })
  }

  pub fn init(&self, app_handle: AppHandle) {
    *self.app_handle.lock().unwrap() = Some(app_handle);
  }

  pub fn close_window(label: &str) {
    let binding = Self::global().app_handle.lock().unwrap();
    let app_handle = binding.as_ref().unwrap();
    let main_win = app_handle.get_window(label);

    main_win.map(|win| {
      win.close().unwrap();
    });
    // main_win.close().expect("Window closing failure");
  }

  pub fn open_window(window_type: WindowType) {
    let binding = Self::global().app_handle.lock().unwrap();
    let app_handle = binding.as_ref().unwrap();

    let window_config = match window_type {
      WindowType::Login => WindowConfig::login_window(),
      WindowType::Main => WindowConfig::main_window(),
    };

    let new_window = window_config.build(app_handle);

    match new_window {
      Ok(window) => {
        let _ = window.show();
        let _ = window.set_focus();
        // let clone_window = window.clone();
        // // 监听 WebView 加载完成事件
        // window.listen("show-window", move |_| {
        //   if !clone_window.is_visible().unwrap_or(false) {
        //     let _ = clone_window.show();
        //     //   // 当 WebView 加载完成后，显示窗口
        //     //   let _ = clone_window.set_cursor_visible(true);
        //     let _ = clone_window.set_focus();
        //   }
        // });
      }
      Err(_) => todo!(),
    }
  }
}
