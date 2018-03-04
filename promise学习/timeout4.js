new Promise((resolve) => {
    setTimeout(() => {
        resolve('hello')
    }, 3000);
}).then((value) => {
    console.log(value);
    (function () {
        return new Promise((resolve) => {
            console.log('everyone')
            resolve('in promise')
        })
    })();
    return false;
}).then(value => {
    console.log(value)
})


//运行结果
//hello
//everyone
//false

//结论：如果前一个then不是返回一个新的Promise而是返回其他任何值，则会立刻执行，即使前一个then返回的是false