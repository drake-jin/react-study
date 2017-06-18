import express from 'express';
import WebpackDevServer from 'webpack-dev-server';
import webpack from 'webpack';
import posts from './routes/posts';

const app = express();
const port = 3000;
const devPort = 3001;


console.log('서버를 시2222작합니다.')
console.log(process.env.NODE_ENV)
console.log(process.env.NODE_ENV)
console.log(process.env.NODE_ENV)
console.log(process.env.NODE_ENV)
console.log(process.env.NODE_ENV)
console.log(process.env.NODE_ENV)
console.log(process.env.NODE_ENV)
console.log(process.env.NODE_ENV)
console.log(process.env.NODE_ENV)
console.log(process.env.NODE_ENV)
console.log(process.env.NODE_ENV)

if(process.env.NODE_ENV+'' == 'development') {
    console.log('Server is running on development mode');

    const config = require('../webpack.dev.config');
    let compiler = webpack(config);
    let devServer = new WebpackDevServer(compiler, config.devServer);
    devServer.listen(devPort, () => {
        console.log('webpack-dev-server is listening on port', devPort);
    });
}

// 경로 '/' 로 들어오는 요청들은 public 폴더로 정적 라우팅합니다.
app.use('/', express.static(__dirname + '/../public'));

app.get('/hello', (req, res) => {
    return res.send('Can you hear me?');
});

// 라우트 예제입니다.
app.use('/posts', posts);

const server = app.listen(port, () => {
    console.log('Express listening on port', port);
});
