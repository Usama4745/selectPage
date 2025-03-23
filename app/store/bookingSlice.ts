// /store/bookingSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Skip, BookingState } from '../types';

const initialState: BookingState = {
  postcode: '',
  area: '',
  wasteType: '',
  selectedSkip: null,
  permitRequired: false,
  selectedDate: null,
};

const bookingSlice = createSlice({
  name: 'booking',
  initialState,
  reducers: {
    setPostcode: (state, action: PayloadAction<string>) => {
      state.postcode = action.payload;
    },
    setArea: (state, action: PayloadAction<string>) => {
      state.area = action.payload;
    },
    setWasteType: (state, action: PayloadAction<string>) => {
      state.wasteType = action.payload;
    },
    setSelectedSkip: (state, action: PayloadAction<Skip | null>) => {
      state.selectedSkip = action.payload;
    },
    setPermitRequired: (state, action: PayloadAction<boolean>) => {
      state.permitRequired = action.payload;
    },
    setSelectedDate: (state, action: PayloadAction<string | null>) => {
      state.selectedDate = action.payload;
    },
    reset: (state) => {
      state.postcode = '';
      state.area = '';
      state.wasteType = '';
      state.selectedSkip = null;
      state.permitRequired = false;
      state.selectedDate = null;
    },
  },
});

export const {
  setPostcode,
  setArea,
  setWasteType,
  setSelectedSkip,
  setPermitRequired,
  setSelectedDate,
  reset,
} = bookingSlice.actions;

export default bookingSlice.reducer;