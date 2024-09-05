import reducer, { login, UserState } from "./../slices/auth_slice";

describe("Slice: authSlice", () => {
  it("should handle login action", () => {
    const previousState: UserState = {
      isLoggedIn: false,
      email: "",
      password: "",
    };
    const expectedState: UserState = {
      isLoggedIn: true,
      email: "one@gmail.com",
      password: "12345678",
    };

    const action = login({ email: "one@gmail.com", password: "12345678" });
    expect(reducer(previousState, action)).toEqual(expectedState);
  });
});
