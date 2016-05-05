(function() {
    'use strict';

    angular
        .module('springblogApp')
        .controller('BlogDialogController', BlogDialogController);

    BlogDialogController.$inject = ['$timeout', '$scope', '$stateParams', '$uibModalInstance', 'entity', 'Blog', 'User'];

    function BlogDialogController ($timeout, $scope, $stateParams, $uibModalInstance, entity, Blog, User) {
        var vm = this;
        vm.blog = entity;
        vm.users = User.query();

        $timeout(function (){
            angular.element('.form-group:eq(1)>input').focus();
        });

        var onSaveSuccess = function (result) {
            $scope.$emit('springblogApp:blogUpdate', result);
            $uibModalInstance.close(result);
            vm.isSaving = false;
        };

        var onSaveError = function () {
            vm.isSaving = false;
        };

        vm.save = function () {
            vm.isSaving = true;
            if (vm.blog.id !== null) {
                Blog.update(vm.blog, onSaveSuccess, onSaveError);
            } else {
                Blog.save(vm.blog, onSaveSuccess, onSaveError);
            }
        };

        vm.clear = function() {
            $uibModalInstance.dismiss('cancel');
        };
    }
})();
