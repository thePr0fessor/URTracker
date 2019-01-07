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
    //run your code here
}

// [...]
// then at the end of your script, call the bootstrap to get things started
coolscript_bootstrap();
