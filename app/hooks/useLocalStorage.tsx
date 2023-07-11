import { useEffect, useState } from "react";

const useLocalStorage = (key: string, initialValue: any) => {
  //useState value and set value, generic so we can use for other things besides tasks, IE notes.
  const [value, setValue] = useState<any>(() => {
    //try and catch
    try {
      //set localValue to data for getitem, key what we passed as the key in the inital useLocalStorage call
      const localValue = window.localStorage.getItem(key);
      //return if localValue is true then parse the data we got if not return the intial value that was passed.
      return localValue ? JSON.parse(localValue) : initialValue;
    } catch (err) {
      //catch error and log to console. if error just return the initialvalue
      console.log(err);
      return initialValue;
    }
  });

  //Initial load set the local storage
  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};

export default useLocalStorage;
