import { createSlice } from "@reduxjs/toolkit";
import { client } from "../../client";

const getBrand = async () => {
  try {
    const response = await client.getEntries({
      content_type: "brandsName",
    });
    const responseData = response && response.items[0].fields;
    if (responseData) {
      return responseData;
    }
  } catch (err) {
    console.error(err);
  }
};

export const getBrandSlice = createSlice({
  name: "brand",
  initialState: () => {
    return { brand: getBrand() };
  },
});

export default getBrandSlice.reducer;
