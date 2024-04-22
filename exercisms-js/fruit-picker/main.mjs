import { notify } from "./notifier.mjs";

// Task 1:
export function onSuccess() {
    notify({message:"SUCCESS"});
};

// Task 2:
export function onError() {
    notify({message:'ERROR'})
};

// Task 3:
export function orderFromGrocer(query, onSuccessCallback, onErrorCallback) {
    order(query, onSuccessCallback, onErrorCallback);
};

// Task 4:
export function postOrder(variety, quantity) {
    order({quantity: quantity, variety: variety});
    onSuccess()
    onError();
};