const capitalize = (string) => {
  let firstLetter = string.charAt(0).toUpperCase();
  return firstLetter + string.toLowerCase().substr(1, string.length);
};
module.exports = capitalize;
