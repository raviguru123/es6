"use strict"
let names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice'];

let countetdname = names.reduce(function(allnames, name) {
    if (name in allnames) {
        allnames[name]++;
    } else {
        allnames[name] = 1;
    }
    return allnames;
}, {});


let a1 = [1, 2];
let a2 = [3, 4];
console.log([...a1, ...a2]);