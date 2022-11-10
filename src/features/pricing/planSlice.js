import { createSlice } from "@reduxjs/toolkit";
import { client } from "../../client";

//
const getPricePlan = async () => {
  try {
    const response = await client.getEntries({
      content_type: "pricePlan",
    });
    const responseData = response && response.items;

    if (responseData) {
      return responseData;
    }
  } catch (err) {
    console.error(err);
  }
};

export const getPlanSlice = createSlice({
  name: "plan",
  initialState: () => {
    return { plan: getPricePlan() };
  },
});

export default getPlanSlice.reducer;
