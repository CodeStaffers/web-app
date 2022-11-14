import { createSlice } from "@reduxjs/toolkit";
import { client } from "../../client";

const getServiceListing = async () => {
  try {
    const response = await client.getEntries({
      content_type: "serviceListingPage",
    });
    const responseData = response && response.items;
    if (responseData) {
      return responseData;
    }
  } catch (err) {
    console.error(err);
  }
};

export const getServiceListingSlice = createSlice({
  name: "serviceList",
  initialState: () => {
    return { serviceList: getServiceListing() };
  },
});

export default getServiceListingSlice.reducer;
