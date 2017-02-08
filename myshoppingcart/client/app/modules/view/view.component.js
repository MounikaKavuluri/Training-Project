(function()
{
    angular
        .module('cart.view')
        .component('displayProducts',
        {
            bindings:
                {
                    productList : '=',
                    paramId: '@'
                },
            templateUrl: '/app/partials/display-products.html',
            controller:displayProductController,
            controllerAs:'dprod'
        });

    displayProductController.$inject=['viewFactory'];

    function displayProductController(viewFactory)
    {
        var vm = this;
        console.log("In Component "+vm.paramId+"hhhhhhhh");
        var id = vm.paramId;

        var ref = viewFactory.getProduct(id);

        if(ref.type == 'electronics')
        {

            vm.brand = ref.brand;
            vm.modelName = ref.modelName;
            vm.ram = ref.RAM;

            if(ref.hasOwnProperty('camera'))
            {

                vm.frontCamera = ref.camera.front;
                vm.rearCamera = ref.camera.rear;
            }
            else {
                vm.frontCamera = null;
                vm.rearCamera = null;
            }

        }

        else if(ref.type == 'books')
        {
            console.log(ref.subType)
            vm.type = ref.type;
            vm.author = ref.by;

        }
        vm.name = ref.name;
        vm.price = ref.price;
        vm.color = ref.color;
        vm.subType = ref.subType;
        vm.battery = ref.battery;

        vm.description = ref.description;
        vm.offers = ref.offers;
        /*vm.rating = ref.rating;*/
        vm.rating = viewFactory.getRating(ref.comments);
        vm.comments = ref.comments;

    }
}());