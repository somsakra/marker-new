import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

interface IUser {
  message: string;
  email: string | null;
  token: string | null;
  refreshToken: string | null;
}

interface State {
  value: IUser;
  isLoading: boolean;
}

const initialState: State = {
  value: {
    message: "",
    email: localStorage.getItem("email"),
    token: localStorage.getItem("token"),
    refreshToken: null,
  },
  isLoading: false,
};

export const userLogin = createAsyncThunk(
  "userLogin",
  async (credential: { email: string; password: string }) => {
    const response = await axios.post("http://localhost:3001/user/login", {
      email: credential.email,
      password: credential.password,
    });
    return response.data;
  }
);
export const userSignup = createAsyncThunk(
  "userSignup",
  async (credential: { email: string; password: string }) => {
    const response = await axios.post("http://localhost:3001/user/signup", {
      email: credential.email,
      password: credential.password,
    });
    return response.data;
  }
);

export const getUserInfo = createAsyncThunk(
  "getUserInfo",
  async (token: string) => {
    const response = await axios({
      method: "POST",
      headers: { Authorization: `Bearer ${token}` },
      url: "http://localhost:3001/user/info",
    });
    return response.data;
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout(state) {
      state.value.email = null;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(userLogin.pending, (state, action) => {
        if (state.isLoading === false) {
          state.isLoading = true;
        }
      })
      .addCase(userLogin.fulfilled, (state, action) => {
        if (state.isLoading === true) {
          state.isLoading = false;
          state.value = action.payload;
        }
      })
      .addCase(userLogin.rejected, (state, action) => {
        if (state.isLoading === true) {
          state.isLoading = false;
          state.value.message = "Unauthorized";
        }
      })
      .addCase(userSignup.pending, (state, action) => {
        if (state.isLoading === false) {
          state.isLoading = true;
        }
      })
      .addCase(userSignup.fulfilled, (state, action) => {
        if (state.isLoading === true) {
          state.isLoading = false;
          state.value = action.payload;
        }
      })
      .addCase(userSignup.rejected, (state, action) => {
        if (state.isLoading === true) {
          state.isLoading = false;
          state.value.message = "Register Fail";
        }
      })
      .addCase(getUserInfo.pending, (state, action) => {
        if (state.isLoading === false) {
          state.isLoading = true;
        }
      })
      .addCase(getUserInfo.fulfilled, (state, action) => {
        if (state.isLoading === true) {
          state.isLoading = false;
          state.value = action.payload;
        }
      })
      .addCase(getUserInfo.rejected, (state, action) => {
        if (state.isLoading === true) {
          state.isLoading = false;
        }
      });
  },
});

export const { logout } = userSlice.actions;

export default userSlice.reducer;
