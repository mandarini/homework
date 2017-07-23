'use strict';

describe('iSite', function() {
    it('should redirect `index.html` to `/#!/home', function() {
        browser.get('index.html');
        expect(browser.getLocationAbsUrl()).toBe('/home');
    });

    describe('iSite controllers', function() {

        describe('HomeCtrl', function() {
            beforeEach(function() {
                browser.get('index.html#!/home');
            });

            it('should filter the file list as a query', function() {
                var fileList = element.all(by.repeater('file in scope.files'));
                var query = element(by.model('scope.query'));

                expect(files.count()).toBe(20);

                query.sendKeys('article');
                expect(files.count()).toBe(10);

                query.clear();
                query.sendKeys('profile');
                expect(phoneList.count()).toBe(10);
            });

        });
    })
});
