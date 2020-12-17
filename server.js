const express = require('express')
const next = require('next')
const { createProxyMiddleware } = require("http-proxy-middleware")
const cookieParser = require('cookie-parser');
const port = process.env.PORT || 3000
const dev = process.env.NODE_ENV !== 'production'
const { parse } = require('url');
const app = next({ dev })
const handle = app.getRequestHandler()
const fs = require('fs');
const path = require('path');

const HTTPS  = require('https');
const HTTP  = require('http');




const httpsOptions = {
    key: fs.readFileSync('./private.pem'),
    cert: fs.readFileSync('./public.pem')
};


const apiPaths = {
    '/api': {
        target: 'http://localhost:8080',
        pathRewrite: {
            '^/api': '/api'
        },
        changeOrigin: true
    }
}

const isDevelopment = process.env.NODE_ENV !== 'production'

// app.prepare().then(() => {
//     HTTP.createServer((req, res) => {
//         const parsedUrl = parse(req.url, true);
//         handle(req, res, parsedUrl);
//
//     }).listen(3000, err => {
//         if (err) throw err;
//         console.log('> Ready on http://localhost:3000');
//     });
//
//     HTTPS.createServer(httpsOptions, (req, res) => {
//         const parsedUrl = parse(req.url, true);
//         handle(req, res, parsedUrl);
//
//     }).listen(3001, err => {
//         if (err) throw err;
//         console.log('> Ready on https://localhost:3001');
//     });
// }).catch(err => {
//     console.log('Error:::::', err)
// })

app.prepare().then(() => {
    const server = express()

    server.use(cookieParser());
    if (isDevelopment) {
        server.use('/api', createProxyMiddleware(apiPaths['/api']));
    }

    server.all('*', (req, res) => {
        return handle(req, res)
    })

    server.listen(port, (err) => {
        if (err) throw err
        console.log(`> Ready on http://localhost:${port}`)
    })
}).catch(err => {
    console.log('Error:::::', err)
})
