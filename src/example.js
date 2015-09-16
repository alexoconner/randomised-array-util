import RandomisedArrayUtil from './randomised-array';

console.log('example js');

var testArray = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g'
];

var arrayUtil = new RandomisedArrayUtil(testArray);

arrayUtil.randomise();
