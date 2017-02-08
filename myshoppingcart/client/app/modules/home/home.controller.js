(function () {

    angular
        .module('cart.home')
        .controller('homeController', homeController);

    homeController.$inject = ['$rootScope','homeFactory'];
    
    function homeController($rootScope,homeFactory) {

        var va = this;
        console.log("In Controller");
        va.products = $rootScope.products;
        var ref = homeFactory.getData().then(function (response) {
            $rootScope.products = response;
            va.products = $rootScope.products
                console.log("in home controller response loaded is "+ $rootScope.products);
        }, function (failed) {
            va.products = "failed to load data";
            console.log(va.products+" in fail");
        });

    }
}());
