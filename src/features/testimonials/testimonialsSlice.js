import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { TESTIMONIALS_URL } from '../../constants';

export const fetchTestimonials = createAsyncThunk('testimonials/fetchTestimonials', async () => {
  const res = await axios.get(TESTIMONIALS_URL)
  const testimonials = res.data || []
  return testimonials
})

export const testimonialsSlice = createSlice({
  name: 'testimonials',
  initialState: {
    testimonials: [],
    status: 'idle',
  },
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchTestimonials.pending, (state, action) => {
        state.status = 'pending'
      })
      .addCase(fetchTestimonials.fulfilled, (state, action) => {
        state.status = 'success'
        state.testimonials = action.payload
      })
  }
})

export default testimonialsSlice.reducer
