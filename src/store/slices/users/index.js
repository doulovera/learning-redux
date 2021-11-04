import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'users',
  initialState: {
    list: []
  },
  reducers: {
    setUserList: (state, action) => {
      state.list = action.payload;
    }
  }
});

export const { setUserList } = userSlice.actions;

export default userSlice.reducer;

export const fetchAllUsers = () => {

  return (dispatch) => {

    fetch('https://reqres.in/api/users?per_page=12')
      .then(response => response.json())
      .then(json => {
        const { data } = json;
        dispatch(setUserList(data))
      })

  }

}