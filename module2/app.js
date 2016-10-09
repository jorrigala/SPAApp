(function(){
    'use strict';
    
    angular.module("ShoppingListCheckOff",[])
    .controller('AlreadyBoughtController',AlreadyBoughtController)
    .controller('ToBuyController',ToBuyController)
    .service('ShoppingListCheckOffService', ShoppingListCheckOffService);
    
    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
    function AlreadyBoughtController(ShoppingListCheckOffService){
        var alreadyBoughtList = this;
        
        alreadyBoughtList.items = ShoppingListCheckOffService.getBoughtItems();
        
        
    };
    
    ToBuyController.$inject = ['ShoppingListCheckOffService'];
    function ToBuyController(ShoppingListCheckOffService){
        
        var buyList = this;
        
        buyList.items=ShoppingListCheckOffService.getBuyItems();
        
        buyList.bought = function(index){
            ShoppingListCheckOffService.bought(index);
        };
    };
    
    
    function ShoppingListCheckOffService(){
        var service = this;
        
        var buyItems = [{quantity:'20',name:"Fried Chicken Wings"},{quantity:'2',name:"Spicy Sause"},{quantity:'6',name:"Beer Pack"},{quantity:'3',name:"DVDs"},{quantity:'2',name:"Chips"}];
        var boughtItems = [];
        
        service.bought = function(index) {            
            var item = buyItems.splice(index,1)[0];
            boughtItems.push(item);
        };
        
        service.getBoughtItems = function () {
            return boughtItems;
        }; 
        
        service.getBuyItems = function () {
            return buyItems;
        }; 
        
    };
})();