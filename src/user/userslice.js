import { createSlice } from '@reduxjs/toolkit'

const initialState = {

    user: {
        data: null,
        isLoading: false,
        errors: '',
      }
}

const userslice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    getUserAction: (state, { payload }) => {
        state.user.isLoading = true;
        state.user.errors = '';
      },
      getUserSuccessAction: (state, { payload }) => {
        state.user.isLoading = false;
        state.user.data = payload;
      },
      getUserErrorAction: (state, { payload }) => {
        state.user.isLoading = false;
        state.user.errors = payload;
      },


  }
});

export const {getUserAction,getUserErrorAction,getUserSuccessAction} = userslice.actions

export default userslice.reducer