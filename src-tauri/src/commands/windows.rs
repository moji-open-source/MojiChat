use crate::core::{handle, window_manager::WindowType};

#[tauri::command]
pub fn open_main_window() {
  handle::Handle::open_window(WindowType::Main);
}

#[tauri::command]
pub fn close_window(label: &str) {
  handle::Handle::close_window(label);
  open_main_window();
}
