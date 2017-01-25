(function()
{
    angular
        .module('cart.view')
        .factory('viewFactory',viewFactory);

    console.log('In View Factory');
    viewFactory.$inject = ['$http','$rootScope'];

    function viewFactory($rootScope)
    {
        var prod =
            {
                getProduct : getProduct
            };
        return prod;

        function getProduct(id,products)
        {

            for(var i in products)
            {

                if(products[i].id == id)
                {

                    console.log("Product  found "+id);
                    return products[i]
                }
            }

        }

    }
}());