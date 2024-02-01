export const isPercentage = (val: string): boolean =>
  typeof val === "string" && val.includes("%");

export const percentToPx = (
  value: string,
  comparativeValue: number
): string => {
  if (value.includes("px") || value === "auto" || !comparativeValue)
    return value;
  const percent = parseInt(value);
  return `${(percent / 100) * comparativeValue}px`;
};
export const pxToPercent = (
  value: number,
  comparativeValue: number
): number => {
  const val = (Math.abs(value) / comparativeValue) * 100;
  if (value < 0) {
    return -1 * val;
  }
  return Math.round(val);
};
export const getElementDimensions = (
  element: HTMLElement
): {
  width: number;
  height: number;
} => {
  const computedStyle = getComputedStyle(element);

  let height = element.clientHeight,
    width = element.clientWidth; // width with padding

  height -=
    parseFloat(computedStyle.paddingTop) +
    parseFloat(computedStyle.paddingBottom);
  width -=
    parseFloat(computedStyle.paddingLeft) +
    parseFloat(computedStyle.paddingRight);

  return {
    width,
    height,
  };
};
