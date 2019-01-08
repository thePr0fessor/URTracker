// ==UserScript==
// @name         UR Tracking
// @namespace    http://tampermonkey.net/
// @version      1.1
// @description  ur tracker
// @author       me
// @license         GNU GPLv3
// @include       https://*.waze.com/en-US/editor*
// @include         /^https:\/\/(www|beta)\.waze\.com\/(?!user\/)(.{2,6}\/)?editor\/?.*$/
// @grant        none
// @require https://greasyfork.org/scripts/24851-wazewrap/code/WazeWrap.js?version=229392
// ==/UserScript==

/* global W */
/* global GM_info */
/* global toastr */

(function() {
    'use strict';

    function bootstrap(tries = 1) {
        if (W && W.map &&
            W.model && W.loginManager.user &&
            $ ) {
            init();
        } else if (tries < 1000)
            setTimeout(function () {bootstrap(tries++);}, 200);
    }

    function init()
    {
        var $section = $("<div>");
        $section.html([
            '<div>',
            '<h4>UR Tracker Settings</h4>',
            '<br>',
            '<label for="URTrackerAPIkey">API Key</label> <input type="textbox" id="URTrackerAPIkey" class="URTrackerSettingsCheckbox" size=30>',
            '<hr>',
            '<div class="rTable">',
            '<div class="rTableRow">',
            '<div class="rTableCell">URs Open</div>',
            '<div class="rTableCell">23</div>',
            '</div>',
            '<div class="rTableRow">',
            '<div class="rTableCell">URs @ 4 days</div>',
            '<div class="rTableCell">7</div>',
            '</div>',
            '</div>',
            '</div>',
        ].join(' '));

        new WazeWrap.Interface.Tab('UR Tracker', $section.html(), initializeSettings);
    }
    function initializeSettings()
    {
        //$('#urtrackerOpenURs').text();
        //$('#urTrackerURs4').text();
        //$('#urTrackerURs8').text();
    }
    bootstrap();
})();
