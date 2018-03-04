Promise.all([1, 2, 3])
    .then((all) => {
        console.log('1:' + all)
        return Promise.all([function () {
            console.log('ooxx');
        }, 'ooxx', false])
    })
    .then((all) => {
        console.log('2:' + all)
        let p1 = new Promise((resolve) => {
            setTimeout(() => {
                resolve('p1');
            }, 1500);
        })

        let p2 = new Promise((resolve) => {
            setTimeout(() => {
                resolve('p2');
            }, 2000);
        })

        return Promise.all([p1, p2])
    })
    .then((value) => {
        console.log(value);
        let a1 = new Promise((resolve) => {
            setTimeout(() => {
                resolve('test')
            }, 5000);
        });
        let a2 = new Promise((resolve, reject) => {
            setTimeout(() => {
                reject('err msg')
            }, 2000);
        });
    })
    .then((value) => {
        console.log(value)
    })
    .catch((err) => {
        console.log('err' + err)
    })

//运行结果
//  1:[1,2,3]

//  2:[function () {
//     console.log('ooxx');
// }, 'ooxx', false]

// ['p1','p2']

//err msg


//结论：当所有的Promise.all都resolve的时候会返回一个数组，返回的数组是每个promise resolve的值。当其中有一个promise的状态为reject的时候会抛出error