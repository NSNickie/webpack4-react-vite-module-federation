import { createInstance } from "@module-federation/runtime";
// import React from "react";

// 模块联邦
const mf = createInstance({
  name: "mf_host",
  remotes: [
    {
      name: "reactApp",
      alias: "reactApp",
      entry: "http://localhost:5173/mf-manifest.json",
    },
  ],
});

mf.registerRemotes([
  {
    name: "reactApp",
    alias: "reactApp",
    entry: "http://localhost:5173/mf-manifest.json",
  },
]);

export default mf
