const { description } = require("../../package");
const { readdirSync, statSync } = require("fs");

const baseDir = "docs/";
const dirs = readdirSync(baseDir).filter((file) => {
  return file !== ".vuepress" && statSync(baseDir + file).isDirectory();
});

const getFile = (dir) => {
  const path = `docs/${dir}`;
  const files = readdirSync(path);
  const fileList = [];
  files.map((file) => {
    fileList.push(dir + "/" + file);
  });
  return fileList;
};

const sidebarItems = [];
dirs.forEach((dir) => {
  var obj = {
    title: dir,
    children: getFile(dir),
  };
  sidebarItems.push(obj);
});

module.exports = {
  title: "BONG-U's TIL",
  base: "/til-vuepress/",

  description: description,

  head: [["link", { rel: "icon", href: "avata.png" }]],

  themeConfig: {
    repo: "",
    editLinks: false,
    docsDir: "",
    editLinkText: "",
    lastUpdated: false,
    sidebar: sidebarItems,
  },

  plugins: ["@vuepress/plugin-back-to-top", "@vuepress/plugin-medium-zoom"],
};
