export const getFromStorage = async key => {
  try {
    const data = await localStorage.getItem(key);
    if (!data) {
      console.log("Empty Key");
    }
    return data;
  } catch (err) {
    console.log("Key Error", err);
  }
};
