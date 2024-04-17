// Task 1:
export function translate2d(dx, dy) {
    return function translate(x, y) {
        return [x + dx, y + dy];
    }    
};
// Task 2:
export function scale2d(sx, sy) {
    return function translate(x, y) {
        return [x * sx, y * sy];
    }
};
// Task 3:
// Need is analyse for me:
export function composeTransform(f, g) {
    return function composed(x, y) {
      return g(...f(x, y))
    }
};

// Task 4:
// Need is analyse for me:
export function memoizeTransform(f) {
    let previousX, previousY, previousResult
    
    return function memoised(x, y) {
      if (previousX === x && previousY === y) {
        return previousResult
      }
      previousX = x
      previousY = y
      return previousResult = f(x, y)
    }
  }