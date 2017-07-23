'use strict';

describe('iSite', function() {
    describe('iSite controllers', function() {
        beforeEach(module('iSite.home'));
        describe('HomeCtrl', function() {
            it('should create "files" model with 20 phones',
                inject(function($rootScope, $controller) {
                var scope = $rootScope.$new();
                var ctrl = $controller("HomeCtrl", {$scope: scope });
                expect(scope.files.length).toBe(20);
            }));
        });
    });
});
