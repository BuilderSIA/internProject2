import { createSlice } from "@reduxjs/toolkit"



const initialState = {
    login: true
}

const logSlice = createSlice({
  name: 'login',
  initialState,
  reducers:{
    setLogin:(state)=>{
        state.login = !state.login
    }
  }
})

export const {setLogin} = logSlice.actions;
export default logSlice.reducer;