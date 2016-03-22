import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import express from 'express';
import bodyParser from 'body-parser';
import config from './config';
import webpackConfig from '../webpack.config';
import api from './api';

const app = express();
const port = 3000;
app.set('secret', config.secret); //secret var to jsonwebtoken

const compiler = webpack(webpackConfig);

app.use(webpackDevMiddleware(compiler, {
  noInfo: true,
  publicPath: webpackConfig.output.publicPath,
  stats: {
    color: true
  }
}));

app.use(webpackHotMiddleware(compiler));

// Use body parser so we can get info from POST and/or URL parameters
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

// API router
app.use('/api', api());

// Client Application
app.get('/', (req, res) => {
  //res.sendFile(__dirname + '/index.html');
  res.send(renderFullPage());
});

function renderFullPage() {
  return `
    <!doctype html>
    <html>
      <head>
        <title>Bistro</title>
          <meta name="description" content="React app"/>
      		<meta charset="utf-8">
      		<meta http-equiv="X-UA-Compatible" content="IE=edge">
          <script src="https://code.jquery.com/jquery-2.1.3.min.js"></script>
      		<script src="//oss.maxcdn.com/semantic-ui/2.1.8/semantic.min.js"></script>
      </head>
      <body>
        <div id="root">
        <script src="/static/bundle.js"></script>
      </body>
    </html>
    `
}

app.listen(port, (error) => {
  if (error) {
    console.error(error);
  } else {
    console.info('Listening on port %s. Go to http://localhost:%s/ in your browser', port, port);
  }
});
