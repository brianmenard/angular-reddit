function app(){
    
}

angular
    .module('app', ['ui.router'])
    .config(function($stateProvider){
        $stateProvider
            .state('test', {
                url: '/test',
                templateUrl: 'templates/test.html',
                controller:'indexCtrl'
            })
            
            .state('new_post', {
                url: 'post/new',
                templateUrl: 'templates/new_post.html.erb',
                controller:'indexCtrl'
            })
    });