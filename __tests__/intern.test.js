const Intern = require("../lib/intern"); 

test("Sets school via constructor arguments", () => {
  const testValue = "Rutgers University";
  const e = new Intern("Smith", 1, "test@test.com", testValue);
  expect(e.school).toBe(testValue);
});

test("getPosition() should return \"Intern\"", () => {
  const testValue = "Intern";
  const e = new Intern("Smith", 1, "test@test.com", "Rutgers University");
  expect(e.getRole()).toBe(testValue);
});

test("Retrieve school via getSchool()", () => {
  const testValue = "Rutgers University";
  const e = new Intern("Smith", 1, "test@test.com", testValue);
  expect(e.getSchool()).toBe(testValue);
});