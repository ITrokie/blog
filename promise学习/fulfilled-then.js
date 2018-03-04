let promise = new Promise((resolve) => {
    console.log('this promise fulfilled');
    resolve('hello')
})

setTimeout(() => {
    console.log('time out start')
    promise.then((value => {
        console.log(value + ' world')
    }))
}, 3000);

//运行结果

//this promise fulfilled
//time out start
//hello world

//结论：Promise对象一经创建，其返回的值便已经确定