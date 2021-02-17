import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, incrementByAmount } from '../store/counterSlice';

export const Counter = () => {

    const [value, setValue] = useState(0);
    const dispatch = useDispatch();
    const counter = useSelector((state) => {
        return state.counter.count
    })

    return (
        <div>
            <h1>Counter : {counter}</h1>
            <br />

            <button onClick={() => {
                dispatch(increment());
            }}>Increment</button>

            <button onClick={() => {
                dispatch(decrement());
            }}>Decrement</button>

            <br />
            <br />

            <input type="text" onChange={(e) => {
                setValue(e.target.value);
            }} />

            {'   '}

            <button onClick={() => {
                dispatch(incrementByAmount(Number(value)));
            }}>Increment By Amount</button>


        </div >
    )
}
