console.log('here we go')

new Promise((resolve) => {
    setTimeout(() => {
        resolve('hello')
    }, 3000);
}).then((value) => {
    console.log(value + 'world');
})


//输出结果：
// hello
// hello world