import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Define all of your initial states
const initialState = {
    count: 0,
    status: 'idle'
};



// Define async thunk functions
export const IncrementCount = createAsyncThunk(
    'counter/increment',
    (_, thunkAPI) => {
        try {
            return thunkAPI.dispatch(counterSlice.actions.handleIncrement());
        } catch (error) {
            console.log(error);
            return thunkAPI.rejectWithValue(error);
        }
    }
);

export const DecrementCount = createAsyncThunk(
    'counter/decrement',
    (_, thunkAPI) => {
        try {
            return thunkAPI.dispatch(counterSlice.actions.handleDecrement());
        } catch (error) {
            console.log(error);
            return thunkAPI.rejectWithValue(error);
        }
    }
);


// Now createSlice which contains 
// name ... name of slice
// initial States
// reducers - actions that are used to manipulate the initialstates
// extraReducers
export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        clearState: () => initialState,
        handleIncrement: state => {
            state.count += 1;
        },
        handleDecrement: state => {
            state.count -= 1;
        }
    }
});

// Export reducers -- we can also use reducers directly in our code by dispatching it similarly in a way we are using thunk Actions
export const { clearState, handleIncrement, handleDecrement } = counterSlice.actions;


// Export reducer
export default counterSlice.reducer;

// Actions:
// Actions are like messages that tell the Redux store what happened. They are plain JavaScript objects that have a type field to describe the type of action being performed. These actions are dispatched (sent) to the Redux store. They carry the information needed to update the state of the application.

// Reducers:
// Reducers are functions that specify how the application's state changes in response to actions sent to the Redux store They take the current state and an action as arguments, and return a new state based on that action. Reducers are responsible for updating the state based on the action received.