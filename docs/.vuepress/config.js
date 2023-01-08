import { defaultTheme } from "@vuepress/theme-default";
import { readdirSync, statSync } from "fs";

const baseDir = "docs/";
const dirs = readdirSync(baseDir).filter((file) => {
  return file !== ".vuepress" && statSync(baseDir + "/" + file).isDirectory();
});

const getFile = (dirName) => {
  const path = `docs/${dirName}`;
  const files = readdirSync(path);
  return files.map((file) => {
    return {
      text: file,
      link: "../" + dirName + "/" + file,
    };
  });
};

module.exports = {
  title: "BONG-U's TIL",
  head: [["link", { rel: "icon", href: "/avata.png" }]],
  theme: defaultTheme({
    logo: "/avata.png",
    colorMode: "dark",
    colorModeSwitch: false,
    repo: "vuejs/vuepress",
    navbar: dirs,
    sidebar: dirs.map((dir) => {
      return {
        text: dir,
        children: getFile(dir),
      };
    }),
    sidebarDepth: 1,
  }),
};
