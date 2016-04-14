import {join} from 'path'

const config =
  { devtool: 'cheap-module-source-map'
  , devServer:
    { contentBase: './dist'
    }
  , entry:
    [ './src/index.js'
    ]
  , resolve:
    { extensions:
      [ ''
      , '.js'
      ]
    }
  , module:
    { loaders:
      [ { test: /\.js/
        , exclude: /node_modules/
        , loaders:
          [ 'babel'
          ]
        }
      , { test: /\.json$/
        , loaders:
          [ 'json'
          ]
        }
      ]
    }
  , output:
    { path: join(__dirname, 'dist')
    , publicPath: '/'
    , filename: 'bundle.js'
    }
  , target: 'web'
  }

export default config
