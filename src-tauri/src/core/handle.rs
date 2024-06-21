use std::sync::{Arc, Mutex};

use once_cell::sync::OnceCell;
use tauri::{AppHandle, Manager};

use super::window_manager::{WindowManager, WindowType};

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
      WindowType::Login => WindowManager::login_window(),
      WindowType::Main => WindowManager::main_window(),
    };

    let new_window = window_config.build(app_handle);
    let _ = new_window.unwrap().show();
  }
}
