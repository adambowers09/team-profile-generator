const inquirer = require("inquirer");
const Intern = require("../lib/Intern");

test('getRole() should return "Intern"', () => {
    const testValue = "Intern";
    const intern = new Intern("Dave", 1, "asdf@asdf.com", "UNC");
    expect(intern.getRole()).toBe(testValue);
  });