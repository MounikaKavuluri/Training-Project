(function () {
    angular
        .module("shoppingcart")
        .config(function ($stateProvider, $urlRouterProvider) {
        // $locationProvider.htmlmode(true);

        $stateProvider.state('home' , {
            url: "/",
            controller: 'homeController',
            controllerAs : 'hcntrl',
            templateUrl : '/app/partials/header.html'
        });
        // $urlRouterProvider.otherwise('home');
    })
})();