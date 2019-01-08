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
            '<div align=right>',
            'URs Open: <span id="urtrackerOpenURs"></span></br>',
            'URs @ 4 days: <span id="urTrackerURs4"></span></br>',
            'URs @ 8 days: <span id="urTrackerURs8"></span></br>',
            '</div>',
            '</div>'
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
