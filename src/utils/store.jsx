import {configureStore} from "@reduxjs/toolkit";
import appSlice from "./appSlice.jsx";
import chatSlice from "./chatSlice.jsx"

const store = configureStore({
    reducer: {
        app: appSlice,
        chat: chatSlice
    }
});

export default store;