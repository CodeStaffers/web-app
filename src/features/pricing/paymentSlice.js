import { createSlice } from "@reduxjs/toolkit";
import { client } from "../../client";

//
const getPaymentLink = async () => {
  try {
    const response = await client.getEntries({
      content_type: "payments",
    });
    const responseData = response && response.items;

    if (responseData) {
      return responseData;
    }
  } catch (err) {
    console.error(err);
  }
};

export const getPaymentLinkSlice = createSlice({
  name: "link",
  initialState: () => {
    return { link: getPaymentLink() };
  },
});

export default getPaymentLinkSlice.reducer;
