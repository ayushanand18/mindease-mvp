import { Message, User } from '@/lib/utils';
import { createAction } from '@reduxjs/toolkit';

// Action creators for authentication
export const loginSuccess = createAction('auth/loginSuccess', (user: User) => ({ payload: user }));
export const logout = createAction('auth/logout');

// Action creator for adding messages
export const addMessage = createAction('auth/addMessage', (message: Message) => ({ payload: message }));