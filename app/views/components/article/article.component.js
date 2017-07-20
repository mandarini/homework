function ArticleController($rootScope, $scope, FilesService) {
    var ctrl = this;
}

angular.module('iSite')

    .component('article', {
        templateUrl: 'views/components/article/article.template.html',
        controller: ArticleController,
        bindings: {
            article: '='
        }
    });
