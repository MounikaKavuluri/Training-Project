(function () {

    angular
        .module('cart.home')
        .controller('homeController', homeController);

    homeController.$inject = ['$http', '$rootScope'];

    function homeController($http, $rootScope) {
        console.log("home controler");

        $http.get('/app/Json/SampleData.json')
            .success(function(printData)
            {
                console.log(printData)
                /*parseData(homeController);*/

                $rootScope.products = {};
                $rootScope.product = printData;
                console.log(" #### "+$rootScope.products);

            })
            .error(function() {
                console.log("File not found");
            });
    }
}());
