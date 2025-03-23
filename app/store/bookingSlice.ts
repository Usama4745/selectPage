// /store/bookingSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Skip, BookingState } from '../types';

const initialState: BookingState = {
  selectedSkip: null,
};

const bookingSlice = createSlice({
  name: 'booking',
  initialState,
  reducers: {
    setSelectedSkip: (state, action: PayloadAction<Skip | null>) => {
      state.selectedSkip = action.payload;
    },
    reset: (state) => {
      state.selectedSkip = null;
    },
  },
});

export const { setSelectedSkip, reset } = bookingSlice.actions;

export default bookingSlice.reducer;