import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: null,
        role: null,
    },
    reducers: {
        //! Actions are plain javascript objects that describes what happens in an application
        //! Payload is a property within the action that carries the actual data needed to perform the action or state update
        login: (state, action) => {
            state.user = action.payload.user;
            state.role = action.payload.role;
        }
    }
})