console.log('here we go');

new Promise(resolve => {
    setTimeout(() => {
        resolve('hello');
    }, 2000);
}).then((value) => {
    console.log(value);
    return new Promise(((resolve) => {
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
//world

//如果then里面返回了一个新的Promise对象，那么下一个then会等这个Promise对象执行完毕之后再执行