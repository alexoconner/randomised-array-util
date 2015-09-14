/**
 * Randomised Array Util
 *
 */

class RandomisedArray {
    constructor(array) {

        this.array = array;
    }

    cloneArray() {
        // check if array has sub arrays or objects

        var array = this.array;
        console.log(array);

        if (!Array.isArray(array)) {
            console.log('no array');
        }

        var containsObjects = false;
        var isMultidimensional = false;

        for (var i = 0; i < array.length; i++) {
            console.log(i, array[i]);
            if (typeof array[i] === 'object') {
                containsObjects = true;
            }
            if (array[i].length > 1) {
                isMultidimensional = true;
            }
        }

        console.log('contains objects? : ' + containsObjects);
        console.log('is multidimensional? : ' + isMultidimensional);
    }

    //randomise(array) {
    //
    //    let newArray = array;
    //
    //    console.log(newArray);
    //}
}

export default RandomisedArray;