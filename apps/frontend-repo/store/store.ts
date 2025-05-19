const isServer = typeof window === "undefined";

const storage = {
  getItem: (key: string): Promise<string | null> => {
    if (isServer) return Promise.resolve(null);
    return Promise.resolve(localStorage.getItem(key));
  },

  setItem: (key: string, value: string): Promise<void> => {
    if (isServer) return Promise.resolve();
    localStorage.setItem(key, value);
    return Promise.resolve();
  },

  removeItem: (key: string): Promise<void> => {
    if (isServer) return Promise.resolve();
    localStorage.removeItem(key);
    return Promise.resolve();
  },
};

export default storage;
