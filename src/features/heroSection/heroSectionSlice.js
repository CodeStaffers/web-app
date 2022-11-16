import { createSlice } from "@reduxjs/toolkit";
import { client } from "../../client";

const heroSectionData = async () => {
  try {
    const response = await client.getEntries({
      content_type: "heroSection",
    });
    const responseData = response && response.items;
    if (responseData) {
      return responseData;
    }
  } catch (err) {
    console.error(err);
  }
};

export const getHeroSectionSlice = createSlice({
  name: "heroSection",
  initialState: () => {
    return { heroSection: heroSectionData() };
  },
});

// export const { getPage } = counterSlice.actions;

export default getHeroSectionSlice.reducer;
