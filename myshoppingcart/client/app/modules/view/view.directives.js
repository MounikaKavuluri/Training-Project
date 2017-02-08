(function () {

    angular
        .module('cart.view')
        .controller('similarProducts', similarProducts);
    
    function similarProducts() {
        console.log("In Similar Products Directive");

        var dir =
            {
                restrict : 'EA',
                templateUrl : '/app/partials/similarProducts.html',
                scope:
                    {
                        productList : '=',
                        productType : '@'
                    },
                link : linkFunction
            };
        
        function linkFunction(scope, ele, attr) {

            scope.curPage = 0;
            scope.pageSize = 4;

            scope.numberOfPages = function (subType) {
                var count= 0;

                for(var i in scope.productList)
                {
                    if(scope.productList[i].subType == subType)
                    {
                        count = count + 1;
                    }
                }
                return Math.ceil(count / scope.pageSize);
            };
        }
        return dir;

    }
    
}());