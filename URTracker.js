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

// [...]
// then at the end of your script, call the bootstrap to get things started
URTracker_bootstrap();
