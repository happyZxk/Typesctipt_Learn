// 1.联合类型
function padLeft(value, padding) {
    if (typeof padding === "number") {
        return Array(padding + 1).join(" ") + value;
    }
    if (typeof padding === "string") {
        return padding + value;
    }
    throw Error('出现错误');
}
console.log(padLeft("些地方", 4));
