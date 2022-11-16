import { createSlice } from "@reduxjs/toolkit";
import { client } from "../../client";

const footerData = async () => {
  try {
    const response = await client.getEntries({
      content_type: "mainFooter",
    });
    const responseData = response && response.items[0].fields;
    if (responseData) {
      return responseData;
    }
  } catch (err) {
    console.error(err);
  }
};

export const getFooterSlice = createSlice({
  name: "footer",
  initialState: () => {
    return { footer: footerData() };
  },
});

// export const { getPage } = counterSlice.actions;

export default getFooterSlice.reducer;
