const Manager = require("../lib/Manager"); //retag later

test("Sets office number via constructor arguments", () => {
  const testValue = 100;
  const e = new Manager("Smith", 1, "test@test.com", testValue);
  expect(e.officeNumber).toBe(testValue);
});

test("getPosition() should return \"Manager\"", () => {
  const testValue = "Manager";
  const e = new Manager("Smith", 1, "test@test.com", 100);
  expect(e.getRole()).toBe(testValue);
});

test("Retrieve office number via getOffice()", () => {
  const testValue = 100;
  const e = new Manager("Smith", 1, "test@test.com", testValue);
  expect(e.getOfficeNumber()).toBe(testValue);
});