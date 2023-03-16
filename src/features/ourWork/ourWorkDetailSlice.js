import { createSlice } from "@reduxjs/toolkit";
import { client } from "../../client";

const getOurWorkDetail = async () => {
  try {
    const response = await client.getEntries({
      content_type: "ourWorkSection",
    });
    const responseData = response && response.items;
    if (responseData) {
      return responseData;
    }
  } catch (err) {
    console.error(err);
  }
};

export const getOurWorkDetailSlice = createSlice({
  name: "ourWorkDetail",
  initialState: () => {
    return { ourWorkDetail: getOurWorkDetail() };
  },
});

export default getOurWorkDetailSlice.reducer;
