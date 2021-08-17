export class Debounce {
  callback;
  delay;
  timeOut = setTimeout(() => {}, 0);
  constructor(callback, delay) {
    this.callback = callback;
    this.delay = delay;
  }
  callAfterDelay(...args) {
    clearTimeout(this.timeOut);
    this.timeOut = setTimeout(() => this.callback(...args), this.delay);
  }
  callImmediately(...args) {
    clearTimeout(this.timeOut);
    this.callback(...args);
  }
}
export const capitalize = (value) => {
  return value[0].toUpperCase() + value.slice(1);
};
export const splitOnUpperCase = (str) => {
  // str = "MyNameIsKhan"
  // returns "My Name Is Khan"
  let ans = "";
  let cur = "";
  for (let s of str.split("")) {
    if (/[A-Z]/.test(s)) {
      // encountered uppercase character
      ans += cur + " ";
      cur = s;
    } else {
      cur += s;
    }
  }
  ans += cur;
  return ans;
};
export const nToL = (str) => {
  // name to lable
  // str = "myNameIsKhan"
  // returns "My Name Is Khan"
  return splitOnUpperCase(capitalize(str));
};
