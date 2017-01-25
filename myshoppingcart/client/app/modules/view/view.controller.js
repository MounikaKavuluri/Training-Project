(function() {
    angular
        .module('cart.view')
        .controller('ViewController', viewController);

    viewController.$inject = ['$stateParams', 'viewFactory', '$rootScope'];

    function viewController($stateParams, viewFactory, $rootScope) {

        console.log('In View Controller');

        var vm = this;
        vm.sp = $stateParams;

        vm.id = $stateParams.id;
        vm.products = $rootScope.products;
        var ref = viewFactory.getProduct(vm.id, vm.products);

        if (ref.type == 'electronics') {
            vm.subtype = ref.subType;
            vm.name = ref.name;
            vm.brand = ref.brand;
            vm.price = ref.price;
            vm.modelName = ref.modelName;
            vm.ram = ref.RAM;

            if (ref.hasOwnProperty('camera')) {
                vm.frontCamera = ref.camera.front;
                vm.rearCamera = ref.camera.rear;
            }
            else {
                vm.frontCamera = null;
                vm.rearCamera = null;
            }

            vm.color = ref.color;
            vm.battery = ref.battery;
            vm.rating = ref.rating;
            vm.description = ref.description;
            vm.offers = ref.offers;
            vm.comments = ref.comments;
        }

        else if (ref.type == 'books') {
            console.log(ref.subType)
            vm.subType = ref.subType;
            vm.name = ref.name;
            vm.price = ref.price;
            vm.author = ref.by;
            /*if(ref.hasOwnProperty('camera'))
             {

             vm.frontCamera = ref.camera.front;
             vm.rearCamera = ref.camera.rear;
             }
             else {
             vm.frontCamera = null;
             vm.rearCamera = null;
             }

             */
            vm.color = ref.color;
            vm.battery = ref.battery;
            vm.rating = ref.rating;
            vm.description = ref.description;

            vm.offers = ref.offers;
            vm.comments = ref.comments;

        }

        vm.curPage = 0;
        vm.pageSize = 4;

        vm.pages = function (subType) {
            var countSubType = 0;
            for (var i in vm.products) {
                if (vm.products[i].subType == subType)
                    countSubType = countSubType + 1;
            }
            return Math.ceil(countSubType / vm.pageSize);
        };

    }
}());
