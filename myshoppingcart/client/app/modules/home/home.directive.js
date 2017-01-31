(function ()
{
    angular
        .module('cart.home')
        .directive('topProducts', topProducts);

    function topProducts() {
        console.log("In Top Products List");

        var dir =
            {
                restrict: 'EA',
                templateUrl: '/app/partials/topProducts.html',
                scope: {
                    productList: '=',
                    productType: '@'
                },
                link: linkFunction
            }

        function linkFunction(scope, ele, attr) {
            console.log("Link function");
        }

        return dir;
    }
}());