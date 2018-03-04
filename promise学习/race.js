let p1 = new Promise((resolve) => {
    setTimeout(() => {
        resolve('I am p1')
    }, 3000);
})

let p2 = new Promise((resolve) => {
    setTimeout(() => {
        resolve('I am p2')
    }, 5000);
})

Promise.race([p1, p2])
    .then((value) => {
        console.log(value)
    })

//运行结果：
//I am p1

//运行结论：Promise.race的与Promise.all类似。区别在于race方法在其中一个promise实例为fulfilled的时候就会执行then方法，而all方法则是要等到全部的实例执行完毕

//常用场景：异步请求与定时器结合，如果先执行定时器，则返回请求超时提醒