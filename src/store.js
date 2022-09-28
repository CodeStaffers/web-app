import { configureStore } from "@reduxjs/toolkit";
import getPageReducer from "./features/getPage/getPageSlice";
import getServiceCardReducer from "./features/serviceCard/serviceCardSlice";
import getHeroSectionReducer from "./features/heroSection/heroSectionSlice";
import getTestinomialReducer from "./features/testnomial/testnomialSlice";
import getBrandReducer from "./features/ourBrand/brandSlice";
import getServiceIndexSlice from "./features/serviceIndex/serviceIndexSlice";
import getFooterReducer from "./features/footer/footerSlice";
import getServiceDetailReducer from "./features/serviceDetail/serviceDetailSlice";
import getOurWorkReducer from "./features/ourWork/ourWorkSlice";
import getOurWorkSectionReducer from "./features/ourWork/ourWorkSectionSlice";
import getOurWorkTabReducer from "./features/ourWork/ourWorkTabSlice";
import getOurWorkDetailReducer from "./features/ourWork/ourWorkDetailSlice";

export const store = configureStore({
  reducer: {
    page: getPageReducer,
    servicePage: getServiceCardReducer,
    heroSection: getHeroSectionReducer,
    testinomial: getTestinomialReducer,
    brand: getBrandReducer,
    serviceIndex: getServiceIndexSlice,
    footer: getFooterReducer,
    serviceDetail: getServiceDetailReducer,
    ourWork: getOurWorkReducer,
    ourWorkSection: getOurWorkSectionReducer,
    ourWorkTab: getOurWorkTabReducer,
    ourWorkDetail: getOurWorkDetailReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
