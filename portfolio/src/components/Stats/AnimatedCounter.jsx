import { useEffect, useState } from "react";

function AnimatedCounter({
  value,
  duration = 2000,
  decimals = 0,
}) {
  const [count, setCount] = useState(0);
const [started, setStarted] = useState(false);

  useEffect(() => {
    let start = 0;

    const increment =
      value / (duration / 16);

    const timer = setInterval(() => {
      start += increment;

      if (start >= value) {
        start = value;
        clearInterval(timer);
      }

      setCount(start);

    }, 16);

    return () => clearInterval(timer);

  }, [value, duration]);

  return (
    <>
      {count.toFixed(decimals)}
    </>
  );
}

export default AnimatedCounter;