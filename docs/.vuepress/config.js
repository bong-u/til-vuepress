const { description } = require('../../package');
const { readdirSync, statSync } = require('fs');

const baseDir = 'docs/';
const dirs = readdirSync(baseDir).filter((file) => {
  return file !== ".vuepress" && statSync(baseDir+file).isDirectory();
});

const getFile = dir => {
  const path = `docs/${dir}`;
  const files = readdirSync(path);
  const fileList = [];
  files.map((file) => {
    fileList.push(dir+'/'+file);
  });
  return fileList;
};

const sidebarItems = [];
dirs.forEach(dir => {
  var obj = {
    title: dir,
    children: getFile(dir)
  };
  sidebarItems.push(obj);
});

module.exports = {
  //  Ref：https://v1.vuepress.vuejs.org/config/#title
  title: "BONG-U's TIL",
  base: "/til/",
  
  // Ref：https://v1.vuepress.vuejs.org/config/#description
  description: description,
  
  // Ref：https://v1.vuepress.vuejs.org/config/#head
  head: [
    ["link", { rel: "icon", href: "avata.png" }],
    // ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    // ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    // ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  // Ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [],
    sidebar: sidebarItems,
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}