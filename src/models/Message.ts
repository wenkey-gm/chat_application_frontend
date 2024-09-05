export interface Message {
  id: number;
  content: string;
  is_received: boolean;
  user_id: number;
  timestamp: string;
}
