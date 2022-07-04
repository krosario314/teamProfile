const Engineer = require("../lib/Engineer"); // retag later

test("Sets GitHub account via constructor arguments", () => {
  const testValue = "GitHub";
  const e = new Engineer("Smith", 1, "test@test.com", testValue);
  expect(e.github).toBe(testValue);
});

test("getPosition() should return \"Engineer\"", () => {
  const testValue = "Engineer";
  const e = new Engineer("Smith", 1, "test@test.com", "GitHub");
  expect(e.getRole()).toBe(testValue);
});