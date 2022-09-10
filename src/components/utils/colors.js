const COLORS = ["purple", "orange", "green", "blue", "grey"];

export function getColor(text) {
    let asciiVal = 0;
    for (const c of text) {
        asciiVal += c.charCodeAt(0);
    }
    console.log(asciiVal);
    return COLORS[asciiVal % COLORS.length];
}

export function getColorForIndex(index) {
    return COLORS[index % COLORS.length];
}