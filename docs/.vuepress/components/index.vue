<template>
  <article>
    <h4>Studied for {{ countOfDays }} days in the last year</h4>
    <div id="calendar_container"></div>
  </article>
</template>

<script>
import Calendar from "./git_calendar.js";
export default {
  data: () => ({
    countOfDays: 0,
  }),
  created() {},
  mounted() {
    const container = document.getElementById("calendar_container");
    const calendar = new Calendar(this.$page.commit_dates);

    this.countOfDays = calendar.getCountOfDays();

    const svg = calendar.createSVG(document);
    container.appendChild(svg);
  },
};
</script>

<style>
article {
  max-width: 810px;
}
#calendar_container {
  padding: 10px 15px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  overflow: hidden;
  border: 1px solid #30363d;
  border-radius: 6px;
}
</style>
