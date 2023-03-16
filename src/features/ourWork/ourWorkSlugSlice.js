import { createSlice } from "@reduxjs/toolkit";
import { client } from "../../client";

const getSlugWorkDetail = async () => {
  try {
    const response = await client.getEntries({
      content_type: "ourGlobalWork",
    });
    const responseData = response && response.items;
    if (responseData) {
      return responseData;
    }
  } catch (err) {
    console.error(err);
  }
};

export const getSlugWorkDetailSlice = createSlice({
  name: "ourGlobalWork",
  initialState: () => {
    return { ourGlobalWork: getSlugWorkDetail() };
  },
});

export default getSlugWorkDetailSlice.reducer;
