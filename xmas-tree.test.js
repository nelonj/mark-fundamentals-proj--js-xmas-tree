const {
  xmasTree,
  findLineWidth,
  makeFoliageLine,
  makeTreeFoliage,
  makeTreeTrunk,
} = require("./xmas-tree");

test("findLineWidth finds the line width from a foliage height", () => {
  expect(findLineWidth(5)).toBe(9);
  expect(findLineWidth(3)).toBe(5);
});

test("makeTreeTrunk returns the tree trunk part of the Christmas tree with given foliage height", () => {
  expect(makeTreeTrunk(5)).toStrictEqual(["____#____", "____#____"]);
  expect(makeTreeTrunk(3)).toStrictEqual(["__#__", "__#__"]);
});

test("makeFoliageLine returns a single line of foliage for a tree of given height and at the specified level", () => {
  expect(makeFoliageLine(3, 1)).toBe("__#__");
  expect(makeFoliageLine(3, 2)).toBe("_###_");
  expect(makeFoliageLine(3, 3)).toBe("#####");

  expect(makeFoliageLine(5, 1)).toBe("____#____");
  expect(makeFoliageLine(5, 2)).toBe("___###___");
  expect(makeFoliageLine(5, 3)).toBe("__#####__");
  expect(makeFoliageLine(5, 4)).toBe("_#######_");
  expect(makeFoliageLine(5, 4)).toBe("#########");
});

test("makeTreeFoliage returns the foliage for a tree of given foliage height", () => {
  expect(makeTreeFoliage(5)).toStrictEqual([
    "____#____",
    "___###___",
    "__#####__",
    "_#######_",
    "#########",
  ]);
  expect(makeTreeFoliage(3)).toStrictEqual(["__#__", "_###_", "#####"]);
});

test("xmasTree returns an array modelling a Christmas tree of given foliage height", () => {
  expect(xmasTree(5)).toStrictEqual([
    "____#____",
    "___###___",
    "__#####__",
    "_#######_",
    "#########",
    "____#____",
    "____#____",
  ]);
  expect(xmasTree(3)).toStrictEqual([
    "__#__",
    "_###_",
    "#####",
    "__#__",
    "__#__",
  ]);
});
