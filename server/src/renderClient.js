// const React = require('react');
// const ReactDomServer = require('react-dom/server');
// const StaticRouter = require('react-router').StaticRouter;
// const Client = require('../dist-client/src/index');

// module.exports = function (server) {
//     if (typeof(window) == 'undefined') global.window = new Object();
//     server.set('view engine', 'ejs');
//     server.get('*', (req, res) => {
//         const context = {};
//         res.render('layout', {
//             content: ReactDOMServer.renderToString(React.createElement(
//                 StaticRouter,
//                 { location: req.url, context: context },
//                 React.createElement(Client, null)
//             ))
//         });
//     });
// }