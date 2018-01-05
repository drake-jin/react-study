---
layout: post
cover: 'assets/images/post/tags/react.png'
title: (스터디) React에 대해 알아보자 - 11
date: 2017-06-14
tags: react
subclass: 'post tag-react'
categories: 'drakejin'
navigation: True
---
모든 지적 재산권은 velopert 님에게 있습니다. velopert님께 감사합니다.
[velopert님의 강의](https://velopert.com) 원본을 보는것을 강력하게 추천합니다.

# [React.JS] 강좌 11편 Express.js 서버 + 개발 서버 Hot Module Replacement 사용하기

## Express 설정
서버가 개발모드 일 때는, Express.js 서버와 webpack-dev-server 를 함께 실행하도록
webpack-dev-server 에 proxy를 적용하여 해당 서버에서도 Express.js 서버에 구현된 라우트에
접근 하는 방법을 알아볼것입니다.

지난강좌들에선 기존의 webpack-dev-server 에서 특별한 설정을 하지 않아서 React.js 컴포넌트 코드가
수정 될때 모든 스크립트 자체가 새로고침 됐었는데요, 이번강좌에서는 더 나아가 react-hot-loader 를 적용하여
바뀐 컴포넌트만 리로딩하는 방법을 배운다.


### 환경작업
 1. 환경설치 시작
      ``` sh
      # Node.js 프로젝트 생성하기 name 은 설치할 모듈과 같은 이름을 사용하면 안됨
      $ npm init

      # 의존모듈 설치하기
      $ npm install --save express react react-dom

      # 개발 의존 모듈 설치하기
      $ npm install --save-dev \
         babel-core babel-loader babel-preset-es2015 babel-preset-react \
         react-hot-loader \
         webpack webpack-dev-server

      # express: 웹 프레임워크 모듈
      # react-hot-loader: 특정 컴포넌트파일만 리로딩 할 수 있게 해주는 모듈

      $ npm install -g babel-cli

      # babel-cli 모듈은 ES6 문법으로 작성된 코드를 ES5 문법으로 컴파일시켜주는 babel 모듈을
      # 커맨드라인 인터페이스에서 사용 할 수 있게 해줍니다.
      # 이는 나중에 서버사이드 코드를 빌드 할 때 사용됩니다.
      ```

 2. 환경설정
   - .babelrc
      ``` js
      {
          "presets": ["es2015"]
      }
      ```
   - webpack.config.js
      ``` js
      module.exports = {
          // 가장 처음 읽을 스크립트파일
          // 여기서부터 import 되어있는 다른 스크립트를 불러온다.
          entry: './src/index.js',

          // 파일을 합치고 ./public/bundle.js 에 저장한다.
          output: {
              path: __dirname + '/public',
              filename: 'bundle.js'
          },

          // ES6 문법과 JSX 문법을 사용한다
          module: {
              loaders: [
                  {
                      test: /\.js$/,
                      // loader: 'babel', 예제에서는 이렇게 되어있었지만.
                      loader: 'babel-loader', // 이렇게 적는것이 맞음.  webpack 2.6.1 임.
                      exclude: /node_modules/,
                      query: {
                          cacheDirectory: true,
                          presets: ['es2015', 'react']
                      }
                  }
              ]
          }
      };
      ```

### 디렉토리 구조 이해
    ./
    ├── .babelrc                # babel 설정파일
    ├── build                   # 서버 빌드 디렉토리
    ├── package.json		
    ├── public                  # 클라이언트 디렉토리
    │    ├── bundle.js          # 컴파일된 스크립트
    │    └── index.html         # 메인 페이지
    ├── server                  # 서버 디렉토리 (ES6)
    │    ├── main.js            # 서버 사이드 메인 스크립트
    │    └── routes
    │        └── posts.js       # 예제 라우터
    ├── src
    │    ├── App.js             # App 컴포넌트
    │    └── index.js           # 클라이언트 사이드 메인 스크립트
    ├── webpack.config.js       # webpack 설정파일
    └── webpack.dev.config.js   # webpack-dev-server 를 위한 설정파일

``` sh
$ mkdir build server public src server/routes \
  && touch public/index.html server/main.js server/routes/posts.js src/App.js src/index.js webpack.dev.config.js
```

### 서버 사이드 소스코드 작성
1. server/main.js
    ``` js
    import express from 'express';

    const app = express();

    let port = 3000;


    // 경로 '/' 로 들어오는 요청들은 public 폴더로 정적 라우팅합니다.
    app.use('/', express.static(__dirname + '/../public'));

    app.get('/hello', (req, res) => {
        return res.send('Can you hear me?');
    });

    // 라우트 예제입니다.
    import posts from './routes/posts';
    app.use('/posts', posts);


    const server = app.listen(port, () => {
        console.log('Express listening on port', port);
    });
    ```
2. server/routes/posts.js

    ``` js
    import express from 'express';

    const router = express.Router();

    router.get('/', (req,res) => {
        res.send('posts');
    });

    router.get('/read/:id', (req, res) => {
        res.send('You are reading post ' + req.params.id);
    });

    export default router;

    ```

3. 실행 -

  ``` sh
    $ babel server --out-dir build # 서버 사이드 코드 babel 컴파일
    $ node build/main.js # express 소스 실행 접속해보면 빈 페이지가 나타남.
    # 접속 http://localhost:3000/hello
  ```


### 클라이언트 사이드 코드 작성하기

1. public/index.html
    ``` html
    <!DOCTYPE html>

    <html>
        <head>
            <meta charset="utf-8">
            <title>React App on Express Server</title>
        </head>

        <body>
            <div id="root"></div>
            <script src="bundle.js"></script>
        </body>
    </html>
    ```

2. src/App.js

    ``` js
    import React from 'react';

    export default class App extends React.Component {
        render() {
            return (
                <h1>This is HOT!</h1>
            )
        }
    }
    ```

3. src/index.js

    ``` js
    import React from 'react';
    import ReactDOM from 'react-dom';
    import App from './App';

    let rootElement = document.getElementById('root');

    ReactDOM.render(<App/>, rootElement);
    ```

4. 실행

webpack 실행시 참고 [babel-loader instead of babel](https://github.com/babel/babel-loader#the-node-api-for-babel-has-been-moved-to-babel-core)

    ``` sh
    # webpack 을 이미 글로벌설치를 한 상태라면 디렉토리를 생략하고 webpack 만 입력해도 됩니다.
    $ ./node_modules/.bin/webpack  # ES6 -> ES5
    $ node ./build/main.js
    ```

### NPM script 작성

1. ./package.json
    ``` js
    /* ... */
      "scripts": {
        "clean": "rm -rf build public/bundle.js",
        "build": "babel server --out-dir build && ./node_modules/.bin/webpack",
        "start": "NODE_ENV=production node ./build/main.js",
        "development": "NODE_ENV=development node ./build/main.js"
      },
    /* ... */
    ```
알다시피 윈도우에서 환경변수 설정은 ..
Window 에서는 NODE_ENV 를 설정하는 방법이 다릅니다:

``` js
/* ... */
  "scripts": {
    "clean": "rm -rf build public/bundle.js",
    "build": "babel server --out-dir build && ./node_modules/.bin/webpack",
    "start": "set NODE_ENV=production&&node ./build/main.js",
    "development": "set NODE_ENV=development&&node ./build/main.js"
  },
/* ... */
```

### 서버 사이드 코드 수정 - 개발모드 만들기

``` sh
$ cp webpack.config.js webpack.dev.config.js
```
webpack.dev.config.js 를 두는 이유.
- 기존 config 는 output인 bundle.js 를 public 디렉토리에 저장하도록 설정이 되어있습니다.
webpack-dev-server 에서도 동일한 설정을 적용한다면, public 에 있는 파일이 계속 덮어씌워지게 된다.
- webpack-dev-server 에선 bundle.js 를 메모리에 저장한후, 나중에 브라우저에서  bundle.js 를 요청 할 시 public 디렉토리에 이미 있는 bundle.js 보다 우선권을 가져서 메모리에 있는걸 리턴하게됩니다.
- 추후 react-hot-loader 를 통해 변경된 컴포넌트만 리로드 하는 시스템을 구현할 건데요, production 모드에선 이게 필요하지 않으므로 다른 config 를 설정합니다.


1. webpack.dev.config.js
    ``` js
     var webpack = require('webpack'); // LINE 1: webpack 플러그인을 사용하기위하여 해당 모듈을 import 합니다.
     module.exports = {

         entry: [
             './src/index.js',
             'webpack-dev-server/client?http://0.0.0.0:3001',
             'webpack/hot/only-dev-server'
         ], // webpack-dev-server 의 hot-module-replacement 를 지원하기위해 entry에 추가해줍니다.
            //webpack-dev-server 의 포트를 7번 줄의 뒷부분에 적어줘야 HMR이 제대로 작동합니다.

         output: {
             path: '/', // 메모리에 저장하기 위하여 path를 ‘/’ 로 설정합니다.
             filename: 'bundle.js'
         },

         devServer: { // webpack-dev-server 를 위한 설정입니다. proxy 부분은 Express.js 서버 URI를 넣어주어야합니다.
             hot: true,
             filename: 'bundle.js',
             publicPath: '/',
             historyApiFallback: true,
             contentBase: './public',
             proxy: {
                 "**": "http://localhost:3000"
             }
         },

         // HMR 을 사용하기위한 webpack 플러그인들입니다.
         plugins: [
             new webpack.optimize.OccurenceOrderPlugin(),
             new webpack.HotModuleReplacementPlugin(),
             new webpack.NoErrorsPlugin()
         ],

         // 바뀐부분은 ‘react-hot’ 로더를 추가한거밖에 없습니다.
         // 단, 여러 모듈을 한꺼번에 적용하기 때문에 babel-loader 을 위하여
         // 따로 query 를 하진 못하고 ? 뒤에 JSON.stringify(query) 를 추가하여 query를 추가합니다.
         module: {
             loaders: [
                 {
                     test: /\.js$/,
                     loaders: ['react-hot', 'babel-loader?' + JSON.stringify({
                         cacheDirectory: true,
                         presets: ['es2015', 'react']
                     })],
                     exclude: /node_modules/,
                 }
             ]
         }
     };
    ```

    주의: 최근 react-hot-loader 가 업데이트 되어서, 그냥 설치하시면 “react-hot-loader”: “^3.0.0-beta.3” 가 설치됩니다.
    설치 하실 때, npm install –save react-hot-loader@1.3.0 을 하시거나, 버전 3을 쓰고 싶다면 수정을 다음과 같이 하세요:

    ```
    module:{
        loaders: [
            {
                test: /.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    cacheDirectory: true,
                    presets: ['es2015', 'react'],
                    plugins: ["react-hot-loader/babel"]
                }
            }
        ]
    },
    ```

### 서버 메인파일 수정하기

1. server/main.js

    ``` js
    import express from 'express';
    import WebpackDevServer from 'webpack-dev-server';
    import webpack from 'webpack';
    import posts from './routes/posts';

    const app = express();
    const port = 3000;
    const devPort = 3001;

    if(process.env.NODE_ENV == 'development') {
        console.log('Server is running on development mode');

        const config = require('../webpack.dev.config');
        let compiler = webpack(config);
        let devServer = new WebpackDevServer(compiler, config.devServer);
        devServer.listen(devPort, () => {
            console.log('webpack-dev-server is listening on port', devPort);
        });
    }
    app.use('/', express.static(__dirname + '/../public'));

    app.get('/hello', (req, res) => {
        return res.send('Can you hear me?');
    });


    import posts from './routes/posts';
    app.use('/posts', posts);

    const server = app.listen(port, () => {
        console.log('Express listening on port', port);
    });

    ```


### 테스트하기

```
$ npm run build
$ npm run development
```

다음, 브라우저로 페이지를 열은 후, src/ 디렉토리 내의 App.js를 수정해보세요.

어때요? 페이지가 새로고침 되지 않고도 내용이 변경되었나요? (http://localhost:3001/ 로 들어가세요)

webpack-dev-server 의 주소에서 Express.js 에서 구현한 라우터에 접근해보세요: http://localhost:3001/posts/read/5
















,
