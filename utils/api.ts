import { SaveData } from '../types';

const LOCAL_STORAGE_KEY = 'bible_word_search_save_v1';
const DEVICE_ID_KEY = 'bible_word_search_device_id';

// Helper to get a stable ID for the device/user
export const getDeviceId = (): string => {
  let id = localStorage.getItem(DEVICE_ID_KEY);
  if (!id) {
    id = 'user_' + Math.random().toString(36).substr(2, 9) + Date.now().toString(36);
    localStorage.setItem(DEVICE_ID_KEY, id);
  }
  return id;
};

/**
 * Client-side API wrapper to communicate with Neon DB via Vercel Functions.
 * Includes fallback to localStorage if offline or API fails.
 */
export const api = {
  /**
   * Loads player data from Cloud (preferred) or Local Storage.
   */
  async loadData(userId?: string): Promise<SaveData | null> {
    const targetId = userId || getDeviceId();
    
    try {
      // Attempt to fetch from Cloud
      const response = await fetch(`/api/data?userId=${targetId}`);
      
      if (response.ok) {
        const cloudData = await response.json();
        // Sync cloud data to local storage for offline backup
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(cloudData));
        return cloudData;
      }
    } catch (e) {
      console.warn("Cloud load failed, falling back to local:", e);
    }

    // Fallback to Local Storage
    const localData = localStorage.getItem(LOCAL_STORAGE_KEY);
    return localData ? JSON.parse(localData) : null;
  },

  /**
   * Saves player data to Cloud and Local Storage.
   */
  async saveData(data: SaveData, specificUserId?: string): Promise<boolean> {
    // Always save locally first (optimistic UI)
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data));
    } catch (e) {
      console.error("Local save failed:", e);
    }

    const targetId = specificUserId || getDeviceId();

    try {
      // Fire and forget - don't block UI for cloud save, but try it
      await fetch('/api/data', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId: targetId,
          data: data
        }),
      });
      return true;
    } catch (e) {
      console.warn("Cloud save failed:", e);
      return false; // Still returns false for cloud failure, but local persisted
    }
  }
};