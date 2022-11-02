const add = (a,b) => {
    return a + b;
}

//Default exports
//module.exports = add;

const sub = (a,b) => {
    return a - b;
}

const mul = (a,b) => {
    return a * b;
}

//Named exports
module.exports = {add,sub,mul}