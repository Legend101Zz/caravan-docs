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
          {
            title: "Monorepo Structure",
            path: "/introduction/monorepo-structure",
          },
          {
            title: "Key Concepts",
            path: "/introduction/key-concepts",
          },
        ],
      },
      {
        title: "Getting Started",
        path: "/getting-started/",
        children: [
          {
            title: "Prerequisites",
            path: "/getting-started/prerequisites",
          },
          {
            title: "Setup",
            path: "/getting-started/setup",
          },
          {
            title: "Building and Running",
            path: "/getting-started/building-and-running",
          },
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
              {
                title: "Addresses and Keys",
                path: "/packages/bitcoin/addresses-and-keys",
              },
              {
                title: "Transactions",
                path: "/packages/bitcoin/transactions",
              },
            ],
          },
          {
            title: "@caravan/fees",
            path: "/packages/fees/",
            children: [
              {
                title: "Transaction Analysis",
                path: "/packages/fees/transaction-analysis",
              },
              {
                title: "Fee Estimation",
                path: "/packages/fees/fee-estimation",
              },
              {
                title: "RBF (Replace-By-Fee)",
                path: "/packages/fees/rbf",
              },
              {
                title: "CPFP (Child-Pays-For-Parent)",
                path: "/packages/fees/cpfp",
              },
            ],
          },
          {
            title: "@caravan/psbt",
            path: "/packages/psbt/",
            children: [
              {
                title: "PSBT Basics",
                path: "/packages/psbt/psbt-basics",
              },
              {
                title: "Creating and Modifying PSBTs",
                path: "/packages/psbt/creating-and-modifying",
              },
            ],
          },
        ],
      },
      {
        title: "Applications",
        path: "/applications/",
        children: [
          {
            title: "Caravan Coordinator",
            path: "/applications/caravan-coordinator",
          },
        ],
      },
    ],
    head: [["link", { rel: "stylesheet", href: "/styles/custom.css" }]],
    logo: "/caravan-logo-transparent.png",
    darkMode: true,
  },
};
