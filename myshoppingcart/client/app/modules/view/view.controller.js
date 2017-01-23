(function()
{
   angular
       .module('viewModule')
       .controller('viewController', viewController);

    viewController.$inject = ['$stateParams','viewFactory','$rootScope'];
   
   function viewController($stateParams,viewFactory,$rootScope) {

       console.log('In View Controller');

       var vm=this;
       vm.params = $stateParams;

       var id = $stateParams.id;
       vm.products = $rootScope.products;
       var ref = viewFactory.getProduct(id,vm.products);

       if(ref.type == 'electronics')
       {
           vm.subtype = ref.subType;
           vm.name = ref.name;
           vm.brand = ref.brand;
           vm.price = ref.price;
           vm.modelName = ref.modelName;
           vm.ram = ref.RAM;

           if(ref.hasOwnProperty('camera')){
               vm.frontCamera = ref.camera.front;
               vm.rearCamera = ref.camera.rear;
           }
           else{
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
       }
});