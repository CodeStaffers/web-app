import { createSlice } from "@reduxjs/toolkit";
import { client } from "../../client";

const pageData = async () => {
  try {
    const response = await client.getEntries({
      content_type: "landingPage",
    });
    const responseData = response && response.items[0].fields;
    if (responseData) {
      return responseData;
    }
  } catch (err) {
    console.error(err);
  }
};

export const getPageSlice = createSlice({
  name: "page",
  initialState: () => {
    return { page: pageData() };
  },
});

// export const { getPage } = counterSlice.actions;

export default getPageSlice.reducer;
