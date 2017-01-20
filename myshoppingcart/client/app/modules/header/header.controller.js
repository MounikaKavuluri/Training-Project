(function () {

    angular
        .module('cart.head')
        .controller('headerController', headerController);

    function headerController() {

        var srch = this;

        /* ****
         on entering minimum characters to show autocomplete suggestions
         ***** */
        srch.limitNameSearch = 500; //time for displaying suggestion
        srch.checkName = function (search) {
            console.log('In header Controller');
            if (search.length > 2) {
                srch.limitNameSearch = 500;
            }
            else {
                srch.limitNameSearch = 0;
            }
        }
    }
}());
