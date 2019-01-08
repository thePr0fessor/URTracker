// ==UserScript==
// @name         UR Tracking
// @namespace    http://tampermonkey.net/
// @version      1.1
// @description  ur tracker
// @author       me
// @license         GNU GPLv3
// @include       https://*.waze.com/en-US/editor*
// @include         /^https:\/\/(www|beta)\.waze\.com\/(?!user\/)(.{2,6}\/)?editor\/?.*$/
// @require https://greasyfork.org/scripts/24851-wazewrap/code/WazeWrap.js?version=229392
// @grant        none
// ==/UserScript==

/* global W */
/* global GM_info */
/* global toastr */

(function() {
    'use strict';
    const _CSS_ARRAY = [
        '#URTracker { background-color:#fff; color:black; font-size:14px; padding-top:8px; padding-bottom:8px; margin-left:4px; margin-right:4px; line-height:18px; margin-top:2px; border: solid 1px #8d8c8c; border-radius: 6px; margin-bottom: 4px;}',
    ]

    function bootstrap(tries = 1) {
        if (W && W.map &&
            W.model && W.loginManager.user &&
            $ ) {
            init();
        } else if (tries < 1000)
            setTimeout(function () {bootstrap(tries++);}, 200);
    }
    function injectcss() {
        var css = [
            '.rTable { display: table; }',
            '.rTableRow { display: table-row; }',
            '.rTableBody { display: table-row-group; }',
            '.rTableFoot { display: table-footer-group; }',
            '.rTableCell, .rTableHead { display: table-cell; text-align:right; border: 1px solid black; padding: 20px; }',
            '.URTrackerButton { width: 20em;  height: 2em;}'
        ].join(' ');
        $('<style type="text/css" id="URTracker">' + css + '</style>').appendTo('head');
    }
    function init()
    {
        injectcss();
        var $section = $("<div>");
        $section.html([
            '<div id="URTracker">',
            '<h4>UR Tracker Settings</h4>',
            '<br>',
            '<label for="URTrackerAPIkey">API Key</label> <input type="textbox" id="URTrackerAPIkey" class="URTrackerSettingsCheckbox" size=30>',
            '<hr>',
            '<div class="rTable">',
            '<div class="rTableRow">',
            '<div class="rTableCell">Total URs Open</div>',
            '<div class="rTableCell">23</div>',
            '</div>',
            '<div class="rTableRow">',
            '<div class="rTableCell">URs @ 4 days</div>',
            '<div class="rTableCell">7</div>',
            '</div>',
            '<div class="rTableRow">',
            '<div class="rTableCell">URs @ 8 days</div>',
            '<div class="rTableCell">3</div>',
            '</div>',
            '</div>',
            '</div>',
            '<hr>',
            '<input type="button" value="Scan my URs" id="URTrackerScanBtn" class="URTrackerButton">'
        ].join(' '));

        new WazeWrap.Interface.Tab('UR Tracker', $section.html(), initializeSettings);
    }
    function initializeSettings()
    {
        //$('#urtrackerOpenURs').text(W.loginManager.user);
        //$('#urTrackerURs4').text();
        //$('#urTrackerURs8').text();
    }
    bootstrap();
})();
