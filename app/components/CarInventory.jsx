var React = require('react');
var Car = require('./Car.jsx');
var CarListAddItem = require('./CarListAddItem.jsx');
module.exports = React.createClass({
	render:function(){
		return (
          <div>
            <h1>Car List </h1>
            <div>
            {
          	  this.props.items.map(function(item,index){
          	    	return (
                    <Car item={item} key={"item"+index}/>
          		    )
          	  })
            }
            </div>
            <CarListAddItem />
          </div>
		)
	}
})
