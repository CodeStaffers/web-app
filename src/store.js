import { configureStore } from "@reduxjs/toolkit";
import getPageReducer from "./features/getPage/getPageSlice";
import getServiceCardReducer from "./features/serviceCard/serviceCardSlice";
import getHeroSectionReducer from "./features/heroSection/heroSectionSlice";
import getTestinomialReducer from "./features/testnomial/testnomialSlice";
import getBrandReducer from "./features/ourBrand/brandSlice";
import getServiceIndexSlice from "./features/serviceIndex/serviceIndexSlice";
import getServiceListingSlice from "./features/serviceIndex/serviceListingPageSlice";
import getFooterReducer from "./features/footer/footerSlice";
import getServiceDetailReducer from "./features/serviceDetail/serviceDetailSlice";
import getOurWorkReducer from "./features/ourWork/ourWorkSlice";
import getOurWorkSectionReducer from "./features/ourWork/ourWorkSectionSlice";
import getOurWorkTabReducer from "./features/ourWork/ourWorkTabSlice";
import getOurWorkDetailReducer from "./features/ourWork/ourWorkDetailSlice";
import getOurGlobalWorkReducer from "./features/ourWork/ourWorkSlugSlice";
import getAboutReducer from "./features/about/aboutSlice";
import getPriceReducer from "./features/pricing/pricingSlice";

import getPlanReducer from "./features/pricing/planSlice";

import getPaymentReducer from "./features/pricing/paymentSlice";
import getContactReducer from "./features/contact/contactSlice";

export const store = configureStore({
  reducer: {
    page: getPageReducer,
    servicePage: getServiceCardReducer,
    heroSection: getHeroSectionReducer,
    testinomial: getTestinomialReducer,
    brand: getBrandReducer,
    serviceIndex: getServiceIndexSlice,
    serviceList: getServiceListingSlice,
    footer: getFooterReducer,
    serviceDetail: getServiceDetailReducer,
    ourWork: getOurWorkReducer,
    ourWorkSection: getOurWorkSectionReducer,
    ourWorkTab: getOurWorkTabReducer,
    ourWorkDetail: getOurWorkDetailReducer,
    ourGlobalWork: getOurGlobalWorkReducer,
    about: getAboutReducer,
    price: getPriceReducer,
    plan: getPlanReducer,
    link: getPaymentReducer,
    contact: getContactReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
