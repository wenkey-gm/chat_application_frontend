import axios from "axios";
import { API_URL } from "../utils/constants";
import { LoginResponse, UserLogin } from "../models/login";
import { Message, UserMessages } from "../models/Message";

export const loginUser = async (user: UserLogin): Promise<LoginResponse> => {
  try {
    const response = await axios.post<LoginResponse>(`${API_URL}/login`, user);
    return response.data;
  } catch (error) {
    console.error("Error login user:", error);
    throw error;
  }
};

export const fetchUserMessages = async (
  token: string
): Promise<UserMessages> => {
  try {
    const response = await axios.get<UserMessages>(
      `${API_URL}/${token}/messages`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching messages:", error);
    throw error;
  }
};

export const saveMessage = async (
  token: string,
  content: string,
  isReceived: boolean,
  userId: number
): Promise<Message> => {
  try {
    const response = await axios.post(`${API_URL}/${token}/message`, {
      content: content,
      is_received: isReceived,
      user_id: userId,
    });
    return response.data;
  } catch (error) {
    console.error("Error saving message:", error);
    throw error;
  }
};
