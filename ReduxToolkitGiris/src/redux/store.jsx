import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../redux/counterSlice";
import userReducer from "../redux/userSlice";

const store = configureStore({
    reducer: {
        counter: counterReducer,
        user: userReducer
    },

});

export default store;
