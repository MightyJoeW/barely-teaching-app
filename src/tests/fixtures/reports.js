import moment from "moment";

export default [
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
