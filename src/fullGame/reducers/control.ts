import { createSlice } from "@reduxjs/toolkit";
import { ControlItem } from "../../../types/global.type";
interface typeSet {
  controlList: ControlItem[];
  currentStep: number;
  play: boolean;
}
const initialState: typeSet = {
  play: false,
  currentStep: 1,
  controlList: [
    {
      id: "1",
      position: { x: 400, y: 60 },
      data: { label: "main", color: "red" },
    },
  ],
};
const controlSlice = createSlice({
  name: "controls",
  initialState,
  reducers: {
    nextStep(state) {
      state.currentStep = state.currentStep + 1;
    },
    todoAdded(state, action) {
      state.controlList.push(action.payload);
    },
    setPlay(state, action) {
      state.play = action.payload;
    },
  },
});

export const { todoAdded, nextStep,setPlay } = controlSlice.actions;
export default controlSlice.reducer;
