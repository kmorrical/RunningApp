(function() {
    'use strict';

    angular
        .module('app')
        .factory('runtimerFactory', runtimerFactory);

    todoFactory.$inject = ['$http'];

    function todoFactory($http) {
        var service = {
            create: create,
            getAll: getAll,
            getById: getById,
            update: update,
            remove: remove
                //you use remove instead of delete because it works better
        };
        return service;

        ////////////////////////
        //are these supposed to correlate to what I call my items in sublime/html/
        function create(run) {
            return $http.post('http://localhost:52805/api/runs', run);

        }

        function getAll() {
            return $http.get('http://localhost:52805/api/runs');
        }

        function getById(id) {
            return $http.get('http://localhost:52805/api/runs/', +id);
        }

        function update(id, run) {
            return $http.put('http://localhost:52805/api/runs/' + id, run);
            //the todo is the object to be updated
        }

        function remove(id) {
            return $http.delete('http://localhost:52805/api/todoes/' + run);
        }
    }
})();