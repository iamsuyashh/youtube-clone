import { createSlice } from "@reduxjs/toolkit";
import { getSearchPageVideos } from "../../store/reducers/getSearchPageVideos";
import { getRecommendedVideos } from "../../store/reducers/getRecommendedVideos";
import { getVideoDetails } from "../../store/reducers/getVideoDetails.js";
import { getHomePageVideos } from "../../store/reducers/getHomePageVideos";

const initialState = {
    videos: [],
    currentPlaying: null,
    searchTerm:"",
    searchResults:[],
    nextPageToken:null,
    recommendedVideo:[]
};


const youtubeSlice = createSlice({
    name:"youtubeApp",
    initialState,
    reducers:{
        clearVideos:(state)=>{
            state.videos = [];
            state.nextPageToken = null;
        },
        changeSearchTerm:(state,action)=>{
            state.searchTerm = action.payload;
        },
        clearSearchTerm:(state)=>{
            state.searchTerm = "";
        }
    },
    extraReducers:(builder) => {
        builder.addCase(getHomePageVideos.fulfilled,(state,action)=> {
            if(action.payload && action.payload.parsedData){
                state.videos = action.payload.parsedData;
                state.nextPageToken = action.payload.nextPageToken;
            }
        })
        builder.addCase(getSearchPageVideos.fulfilled,(state,action)=> {
            if(action.payload && action.payload.parsedData){
                state.videos = action.payload.parsedData;
                state.nextPageToken = action.payload.nextPageToken;
            }
        })
        builder.addCase(getRecommendedVideos.fulfilled, (state, action) => {
            state.recommendedVideos = action.payload;
          });
        builder.addCase(getVideoDetails.fulfilled,(state,action)=> {
                state.currentPlaying = action.payload;
        })
    }
})


export const {clearVideos,changeSearchTerm,clearSearchTerm} = youtubeSlice.actions;
export default youtubeSlice.reducer;