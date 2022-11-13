import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Contact from "../../layout/conactPage/Contact";

function ContactPage() {
  const [contact, setContact] = useState([]);

  const pageData = useSelector((state) => {
    return state.contact.contact;
  });

  const getPageData = async () => {
    const d = await pageData;
    setContact(d);
  };

  useEffect(() => {
    getPageData();
    // eslint-disable-next-line
  }, []);

  return <>{contact ? <Contact contact={contact} /> : ""}</>;
}

export default ContactPage;
