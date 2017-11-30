// Get visible reports
export default (reports, { text, sortBy, startDate, endDate }) => {
  return reports
    .filter(report => {
      const startDateMatch =
        typeof startDate !== "number" || report.createdAt >= startDate;
      const endDateMatch =
        typeof endDate !== "number" || report.createdAt <= endDate;
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
