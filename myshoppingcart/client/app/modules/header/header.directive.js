(function () {
    angular
        .module('cart.head')
        .directive('head_directive', head_directive);

    head_directive.$inject = ['$state'];
    function head_directive($state) {

        console.log("In Head DIrective");

        var dir =
            {
                restrict : 'EA',
                templateUrl : '/app/partials/header.html',
                controller : headerDirective,
                controllerAs : 'headDir',
                bindToController : true,
                link : linkFunction
            };
        
        function linkFunction(scope, ele, attr) {

            scope.limitNameSearch = 300;
            scope.checkName = function (search) {

                if(lettersTyped.length >= 2)
                {
                    scope.limitNameSearch = 500;
                }
                else {
                    scope.limitNameSearch = 0;
                }
            }

        }

        headerDirective.$inject = ['$state'];
        function headerDirective($state)
        {
            var vm = this;

            vm.onSelect = function (id) {

                console.log("Header Directive" + id);
                $state.go('view',{id:id});
            }
        }

        return dir;
    }

}())