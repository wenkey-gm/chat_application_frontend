import axios from "axios";
import { API_URL } from "../utils/constants";
import { LoginResponse, UserLogin } from "../models/login";
import { UserMessages } from "../models/Message";

export const loginUser = async (user: UserLogin): Promise<LoginResponse> => {
  const response = await axios.post<LoginResponse>(`${API_URL}/login`, user);
  return response.data;
};

export const fetchUserMessages = async (
  email: string
): Promise<UserMessages> => {
  try {
    const response = await axios.get<UserMessages>(
      `${API_URL}/${email}/messages`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching messages:", error);
    throw error; // Re-throw the error so it can be handled in the component
  }
};
