import moment from "moment";
import selectReports from "../../views/Reports/selectors/reports";
import reports from "../fixtures/reports";

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
