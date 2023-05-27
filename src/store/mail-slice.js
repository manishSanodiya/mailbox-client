import { createSlice } from "@reduxjs/toolkit";

// const initialState = {mailData:[], unreadMessageCount:0, firstTime:true};
const initialState = { mailData: [], firstTime: true, unreadMessageCount: 0 };

const mailSlice = createSlice({
    name: 'mail',
    initiaState: initialState,
    reducers:{
        firstTime(state,action){
            state.firstTime = action.payload
        },
        add(state,action){
            state.mailData = [action.payload, ...state.mailData]

        },
        remove(state,action){
            state.mailData = state.mailData.filter(mail => mail.id !== action.payload.id);
        },
        replace(state, action) {
            state.mailData = action.payload.mailData;
            state.firstTime = false;
            // console.log(state.mailData);
            state.unreadMessageCount = action.payload.unreadMessageCount;
          }
    }
})



export const mailActions = mailSlice.actions;

export default mailSlice.reducer;