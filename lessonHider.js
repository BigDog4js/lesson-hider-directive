angular.module('app')
.directive('lessonHider', function() {

  return {
    templateUrl: 'lessonHider.html',
    restrict: 'E',
    scope: {
      lesson: '='
    },
    controller: function( $scope, lessonService ) {
        $scope.test = "Testing directive"

      $scope.getSchedule = lessonService.getLessons();
    },
      // This part is just about DOM manipulation
    link: function( scope, element, attributes ) {

      scope.getSchedule.then(function( response ) {
        scope.schedule = response.data;
        scope.schedule.forEach(function( scheduleDay ) {
          if (scheduleDay.lesson === scope.lesson) {
            element.css('text-decoration', 'line-through');
            return;
          }
        });
      });
        
        scope.removeFromSchedule = function() {
            element.css('text-decoration', 'none')
        }

    }
  }

});
