export class StorageService {
    static saveState(key: string, state: any) {
      try {
        const serializedState = JSON.stringify(state);
        sessionStorage.setItem(key, serializedState);
      } catch (error) {
        console.error("Could not save state", error);
      }
    }
  
    static loadState<T>(key: string): T | undefined {
      try {
        const serializedState = sessionStorage.getItem(key);
        if (serializedState === null) return undefined;
        return JSON.parse(serializedState) as T;
      } catch (error) {
        console.error("Could not load state", error);
        return undefined;
      }
    }
  
    static clearState(key: string) {
      try {
        sessionStorage.removeItem(key);
      } catch (error) {
        console.error("Could not clear state", error);
      }
    }
  }
  