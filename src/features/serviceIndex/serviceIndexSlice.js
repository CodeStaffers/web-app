import { createSlice } from "@reduxjs/toolkit";
import { client } from "../../client";

const getServiceIndexContent = async () => {
  try {
    const response = await client.getEntries({
      content_type: "servicesIndexPage",
    });
    const responseData = response && response.items[0].fields;
    if (responseData) {
      return responseData;
    }
  } catch (err) {
    console.error(err);
  }
};

export const getServiceIndexSlice = createSlice({
  name: "serviceIndex",
  initialState: () => {
    return { serviceIndex: getServiceIndexContent() };
  },
});

export default getServiceIndexSlice.reducer;
