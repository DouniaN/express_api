export function sum(a, b) {
    let sum;
    try {
        let sum = a + b;
        if (typeof (a) !== "number" && typeof (b) !== "number") {
            return sum;
        }
    }
    catch {
        throw console.error();
    }
    return a + b;
}


