import { sum } from "./sum";

describe('all tests', () => {
  it("checking sum a+b", () => {
    expect(sum(2, 2)).toBe(4);
    expect(sum(2, 19)).toBe(21);
  });
  it('floating number', () => {
    expect(sum(.222, .333)).toBeCloseTo(.555);
  })
});

