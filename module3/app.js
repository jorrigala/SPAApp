(function(){
	'use strict';

	angular.module("NarrowItDownApp",[])
	.controller("NarrowItDownController",NarrowItDownController)
	.service("MenuSearchService",MenuSearchService)
	.directive("foundItems",foundItems);

	NarrowItDownController.$inject = ['MenuSearchService'];
	function NarrowItDownController(MenuSearchService){
		var narrow = this;

		narrow.find = function(){
			var promise = MenuSearchService.getMatchedMenuItems(narrow.search);
			promise.then(function(items){
				narrow.found = items;
			});
			
		};

		narrow.remove = function(index) {            
            narrow.found.splice(index,1)[0];
        };
	};


	MenuSearchService.$inject = ['$http'];
	function MenuSearchService($http){
		var service = this;

		service.getMatchedMenuItems = function(searchTerm){
			return $http({
					method: 'GET',
					url: (" https://davids-restaurant.herokuapp.com/menu_items.json")
				}).then(function(result){
					var foundItems = [];
					console.log(result);
					angular.forEach(result.data.menu_items, function(value, key) {
					  if(value.description.indexOf(searchTerm)>=0){
					  	this.push(value);
					  }
					}, foundItems);

					return foundItems;
				});

		};
	}	

	function foundItems(){
		var ddo = {
			templateUrl: "template.html",
			restrict: 'E',
			scope: {
				items: '<foundItems',
				remove: '&onRemove'
			}
		}

		return ddo;
	}


})();
