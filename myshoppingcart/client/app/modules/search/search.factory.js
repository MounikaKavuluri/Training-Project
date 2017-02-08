(function()
{

    angular
        .module('cart.search')
        .factory('searchFactory', searchFactory );

    searchFactory.$inject = ['$rootScope'];
    
    function searchFactory($rootScope) {

        console.log("In Search Factory");

        var products = $rootScope.products;
        var productsType = [];
        var productsRange = [];

        var service =
            {
                getProducts : getProducts,
                getProductsRange : getProductRange

            };

        return service;

        function getProducts(productType) {

            for(var i in products)
            {
                if(products[i].subType == productType)
                {
                    productType.push(products[i]);
                }
            }
            return productType;
        }

        function getProductRange(productType, min, max)
        {
            console.log("In Product Range function"+ min + " " + max);

            for( var i in products)
            {
                if(products[i].subType == productType)
                {
                    if(products[i].price >= min && products[i].price <= max)
                    {
                        console.log(products[i].price);
                        productsRange.push(products[i]);
                    }
                }
            }
            return productsRange;
        }
    }
}());