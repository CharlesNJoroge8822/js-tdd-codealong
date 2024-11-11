import { currentAgeForBirthYear } from "../utils";

describe("currentAgeForBirthYear", () => {
  it("returns the age of a person based on the year of birth", () => {
    const birthYear = 1984;
    const ageOfPerson = currentAgeForBirthYear(birthYear);

    const expectedAge = new Date().getFullYear() - birthYear;
    expect(ageOfPerson).toBe(expectedAge);
  });
});

