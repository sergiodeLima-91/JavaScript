// Task 1:
export function buildSign(occasion, name) {
    return `Happy ${occasion} ${name}!` 
};

// Task 2:
export function buildBirthdaySign(age) {
    if (age >= 50)  {
        return 'Happy Birthday! What a mature fellow you are.'
    } else {
        return 'Happy Birthday! What a young fellow you are.'
    }
};

// Task 3:
export function graduationFor(name, year) {
    return `Congratulations ${name}!\nClass of ${year}`
};

// Task 4:
export function costOf(sign, currency) {
    let signLength = sign.length;
    return `Your sign costs ${signLength * 2 + 20}.00 ${currency}.` 
}

//Call Functions:
costOf('Happy Birthday Rob!', 'dollars');