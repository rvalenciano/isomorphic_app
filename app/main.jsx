console.log('Hello from JSX!');
var React = require('react');
var ReactDOM = require('react-dom');
var CarList = require('./components/CarInventory.jsx');

var carItemStore = require('./stores/CarItemStore.jsx');
var items = carItemStore.getItems();
function render() {
	ReactDOM.render(<CarList items={items}/>, app);
}
carItemStore.onChange(function(){
	items = carItemStore.getItems();
	render();
})
render();

