'use strict'

function xmasTree(foliageHeight) {
  /**
   * We've broken down this function into three sub-problems.
   * You can solve the overall kata by solving the sub-problems - you shouldn't need to make changes to this function.
   * (Although, if you wish to, you could.)
   */

  // 1. make the tree foliage
  const foliage = makeTreeFoliage(foliageHeight);
  // 2. make the tree trunk
  const trunk = makeTreeTrunk(foliageHeight);
  // 3. group them together
  return foliage.concat(trunk);
}

function findLineWidth(foliageHeight) {
  return (foliageHeight * 2 - 1);
}

function makeFoliageLine(foliageHeight, lineLevel) {
  const underscores = foliageHeight - lineLevel
  const hash = lineLevel * 2 - 1
  return ('_'.repeat(underscores) + '#'.repeat(hash)  + '_'.repeat(underscores))
}

function makeTreeFoliage(foliageHeight) {
  let foliageArray = []
  for (let line = 1; line <= foliageHeight; line++) {
    const underscores = foliageHeight - line
    const hash = line * 2 -1
    foliageArray.push('_'.repeat(underscores) + '#'.repeat(hash)  + '_'.repeat(underscores))
  }
  return foliageArray
}

function makeTreeTrunk(foliageHeight) {
  const underscores = foliageHeight - 1
  const hash = 1
  const trunkLine = ('_'.repeat(underscores) + '#'.repeat(hash)  + '_'.repeat(underscores))
  const trunkArray = [trunkLine, trunkLine]
  return trunkArray
}

// exports the functions so that ./xmas-tree.test.js can import them
module.exports = {
  xmasTree,
  findLineWidth,
  makeFoliageLine,
  makeTreeFoliage,
  makeTreeTrunk,
};


