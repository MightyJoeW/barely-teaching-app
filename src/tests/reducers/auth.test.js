import auth from "../../redux/reducers/auth";

test("should set uid for login", () => {
  const action = {
    type: "LOGIN",
    uid: "abc123"
  };
  const state = auth({}, action);
  expect(state.uid).toBe(action.uid);
});

test("should clear uid for logout", () => {
  const action = {
    type: "LOGOUT"
  };
  const state = auth({ uid: "gimmick" }, action);
  expect(state).toEqual({});
});
