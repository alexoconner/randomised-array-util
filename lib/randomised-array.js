/**
 * Randomised Array Util
 *
 */



class RandomisedArray {
    constructor(array) {

        this.array = array;
        this.newArray = [];
    }

    /**
     * Check the type of the array
     * @returns {{containsObjects: boolean, isMultidimensional: boolean}}
     */
    checkArrayType() {
        // works but still a bit buggy

        var array = this.array;

        if (!Array.isArray(array)) {
            console.error('no array');
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

    /**
     * Clone array
     * @returns {Array}
     */
    cloneArray() {
        var array = this.array;

        // clone simple array
        if (!this.checkArrayType().containsObjects || !this.checkArrayType().isMultidimensional) {
            for (var i = 0; i < array.length; i++) {
                this.newArray[i] = array[i];
            }
            return this.newArray;
        }
    }

    randomNumber(min, max) {
        if (min == null) {
            min = 0;
        }

        return Math.floor ( Math.random() * (max - min + 1) - min );
    }

    randomise() {

        // if array hasn't been cloned already we do that here.
        if (this.newArray.length === 0) {
            this.cloneArray();
        }

        var arrayLength = this.newArray.length;

        var i = arrayLength-1;
        while (i > 0) {
            var randomIndex = this.randomNumber(0, arrayLength);

            i--;

            var arrayTemp = this.newArray[i];
            this.newArray[i] = this.newArray[randomIndex];
            this.newArray[randomIndex] = arrayTemp;
        }

        console.log(this.newArray);
    }
}

export default RandomisedArray;