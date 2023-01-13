const fs = require("fs");
const simpleGit = require("simple-git");

const getLog = async () => {
  const git = simpleGit.simpleGit("."),
    log_list = await git.log();
  let commit_dates = {},
    item = "";

  log_list.all.map(async (log) => {
    item = log.date.split("T")[0];

    if (item in commit_dates) commit_dates[item] += 1;
    else commit_dates[item] = 1;
  });
  date_json = JSON.stringify(commit_dates);

  fs.writeFileSync("./docs/.vuepress/components/commit_dates.json", date_json);
};

getLog();
