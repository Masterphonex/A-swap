import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUsers(state, action) {
      state.users = action.payload;
    },
    updateUserAmount(state, action) {
      const { userId, newAmount } = action.payload;
      state.users = state.users.map(user =>
        user._id === userId ? { ...user, amount: newAmount } : user
      );
    },
  },
});

export const { setUsers, updateUserAmount } = usersSlice.actions;
export default usersSlice.reducer;