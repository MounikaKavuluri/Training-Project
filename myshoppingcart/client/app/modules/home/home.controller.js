(function () {

    angular
        .module('cart.home')
        .controller('homeController', homeController);

    homeController.$inject = ['homeFactory','$rootScope'];

    function homeController(homeFactory,$rootScope) {

        var vm = this;
        console.log("home controler");

        vm.getData = function() {
            homeFactory.getData()
                .then(function(printData)
                    {
                        $rootScope.products = {};
                        $rootScope.products = printData;

                    },
                    function(printData) {
                        console.log('Error in data retrieval');
                    });
        };

        vm.getData();


       /* Autocomplete */
        vm.limitNameSearch = 500; //time for displaying suggestion
        vm.searchName = function(keyword)
        {

            if(keyword.length > 2)
            {
                vm.limitNameSearch = 500;
            }
            else{
                vm.limitNameSearch = 0;
            }
        }

    }
}());
