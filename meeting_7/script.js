function getArithmeticalMean(arrayOfNumbers) {
​    let sum = 0;
    for (let i = 0; i < arrayOfNumbers.length; i++) { 
    sum = sum + arrayOfNumbers[i];
    }
    let num = sum / arrayOfNumbers.length;
    return num;
}
getArithmeticalMean([1, 2, 3]); // 2

function findNumbers (arrayWithStringsAndNumbers) {
    let values =[];
    for (let i = 0; i < arrayWithStringsAndNumbers.length; i++) { 
        if (typeof arrayWithStringsAndNumbers[i] === 'number') {
        values.push (arrayWithStringsAndNumbers[i]);
        }
    }
    
    return values;
}
const onlyNumbers = findNumbers (['asd', 123, true, 2, 3, {}, 'd', 'asdfg', 4]); 


function findStringIndex(arrayWithStrings, stringToFind) {
    for (let i = 0; i < arrayWithStrings.length; i++) {
        if (stringToFind === arrayWithStrings) {
            return findStringIndex.indexOf(arrayWithStrings);
        }
    }
}
findString(['hello', 'test', 'world'], 'world');



function findStringIndex(arrayWithStrings, stringToFind) {
    let index = -1;
    for(let i = 0; i < arrayWithStrings.length; i++ ) {
        if (arrayWithStrings[i] === stringToFind) {
            index = i;
            break;
        }
    }
    return index;
}
findStringIndex(['hello', 'test', 'world'], 'world');