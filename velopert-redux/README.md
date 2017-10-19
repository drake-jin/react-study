
# 환경설정

``` bash
# node_modules
$ npm install --save react react-dom
$ npm install --save-dev babel-core babel-loader babel-preset-react babel-preset-es2015 webpack webpack-dev-server
# global
$ npm install -g babel webpack webpack-dev-server
# - babel – 아직 ECMAScript6 를 지원하지 않는 환경에서 ECMAScript6 Syntax를 사용 할 수 있게 해줍니다.
# - webpack – 모듈 번들러로서, Browserify 처럼 브라우저 위에서 import (require) 을 할 수 있게 해주고 자바스크립트 파일들을 하나로 합쳐줍니다.
# - webpack-dev-server – wepback에서 지원하는 간단한 개발서버로서 별도의 서버를 구축하지 않고도 웹서버를 열 수 있으며 hot-loader를 통하여 코드가 수정될때마다 자동으로 리로드 되게 할 수 있습니다.
```