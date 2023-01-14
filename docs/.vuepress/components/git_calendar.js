const svgns = "http://www.w3.org/2000/svg";
const monthText = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

class Calendar {
  constructor(commit_dates) {
    this.commit_dates = commit_dates;

    // get a year ago from today
    this.last_year = new Date(
      new Date().setFullYear(new Date().getFullYear() - 1)
    );

    this.cur_date = new Date(
      new Date().setFullYear(new Date().getFullYear() - 1)
    );
    // get first day of the week
    this.cur_date.setDate(
      this.last_year.getDate() - this.last_year.getDay() + 1
    );
  }

  createSVG(document) {
    const svg = document.createElementNS(svgns, "svg");
    const xBase = 30;
    const yBase = 30;
    let g = null,
      rect = null;

    svg.setAttribute("width", xBase + 53 * 14);
    svg.setAttribute("height", yBase + 13 * 7);
    for (let i = 0; i < 53; i++) {
      for (let j = 0; j < 7; j++) {
        rect = document.createElementNS(svgns, "rect");
        rect.setAttribute("x", xBase + i * 14);
        rect.setAttribute("y", yBase + j * 13);
        rect.setAttribute("rx", 2);
        rect.setAttribute("ry", 2);
        rect.setAttribute("width", 10);
        rect.setAttribute("height", 10);
        rect.setAttribute("style", "border-radius:2px");
        svg.appendChild(rect);
      }
    }
    this.processSVG(document, svg);
    this.addDayTag(document, svg);
    return svg;
  }
  processSVG(document, svg) {
    let monthTag = null;
    for (let rect of svg.children) {
      if (this.cur_date.getDate() == 1) {
        monthTag = document.createElementNS(svgns, "text");
        monthTag.setAttribute("x", rect.getAttribute("x"));
        monthTag.setAttribute("y", 20);
        monthTag.textContent = monthText[this.cur_date.getMonth()];
        monthTag.setAttribute("style", `font-size:12px; fill:#c9d1d9`);
        svg.appendChild(monthTag);
      }
      rect.setAttribute("fill", this.getColor(this.getDateStr(this.cur_date)));
      this.cur_date.setDate(this.cur_date.getDate() + 1);
    }
  }

  addDayTag(document, svg) {
    const dayData = [
      { label: "Mon", yPos: 25 + 13 * 2 },
      { label: "Wed", yPos: 25 + 13 * 4 },
      { label: "Fri", yPos: 25 + 13 * 6 },
    ];
    let dayTag = null;

    for (let day of dayData) {
      dayTag = document.createElementNS(svgns, "text");
      dayTag.setAttribute("y", day["yPos"]);
      dayTag.textContent = day["label"];
      dayTag.setAttribute("style", `font-size:12px; fill:#c9d1d9`);
      svg.appendChild(dayTag);
    }
  }

  getColor(date) {
    let color = "";
    if (!this.commit_dates[date]) color = "#161b22";
    else if (this.commit_dates[date] < 5) color = "#0e4429";
    else if (this.commit_dates[date] < 10) color = "#0e4429";
    else if (this.commit_dates[date] < 15) color = "#26a641";
    else color = "#39d353";

    return color;
  }
  getDateStr(date) {
    return date.toISOString().split("T")[0];
  }

  getCountOfDays() {
    return Object.keys(this.commit_dates).length;
  }
}

export default Calendar;
