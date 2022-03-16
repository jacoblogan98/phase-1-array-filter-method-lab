function findMatching(drivers, string) {
    const sharedName = drivers.filter(element => element === string || element === string.toLowerCase() || element === string.toUpperCase());
    return sharedName;
}

function fuzzyMatch(drivers, string) {
    const letters = drivers.filter(element => element.slice(0, string.length) === string);
    return letters;
}

function matchName(drivers, string) {
    let name = drivers.filter(element => element.name === string);
    return name;
}