angular.module("app").controller("lessonCtrl", function($scope, lessonService) {
//    $scope.test = "This is a display test from the controller"
    
//    $scope.serviceTest = lessonService.test
    
    $scope.getLessons = function() {
         lessonService.getLessons().then(function(result){
             $scope.lessons = result.data.map(function(lesson) {
                 return lesson.lesson
             })

             
         })   
                
        
    }
    $scope.getLessons();
})