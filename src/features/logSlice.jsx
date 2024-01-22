import { createSlice } from "@reduxjs/toolkit"



const initialState = {
    login: true
}

const logSlice = createSlice({
  name: 'login',
  initialState,
  reducers:{
    setLogin:(state,payload)=>{
        state = !initialState.login
    }
  }
})

export const {setLogin} = logSlice.actions;
export default logSlice.reducer;