import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    loading: false,
    posts: [],
    error: "",
}

const globalReducer = createSlice({
    name: "posts",
    initialState,
    reducers: {
        loadingPosts(state){
            state.loading = true
        },
        succesPosts(state, action){
            state.loading = false
            state.posts = action.payload
        },
        errorPosts(state, action){
            state.loading = false
            state.error = action.payload
        },
    }
})

export const {loadingPosts, succesPosts, errorPosts} = globalReducer.actions

export default globalReducer.reducer