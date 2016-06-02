function indexCtrl($scope){
    $scope.test = 'Hello, World!'
    
    $scope.posts = [
        {title:'post 1', upvotes:12},
        {title:'post 2', upvotes:92},
        {title:'post 3', upvotes:1}
    ];
    
    $scope.addPost = function(){
        if(!$scope.title || $scope.title === '') { return; }
        $scope.posts.push({title: $scope.title , upvotes:64});
        $scope.title = '';
    };
}

angular 
    .module('app')
    .controller('indexCtrl', indexCtrl);