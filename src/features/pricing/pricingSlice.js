import { createSlice } from "@reduxjs/toolkit";
import { client } from "../../client";

// pricePlan
const getPrice = async () => {
  try {
    const response = await client.getEntries({
      content_type: "pricing",
    });
    const responseData = response && response.items[0].fields;

    if (responseData) {
      return responseData;
    }
  } catch (err) {
    console.error(err);
  }
};

export const getPriceSlice = createSlice({
  name: "price",
  initialState: () => {
    return { price: getPrice() };
  },
});

export default getPriceSlice.reducer;
