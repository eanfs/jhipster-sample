(function() {
    'use strict';

    angular
        .module('springblogApp')
        .controller('BlogDetailController', BlogDetailController);

    BlogDetailController.$inject = ['$scope', '$rootScope', '$stateParams', 'entity', 'Blog', 'User'];

    function BlogDetailController($scope, $rootScope, $stateParams, entity, Blog, User) {
        var vm = this;
        vm.blog = entity;
        
        var unsubscribe = $rootScope.$on('springblogApp:blogUpdate', function(event, result) {
            vm.blog = result;
        });
        $scope.$on('$destroy', unsubscribe);

    }
})();
