const path = require('path')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.js')

const config = {
    // Tell webpack the root file of our
    // server application
    entry: './src/client/client.js', // sometimes index.js is good name
    
    // tell webpack where to put the output file
    // that is generated
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname,'public') // we dont have to make this file it automatically generates when we run app 1st time
    },

    // Tell webpack to run babel on every file it runs through

    // module:{
    //     rules:[
    //         {
    //          test: /\.js?$/, // regex for only running babel javascript files not in css ,json etc.
    //          loader: 'babel-loader', // actual webpack loader module that executes babel and transpile our code
    //          exclude: /node_modules/,
    //          options:{
    //              presets:[ // actual rules that will  be used by babel to transile our code
    //                  'react', // take all our jsx and turn into normal js
    //                  'stage-0', // use for handeling async code
    //                  ['env', { targets: { browsers : ['last 2 versions']}}] //master preset that says run all different transform rules needed to meet the requirements of the latest 2 versions of all popular browsers  
    //              ]
    //          }                

    //         }
    //     ]
    // }
};

module.exports = merge(baseConfig, config)