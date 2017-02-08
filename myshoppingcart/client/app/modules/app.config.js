(function () {
    angular
        .module("shoppingcart")
        .config(function ($stateProvider, $urlRouterProvider) {

            console.log("in app config");
            // $locationProvider.htmlmode(true);

           /* $stateProvider.state('header', {
                url: "/header",
                controller: 'headController',
                controllerAs: 'headcntrl',
                templateUrl: '/app/partials/header.html'
            });*/
            $stateProvider.state('/', {
                url: "/",
                controller: 'homeController',
                controllerAs: 'hcntrl',
                templateUrl: '/app/partials/home.html'
            });

            $stateProvider.state('view', {
                url: '/view/:id',
                templateUrl: '/app/partials/view.html',
                controller: 'viewController',
                controllerAs: 'viewcntrl'
            });


            $urlRouterProvider.otherwise("/");
        });
})();