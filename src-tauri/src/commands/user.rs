use serde::{Deserialize, Serialize};

#[derive(Serialize, Deserialize, Clone, Debug)]
pub struct EmailLoginRequest {
  email: String,
  psd: String,
}

#[tauri::command]
pub fn email_user_login(payload: EmailLoginRequest) -> Option<String> {
  println!("->> {:<12} - COMMAND", "email_user_login");
  println!("{payload:?}");
  Some("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c".into())
}

#[derive(Serialize, Deserialize, Clone, Debug)]
pub enum UserSex {
  Man,
  Girl,
}

#[derive(Serialize, Deserialize, Clone, Debug)]
pub struct UserInfo {
  user_id: u32,
  avatar: String,
  sex: UserSex,
  username: String,
  email: String,
  create_at: String,
  user_code: String,
  birthday: Option<String>,
  bio: Option<String>,
  location: Option<String>,
}

#[tauri::command]
pub fn get_user_info() -> UserInfo {
  UserInfo {
    user_id: 1234,
    avatar: "https://thirdqq.qlogo.cn/g?b=sdk&k=K6bKSaicicH6pFcez5aiaq1EA&kti=ZYDt9QAAAAE&s=100&t=1688390589".to_string(),
    sex: UserSex::Man,
    username: "Clover".to_string(),
    email: "cloveryou02@gmail.com".to_string(),
    create_at: "2023-12-19 09:13 23".to_string(),
    user_code: "2621869236".to_string(),
    birthday: Some("2022-4-13".to_string()),
    bio: Some("if I come to see you, I'll run.".to_string()),
    location: Some("China Zhanjiang".to_string()),
  }
}
