import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const counterUpdate = createAsyncThunk(
    "counter/counterUpdate",
    async (value, thunkAPI) => {
        const response = await fetch("http://192.168.10.16:3000/api/updatecounter");
        const data = await response.json();
        return data;                            //this data will be received in action.payload in extraReducer.
    }
);


export const counterSlice = createSlice({
    name: "Counter",
    initialState: {
        count: 0,
        isLoading: false,
        error: "",
    },
    reducers: {
        increment: (state) => {
            state.count++
        },
        decrement: (state) => {
            state.count--;
        },
        incrementByAmount: (state, action) => {
            state.count += action.payload
        }
    },
    extraReducers: {
        [counterUpdate.fulfilled]: (state, action) => {
            state.count += action.payload;
            state.isLoading = false;
        },
        [counterUpdate.pending]: (state) => {
            state.isLoading = true;
        },
        [counterUpdate.rejected]: (state, action) => {
            console.log("rejected", action);
            state.isLoading = false;
            state.error = "Error in Update counter";
        }
    }
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;