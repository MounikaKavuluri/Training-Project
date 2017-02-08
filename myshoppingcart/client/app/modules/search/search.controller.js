(function(){

    angular
        .module('cart.search')
        .controller('searchController', searchController);

    searchController.$inject = ['$stateParams', '$rootScope'];

    function searchController($stateParams)
    {
        console.log("In Search Controller");

        vm = this;

        console.log($stateParams.productType)
        vm.productType = $stateParams.productType;
    }
}());