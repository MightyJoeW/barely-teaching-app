import moment from "moment";

// Get visible reports
export default (reports, { text, sortBy, startDate, endDate }) => {
  return reports
    .filter(report => {
      const createdAtMoment = moment(report.createdAt);
      const startDateMatch = startDate
        ? startDate.isSameOrBefore(createdAtMoment, "day")
        : true;
      const endDateMatch = endDate
        ? endDate.isSameOrAfter(createdAtMoment, "day")
        : true;
      const textMatch = report.student_name
        .toLowerCase()
        .includes(text.toLowerCase());

      return startDateMatch && endDateMatch && textMatch;
    })
    .sort((a, b) => {
      if (sortBy === "date") {
        return a.createdAt < b.createdAt ? 1 : -1;
      } else if (sortBy === "period") {
        return a.period < b.period ? 1 : -1;
      }
    });
};
