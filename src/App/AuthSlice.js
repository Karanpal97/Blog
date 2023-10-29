import {createSlice,nanoid} from "@reduxjs/toolkit"

const initialState={
    status:false,
    userData:null
}

export const AuthSlice=createSlice({
    name:"Auth",
    initialState,

    reducers:{
        login:(state,action)=>{
            state.status=true,
            state.userData=action.payload.userData
         },
        logOut:(state)=>{
            state.status=false,
            state.userData=null
        }
    }

})
export const {logOut,login} =AuthSlice.actions
export default AuthSlice.reducer