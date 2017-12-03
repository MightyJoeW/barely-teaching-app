import moment from "moment";

const filters = {
  text: "",
  sortBy: "date",
  startDate: undefined,
  endDate: undefined
};

const altFilters = {
  text: "Smith",
  sortBy: "period",
  startDate: moment(0),
  endDate: moment(0).add(3, "days")
};

export { filters, altFilters };
