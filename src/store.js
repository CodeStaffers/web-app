import { configureStore } from "@reduxjs/toolkit";
import getPageReducer from "./features/getPage/getPageSlice";
import getServiceCardReducer from "./features/serviceCard/serviceCardSlice";
import getHeroSectionReducer from "./features/heroSection/heroSectionSlice";
import getTestinomialReducer from "./features/testnomial/testnomialSlice";
import getBrandReducer from "./features/ourBrand/brandSlice";
import getServiceIndexSlice from "./features/serviceIndex/serviceIndexSlice";

export const store = configureStore({
  reducer: {
    page: getPageReducer,
    servicePage: getServiceCardReducer,
    heroSection: getHeroSectionReducer,
    testinomial: getTestinomialReducer,
    brand: getBrandReducer,
    serviceIndex: getServiceIndexSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
