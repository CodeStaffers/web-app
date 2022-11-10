import React, { useState, useEffect } from "react";
import Pricing from "../../layout/pricing/Pricing";
import { useSelector } from "react-redux";

function PricingPage() {
  const [price, setPrice] = useState([]);
  const [plan, setPlan] = useState([]);
  const [link, setLink] = useState([]);

  const priceData = useSelector((state) => {
    return state.price.price;
  });
  const planData = useSelector((state) => {
    return state.plan.plan;
  });
  const linkData = useSelector((state) => {
    return state.link.link;
  });

  const getPageData = async () => {
    const d = await priceData;
    const e = await planData;
    const f = await linkData;
    setPrice(d);
    setPlan(e);
    setLink(f);
  };

  useEffect(() => {
    getPageData();
    // eslint-disable-next-line
  }, []);

  return <>{price ? <Pricing plan={plan} price={price} link={link} /> : ""}</>;
}

export default PricingPage;
