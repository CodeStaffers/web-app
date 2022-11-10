import React, { useState, useEffect } from "react";
import Pricing from "../../layout/pricing/Pricing";
import { useSelector } from "react-redux";

function PricingPage() {
  const [price, setPrice] = useState([]);
  const [plan, setPlan] = useState([]);

  const priceData = useSelector((state) => {
    return state.price.price;
  });
  const planData = useSelector((state) => {
    return state.plan.plan;
  });

  const getPageData = async () => {
    const d = await priceData;
    const e = await planData;

    setPrice(d);
    setPlan(e);
  };

  useEffect(() => {
    getPageData();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Pricing plan={plan} price={price} />
    </>
  );
}

export default PricingPage;
