const sum = (n) => {
    let sum = 0;

    const store = (next) => {
        if (next === undefined) {
            return sum;
        } else {
            sum += next;
            return store;
        }
    };

    return store(n);
};