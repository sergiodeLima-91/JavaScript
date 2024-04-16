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
export function composeTransform(f, g) {
    const firstFunction = f;
    const secondFunction = g;

    return [firstFunction, secondFunction];
};