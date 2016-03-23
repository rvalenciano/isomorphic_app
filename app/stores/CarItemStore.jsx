var dispatcher = require('./../dispatcher.js');
var helper = require('./../helpers/RestHelper.js');

function CarItemStore() {
  var items = [];

  helper.get("api/cars")
  .then(function(data){
    items = data;
    triggerListeners(); // update components listening to the store
  })

  var listeners = [];
  function getItems() {
  	return items;
  }

  function addCarItem(item) {
  	items.push(item);
  	triggerListeners();
    helper.post("api/cars", item);
  }

  function deleteCarItem(item) {
    var index;
    items.filter(function(_item, _index){
      if (_item.brand == item.brand) {
        index = _index;
      }
    });
    items.splice(index, 1);
    triggerListeners();
    helper.del('api/items'+item._id);
  }

  function setCarItemBought(item, isBought) {
    var _item = items.filter(function(a){ return a.brand == item.brand})[0];
    item.purchased = isBought || false;
    triggerListeners();
    helper.patch('api/items/'+item._id, _item);
  }

  function onChange(listener){
  	listeners.push(listener);
  }

  function triggerListeners() {
  	listeners.forEach(function(listener){
  		listener(items);
  	})
  }
  dispatcher.register(function(event){
  	var split = event.type.split(':');
  	if (split[0]==='car-item') {
  		switch(split[1]) {
  			case "add":
  			  addCarItem(event.payload);
  			  break;
        case "delete":
          deleteCarItem(event.payload);
        break;
        case "unbuy":
          setCarItemBought(event.payload, false);
        break;
        case "buy":
          setCarItemBought(event.payload, true);
        break;
  		}
  	}
  });

  return {
  	getItems:getItems,
  	onChange:onChange
  }
}

module.exports = new CarItemStore();
