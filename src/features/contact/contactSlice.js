import { createSlice } from "@reduxjs/toolkit";
import { client } from "../../client";

const getContact = async () => {
  try {
    const response = await client.getEntries({
      content_type: "contactPage",
    });
    const responseData = response && response.items[0].fields;
    if (responseData) {
      return responseData;
    }
  } catch (err) {
    console.error(err);
  }
};

export const getContactSlice = createSlice({
  name: "contact",
  initialState: () => {
    return { contact: getContact() };
  },
});

// export const { getPage } = counterSlice.actions;

export default getContactSlice.reducer;
