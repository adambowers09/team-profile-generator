const inquirer = require("inquirer");
const Manager = require("../lib/Manager");

test('getRole() should return "Manager"', () => {
    const testValue = "Manager";
    const manager = new Manager("Noah", 1, "noah@bootcamp.com", 2022);
    expect(manager.getRole()).toBe(testValue);
  });