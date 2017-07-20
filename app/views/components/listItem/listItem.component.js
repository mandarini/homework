function ListItemController($rootScope, $scope, UsersService) {
    var ctrl = this;
    ctrl.exp = false;
    ctrl.expand = function() {

    }
}

angular.module('iSite')

    .component('listItem', {
        templateUrl: 'views/components/listItem/listItem.template.html',
        controller: ListItemController,
        bindings: {
            item: '='
        }
    });
