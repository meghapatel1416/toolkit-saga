import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from './counterSlice';
import styles from './Counter.module.css';
export default function Counter() {

  const data =   useSelector(y=>y.counter);
  const dispatch= useDispatch();
  return (
    <div>{data.value}
    
     <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
        <span className={styles.value}>{data.value}</span>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
    
    </div>
  )
}