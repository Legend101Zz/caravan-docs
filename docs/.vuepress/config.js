module.exports = {
  title: "Caravan Documentation",
  description: "Comprehensive guide for Caravan developers",
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "Guide", link: "/introduction/" },
      { text: "GitHub", link: "https://github.com/caravan-bitcoin/caravan" },
    ],
    sidebar: [
      {
        title: "Introduction",
        path: "/introduction/",
        children: [
          "/introduction/monorepo-structure",
          "/introduction/key-concepts",
        ],
      },
      {
        title: "Getting Started",
        path: "/getting-started/",
        children: [
          "/getting-started/prerequisites",
          "/getting-started/setup",
          "/getting-started/building-and-running",
        ],
      },
      {
        title: "Packages",
        path: "/packages/",
        children: [
          {
            title: "@caravan/bitcoin",
            path: "/packages/bitcoin/",
            children: [
              "/packages/bitcoin/addresses-and-keys",
              "/packages/bitcoin/transactions",
            ],
          },
          {
            title: "@caravan/fees",
            path: "/packages/fees/",
            children: [
              "/packages/fees/transaction-analysis",
              "/packages/fees/fee-estimation",
              "/packages/fees/rbf",
              "/packages/fees/cpfp",
            ],
          },
          {
            title: "@caravan/psbt",
            path: "/packages/psbt/",
            children: [
              "/packages/psbt/psbt-basics",
              "/packages/psbt/creating-and-modifying",
            ],
          },
        ],
      },
    ],
    head: [["link", { rel: "stylesheet", href: "/styles/custom.css" }]],
    logo: "/caravan-logo-transparent.png",
  },
};
