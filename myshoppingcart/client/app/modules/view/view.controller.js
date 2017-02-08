(function() {
    angular
        .module('cart.view')
        .controller('viewController', viewController);

    viewController.$inject = ['$stateParams', 'viewFactory', '$rootScope'];

    function viewController($stateParams, viewFactory, $rootScope) {

        console.log('In View Controller');

        var vm = this;
        vm.sp = $stateParams;

        var id = $stateParams.id;
        vm.products = $rootScope.products;

        console.log("***" +vm.products);

        var ref = viewFactory.getProduct(id);
        vm.subType = ref.subType;
        /*console.log(ref);*/

    }

}());
