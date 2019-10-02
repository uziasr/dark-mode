import {useState} from 'react'

// function useLocalStorage (key, initialValue){
//     if(typeof key!=='string'){
//         throw new Error('Invalid Param: we need a string!')
//     }
// }
// const [storedValue, setStoredValue] = useState(()=>{
//      // Get from local storage by key
//   const item = window.localStorage.getItem(key);
//   // Parse and return stored json or, if undefined, return initialValue
//   return item ? JSON.parse(item) : initialValue;
// })

export const useLocalStorage = (key, initialValue) => {
    if(typeof key!=='string'){
                throw new Error('Invalid Param: we need a string!')
            }
    const [storedValue, setStoredValue] = useState(() => {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    });
    const setValue = value => {
        // Save state
        setStoredValue(value);
        // Save to local storage
        window.localStorage.setItem(key, JSON.stringify(value));
      };
  
    return [storedValue, setValue];
  };