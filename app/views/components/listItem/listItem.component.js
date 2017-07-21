function ListItemController($rootScope, $scope, UsersService) {
    var ctrl = this;
    ctrl.$postLink = postLink;
    /*
    Make the request after the controller's element
    and its children have been linked and I can access the "item" object
    */
    ctrl.isCollapsed = true;

    function postLink() {
      UsersService.GetUsers(ctrl.item.modifiedBy, function(user) {
        ctrl.user = user;
      });
      UsersService.GetUsers(ctrl.item.createdBy, function(user) {
        ctrl.created = user;
      });
    }
    ctrl.exp = false;
    ctrl.expand = function() {

    }
}

angular.module('iSite')

    .component('listItem', {
        templateUrl: 'views/components/listItem/listItem.template.html',
        controller: ListItemController,
        bindings: {
            item: '=',
            fileid: '='
        }
    });
