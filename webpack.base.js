module.exports ={
        // Tell webpack to run babel on every file it runs through
    module:{
        rules:[
            {
             test: /\.js?$/, // regex for only running babel javascript files not in css ,json etc.
             loader: 'babel-loader', // actual webpack loader module that executes babel and transpile our code
             exclude: /node_modules/,
             options:{
                 presets:[ // actual rules that will  be used by babel to transile our code
                     'react', // take all our jsx and turn into normal js
                     'stage-0', // use for handeling async code
                     ['env', { targets: { browsers : ['last 2 versions']}}] //master preset that says run all different transform rules needed to meet the requirements of the latest 2 versions of all popular browsers  
                 ]
             }                

            }
        ]
    } 
}