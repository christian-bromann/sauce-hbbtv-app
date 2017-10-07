import assert from 'assert'

import AppPage from './page_objects/app.page'

describe('Sauce Labs HbbTV App', () => {
    before(() => AppPage.open())
    
    it('should display indicator', () => {
        AppPage.indicator.waitForVisible()
        AppPage.indicator.waitForVisible(5000, true)
    })
    
    it('should open the app', () => {
        browser.keys('red')
        AppPage.startPage.waitForVisible()
        assert.equal(AppPage.appArea.isVisible(), true)
        assert.equal(AppPage.appArea.$('h1').getText(), 'SauceLabs brings automated testing to Smart TVs!')
    })
    
    it('should open toolchain page', () => {
        browser.keys('down')
        AppPage.toolchainPage.waitForVisible()
    })
    
    it('should open keyareas page', () => {
        browser.keys('down')
        AppPage.keyareasPage.waitForVisible()
    })
    
    it('should open offer page', () => {
        browser.keys('down')
        AppPage.offerPage.waitForVisible()
    })
    
    it('should open customers page', () => {
        browser.keys('down')
        AppPage.customersPage.waitForVisible()
    })
    
    it('should open debugging page', () => {
        browser.keys('down')
        AppPage.debuggingPage.waitForVisible()
    })
    
    it('can jump to the beginning / end of the list againb', () => {
        browser.keys('down')
        AppPage.startPage.waitForVisible()
        browser.keys('up')
        AppPage.debuggingPage.waitForVisible()
    })
    
    it('can close the app', () => {
        browser.keys('red')
        AppPage.indicator.waitForVisible()
    })
    
    it('should not allow to switch pages when app is not displayed', () => {
        browser.keys('down')
        browser.keys('down')
        browser.keys('down')
        browser.keys('red')
        AppPage.startPage.waitForVisible()
    })
})