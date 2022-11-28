import { createSlice } from "@reduxjs/toolkit";
import { client } from "../../client";

const getProject = async () => {
  try {
    const response = await client.getEntries({
      content_type: "project",
    });
    const responseData = response && response.items[0].fields;
    if (responseData) {
      return responseData;
    }
  } catch (err) {
    console.error(err);
  }
};

export const getProjectSlice = createSlice({
  name: "project",
  initialState: () => {
    return { project: getProject() };
  },
});

export default getProjectSlice.reducer;
