import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitialStateType = {
    userId: string | null,
    userToken: string | null,
    userEmail: string | null,
    userIsAdmin: boolean,
}

type PayloadType = {
    userId: string,
    userToken: string,
    userEmail: string,
    userIsAdmin: boolean,
}

const initialState: InitialStateType = {
    userId: null,
    userToken: null,
    userEmail: null,
    userIsAdmin: false,
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        signIn: (state, action: PayloadAction<PayloadType>) =>  {
            state.userId = action.payload.userId;
            state.userToken = action.payload.userToken;
            state.userEmail = action.payload.userEmail;
            state.userIsAdmin = action.payload.userIsAdmin;
        },
        signOut: (state) => {
            state.userId = null
            state.userToken = null
            state.userEmail = null
            state.userIsAdmin = false
        }
    }
})