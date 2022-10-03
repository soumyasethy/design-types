import * as React from "react";
import { ReactNode } from "react";
import { View } from "react-native";
export declare type RouteMap = {
    [routeId: string]: PageType<any>;
};
export declare type MicroFrontendProps = {
    routeMap: RouteMap;
    routeCurrent: string;
    widgetRegistry: WidgetRegistry;
    extraProps?: any;
};
export declare type WidgetItem = {
    id: string;
    type: string;
    position?: POSITION;
    props?: object;
};
export declare type Datastore = {
    [widgetId in string]: Object;
};
export declare type Layout = {
    id: string;
    type: LAYOUTS;
    widgets: WidgetItem[];
};
export declare type TemplateSchema = {
    layout: Layout;
    datastore: Datastore;
};
export declare type WidgetRegistry = {
    [key: string]: {
        Component?: any;
        Mock?: {
            args?: any;
            argsType?: any;
        };
    };
};
export declare type WidgetProps = {
    item?: WidgetItem;
    renderItem?(item: WidgetItem): ReactNode;
    triggerAction?(action: Action<any>): TriggerAction;
    /** Todo **/
    widgetRef?: React.RefObject<View>;
    action?: Action<any>;
};
export declare enum GlobalActionTokens {
    SET_WIDGET_REGISTRY = "SET_WIDGET_REGISTRY",
    SET_DATASTORE = "SET_DATASTORE",
    SET_DATASTORE_IN_PATH = "SET_DATASTORE_IN_PATH",
    SET_LOADER_IN_PATH = "SET_LOADER_IN_PATH",
    SET_ACTIONS = "SET_ACTIONS",
    SET_ROUTE_MAP = "SET_ROUTE_MAP",
    SET_TEMPLATE_ROUTE = "SET_TEMPLATE_ROUTE",
    APPEND_WIDGETS = "APPEND_WIDGETS"
}
export declare type StandardUtilities = {
    network: {
        get<T = any>(url: string): Promise<T>;
        post<T = any, D = any>(url: string, data?: D): Promise<T>;
        delete<T = any>(url: string): Promise<T>;
        put<T = any, D = any>(url: string, data?: D): Promise<T>;
        patch<T = any, D = any>(url: string, data?: D): Promise<T>;
        postForm<T = any, D = any>(url: string, data?: D): Promise<T>;
        putForm<T = any, D = any>(url: string, data?: D): Promise<T>;
        patchForm<T = any, D = any>(url: string, data?: D): Promise<T>;
    };
    asyncStorage: {
        get: (key: string, callBack?: () => CallbackWithResult<string> | undefined) => Promise<string | null>;
        set: (key: string, value: any, callBack?: () => CallbackWithResult<string> | undefined) => void;
        remove: (key: string, callBack?: () => CallbackWithResult<string> | undefined) => void;
        clear: (callBack?: () => CallbackWithResult<string> | undefined) => void;
    };
    /** @description navigate to page  **/
    /** @param routeId as string from RouteMap **/
    navigate(routeId: string): void;
    /** @description navigate to previous page  **/
    goBack(): void;
    showLoader(routeId: string, widgetItems: WidgetItem[]): void;
    hideLoader(routeId: string): void;
    /** todo **/
    showPopup(params: any): void;
    /** todo **/
    hidePopup(): void;
    /** todo **/
    showToast(toastProps: any): void;
    /** todo **/
    reloadPage(reloadParams?: any): void;
    /** @description Scroll to Index by passing RouteId and scroll to position as Index in options prop***/
    scrollToIndex(options: ScrollToIdOptions): void;
    /** @description Returns complete main state of app. Pass custom path as string to access nested props.
     * Example-> routeMap.${action.routeId}.template.***your_custom_path_to_props***    **/
    getDatastore(path?: string): Promise<any>;
    /** @description Set or Update Datastore by pass routeId, widgetId, Props[Optional] **/
    setDatastore(
    /** @description routeId: Pass string value of RouteId from RouteMap. RouteMap->{routeId:{widgetId}} **/
    routeId: string, 
    /** @description widgetId (Path): Use DOT(.) as deliminator to pass complete path for nested props **/
    widgetId: string, 
    /** @description New value will be merged with exist value **/
    props?: any): Promise<any>;
    appendWidgets(routeId: string, datastore: Datastore, widgets: WidgetItem[]): void;
    cameraPicker(options?: CameraOptions): Promise<ImagePickerResponse>;
    galleryPicker(options?: CameraOptions): Promise<ImagePickerResponse>;
    recentFiles(path?: string): Promise<string[]>;
};
export declare type ActionFunction = (action: Action<any>, datastore: Datastore, utilities: StandardUtilities) => Promise<any> | any;
export declare type ActionMap = {
    [key: string]: ActionFunction;
};
export declare type PageType<T> = {
    loading?: WidgetItem[];
    onLoad: (standardUtilities: StandardUtilities, extraProps?: any) => Promise<TemplateSchema>;
    onEndReached?: (standardUtilities: StandardUtilities) => void;
    template?: TemplateSchema;
    actions?: ActionMap;
};
/** An enum to select the layout of a screen */
export declare enum LAYOUTS {
    /** The widget is arranged in a list layout */
    LIST = "layouts/list",
    /** The widget is arranged in a tab layout */
    TAB = "layouts/tab",
    MODAL = "layout/modal"
}
/** An enum to decide on the positioning of a widget */
export declare enum POSITION {
    /** The widget is fixed to the top of the screen, and continues to appear even when you scroll down */
    FIXED_TOP = "position/fixed_top",
    /** The  widget is present at the top of the page in the default state */
    ABSOLUTE_TOP = "position/absolute_top",
    /** The widget is fixed to the bottom of the screen, and continues to appear even when you scroll up */
    FIXED_BOTTOM = "position/fixed_bottom",
    /** The  widget is present at the bottom of the page in the default state */
    ABSOLUTE_BOTTOM = "position/absolute_bottom",
    /** This is a position specific to FAB widget */
    FAB = "position/fab",
    /** TODO */
    STICKY_TOP = "position/sticky_top"
}
/** Type definition for a tap action
 * @param type action type it can either be a custom type or the one of the predefined action types
 * @param data data that is required to be passed for the tap action
 * @param routeId [Optional] performs action on specific routeId
 */
