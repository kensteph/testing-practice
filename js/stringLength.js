const stringLength = (string) => {
  const length = +string.length;
  if(length<1 || length>10 ) throw new Error("String length must be 1 0r less or equal to 10 ");
  return length
};
module.exports = stringLength;
