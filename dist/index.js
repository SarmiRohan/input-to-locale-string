"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.separateByThousands = void 0;
const isMoreThanOnce = (inputString) => {
    let count = 0;
    for (const char of inputString) {
        if (char === `.`) {
            ++count;
            if (count === 2) {
                return true;
            }
        }
    }
    return false;
};
const separateByThousands = (userInput, previousUserInput) => {
    const isANumber = !isNaN(+userInput.replaceAll(",", "").replaceAll(".", ""));
    const value = userInput.replaceAll(",", "");
    if (!isANumber) {
        return previousUserInput;
    }
    if (value.endsWith(".")) {
        if (isMoreThanOnce(value)) {
            return previousUserInput;
        }
    }
    if (value.includes(".")) {
        const stringAfterDot = value.split(".")[1];
        if (stringAfterDot.length > 2) {
            return previousUserInput;
        }
    }
    const outputValue = value.endsWith(".")
        ? `${(+value).toLocaleString()}.`
        : (+value).toLocaleString();
    previousUserInput = outputValue;
    return outputValue;
};
exports.separateByThousands = separateByThousands;
//# sourceMappingURL=index.js.map