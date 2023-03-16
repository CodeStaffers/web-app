import { createSlice } from "@reduxjs/toolkit";
import { client } from "../../client";

const getServiceDetail = async () => {
  try {
    const response = await client.getEntries({
      content_type: "serviceDetailPage",
    });
    const responseData = response && response.items[0].fields;
    if (responseData) {
      return responseData;
    }
  } catch (err) {
    console.error(err);
  }
};

export const getServiceDetailSlice = createSlice({
  name: "serviceDetail",
  initialState: () => {
    return { serviceDetail: getServiceDetail() };
  },
});

export default getServiceDetailSlice.reducer;
