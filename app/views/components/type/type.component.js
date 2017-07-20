function TypeController($rootScope, $scope, TypesService) {
    var ctrl = this;
    console.log("hello");
    ctrl.click = function() {
      
    }
}

angular.module('iSite')

    .component('type', {
        templateUrl: 'views/components/type/type.template.html',
        controller: TypeController,
        bindings: {
            type: '=',
            index: '='
        }
    });
