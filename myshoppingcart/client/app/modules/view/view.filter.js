(function () {

    angular
        .module('cart.view')
        .filter('pagination', pagination);

    function pagination() {
        console.log("In view filter");
        return function(input,open)
        {
            open = +open;
            return input.slice(open);
        };
        
    }
}());