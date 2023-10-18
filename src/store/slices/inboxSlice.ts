import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../index';

type InboxState = {
  numUnreadMsgs: number;
};

const initialState: InboxState = {
  numUnreadMsgs: 0,
};

export const inboxSlice = createSlice({
  name: 'inbox',
  initialState,
  reducers: {
    setNumUnreadMsgs: (state, action: PayloadAction<number>) => {
      state.numUnreadMsgs = action.payload;
    },
    decrementNumUnreadMsgs: (state) => {
      state.numUnreadMsgs -= 1;
    },
  },
});

export const { setNumUnreadMsgs, decrementNumUnreadMsgs } = inboxSlice.actions;

export const selectNumUnreadMsgs = (state: RootState) => state.inbox.numUnreadMsgs;

export const InboxSliceReducer = inboxSlice.reducer;
