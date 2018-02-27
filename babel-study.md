# babel介绍

>Babel 把用最新标准编写的 JavaScript 代码向下编译成可以在今天随处可用的版本。 这一过程叫做“源码到源码”编译， 也被称为转换编译。

# 编辑器

现在大多数编辑器都支持babel的语法高亮

- atom:language-babel
- vscode:sublime-babel-vscode
- sublime:babel-sublime

# 使用babel

- ## babel-cli

### 安装

>虽然你 可以 在你的机器上全局安装 Babel CLI, 但根据单个项目进行本地安装会更好一些。
这样做有两个主要的原因：
1、同一机器上的不同的项目可以依赖不同版本的Babel, 这允许你一次更新一个项目。
2、这意味着在你的工作环境中没有隐含的依赖项。它将使你的项目更方便移植、更易于安装。

```js
npm install --save-dev babel-cli
```

### 编译文件

```js
编译目标文件并输出：
npx babel 要编译的文件 -o 输出的目标文件
例如：npx babel script.js -o test.js
```

```js
想要每次修改文件都编译目标文件并输出：
npx babel 要编译的文件 -w -o 输出的目标文件
例如：npx babel script.js -w -o test.js
```

```js
为编译后的文件添加source-map文件：
npx babel 要编译的文件 -o 输出的目标文件 -s
例如：npx babel script.js -o test.js -s
```
[什么是source-map？阮老师这有说明](http://www.ruanyifeng.com/blog/2013/01/javascript_source_map.html)

```node
编译整个目录，并输出到指定目录：
npx babel 要编译的目录 -d 输出的指定目录
例如：npx babel src -d lib

编译整个目录到指定文件下
npx babel 要编译的目录 -o 指定的文件名
例如：npx babel src -o test.js

编译整个目录下的文件到指定目录下，并忽略某些文件
npx babel 要编译的目录 -d 输出的指定目录 --ignore 某文件
例如：npx babel src -d lib --ignore test.js
```

```node
使用--plugins来指定要编译中使用的插件
例如：npx babel script.js -o test.js --plugins=transform-runtime,transform-es2015-modules-amd

使用--presets指定编译中要使用的插件
例如:npx babel script.js -o test.js --presets=es2015,react
```

```node
使用--no-babelrc忽略.babelrc文件的配置编译文件
例如：npx babel --no-babelrc script.js -o test.js --preset=es2015
```

- ## babel-register
