import { createSlice, configureStore, PayloadAction } from "@reduxjs/toolkit";
import { UserState } from "./interfaces/userState.interface";


export const userSlice = createSlice({
    name: "user",
    initialState: { name: "", address: "", email: "", phone: "" } as UserState,
    reducers: {
      setUser: (state, action: PayloadAction<UserState>) => ({ ...state, ...action.payload }),
    },
  });

export const store = configureStore({ reducer: { user: userSlice.reducer } });



