import { createReducer } from '@reduxjs/toolkit';
import { loginSuccess, logout, addMessage } from './actions';
import { AuthState, Message, STORAGE_KEY } from '@/lib/utils';
import { StorageService } from '@/lib/storage-service'; // Adjust the path as needed

// Load initial state from sessionStorage or use default
const defaultMessages: Message[] = [{ role: 'ai', content: 'Hello! How can I assist you today?' }];

const initialState: AuthState = StorageService.loadState<AuthState>(STORAGE_KEY) || {
  isAuthenticated: false,
  user: null,
  messages: defaultMessages,
};

const authReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loginSuccess, (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload;
      StorageService.saveState(STORAGE_KEY, state); // Save updated state
    })
    .addCase(logout, (state) => {
      state.isAuthenticated = false;
      state.user = null;
      state.messages = defaultMessages;
      StorageService.clearState(STORAGE_KEY); // Clear saved state on logout
    })    
    .addCase(addMessage, (state, action) => {
      state.messages = [...state.messages, action.payload];
      StorageService.saveState(STORAGE_KEY, state); // Save updated state
    });
});

export default authReducer;
