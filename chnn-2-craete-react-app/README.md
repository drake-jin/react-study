
### create-react-app 실습
``` sh
$ npm install -g create-react-app
$ create-react-app hello-world #npm install 까지 직접 해준다.
$ npm start
# 웹 브라우저 접속 localhost:3000
```

#### Feature
 - 설정이 없다.

       // directory structure
       hello-world/
         README.md
         index.html
         favicon.ico
         node_modules/
         package.json
         src/
           App.css
           App.js
           index.css
           index.js
           logo.svg

       // package.json
       {
          "name": "hello-world",
          "version": "0.0.1",
          "private": true,
          "devDependencies": {
            "react-scripts": "0.1.0"
          },
          "dependencies": {
            "react": "^15.2.1",
            "react-dom": "^15.2.1"
          },
          "scripts": {
            "start": "react-scripts start",
            "build": "react-scripts build",
            "eject": "react-scripts eject"
          }
        }

 - 서버 실행하기
   - npm start
 -  Production 을 위한 빌드
   - npm run bulid 명령어를 통하여 production 을 위한 빌드를 할 수 있습니다. 코드가 minify 되고, envify 되고, 또 assets에 content hashes 를 통하여 캐싱이 적용됩니다.
 - 빌드 설정은 preconfigured 되어있고 변경 할 수 없습니다.
   - node_modules/react-scripts/ 경로에 들어가시면 설정 할 수 있습니다만 그렇게 하면 안됀다. 이 “도구“에선 커스터마이징이 불가능합니다.
   - 이 create-react-app 도구에서만 커스터마이징을 불가능합니다.

#### 도구 Eject

``` sh
$ npm run eject
```
이 기능의 역할은 현재 프로젝트의 모든 설정 / 스크립트를 여러분의 프로젝트로 옮겨줍니다.
eject를 하고나서는, 여러분 마음대로 커스터마이징이 가능합니다.

    // directory structure
    hello-world
    ├── build
    │   ├── 84287d09b8053c6fa598893b8910786a.svg
    │   ├── favicon.ico
    │   ├── index.html
    │   ├── main.7cbecfc47e1de8546c1a31e27e545145.css
    │   ├── main.7cbecfc47e1de8546c1a31e27e545145.css.map
    │   ├── main.d1cfd322df65a833bf6c.js
    │   └── main.d1cfd322df65a833bf6c.js.map
    ├── config
    │   ├── babel.dev.js
    │   ├── babel.prod.js
    │   ├── eslint.js
    │   ├── flow
    │   │   ├── css.js.flow
    │   │   └── file.js.flow
    │   ├── webpack.config.dev.js
    │   └── webpack.config.prod.js
    ├── favicon.ico
    ├── index.html
    ├── package.json
    ├── README.md
    ├── scripts
    │   ├── build.js
    │   ├── openChrome.applescript
    │   └── start.js
    └── src
        ├── App.css
        ├── App.js
        ├── index.css
        ├── index.js
        └── logo.svg

    // package.json
    {
      "name": "hello-world",
      "version": "0.0.1",
      "private": true,
      "devDependencies": {
        "autoprefixer": "6.3.7",
        "babel-core": "6.10.4",
        "babel-eslint": "6.1.2",
        "babel-loader": "6.2.4",
        "babel-plugin-syntax-trailing-function-commas": "6.8.0",
        "babel-plugin-transform-class-properties": "6.10.2",
        "babel-plugin-transform-object-rest-spread": "6.8.0",
        "babel-plugin-transform-react-constant-elements": "6.9.1",
        "babel-preset-es2015": "6.9.0",
        "babel-preset-es2016": "6.11.3",
        "babel-preset-react": "6.11.1",
        "chalk": "1.1.3",
        "cross-spawn": "4.0.0",
        "css-loader": "0.23.1",
        "eslint": "3.1.1",
        "eslint-loader": "1.4.1",
        "eslint-plugin-import": "1.10.3",
        "eslint-plugin-react": "5.2.2",
        "extract-text-webpack-plugin": "1.0.1",
        "file-loader": "0.9.0",
        "fs-extra": "^0.30.0",
        "html-webpack-plugin": "2.22.0",
        "json-loader": "0.5.4",
        "opn": "4.0.2",
        "postcss-loader": "0.9.1",
        "rimraf": "2.5.3",
        "style-loader": "0.13.1",
        "url-loader": "0.5.7",
        "webpack": "1.13.1",
        "webpack-dev-server": "1.14.1"
      },
      "dependencies": {
        "react": "^15.2.1",
        "react-dom": "^15.2.1"
      },
      "scripts": {
        "start": "node ./scripts/start.js",
        "build": "node ./scripts/build.js"
      }
    }

1. 스크립트를 통하여 react-scripts 를 제거합니다.
2.  react-scripts 에서 사용하던 스크립트들을 그대로 여러분들의 프로젝트에 생성합니다.





,
