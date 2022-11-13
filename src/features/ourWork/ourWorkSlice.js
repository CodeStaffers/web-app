import { createSlice } from "@reduxjs/toolkit";
import { client } from "../../client";

const getOurWork = async () => {
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

export const getOurWorkSlice = createSlice({
  name: "ourWork",
  initialState: () => {
    return { ourWork: getOurWork() };
  },
});

export default getOurWorkSlice.reducer;
