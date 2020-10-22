import { isBundle } from 'typescript'
import  {} from './bundle/bundle'
//console.log(plugin_bundle.getDefaultExport())



console.log(require('./bundle/bundle'))

import  * as plugin_code from './src/expose'
console.log(plugin_code.getDefaultExport()) 

