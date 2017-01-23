(function()
{
    angular
        .module('viewModule')
        .factory('viewFactory',viewFactory);

    console.log('In View Factory');
    viewFactory.$inject = ['$http','$rootScope'];

    function viewFactory($rootScope)
    {
        var service =
            {
                getProduct : getProduct
            };
        return service;

        function getProduct(id,products)
        {

            for(var i in products)
            {

                if(products[i].id == id)
                    return products[i]
            }

        }

    }
}());