import React, { useState, useEffect } from 'react';

const IncrementingNumber = ({ number,speed }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      if (count < number) {
        setCount(prevCount => prevCount + 1);
      }
    }, speed);

    return () => {
      clearInterval(timer);
    };
  }, [count, number]);

  return <span>{count}</span>;
};

export default IncrementingNumber;
