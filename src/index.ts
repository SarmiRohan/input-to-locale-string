const isMoreThanOnce = (inputString: string) => {
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

export const separateByThousands = (
  userInput: string,
  previousUserInput: string
) => {
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
