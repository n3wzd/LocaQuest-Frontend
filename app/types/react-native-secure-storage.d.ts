declare module 'react-native-secure-storage' {
    interface SecureStorageOptions {
      accessible?: string;
      authenticationType?: string;
    }
  
    interface SecureStorage {
      setItem(key: string, value: string, options?: SecureStorageOptions): Promise<void>;
      getItem(key: string): Promise<string | null>;
      removeItem(key: string): Promise<void>;
      getAllItems(): Promise<{ [key: string]: string }>;
    }
  
    const SecureStorage: SecureStorage;
  
    export default SecureStorage;
  }
  