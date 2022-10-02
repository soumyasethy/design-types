export var GlobalActionTokens;
(function (GlobalActionTokens) {
    GlobalActionTokens["SET_WIDGET_REGISTRY"] = "SET_WIDGET_REGISTRY";
    GlobalActionTokens["SET_DATASTORE"] = "SET_DATASTORE";
    GlobalActionTokens["SET_DATASTORE_IN_PATH"] = "SET_DATASTORE_IN_PATH";
    GlobalActionTokens["SET_LOADER_IN_PATH"] = "SET_LOADER_IN_PATH";
    GlobalActionTokens["SET_ACTIONS"] = "SET_ACTIONS";
    GlobalActionTokens["SET_ROUTE_MAP"] = "SET_ROUTE_MAP";
    GlobalActionTokens["SET_TEMPLATE_ROUTE"] = "SET_TEMPLATE_ROUTE";
    GlobalActionTokens["APPEND_WIDGETS"] = "APPEND_WIDGETS";
})(GlobalActionTokens || (GlobalActionTokens = {}));
/** An enum to select the layout of a screen */
export var LAYOUTS;
(function (LAYOUTS) {
    /** The widget is arranged in a list layout */
    LAYOUTS["LIST"] = "layouts/list";
    /** The widget is arranged in a tab layout */
    /* todo */
    LAYOUTS["TAB"] = "layouts/tab";
    LAYOUTS["MODAL"] = "layout/modal";
})(LAYOUTS || (LAYOUTS = {}));
/** An enum to decide on the positioning of a widget */
export var POSITION;
(function (POSITION) {
    /** The widget is fixed to the top of the screen, and continues to appear even when you scroll down */
    POSITION["FIXED_TOP"] = "position/fixed_top";
    /** The  widget is present at the top of the page in the default state */
    POSITION["ABSOLUTE_TOP"] = "position/absolute_top";
    /** The widget is fixed to the bottom of the screen, and continues to appear even when you scroll up */
    POSITION["FIXED_BOTTOM"] = "position/fixed_bottom";
    /** The  widget is present at the bottom of the page in the default state */
    POSITION["ABSOLUTE_BOTTOM"] = "position/absolute_bottom";
    /** This is a position specific to FAB widget */
    POSITION["FAB"] = "position/fab";
    /** TODO */
    POSITION["STICKY_TOP"] = "position/sticky_top";
})(POSITION || (POSITION = {}));
export var SCREEN_SIZE;
(function (SCREEN_SIZE) {
    /**
     * Screen Width <576px
     */
    SCREEN_SIZE["X_SMALL"] = "extra_small";
    /**
     * Screen Width >=576px
     */
    SCREEN_SIZE["SMALL"] = "small";
    /**
     * Screen Width >=768px
     */
    SCREEN_SIZE["MEDIUM"] = "medium";
    /**
     * Screen Width >=992px
     */
    SCREEN_SIZE["LARGE"] = "large";
    /**
     * Screen Width >=1200px
     */
    SCREEN_SIZE["X_LARGE"] = "extra_large";
})(SCREEN_SIZE || (SCREEN_SIZE = {}));
