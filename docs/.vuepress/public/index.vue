<template>
  <section>
    <div id="calendar_container">
      <!-- <div v-for="month in month_list">
        {{ month }}
      </div> -->
      <svg id="svg" width="760" height="115">
        <!-- <g v-for="i in 52" v-bind:transform="`translate(${i * 14}, 0)`"> -->
        <!-- {{ addMonth() }} -->
        <!-- {{ addMonth(i * 7) }} -->
        <!-- <rect
            v-for="j in 7"
            :y="`${j * 13}`"
            width="10"
            height="10"
            :date="nextDateStr(i * 7 + j)"
            :style="applyColor(nextDateStr(i * 7 + j))"
            v-if="nextDate(i * 7 + j) < today"
          /> -->
        <!-- </g> -->
      </svg>
    </div>
  </section>
</template>

<script>
import git_calendar from "./GitCalendar.js";
// import git_date from "./git_date.json";
export default {
  name: "Calendar",
  data: () => ({
    // today: 0,
    // month_list: [],
    // tmp_date: 0,
    // git_date: git_date,
  }),
  created() {
    // const last_year = new Date(
    //   new Date().setFullYear(new Date().getFullYear() - 1)
    // );
    // const day = last_year.getDay();

    // this.today = new Date();
    // this.tmp_date = last_year;
    // this.tmp_date.setDate(last_year.getDate() - day - 1);
    console.log(git_calendar(document.getElementById("svg")));
  },
  methods: {
    nextDate(num) {
      const next_date = new Date(this.tmp_date);
      next_date.setDate(next_date.getDate() + num);
      return next_date;
    },
    nextDateStr(num) {
      return this.nextDate(num).toISOString().split("T")[0];
    },
    applyColor(date) {
      let color = "";
      if (!git_date[date]) color = "#161b22";
      else if (git_date[date] < 5) color = "#0e4429";
      else if (git_date[date] < 10) color = "#0e4429";
      else if (git_date[date] < 15) color = "#26a641";
      else color = "#39d353";
      return {
        fill: color,
      };
    },
    addMonth(num) {
      const start = new Date(this.tmp_date);
      start.setDate(start.getDate() + num);
      const end = new Date(this.tmp_date);
      end.setDate(start.getDate() + num + 7);

      if (start.getMonth() != end.getMonth()) {
        console.log(end.getMonth() + 1);
      }
      console.log(this.month_list);
      this.month_list.push({ Jan: num });
      return;
    },
  },
  computed: {},
};
</script>

<style>
main {
  padding: 40px;
}
#calendar_container {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  overflow: hidden;
  border: 1px solid #30363d;
  border-radius: 6px;
}
</style>
