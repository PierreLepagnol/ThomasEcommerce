import { useState } from 'react';

export const useCounter = (mincount) => {
  const [count, setCount] =useState(mincount);
    
  const addCountHandler = () => {
    setCount(count + 1);
  };
  const removeCountHandler = () => {
    if(count === 0){
      return;  
    }
    setCount(count - 1);
  };

  return {
    count,
    addCountHandler,
    removeCountHandler,
  }
};