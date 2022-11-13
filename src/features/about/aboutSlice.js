import { createSlice } from "@reduxjs/toolkit";
import { client } from "../../client";

const getAbout = async () => {
  try {
    const response = await client.getEntries({
      content_type: "aboutPage",
    });
    const responseData = response && response.items[0].fields;
    if (responseData) {
      return responseData;
    }
  } catch (err) {
    console.error(err);
  }
};

export const getAboutSlice = createSlice({
  name: "about",
  initialState: () => {
    return { about: getAbout() };
  },
});

export default getAboutSlice.reducer;
