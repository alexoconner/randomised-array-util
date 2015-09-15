/**
 * Randomised Array Util
 *
 */



class RandomisedArray {
    constructor(array) {

        this.array = array;
        this.newArray = [];
    }

    checkArrayType() {
        // works but still a bit buggy

        var array = this.array;

        if (!Array.isArray(array)) {
            console.log('no array');
        }

        var feedback = {
            containsObjects: false,
            isMultidimensional: false
        };

        for (var i = 0; i < array.length; i++) {
            if (typeof array[i] === 'object') {
                feedback.containsObjects = true;
            }
            if (array[i].length > 1) {
                feedback.isMultidimensional = true;
            }
        }

        return feedback;
    }

    cloneArray() {
        // check if array has sub arrays or objects
        var array = this.array;

        console.log(this.checkArrayType());

        // clone simple array
        if (!this.checkArrayType().containsObjects && !this.checkArrayType().isMultidimensional) {
            for (var i = 0; i < array.length; i++) {
                this.newArray[i] = array[i];
            }
            return this.newArray;
        }
    }
}

export default RandomisedArray;