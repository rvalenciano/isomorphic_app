/**
 * Connector between files and dispatcher
 */
var dispatcher = require('./../dispatcher.js');
module.exports = {
	add:function(item) {
		dispatcher.dispatch({
			payload:item, 
		    type:"car-item:add"  
		})
	},
	delete:function(item) {
		dispatcher.dispatch({
			payload:item, 
		    type:"car-item:delete"  
		})
	},
	buy:function(item) {
		dispatcher.dispatch({
			payload:item, 
		    type:"car-item:buy"  
		})
	},
	unbuy:function(item) {
		dispatcher.dispatch({
			payload:item, 
		    type:"car-item:unbuy"  
		})	
	}
}
 
