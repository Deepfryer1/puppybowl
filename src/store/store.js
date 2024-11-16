import { configureStore } from "@reduxjs/toolkit";
//NEW
import api from "./api";
//NEW
// TODO: configure the store to use the API slice's auto-generated reducer and custom middleware.
const store = configureStore({
//NEW
reducer: {
    [api.reducerPath]: api.reducer,  
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware), 
});
//NEW
export default store;
