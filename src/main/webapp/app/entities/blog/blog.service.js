(function() {
    'use strict';
    angular
        .module('springblogApp')
        .factory('Blog', Blog);

    Blog.$inject = ['$resource'];

    function Blog ($resource) {
        var resourceUrl =  'api/blogs/:id';

        return $resource(resourceUrl, {}, {
            'query': { method: 'GET', isArray: true},
            'get': {
                method: 'GET',
                transformResponse: function (data) {
                    data = angular.fromJson(data);
                    return data;
                }
            },
            'update': { method:'PUT' }
        });
    }
})();
