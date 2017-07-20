function ProfileController($rootScope, $scope, FilesService) {
    var ctrl = this;
    ctrl.allgenres = $rootScope.genreslookup;
    ctrl.exp = false;
    ctrl.info = "MORE";
    ctrl.noReviews=false;
    ctrl.noTrailer=true;
    ctrl.expand = function() {
        ctrl.exp = !ctrl.exp;
        if (ctrl.exp) {
            ctrl.info = "HIDE";
            DetailsService.GetDetails(ctrl.movie.id, 'en-US', function(details) {
              console.log(details);
              ctrl.trailers=[];
              ctrl.allReviews = details.reviews.results;
              ctrl.similar = details.similar.results;
              if (details.reviews.results.length<1) ctrl.noReviews=true;
              for (var i = 0; i < details.videos.results.length; i++) {
                if (details.videos.results[i].type=="Trailer") {
                  ctrl.noTrailer=false;
                  var surl="https://www.youtube.com/embed/"+details.videos.results[i].key+"?rel=0";
                  details.videos.results[i].key=$sce.trustAsResourceUrl(surl);
                  ctrl.trailers.push(details.videos.results[i]);
                }
              }
            });
        } else {
          ctrl.info = "MORE";
        };
    }
}

angular.module('iSite')

    .component('profile', {
        templateUrl: 'views/components/profile/profile.template.html',
        controller: ProfileController,
        bindings: {
            profile: '='
        }
    });
