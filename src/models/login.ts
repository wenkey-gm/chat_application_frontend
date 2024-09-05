export interface UserLogin {
  email: string;
  password: string;
}

export interface LoginResponse {
  id: number;
  email: string;
  is_success: boolean;
}
