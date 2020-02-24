module.exports = class DepthCalculator {
    calculateDepth(arr, count = 0, counter = []) {
        counter.push(++count);
        
        arr.forEach(item => {
            if (Array.isArray(item)) this.calculateDepth(item, count, counter)
        })
       
        return Math.max(...counter);
    }
};
