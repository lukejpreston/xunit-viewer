import React from 'react'
import ReactDOM from 'react-dom'
import 'bulma/css/bulma.css'
import '@fortawesome/fontawesome-free/js/all'

import './app/index.css'
import App from './app/app.js'

import LZUTF8 from 'lzutf8'

let files = window.files || []
const title = window.title || 'Xunit Viewer'
const brand = window.brand || null

if (process.env.NODE_ENV === 'development') {
  files = [{
    file: '/path/to/file/complete.xml',
    contents: LZUTF8.compress(`
    <?xml version="1.0"?>
<testsuites>
    <testsuite name="CodeceptionSupport.acceptance" tests="43" assertions="1348" failures="4" errors="7"
               time="3167.404369">
        <testcase file="/usr/share/nginx/html/tests/acceptance/Bets/GuestBrowsingBetViewPageCest.php"
                  name="assertBetViewPage" class="CodeceptionAcceptanceBetsGuestBrowsingBetViewPageCest"
                  feature="assert bet view page" assertions="42" time="78.914764"/>
        <testcase file="/usr/share/nginx/html/tests/acceptance/Bets/GuestBrowsingProphetBetsPageCest.php"
                  name="navigateAndCheckTest" class="CodeceptionAcceptanceBetsGuestBrowsingProphetBetsPageCest"
                  feature="navigate and check test" assertions="2" time="19.616513">
            <failure type="PHPUnitFrameworkExpectationFailedException">GuestBrowsingProphetBetsPageCest: Navigate and
                check test
                Failed asserting that two strings are equal.
                /usr/share/nginx/html/tests/_support/_generated/AcceptanceTesterActions.php:768
                /usr/share/nginx/html/tests/_support/Step/Prophet.php:50
                /usr/share/nginx/html/tests/acceptance/Bets/GuestBrowsingProphetBetsPageCest.php:49
            </failure>
        </testcase>
        <testcase
                file="/usr/share/nginx/html/tests/acceptance/Prophecies/GuestBrowsingProphetOfferedPropheciesPageCest.php"
                name="navigateAndCheckTest"
                class="CodeceptionAcceptanceBetsGuestBrowsingProphetOfferedPropheciesPageCest"
                feature="navigate and check test" assertions="4" time="50.317909">
            <failure type="CodeceptionExceptionElementNotFound">GuestBrowsingProphetOfferedPropheciesPageCest:
                Navigate and check test
                Element located either by name, CSS or XPath element with '#twoLevelTabsMenu' was not found.
                /usr/share/nginx/html/tests/_support/_generated/AcceptanceTesterActions.php:334
                /usr/share/nginx/html/tests/_support/AcceptanceTester.php:346
                /usr/share/nginx/html/tests/_support/Page/Element/UserProfileMenu.php:204
                /usr/share/nginx/html/tests/_support/Page/Element/UserProfileMenu.php:298
                /usr/share/nginx/html/tests/acceptance/Prophecies/GuestBrowsingProphetOfferedPropheciesPageCest.php:54
            </failure>
        </testcase>
    </testsuite>
</testsuites>


`, { outputEncoding: 'Base64' })
  }]
}

files = files.map(({ file, contents }) => ({
  file,
  contents: LZUTF8.decompress(contents, { inputEncoding: 'Base64' })
}))

ReactDOM.render(<App files={files} title={title} brand={brand} />, document.getElementById('root'))
