function ListItemController($rootScope, $scope) {
    var ctrl = this;
    ctrl.$postLink = postLink;
    /*
    Make any requests after the controller's element
    and its children have been linked and I can access the "item" object
    */
    ctrl.isCollapsed = true;

    function postLink() {
        /*
        If a user with the modifiedBy id does not exist OR a user with the createdBy id
        does not exist, this means that our user table has been update.
        So, we load it again.
        */
        if (ctrl.users) {
            if ((!ctrl.users.has(ctrl.item.modifiedBy)) || (!ctrl.users.has(ctrl.item.createdBy))) {
                $rootScope.LoadUsers();
            } else {
                ctrl.user = ctrl.users.get(ctrl.item.modifiedBy);
                ctrl.created = ctrl.users.get(ctrl.item.createdBy);
            }
        };
    }
}

angular.module('iSite')

    .component('listItem', {
        templateUrl: 'views/components/listItem/listItem.template.html',
        controller: ListItemController,
        bindings: {
            item: '=',
            users: '='
        }
    });
