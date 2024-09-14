import { useEffect, useState } from "react";

function UseLocalStorage(key:string, defaultValue:string="dark"){
  const [value, setValue] = useState<string>(()=>{
    let currentValue;
    try {
      currentValue = JSON.parse(localStorage.getItem(key) || String(defaultValue));
    } catch (error) {
      console.log(error);
      currentValue = defaultValue;
    }
    return currentValue;
  });

  useEffect(()=>{
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}

export default UseLocalStorage;