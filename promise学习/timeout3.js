console.log('here we go');

new Promise(resolve => {
    setTimeout(() => {
        resolve('hello');
    }, 2000);
}).then((value) => {
    console.log(value);
    new Promise(((resolve) => {
        setTimeout(() => {
            resolve('world')
        }, 3000);
    }))
}).then((value) => {
    //接收上一个then return 回的值
    console.log(value)
})



//运行结果
//here we go
//hello
//undefined


//结论：如果前一个then没有返回值，那么第二个then获取的值就为undefined