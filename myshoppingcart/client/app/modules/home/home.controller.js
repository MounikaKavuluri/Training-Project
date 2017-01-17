(function () {

    angular
        .module('cart.home')
        .controller('homeController', homeController);
    
    function homeController() {

        var va = this;
        console.log("In Controller");

    }
}());