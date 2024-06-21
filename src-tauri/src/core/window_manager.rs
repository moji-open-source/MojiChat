#[cfg(target_os = "macos")]
use tauri::TitleBarStyle;

use tauri::{AppHandle, WindowUrl};

pub enum WindowType {
  Login,
  Main,
}

pub struct WindowManager {
  win_conf: tauri::utils::config::WindowConfig,
}

impl WindowManager {
  pub fn defautl(url: String, label: String, title: String) -> Self {
    let mut win_conf = tauri::utils::config::WindowConfig::default();

    win_conf.title = title;
    win_conf.label = label;
    win_conf.url = WindowUrl::App(url.into());

    WindowManager { win_conf }
  }
}

impl WindowManager {
  pub fn build(self, app_handle: &AppHandle) -> Result<tauri::Window, tauri::Error> {
    tauri::window::WindowBuilder::from_config(app_handle, self.win_conf).build()
  }

  pub fn login_window() -> Self {
    let mut win = WindowManager::defautl(
      "/login".to_string(),
      "login_win".to_string(),
      "Login".to_string(),
    );
    win.win_conf.resizable = false;
    win.win_conf.maximized = false;
    win.win_conf.fullscreen = false;
    win.win_conf.width = 330.0;
    win.win_conf.height = 450.0;
    win.win_conf.resizable = false;

    win.win_conf.hidden_title = true;
    win.win_conf.visible = false;

    #[cfg(target_os = "macos")]
    {
      win.win_conf.title_bar_style = TitleBarStyle::Overlay;
    }

    win
  }

  pub fn main_window() -> Self {
    let mut win = WindowManager::defautl(
      "/main/chat".to_string(),
      "home".to_string(),
      "MoJi".to_string(),
    );

    win.win_conf.width = 1000.0;
    win.win_conf.height = 750.0;
    win.win_conf.hidden_title = true;
    win.win_conf.visible = false;

    #[cfg(target_os = "macos")]
    {
      win.win_conf.title_bar_style = TitleBarStyle::Overlay;
    }

    win
  }
}
