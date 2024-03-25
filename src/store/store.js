import { configureStore } from "@reduxjs/toolkit"; // to configuerStore and pass the reducer (Slices)

// Import Reducers 
import counterSlice from "../features/counter/counterSlice";

export const store = configureStore({
    reducer : {
        counter : counterSlice //pass all your slices here
    }
})

// Store is exported and now it'll be passed through index.js to be provided to app 
// useDispatch and useSelector to dispatch actions and select states respectively