(function () {

    angular
        .module('cart.home')
        .controller('headerController', headerController);

    headerController.$inject = ['$rootScope'];
    function headerController($rootScope) {

        var srch = this;
        console.log('In header Controller');

        /* ****
         on entering minimum characters to show autocomplete suggestions
         ***** */
        srch.limitNameSearch = 500; //time for displaying suggestion
        srch.checkName = function (search) {
            console.log('In header Controller');
            if (search.length >= 2) {
                srch.limitNameSearch = 500;
            }
            else {
                srch.limitNameSearch = 0;
            }
        }

    }
}());
