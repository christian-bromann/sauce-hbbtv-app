import Page from './page'

class AppPage extends Page {
    get indicator () { return $('#indicator') }
    get appArea () { return $('#app_area') }
    
    /**
     * pages
     */
    get startPage () { return $('#start') }
    get toolchainPage () { return $('#toolchain') }
    get keyareasPage () { return $('#keyareas') }
    get offerPage () { return $('#offer') }
    get customersPage () { return $('#customers') }
    get debuggingPage () { return $('#debugging') }
}

export default new AppPage()