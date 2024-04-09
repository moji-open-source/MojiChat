#[cfg(target_os = "macos")]
use tauri::TitleBarStyle;

use tauri::{AppHandle, Theme};

pub enum WindowType {
  Login,
  Main,
}

pub struct WindowConfig {
  pub label: String,
  pub url: String,
  pub user_agent: Option<String>,
  pub file_drop_enabled: Option<bool>,
  pub center: Option<bool>,
  pub position: Option<(f64, f64)>,
  pub inner_size: Option<(f64, f64)>,
  pub min_inner_size: Option<(f64, f64)>,
  pub max_inner_size: Option<(f64, f64)>,
  pub resizable: Option<bool>,
  pub title: String,
  pub fullscreen: Option<bool>,
  pub focus: Option<bool>,
  pub transparent: Option<bool>,
  pub maximized: Option<bool>,
  pub visible: Option<bool>,
  pub decorations: Option<bool>,
  pub always_on_top: Option<bool>,
  pub content_protected: Option<bool>,
  pub skip_taskbar: Option<bool>,
  pub theme: Option<Theme>,
  #[cfg(target_os = "macos")]
  pub title_bar_style: Option<TitleBarStyle>,
  pub hidden_title: Option<bool>,
  pub accept_first_mouse: Option<bool>,
  pub tabbing_identifier: Option<String>,
  pub additional_browser_args: Option<String>,
}

impl WindowConfig {
  pub fn defautl(url: String, label: String, title: String) -> Self {
    #[cfg(target_os = "macos")]
    let title_bar_style = TitleBarStyle::Visible;
    WindowConfig {
      label,
      url,
      user_agent: Default::default(),
      file_drop_enabled: Some(true),
      center: Some(false),
      position: None,
      inner_size: Some((800.0, 600.0)),
      min_inner_size: None,
      max_inner_size: None,
      resizable: Some(true),
      title,
      fullscreen: Some(false),
      focus: Some(true),
      transparent: Some(false),
      maximized: Some(false),
      visible: Some(true),
      decorations: Some(true),
      always_on_top: Some(false),
      content_protected: Some(false),
      skip_taskbar: Some(false),
      theme: None,
      #[cfg(target_os = "macos")]
      title_bar_style: Some(title_bar_style),
      hidden_title: Some(false),
      accept_first_mouse: Some(false),
      tabbing_identifier: None,
      additional_browser_args: None,
    }
  }
}

impl WindowConfig {
  pub fn build(&self, app_handle: &AppHandle) -> Result<tauri::Window, tauri::Error> {
    let label = self.label.as_str();
    let url = self.url.as_str();
    let mut new_window =
      tauri::window::WindowBuilder::new(app_handle, label, tauri::WindowUrl::App(url.into()));

    new_window = new_window.title(self.title.as_str());
    if let Some(user_agent) = self.user_agent.as_ref() {
      new_window = new_window.user_agent(user_agent);
    }
    if let Some(center) = self.center {
      if center {
        new_window = new_window.center();
      }
    }
    if let Some((x, y)) = self.position {
      new_window = new_window.position(x, y);
    }
    if let Some((w, h)) = self.inner_size {
      new_window = new_window.inner_size(w, h);
    }
    if let Some((w, h)) = self.min_inner_size {
      new_window = new_window.min_inner_size(w, h);
    }
    if let Some((w, h)) = self.max_inner_size {
      new_window = new_window.max_inner_size(w, h);
    }
    if let Some(resizable) = self.resizable {
      new_window = new_window.resizable(resizable);
    }
    if let Some(fullscreen) = self.fullscreen {
      new_window = new_window.fullscreen(fullscreen);
    }
    if let Some(focus) = self.focus {
      new_window = new_window.focused(focus);
    }
    if let Some(maximized) = self.maximized {
      new_window = new_window.maximized(maximized);
    }
    if let Some(visible) = self.visible {
      new_window = new_window.visible(visible);
    }
    if let Some(decorations) = self.decorations {
      new_window = new_window.decorations(decorations);
    }
    if let Some(always_on_top) = self.always_on_top {
      new_window = new_window.always_on_top(always_on_top);
    }
    if let Some(content_protected) = self.content_protected {
      new_window = new_window.content_protected(content_protected);
    }
    if let Some(skip_taskbar) = self.skip_taskbar {
      new_window = new_window.skip_taskbar(skip_taskbar);
    }
    new_window = new_window.theme(self.theme);
    #[cfg(target_os = "macos")]
    if let Some(title_bar_style) = self.title_bar_style.clone() {
      new_window = new_window.title_bar_style(title_bar_style);
    }

    #[cfg(target_os = "macos")]
    if let Some(hidden_title) = self.hidden_title {
      new_window = new_window.hidden_title(hidden_title);
    }
    #[cfg(target_os = "macos")]
    if let Some(accept_first_mouse) = self.accept_first_mouse {
      new_window = new_window.accept_first_mouse(accept_first_mouse);
    }
    #[cfg(target_os = "macos")]
    if let Some(tabbing_identifier) = self.tabbing_identifier.as_ref() {
      new_window = new_window.tabbing_identifier(tabbing_identifier.as_str());
    }
    if let Some(additional_browser_args) = self.additional_browser_args.as_ref() {
      new_window = new_window.additional_browser_args(additional_browser_args.as_str());
    }
    new_window.build()
  }

  pub fn login_window() -> Self {
    let mut login_win_config = WindowConfig::defautl(
      "/login".to_string(),
      "login_win".to_string(),
      "Login".to_string(),
    );
    login_win_config.resizable = Some(false);
    login_win_config.maximized = Some(false);
    login_win_config.fullscreen = Some(false);
    login_win_config.inner_size = Some((330.0, 450.0));
    login_win_config.resizable = Some(false);
    #[cfg(target_os = "macos")]
    {
      login_win_config.title_bar_style = Some(TitleBarStyle::Overlay);
    }
    login_win_config.hidden_title = Some(true);
    login_win_config.visible = Some(false);

    login_win_config
  }

  pub fn main_window() -> Self {
    let mut login_win_config =
      WindowConfig::defautl("/main".to_string(), "home".to_string(), "MoJi".to_string());

    login_win_config.inner_size = Some((1000.0, 750.0));
    login_win_config.min_inner_size = Some((820.0, 550.0));
    #[cfg(target_os = "macos")]
    {
      login_win_config.title_bar_style = Some(TitleBarStyle::Overlay);
    }
    login_win_config.hidden_title = Some(true);
    login_win_config.visible = Some(false);

    login_win_config
  }
}
