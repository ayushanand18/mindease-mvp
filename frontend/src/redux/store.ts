import { createStore, combineReducers } from 'redux';
import authReducer from '@/auth/reducer'; // Assuming you have a reducer for authentication state
import { StorageService } from '@/lib/storage-service';
import { AuthState, STORAGE_KEY } from '@/lib/utils';

const rootReducer = combineReducers({
  auth: authReducer,
  // Add other reducers for different parts of your application state
});

// Fix the shape of preloadedState to match the rootReducer shape
const preloadedState = {
  auth: StorageService.loadState<AuthState>(STORAGE_KEY) || undefined,
};

const store = createStore(rootReducer, preloadedState);

// Infer the `RootState` type from the rootReducer
export type RootState = ReturnType<typeof rootReducer>;

export default store;
