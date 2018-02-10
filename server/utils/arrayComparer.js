const isEqual = (arr1, arr2) => {
    if (!arr1 || !arr2) {
        console.log("[isEqual] At least one parameter is undefined or null");
        return false;
    }
    const len1 = arr1.length;
    const len2 = arr2.length;

    if (len1 !== len2) {
        return false;
    }
    for (let i = 0; i < len1; i++) {
        if (arr1[i] instanceof Array && arr2[i] instanceof Array) {
            if (!isEqual(arr1[i], arr2[i])) {
                return false;
            }
        }
        else if (arr1[i] !== arr2[i]) {
            return false;
        }
    }

    return true;
};

export {isEqual};