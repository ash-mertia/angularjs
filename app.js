(function(){
  'use strict';

  angular.module('ShoppingListCheckOff',[])
  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBoughtController', AlreadyBoughtController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  ToBuyController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyController(ShoppingListCheckOffService) {
    var ToBuy = this;
    ToBuy.itemsToBuy = ShoppingListCheckOffService.getitemsToBuy();
    ToBuy.clickonbutton = function(index){
      ShoppingListCheckOffService.clickonbutton(index);
    };
  }

  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtController(ShoppingListCheckOffService){
    var AlreadyBought = this;
    AlreadyBought.itemsAlreadyBought = ShoppingListCheckOffService.getitemsAlreadyBought();

  }


function ShoppingListCheckOffService(){
  var service = this;
  var itemsToBuy = [{ name: "cookies", quantity: "10 packets" },
  { name: "milk", quantity: "5 bottles" },
  { name: "tea", quantity: "2 bags" },
  { name: "coffee", quantity: "5 bags" },
  { name: "sugar", quantity: "10 kilos" }]
  var itemsAlreadyBought = [];



  service.clickonbutton = function(itemIndex){


    itemsAlreadyBought.push(itemsToBuy[itemIndex]);

    itemsToBuy.splice(itemIndex,1);
  };

  service.getitemsToBuy = function(){
    return itemsToBuy;
  };
  service.getitemsAlreadyBought = function(){
    return itemsAlreadyBought;
  };
}

})();
