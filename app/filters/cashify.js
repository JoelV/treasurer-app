module.exports = function() {
  return function(input) {
    var str = input.toString();
    var arryStr = str.split('.');
    if(arryStr.length === 1) {
      arryStr[1] = '00';
    } else if(arryStr[1].length ===1) {
      arryStr[1] = arryStr[1].concat('0');
    }
    return '$' + arryStr.join('.');
  };
};
