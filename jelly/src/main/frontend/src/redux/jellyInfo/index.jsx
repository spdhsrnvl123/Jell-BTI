import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

const asyncUpFetch = createAsyncThunk(
  'jellyInfo/asyncUpFetch',
  async () => {
    const resp = await fetch('/jellies')
    const data = await resp.json();
    return data;
  }
)

const jellyInfoSlice = createSlice({
  name:'jellyInfoSlice',
  initialState:{
    value:{},
    status:'Welcome'
  },
  extraReducers: (builder) => {
    builder.addCase(asyncUpFetch.pending, (state,action)=>{
      state.status = 'Loading';
    })
    builder.addCase(asyncUpFetch.fulfilled, (state,action)=>{
      state.value = action.payload;
      state.status = 'complete';
    })
    builder.addCase(asyncUpFetch.rejected, (state,action)=>{
      state.status = 'fail';
    })
  }
});
export default jellyInfoSlice;
export {asyncUpFetch}