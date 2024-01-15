import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { PACKAGES_URL } from '../../constants';

export const fetchPackages = createAsyncThunk('packages/fetchPackages', async () => {
  const res = await axios.get(PACKAGES_URL)
  const packages = res.data || []
  return packages
})

export const fetchPackageBySlug = createAsyncThunk('packages/fetchPackageBySlug', async (slug) => {
  const res = await axios.get(PACKAGES_URL)
  const packages = res.data || []
  const pkg = packages.find(pkg => pkg.slug === slug) || {}
  return pkg
})

export const packagesSlice = createSlice({
  name: 'packages',
  initialState: {
    packages: [],
    packagesStatus: 'idle',
    pkg: {},
    pkgStatus: 'idle'
  },
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchPackages.pending, (state, action) => {
        state.packagesStatus = 'pending'
      })
      .addCase(fetchPackages.fulfilled, (state, action) => {
        state.packagesStatus = 'success'
        state.packages = action.payload
      })
      .addCase(fetchPackageBySlug.pending, (state, action) => {
        state.pkgStatus = 'pending'
      })
      .addCase(fetchPackageBySlug.fulfilled, (state, action) => {
        state.pkgStatus = 'success'
        state.pkg = action.payload
      })
  }
})

export default packagesSlice.reducer
