// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use core::{handle, window_manager::WindowType};

use tauri::{App, Manager};
mod commands;
mod core;
mod error;

fn main() {
  tauri::Builder::default()
    .setup(|app| {
      set_up(app);
      handle::Handle::open_window(WindowType::Login);
      Ok(())
    })
    .invoke_handler(tauri::generate_handler![
      commands::user::email_user_login,
      commands::user::get_user_info,
      commands::windows::open_main_window,
      commands::windows::close_window
    ])
    .run(tauri::generate_context!())
    .expect("error while running tauri application");

  core::handle::Handle::global();
}

fn set_up(app: &mut App) {
  core::handle::Handle::global().init(app.app_handle());
}
