// const express = require('express')
// const React = require('react')
// const renderToString = require('react-dom/server').renderToString
// const Home = require('./client/components/Home').default
import 'babel-polyfill' // for async await syntax
import express from 'express';
import { matchRoutes } from 'react-router-config'
import Routes from './client/Routes'
import proxy from 'express-http-proxy'
import renderer from './helpers/renderer'
import createStore from './helpers/createStore'

const app = express();    

app.use('/api', proxy('http://react-ssr-api.herokuapp.com', {
  proxyReqOptDecorator(opts) {
    opts.headers['x-forwarded-host'] = 'localhost:3000';
    return opts;
  }
}))
app.use(express.static('public')) // tells express it needs to treat public dir as static and available to outside world

app.get('*',(req,res)=>{
  const store = createStore(req);
// some logic to initialize and 
// load data into the store
 
const promises = matchRoutes(Routes, req.path).map(({route})=>{
   return route.loadData ? route.loadData(store) : null;
 }).map(promise=>{
   if(promise){
     return new Promise((resolve,reject)=>{
           promise.then(resolve).catch(resolve)
     })
   }
 })

 Promise.all(promises).then(()=>{
   const context = {};
   const content = renderer(req, store, context);
    
   if(context.url){
     return res.redirect(301, context.url);
   }

   if(context.notFound){
     res.status(404);
    }
   res.send(content)
 })
})

app.listen(3000,()=>{
    console.log('Listening on port 3000')
})