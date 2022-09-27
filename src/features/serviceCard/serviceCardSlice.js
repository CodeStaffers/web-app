import { createSlice } from "@reduxjs/toolkit";
import { client } from "../../client";

const serviceData = async () => {
  try {
    const response = await client.getEntries({
      content_type: "serviceCard",
    });
    const responseData = response && response.items;
    if (responseData) {
      return responseData;
    }
  } catch (err) {
    console.error(err);
  }
};

export const getServiceCardSlice = createSlice({
  name: "servicePage",
  initialState: () => {
    return { servicePage: serviceData() };
  },
});

// export const { getPage } = counterSlice.actions;

export default getServiceCardSlice.reducer;
