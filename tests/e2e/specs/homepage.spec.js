//homepage.spec.js

describe('Homepage', function() { //definição da suite de teste
    it('perform a search into the api page', function(){ //it - Caso de teste
        browser.get('#/api');

        element(by.model('searchTerm')).sendKeys('restart');
        element(by.css('.depth-1')).click();
        
        //validação
        expect(element(by.css('.api-title')).getText()).toContain('browser.restart');

    });
});