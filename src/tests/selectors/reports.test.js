import moment from "moment";
import selectReports from "../../views/Reports/selectors/reports";

const reports = [
  {
    id: "1",
    student_name: "Jack",
    note: "",
    period: 1,
    createdAt: 0
  },
  {
    id: "2",
    student_name: "Charlie",
    note: "",
    period: 4,
    createdAt: moment(0)
      .subtract(4, "days")
      .valueOf()
  },
  {
    id: "3",
    student_name: "Fred",
    note: "",
    period: 3,
    createdAt: moment(0)
      .add(4, "days")
      .valueOf()
  }
];

test("should filter by text value", () => {
  const filters = {
    text: "e",
    sortBy: "date",
    startDate: undefined,
    endDate: undefined
  };
  const result = selectReports(reports, filters);
  expect(result).toEqual([reports[2], reports[1]]);
});

test("should filter by startDate", () => {
  const filters = {
    text: "",
    sortBy: "date",
    startDate: moment(0),
    endDate: undefined
  };
  const result = selectReports(reports, filters);
  expect(result).toEqual([reports[2], reports[0]]);
});

test("should filter by endDate", () => {
  const filters = {
    text: "",
    sortBy: "date",
    startDate: undefined,
    endDate: moment(0).add(2, "days")
  };
  const result = selectReports(reports, filters);
  expect(result).toEqual([reports[0], reports[1]]);
});

test("should sort by date", () => {
  const filters = {
    text: "",
    sortBy: "date",
    startDate: undefined,
    endDate: undefined
  };
  const result = selectReports(reports, filters);
  expect(result).toEqual([reports[2], reports[0], reports[1]]);
});

test("should sort by period", () => {
  const filters = {
    text: "",
    sortBy: "period",
    startDate: undefined,
    endDate: undefined
  };
  const result = selectReports(reports, filters);
  expect(result).toEqual([reports[1], reports[2], reports[0]]);
});
