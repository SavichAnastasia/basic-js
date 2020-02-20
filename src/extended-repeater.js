module.exports = function repeater(str, options) {
    if (typeof str !== 'string') str = String(str);
    if (options.addition !== undefined && typeof options.addition !== 'string') options.addition = String(options.addition);
    if (!options.repeatTimes) options.repeatTimes = 1;
    if (!options.additionRepeatTimes) options.additionRepeatTimes = 1;
    let additionArr = [];
    for (let i  = 0; i < options.additionRepeatTimes; i++) {
        additionArr.push(options.addition)
    } 
    let additionStr = additionArr.join(options.additionSeparator || '|');
console.log(additionArr, additionStr);
    let resultArr = [];
    for (let i  = 0; i < options.repeatTimes; i++) {
        resultArr.push(str + additionStr)
    } 
    let result = resultArr.join(options.separator || '+');
    console.log(resultArr, result);
    return result;
};
  
// { repeatTimes: 3, separator: '**', addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' }) =>
//  'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'

