(function () {
    angular
        .module("shoppingcart")
        .config(function ($stateProvider, $urlRouterProvider) {

            console.log("in app config");
        // $locationProvider.htmlmode(true);
            $urlRouterProvider.otherwise("/")
        $stateProvider.state('header' , {
            url: "/header",
            controller: 'headController',
            controllerAs : 'headcntrl',
            templateUrl : '/app/partials/header.html'
        })
            .state('/' , {
            url: "/",
            controller: 'homeController',
            controllerAs: 'hcntrl',
            templateUrl : '/app/partials/home.html'
        });
    })
})();