export declare type Action<DataType> = {
    type: string;
    routeId?: string;
    payload: DataType;
};
export declare type TriggerAction = (action: Action<any>) => Promise<any | {
    isError: boolean;
    err: Error;
}>;
export declare enum SCREEN_SIZE {
    /**
     * Screen Width <576px
     */
    X_SMALL = "extra_small",
    /**
     * Screen Width >=576px
     */
    SMALL = "small",
    /**
     * Screen Width >=768px
     */
    MEDIUM = "medium",
    /**
     * Screen Width >=992px
     */
    LARGE = "large",
    /**
     * Screen Width >=1200px
     */
    X_LARGE = "extra_large"
}
export declare type OnScrollRef = {
    onScroll(yValue: number): void;
};
export declare type ScrollToIdOptions = {
    index: number;
    routeId: string;
    viewOffset?: number;
};
export declare type CameraOptions = {
    durationLimit?: number;
    saveToPhotos?: boolean;
    cameraType?: CameraType;
};
export declare type CameraType = "back" | "front";
export interface ImagePickerResponse {
    didCancel?: boolean;
    errorCode?: ErrorCode;
    errorMessage?: string;
    assets?: Asset[];
}
export declare type ErrorCode = "camera_unavailable" | "permission" | "others";
export interface Asset {
    base64?: string;
    uri?: string;
    width?: number;
    height?: number;
    fileSize?: number;
    type?: string;
    fileName?: string;
    duration?: number;
    bitrate?: number;
    timestamp?: string;
    id?: string;
}
export declare type CallbackWithResult<T> = (error?: Error | null, result?: T | null) => void;
