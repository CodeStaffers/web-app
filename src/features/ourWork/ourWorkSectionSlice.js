import { createSlice } from "@reduxjs/toolkit";
import { client } from "../../client";

const getOurWorkSection = async () => {
  try {
    const response = await client.getEntries({
      content_type: "ourWork",
    });
    const responseData = response && response.items[0].fields;
    if (responseData) {
      return responseData;
    }
  } catch (err) {
    console.error(err);
  }
};

export const getOurWorkSectionSlice = createSlice({
  name: "ourWorkSection",
  initialState: () => {
    return { ourWorkSection: getOurWorkSection() };
  },
});

export default getOurWorkSectionSlice.reducer;
