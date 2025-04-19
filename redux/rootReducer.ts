import { createSlice } from "@reduxjs/toolkit";
import { RefObject } from "react";

export interface IinitialState {
  aboutRef: null | RefObject<HTMLDivElement>;
  projectRef: null | RefObject<HTMLDivElement>;
  homeRef: null | RefObject<HTMLDivElement>;
  skillsRef: null | RefObject<HTMLDivElement>;
  contactRef: null | RefObject<HTMLDivElement>;
}

const initialState: IinitialState = {
  aboutRef: null,
  projectRef: null,
  homeRef: null,
  skillsRef: null,
  contactRef: null,
};

export const rootSlice = createSlice({
  initialState,
  name: "rootSlice",
  reducers: {
    setAboutRef: (state, action) => {
      state.aboutRef = action.payload;
    },
    setHomeRef: (state, action) => {
      state.homeRef = action.payload;
    },
    setSkillsRef: (state, action) => {
      state.skillsRef = action.payload;
    },
    setProjectRef: (state, action) => {
      state.projectRef = action.payload;
    },
    setContactRef: (state, action) => {
      state.contactRef = action.payload;
    },
  },
});

export const {
  setAboutRef,
  setHomeRef,
  setProjectRef,
  setSkillsRef,
  setContactRef,
} = rootSlice.actions;

export default rootSlice.reducer;
