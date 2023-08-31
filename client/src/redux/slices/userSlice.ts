import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitialStateType = {
    id: string | null,
    token: string | null,
    email: string | null,
    isAdmin: boolean,
}

type PayloadType = {
    id: string,
    token: string,
    email: string,
    isAdmin: boolean,
}

const initialState: InitialStateType = {
    id: null,
    token: null,
    email: null,
    isAdmin: false,
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        signIn: (state, action: PayloadAction<PayloadType>) =>  {
            state = action.payload;
        },
        signOut: (state) => {
            state = initialState;
        }
    }
})