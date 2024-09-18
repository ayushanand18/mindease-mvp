import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Interface for a message object
export interface Message {
  role: 'ai' | 'user';
  content: string;
}

// Service class for handling backend communication
export class ChatbotService {
  private baseUrl = 'YOUR_BACKEND_API_URL'; // Replace with your actual API URL

  async sendMessage(message: string): Promise<string> {
    const response = await fetch(`${this.baseUrl}/chat`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message }),
    });

    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);   

    }

    return await response.json();
  }
}

export interface User {
  // Define the properties you want to store about users
  id: string;
  name: string;
  email: string;
  // ... other properties
}

export interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
  messages: Message[];
}

export const STORAGE_KEY = 'authState';
