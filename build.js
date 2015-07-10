({
  baseUrl: "./lib",
  paths: {
    "views": "../views",
    "dustjs": "dustjs-linkedin/dist/dust-core",
    "dust-helpers": "dustjs-helpers/dist/dust-helpers"
  },
  shim: {
    "dust-helpers": ["dustjs"]
  },
  name: "main",
  out: "lib/main.full.js",
  optimize: "none"
})