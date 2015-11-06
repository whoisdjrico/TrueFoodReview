
var app = angular
//   .module('Codesmith.InfoFactory',['ui.router'])
//   .factory('InfoFactory', ['$http','$q', InfoFactory])

// function InfoFactory($http, $q){
//   var obj = {};
  
//   obj.getData = function(route){ 
//     var deferred = $q.defer()
//     $http.get(route)
//     .then(function(result){  
//        obj.quizData = result.data;
//        obj.quizDataCopy = obj.quizData.slice();
//        obj.numberCorrect = obj.quizData.length - obj.quizDataCopy.length;
//        obj.numberLeft = obj.quizDataCopy.length;
//        deferred.resolve(result);    
//     });
//     return deferred.promise;
//   }

//  	var randomIndex; 	
//   obj.randomQuestion = function(){
//   	if(obj.quizDataCopy.length === 0) {return {question: 'You finished all the cards in the stack! Great job!', answer: '' }}
//   	randomIndex = Math.floor(Math.random() * obj.quizDataCopy.length)
//   	return obj.quizDataCopy[randomIndex]	
//   }
//   obj.removeQuestion = function(){
//   	obj.quizDataCopy.splice(randomIndex,1);
//     obj.numberCorrect = obj.quizData.length - obj.quizDataCopy.length;
//     obj.numberLeft = obj.quizDataCopy.length;
//   }

//   return obj;
}