let myApp = angular.module( 'myApp', [] );

myApp.controller( 'LaunchpadController', ['$http', function($http) {
    // use "vm" as the name in script
    let vm = this;
    vm.movies = [];
    // use nickname in HTML

    // simple click event


    vm.testClick = function(){
        console.log( 'test click' );
    } // end testClick

    vm.getMovie = function(){
        let newMovie = {
            title: vm.movieIn
        }
    $http({
        method: 'POST',
        url: '/movie',
        data: newMovie
    }).then(function(response){
        console.log('sent movie to the server');
        vm.requestMovies();
        vm.movieIn = '';
    }).catch(function(error) {
        console.log('Error sending movie to the server', error);
        
    })
        vm.movies.push( vm.movieIn );
        console.log( 'your movies:', vm.movies );
        
    }; // end getMovie

    vm.removeMe = function( index ){
        console.log('in removeme', index);
        
        let movieToDelete = vm.movies[index];
        // console.log(vm.movie.id);
        $http({
            method: 'DELETE',
            url: `/movie?id=${movieToDelete.id}`
        }).then(function(response) {
            console.log('deleted movie', movieToDelete);
            vm.requestMovies(); //get movies from server again
        }).catch(function(error) {
            console.log('Error deleting movie:', error);
            
        })




    } // end removeMe

    vm.requestMovies = function() {
        $http({
            method: 'GET',
            url: '/movie',
        }).then(function(response) {
            console.log(`Got response form the server: ${response}`);
            vm.movies = response.data;
        }).catch(function(error) {
            console.log(`Error on getting movies: ${error}`);
            
        })
    }

        //get movies when controller loads
        console.log(`LaunchpadController is created`);
        vm.requestMovies();
        

}]); // end controller