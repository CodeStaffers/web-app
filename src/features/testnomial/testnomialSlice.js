import { createSlice } from "@reduxjs/toolkit";
import { client } from "../../client";

const getTestinomial = async () => {
  try {
    const response = await client.getEntries({
      content_type: "testinomials",
    });
    const responseData = response && response.items;
    if (responseData) {
      return responseData;
    }
  } catch (err) {
    console.error(err);
  }
};

export const getTestnomialSlice = createSlice({
  name: "testinomial",
  initialState: () => {
    return { testinomial: getTestinomial() };
  },
});

export default getTestnomialSlice.reducer;
