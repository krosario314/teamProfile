const Employee = require("../lib/Employee"); // retag later

test("Instantiate Employee instance", () => {
  const e = new Employee();
  expect(typeof(e)).toBe("object");
});

test("Sets name via constructor arguments", () => {
  const name = "John";
  const e = new Employee(name);
  expect(e.name).toBe(name);
});

test("Sets id via constructor arguments", () => {
  const testValue = 100;
  const e = new Employee("Smith", testValue);
  expect(e.id).toBe(testValue);
});

test("Sets email via constructor arguments", () => {
  const testValue = "test@test.com";
  const e = new Employee("Smith", 1, testValue);
  expect(e.email).toBe(testValue);
});

test("Retrieve name via getName()", () => {
  const testValue = "John";
  const e = new Employee(testValue);
  expect(e.getName()).toBe(testValue);
});

test("Can get id via getId()", () => {
  const testValue = 100;
  const e = new Employee("Smith", testValue);
  expect(e.getId()).toBe(testValue);
});