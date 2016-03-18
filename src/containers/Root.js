if (process.env.NODE_ENV === 'production') {
	//module.exports = require('./Root.prod');
  console.log('nanay');
} else {
  console.log('aqui va');
	module.exports = require('./Root.dev');
}