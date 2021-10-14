const uniqId = require("uniqid");
export const generatedId = (): string => {
  return `${uniqId()}`;
}