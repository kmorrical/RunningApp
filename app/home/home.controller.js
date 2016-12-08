(function() {
    'use strict';

    angular
        .module('app')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['runtimerFactory'];//Change to 'runtimerFactory' after you make the factory for that API for v2t use to be 'http'

    function HomeController(runtimerFactory) { //change $http to runtimerFactory when you complete that, used to be $http
        var vm = this;

       
     

        vm.runs = [];

       

      

        vm.addRun = addRun;
       vm.deleteRun=deleteRun;
        vm.editRun=editRun;

        vm.runPacer= function() {
          vm.runPace=  (((vm.newHours*60*60)+(vm.newMinutes*60)+(vm.newSeconds))/vm.newDistance)/60
        }
        //not sure where to put this function ..if not working maybe try it under the activate


        activate();




        //////////////////////

      
        
       function activate() {
          runtimerFactory
          .getAll()
          .then(function(response){
            vm.runs=response.data;
          });
        }

        function addRun() {
            if (vm.newWorkout) {
                runFactory
                    .create({
                      name: vm.newRun,
                      distance: vm.newDistance,
                      vm.runPacer();
                      workout: vm.newWorkout
                    })
                    .then(function(response) {
                        vm.runs.push(response.data);
                    });
            } else {
                alert('please choose a workout type.');
            }
        }

      function editRun(run){
            runFactory
            .update(run.runId, run)
            .then(function(response){

            })
        }

        function deleteRun(run) {
            runFactory
                .remove(run.runId)
                .then(function(response) {
                var index =vm.runs.indexOf(run);
                vm.runs.splice(index,1);
                })
        }
    };

})();