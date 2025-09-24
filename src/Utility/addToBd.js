// Utility functions for Cart and Wishlist
const getStoredDeviceList = (key = "details") => {
    const storedListStr = localStorage.getItem(key);
    if (storedListStr) return JSON.parse(storedListStr);
    return [];
  };
  
  const addToStoredDeviceList = (id, key = "details") => {
    const storedList = getStoredDeviceList(key);
    if (storedList.includes(id)) return false; // Already exists
    storedList.push(id);
    localStorage.setItem(key, JSON.stringify(storedList));
    return true;
  };
  
  export { addToStoredDeviceList, getStoredDeviceList };
  