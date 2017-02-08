(function()
{
    angular
        .module('cart.search')
        .component('displayProductsList',
            {
                bindings:
                    {
                        productType : '@'
                    },
                    templateUrl : '/app/partials/display-list.html',
                    controller: displayListController,
                    controllerAs : 'dlistctrl'
            });
        displayListController.$inject = ['$rootScope'];

        function displayListController($rootScope){

            console.log(" In display list controller");

            var vm = this;
            console.log("Component" + vm.productType);
            vm.productList = $rootScope.products;

        }
}());