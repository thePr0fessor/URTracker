//UR Tracker by pr0f (and kinda phuz)
function URTracker_bootstrap()
{
    var bGreasemonkeyServiceDefined     = false;

    try
    {
        if ("object" === typeof Components.interfaces.gmIGreasemonkeyService)
        {
            bGreasemonkeyServiceDefined = true;
        }
    }
    catch (err)
    {
        //Ignore.
    }
    if ( "undefined" === typeof unsafeWindow  ||  ! bGreasemonkeyServiceDefined)
    {
        unsafeWindow    = ( function ()
        {
            var dummyElem   = document.createElement('p');
            dummyElem.setAttribute ('onclick', 'return window;');
            return dummyElem.onclick ();
        } ) ();
    }
    /* begin running the code! */
    coolscript_init();
}

function URTracker_init()
{
    showmethemoney();
}

function showmethemoney()
{
         if ($('#urtracker').length === 0) {
            $outputElemContainer = $('<div>', {style:'position:relative; border-radius:23px; text-color:#354148; height:24px; padding-top:1px; padding-left:10px; padding-right:100px; display:block; float:right; margin-top:11px; font-weight:bold; font-size:medium;'});  //margin:9px 5px 8px 5px;  display:inline;
            $outputElem = $('UR Tracker Header', {id: 'urtracker',
                                    target: '_blank',
                                    style:'text-decoration:none'});
            $outputElemContainer.append($outputElem);
            $('#edit-buttons').children().first().append($outputElemContainer);
            $outputElem.tooltip({
                placement: 'auto top',
                delay: {show: 100, hide: 100},
                html: true,
                template: '<div class="tooltip" role="tooltip" style="opacity:0.95"><div class="tooltip-arrow"></div><div class="my-tooltip-header" style="display:block;"><b></b></div><div class="my-tooltip-body tooltip-inner" style="display:block; font-weight:600; !important"></div></div>'
            });
        }   
}
// [...]
// then at the end of your script, call the bootstrap to get things started
URTracker_bootstrap();
