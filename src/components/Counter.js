import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { counterUpdate, decrement, increment, incrementByAmount } from '../store/counterSlice';

export const Counter = () => {

    const [value, setValue] = useState(0);
    const dispatch = useDispatch();
    const { counter, isLoading } = useSelector((state) => {
        return {
            count: state.counter.count,
            isLoading: state.counter.isLoading
        }
    });

    if (isLoading) {
        return <div>Loading .....</div>
    }



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

            <br />

            <button onClick={() => {
                dispatch(counterUpdate());
            }}>Increment By Server</button>


        </div >
    )
}
