//利用promise封装类似fetch的功能

var getJson = (url) => {
    var promise = new Promise((resolve, reject) => {
        var handler = function () {
            if (this.readyState !== 4) {
                return;
            }
            if (this.status === 200) {
                resolve(this.respone);
            } else {
                reject(new Error(this.statusText));
            }
        }

        var client = new XMLHttpRequest();
        client.open('get', url);
        client.onreadystatechange = handler;
        client.responseType = 'json';
        client.setRequestHeader('Accept', 'application/json')
        client.send()
    });

    return promise

}

getJson('www.baidu.com').then((data) => {
    console.log(data)
}).catch((error) => {
    console.log(error)
})