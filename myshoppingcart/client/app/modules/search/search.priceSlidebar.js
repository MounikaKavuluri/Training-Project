(function(){

    angular
        .module('cart.search')
        .component('priceSlidebar',
            {
                bindings:
                    {
                        productType : '@'
                    },
                templateUrl : '/app/partials/price-slidebar.html',
                controller : priceSlidebarController,
                controllerAs: 'pscntrl'
            });

    priceSlidebarController.$inject = ['$rootScope', searchFactory];

    function priceSlidebarController($rootScope, searchFactory) {

        console.log("In Price Slidebar Function");

        var vm = this;

        if(vm.productType == "mobile" || vm.productType == "laptop")
        {
            console.log("In Mobiles  Laptops");
            setSlider(1000,80000,500);
        }
        else{
            setSlider(10,500,10);
        }

        vm.setDefault = function (ptype) {

            console.log("Set Default");

            if(ptype == "mobile" || ptype == "laptop")
            {
                setSlider(1000,50000,500);
            }
            else{
                setSlider(10,500,10);
            }

        }

        function setSlider(min, max, step) {

            Console.log("SEt SLider");

            vm.slider = {
                minVlaue : min,
                maxValue : max,
                options: {
                        floor : min,
                        ceil : max,
                        translate : function(val)
                        {
                            return '&#8377;' + val;
                        },
                        step : step,
                        noSwitching : true,
                        onEnd : function()
                        {
                            console.log(vm.slider.minVlaue + " Changed " + vm.slider.maxValue);
                        }
                }
            };
        }
    }
}());