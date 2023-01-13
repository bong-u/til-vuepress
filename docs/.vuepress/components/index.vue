<template>
  <article>
    <h4>Studied for {{ countOfDays }} days in the last year</h4>
    <div id="calendar_container"></div>
  </article>
</template>

<script>
import git_calendar from "./GitCalendar.js";
export default {
  data: () => ({
    countOfDays: git_calendar.getCountOfDays(),
  }),
  mounted() {
    const container = document.getElementById("calendar_container");
    container.appendChild(git_calendar.createSVG(document));
  },
};
</script>

<style>
article {
  max-width: 810px;
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
