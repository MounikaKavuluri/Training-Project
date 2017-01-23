(function () {
    "use strict";
    angular
        .module('cart.home')
        .factory('homeFactory',homeFactory);

    homeFactory.$inject = ['$http','$q'];

    function homeFactory($http,$q)
    {
        console.log("Home Factory")
        var service =
            {
                getData : getData
            };
        return service;

        function getData()
        {
            var def = $q.defer();
            console.log(" data from home factory ");
            $http.get('app/JSON/SampleData.json')
                .success(function(printData)
                {
                    def.resolve(printData);
                })
                .error(function()
                {
                    def.reject("Failed to get albums");
                });
            return def.promise;
        }

    }

}());
