function getData(ind) {
  const tabs = [
    {
      title: "all",
      query: "all",
      activeAll: ind,
      matchUrl: "all",
    },
    {
      title: "Company profile",
      query: "company-profile",
      matchUrl: "company-profile",
    },
    {
      title: "Wordpress",
      query: "wordpress",
      matchUrl: "wordpress",
    },
    {
      title: "Shopify",
      query: "shopify",
      matchUrl: "shopify",
    },
    {
      title: "Portfolio website",
      query: "porfolio-website",
      matchUrl: "porfolio-website",
    },
    {
      title: "Blog",
      query: "blog",
      matchUrl: "blog",
    },
  ];

  return tabs;
}
export { getData };
