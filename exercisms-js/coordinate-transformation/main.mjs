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
export function memorizeTransform(f) {
    return function memorize(g) {
        return g
    }
}