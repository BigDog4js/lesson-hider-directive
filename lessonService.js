angular.module("app").service("lessonService", function($http) {
    this.getLessons = function() {
        return $http({
            
            method: "GET", url: "schedule.json"
            
            
        })
    }
    
    this.test = "Hello";
    
    this.anotherFunction = function() {
        
    }
    
})