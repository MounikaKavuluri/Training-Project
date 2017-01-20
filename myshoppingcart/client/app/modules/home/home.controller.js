(function () {

    angular
        .module('cart.home')
        .controller('homeController', homeController);

    homeController.$inject = ['$http', '$rootScope', '$q'];

    function homeController($http, $rootScope, $q) {
        console.log("home controler");

        var def = $q.defer();
        $http.get('/app/Json/SampleData.json')
            .success(function(printData)
            {
                def.resolve(printData);

                $rootScope.products = [];
                $rootScope.products = printData;
                console.log(" #### "+$rootScope.products);
                //console.log(products);
            })
            .error(function() {
                def.reject("Error: File not found!");
            });

        return def.promise;
    }
}());
