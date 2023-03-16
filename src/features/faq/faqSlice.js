import { createSlice } from "@reduxjs/toolkit";
import { client } from "../../client";

const getFaq = async () => {
  try {
    const response = await client.getEntries({
      content_type: "faq",
    });
    const responseData = response && response.items[0].fields;
    if (responseData) {
      return responseData;
    }
  } catch (err) {
    console.error(err);
  }
};

export const getFaqtSlice = createSlice({
  name: "faq",
  initialState: () => {
    return { faq: getFaq() };
  },
});

// export const { getPage } = counterSlice.actions;

export default getFaqtSlice.reducer;
