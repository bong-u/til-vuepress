const execSync = require("child_process").execSync;

const get_commit_dates = async () => {
  const git_log_str = await execSync("git log --format=%at -- docs")
    .toString()
    .trim();
  const git_log_arr = git_log_str.split("\n");
  let commit_dates = {};
  let date = "";

  git_log_arr.map((date_num) => {
    date = new Date(date_num * 1000).toISOString().split("T")[0];

    if (date in commit_dates) commit_dates[date] += 1;
    else commit_dates[date] = 1;
  });

  return commit_dates;
};

module.exports = {
  async extendPageData($page) {
    if ($page.path !== "/") return;
    $page.commit_dates = await get_commit_dates();
  },
};
