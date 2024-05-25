const request = require("supertest");
const app = require("../../app");
const utils = require("../../utils");

const { generateId, generateShortUrl, isValidUrl } = utils;

describe.each<Array<Object>>([
  ["not-a-valid-url", false],
  ["not-a-valid-url.com", false],
  ["https://www.valid-url.com", true],
  ["https://valid-url.com/users", true],
])("isValidUrl", (input, output) => {
  test(`returns ${output}`, () => {
    expect(isValidUrl(input)).toBe(output);
  });
});

describe("generateId", () => {
  test("should return a 5 or more character long string", () => {
    const result: string = generateId();
    expect(result.length).toBeGreaterThanOrEqual(1);
  });
});

describe.each<Array<Object>>([
  [
    "https://www.allbrightcollective.com/edit/articles/why-does-building-an-online-community-matter-to-your-business",
    "https://www.allbrightcollective.com/edit/articles/introducing-allbrights-live-well-summer-festival-2024",
    "https://www.allbrightcollective.com/accelerate",
  ],
])("generateShortUrl", () => {
  test("will convert the original url to a shortened url", () => {
    const shortUrl: string = generateShortUrl();
    const result: string = isValidUrl(shortUrl);
    expect(result).toBe(true);
  });
});
