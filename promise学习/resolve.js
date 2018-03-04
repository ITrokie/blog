Promise.resolve()
    .then((value) => {
        console.log('step 1' + value);
        return Promise.resolve('hello')
    })
    .then((value) => {
        console.log(value + 'world')
        return Promise.resolve(new Promise((resolve) => {
            setTimeout(() => {
                resolve('good')
            }, 3000);
        }))
    })
    .then((value) => {
        console.log(value + 'morning')
        return Promise.resolve({
            then: function () {
                console.log('every one')
            }
        })
    })

//运行结果
// step 1undefined

// helloworld

// goodmorning

// every one

// 结论： 
//Promise.resolve作用：返回一个fulfilled的实例，或原始Promise实例。
// 如果其参数为空，返回的是undefined。
// 如果其参数是一个与promise无关的值，则会得到该参数
// 如果其参数是Promise实例，则返回该实例的值，不做修改
// 如果其参数是thenable，则马上执行其.then()