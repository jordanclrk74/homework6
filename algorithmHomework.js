// Problem 1 //

    function findRepeat(array, low, high)
        {
            if (low > high) return undefined;
    
            let middle = math.floor((low + high) / 2);
    
            if (array[middle] != middle + 1)
            {
            if (middle > 0 && array[middle] === array[middle - 1]) return middle;
    
            return findRepeat(array, low, middle - 1);
            }
            return findRepeat(array, middle + 1, high);
        }

// Problem 2 //

        const count = {};

        for (const num of array) {
        count[num] ? (count[num] += 1) : (count[num] = 1)
        }

        console.log(count);
