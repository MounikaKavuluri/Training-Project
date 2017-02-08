(function()
{
    angular
        .module('cart.view')
        .factory('viewFactory',viewFactory);

    console.log('In View Factory');
    viewFactory.$inject = ['$http', '$rootScope'];

    function viewFactory($http,$rootScope)
    {
        console.log('In *****');
        var prod =
            {
                getProduct : getProduct,
                getRating : getRating
            };
        return prod;

        function getProduct(id)
        {
            console.log('In getProduct Function'+'jjjjjjjjjjjjjjjjjj  '+id+" hhhhh "+ $rootScope.products);
            for(var i in $rootScope.products)
            {
                console.log("4444444" + $rootScope.products);
                if($rootScope.products[i].id == id)
                {
                    console.log("Product found "+id);
                    return $rootScope.products[i];
                }
            }

        }

        function getRating(comments)
        {
            console.log('In Get rating Function');
            var rating = 0;
            for(var i in comments)
            {
                rating = rating + parseInt(comments[i].rating);
            }

            return (rating/comments.length).toFixed(1);

        }
    }
}());