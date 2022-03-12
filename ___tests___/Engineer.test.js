const inquirer = require("inquirer");
const Engineer = require("../lib/Engineer");

test("getGithub() should return Engineer github", () => {
    const testGithub = "adambowers09";
    const engineer = new Engineer(
      "Adam",
      2022,
      "asdf@asdf.com",
      testGithub
    );
    expect(engineer.getGithub()).toBe(testGithub);
  });