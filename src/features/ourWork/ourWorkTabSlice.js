import { createSlice } from "@reduxjs/toolkit";
import { client } from "../../client";

const getOurWorkTab = async () => {
  try {
    const response = await client.getEntries({
      content_type: "ourWorkTab",
    });
    const responseData = response && response.items;
    if (responseData) {
      return responseData;
    }
  } catch (err) {
    console.error(err);
  }
};

export const getOurWorkTabSlice = createSlice({
  name: "ourWorkTab",
  initialState: () => {
    return { ourWorkTab: getOurWorkTab() };
  },
});

export default getOurWorkTabSlice.reducer;
