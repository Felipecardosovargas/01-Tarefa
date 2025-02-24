import { useState } from "react";
import styles from "./Counter.module.css"; 
const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Contador: {count}</h1>
      <button className={styles.button} onClick={() => setCount(count + 1)}>
        Clique aqui
      </button>
    </div>
  );
};

export default Counter;
