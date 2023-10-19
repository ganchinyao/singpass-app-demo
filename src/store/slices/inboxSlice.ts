import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../index';
import { db } from '../../../db/db';

type InboxState = {
  readItemIds: string[];
  deletedItemIds: string[];
};

const initialState: InboxState = {
  readItemIds: db.inboxMessages.filter((item) => item.isRead).map((item) => item.id),
  deletedItemIds: [],
};

export const inboxSlice = createSlice({
  name: 'inbox',
  initialState,
  reducers: {
    addReadItemsId: (state, action: PayloadAction<string>) => {
      if (state.readItemIds.indexOf(action.payload) === -1) {
        state.readItemIds.push(action.payload);
      }
    },
    setReadItemsId: (state, action: PayloadAction<string[]>) => {
      state.readItemIds = action.payload;
    },
    addDeletedItemId: (state, action: PayloadAction<string>) => {
      if (state.deletedItemIds.indexOf(action.payload) === -1) {
        state.deletedItemIds.push(action.payload);
      }
    },
    setDeletedItemIds: (state, action: PayloadAction<string[]>) => {
      state.deletedItemIds = action.payload;
    },
  },
});

export const { addReadItemsId, setReadItemsId, addDeletedItemId, setDeletedItemIds } = inboxSlice.actions;

export const selectReadItemIds = (state: RootState) => state.inbox.readItemIds;
export const selectDeletedItemIds = (state: RootState) => state.inbox.deletedItemIds;

export const InboxSliceReducer = inboxSlice.reducer;
