function createArrayOfTiers(num) {
    return [...String(num)].map((_, i, arr) => arr.slice(0, i + 1).join(''));
}