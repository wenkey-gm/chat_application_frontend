export interface Message {
  id: number;
  content: string;
  is_received: boolean;
  user_id: number;
  timestamp: string;
}

export interface UserMessages {
  id: number;
  email: string;
  messages: Message[];
}
