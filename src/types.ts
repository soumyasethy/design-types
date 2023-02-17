import { ReactNode } from "react";

export type RouteMap = {
  [routeId: string]: PageType<any>;
};

export type MicroFrontendProps = {
  routeMap: RouteMap;
  routeCurrent: string;
  widgetRegistry: WidgetRegistry;
  extraProps?: any;
  height?: number;
  width?: number;
};

export type WidgetItem = {
  id: string;
  type: string;
  position?: POSITION;
  padding?: Padding;
  props?: object;
};

export type Datastore = {
  [widgetId in string]: Object;
};

export type Layout = {
  id: string;
  type: LAYOUTS;
  style?: {
    height?: number | string;
    // backgroundColor?: string;
    // padding?: Padding;
    // width?: number;
  };
  widgets: WidgetItem[];
  isDismissible?: boolean;
};

export type TemplateSchema = {
  layout: Layout;
  datastore: Datastore;
};

export type WidgetRegistry = {
  [key: string]: {
    Component?: any;
    Mock?: { args?: any; argsType?: any };
  };
};
export type MetaData = {
  platform: {
    OS: string;
    Version: string | number;
  };
  widgetId: string;
  routeId: string;
  height: number;
  width: number;
  heightScreen: number;
  widthScreen: number;
};

export type newTabOptions = {
  target?:string,
  width?: number,
  height?: number
}

export type WidgetProps = {
  renderItem?(item: WidgetItem): ReactNode;
  triggerAction?: TriggerAction;
  action?: Action<any>;
  metaData?: MetaData;
};

export enum GlobalActionTokens {
  SET_WIDGET_REGISTRY = "SET_WIDGET_REGISTRY",
  SET_DATASTORE = "SET_DATASTORE",
  SET_DATASTORE_IN_PATH = "SET_DATASTORE_IN_PATH",
  SET_LOADER_IN_PATH = "SET_LOADER_IN_PATH",
  SET_ACTIONS = "SET_ACTIONS",
  SET_ROUTE_MAP = "SET_ROUTE_MAP",
  SET_TEMPLATE_ROUTE = "SET_TEMPLATE_ROUTE",
  APPEND_WIDGETS = "APPEND_WIDGETS",
  REMOVE_WIDGETS = "REMOVE_WIDGETS",
  OPEN_CAMERA_WEB = "OPEN_CAMERA_WEB",
}

export type StandardUtilities = {
  openURL: (url: string) => Promise<void>;
  clipboard: {
    set: (value: string) => void;
    get: () => Promise<string>;
  };
  network: {
    get<T = any>(
      url: string,
      config?: {
        headers?: any;
      },
      callbackBeforeErrorHandle?: () => Promise<void>
    ): Promise<T>;
    post<T = any, D = any>(
      url: string,
      data?: D,
      config?: {
        headers?: any;
      },
      callbackBeforeErrorHandle?: () => Promise<void>
    ): Promise<T>;
    delete<T = any>(
      url: string,
      config?: {
        headers?: any;
      },
      callbackBeforeErrorHandle?: () => Promise<void>
    ): Promise<T>;
    put<T = any, D = any>(
      url: string,
      data?: D,
      config?: {
        headers?: any;
      },
      callbackBeforeErrorHandle?: () => Promise<void>
    ): Promise<T>;
    patch<T = any, D = any>(
      url: string,
      data?: D,
      config?: {
        headers?: any;
      },
      callbackBeforeErrorHandle?: () => Promise<void>
    ): Promise<T>;
    postForm<T = any, D = any>(
      url: string,
      data?: D,
      config?: {
        headers?: any;
      },
      callbackBeforeErrorHandle?: () => Promise<void>
    ): Promise<T>;
    putForm<T = any, D = any>(
      url: string,
      data?: D,
      config?: {
        headers?: any;
      },
      callbackBeforeErrorHandle?: () => Promise<void>
    ): Promise<T>;
    patchForm<T = any, D = any>(
      url: string,
      data?: D,
      config?: {
        headers?: any;
      },
      callbackBeforeErrorHandle?: () => Promise<void>
    ): Promise<T>;
  };
  asyncStorage: {
    get: (
      key: string,
      callBack?: () => CallbackWithResult<string> | undefined
    ) => Promise<string | null>;
    set: (
      key: string,
      value: any,
      callBack?: () => CallbackWithResult<string> | undefined
    ) => void;
    remove: (
      key: string,
      callBack?: () => CallbackWithResult<string> | undefined
    ) => void;
    clear: (callBack?: () => CallbackWithResult<string> | undefined) => void;
  };
  /** @description navigate to page  **/
  /** @param routeId as string from RouteMap *
   * @param params will be available in onLoad function's second param as extraProps of Navigation ROUTE ID MicroFrontend.
   */
  navigate(routeId: string, params?: any): void;
  /** @description navigate to previous page or use in closing any Modal **/
  goBack(): void;
  /** todo **/
  showLoader(routeId: string, widgetItems: WidgetItem[]): void;
  /** todo **/
  hideLoader(routeId: string): void;
  /** @description Open Modal which accepts @AlertProps type **/
  showPopup(params: AlertProps): void;
  /** @description navigate to previous page or use in closing any Modal **/
  hidePopup(): void;
  /** todo **/
  showToast(toastProps: any): void;
  /** todo **/
  reloadPage(extraProps?: any): void;

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
    props?: any
  ): Promise<any>;
  appendWidgets(
    routeId: string,
    datastore: Datastore,
    widgets: WidgetItem[],
    appendAfterWidgetId?: string
  ): void;
  removeWidgets(routeId: string, widgets: WidgetItem[]): void;
  handleError(
    error: any,
    callbackBeforeErrorHandle?: () => Promise<void>
  ): Promise<any>;
  openNewTab(url: string, targetType?: OpenNewTabTargetType, config?: newTabOptions): void;
  analytics: (
    eventId: string,
    params: { [key in string]: any },
    eventType?: AnalyticsEventType
  ) => void;
  digio: {
    init(): void;
    submit(requestId: string, identifier: string, token_id?: string): void;
  };
  importScript(
    resourceUrl: string,
    customFunction?: ImportScriptCustomCallbackType,
    successCb?: (response?: any) => void,
    failureCb?: (response?: any) => void
  ): void;
  metaData: MetaData;
};

export type ImportScriptCustomCallbackType = (
  successCB?: (response?: any) => void,
  failureCB?: (response?: any) => void
) => any;

export enum AnalyticsEventType {
  PageTracking = "PageTracking",
  EventTracking = "EventTracking",
}
export type ActionFunction<T> = (
  action: Action<T>,
  datastore: Datastore,
  utilities: StandardUtilities
) => Promise<any> | any;

export type ActionMap = {
  [key: string]: ActionFunction<any>;
};

export type PageType<T> = {
  loading?: WidgetItem[];
  onLoad: (
    standardUtilities: StandardUtilities,
    extraProps?: any
  ) => Promise<TemplateSchema>;
  onEndReached?: (standardUtilities: StandardUtilities) => void;
  template?: TemplateSchema;
  actions?: ActionMap;
  action?: Action<any>;
  actionDelay?: number;
  bgColor?: string;
  clearPrevious?: boolean;
};

/** An enum to select the layout of a screen */
export enum LAYOUTS {
  /** The widget is arranged in a list layout */
  LIST = "layouts/list",

  /** The widget is arranged in a tab layout */
  /* todo */
  TAB = "layouts/tab",

  MODAL = "layout/modal",
}

/** An enum to decide on the positioning of a widget */
export enum POSITION {
  /** The widget is fixed to the top of the screen, and continues to appear even when you scroll down */
  BODY = "position/body",
  FIXED_TOP = "position/fixed_top",
  /** The  widget is present at the top of the page in the default state */
  ABSOLUTE_TOP = "position/absolute_top",
  ABSOLUTE_CENTER = "position/absolute_center",
  CENTER = "position/center",
  /** The widget is fixed to the bottom of the screen, and continues to appear even when you scroll up */
  FIXED_BOTTOM = "position/fixed_bottom",
  /** The  widget is present at the bottom of the page in the default state */
  ABSOLUTE_BOTTOM = "position/absolute_bottom",
  STICKY_BOTTOM = "position/sticky_bottom",
  /** This is a position specific to FAB widget */
  FAB = "position/fab",
  /** TODO */
  STICKY_TOP = "position/sticky_top",
}
export type Padding = {
  top?: number;
  left?: number;
  right?: number;
  bottom?: number;
  horizontal?: number;
  vertical?: number;
  all?: number;
};

/** Type definition for a tap action
 * @param type action type it can either be a custom type or the one of the predefined action types
 * @param data data that is required to be passed for the tap action
 * @param routeId [Optional] performs action on specific routeId
 */
export type Action<DataType> = {
  type: string;
  routeId?: string;
  payload: DataType;
};

export type TriggerAction = (
  action: Action<any>
) => Promise<any | { isError: boolean; err: Error }>;

export enum SCREEN_SIZE {
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
  X_LARGE = "extra_large",
}

export type OnScrollRef = {
  onScroll(yValue: number): void;
};

export type ScrollToIdOptions = {
  index: number;
  routeId: string;
  viewOffset?: number;
};
export type CameraOptions = {
  durationLimit?: number;
  saveToPhotos?: boolean;
  cameraType?: CameraType;
};
export type CameraType = "back" | "front";
export interface ImagePickerResponse {
  didCancel?: boolean;
  errorCode?: ErrorCode;
  errorMessage?: string;
  assets?: Asset[];
}
export type ErrorCode = "camera_unavailable" | "permission" | "others";
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
export type CallbackWithResult<T> = (
  error?: Error | null,
  result?: T | null
) => void;

export type AlertProps = {
  title?: string;
  subTitle?: string;
  message?: string;
  iconName?: string;
  ctaLabel?: string;
  primary?: boolean;
  ctaAction?: Action<any>;
  type?: "SUCCESS" | "FAILED" | "IN_PROGRESS" | "LOADING" | "DEFAULT";
  isAutoTriggerCta?: boolean;
  autoTriggerTimerInMilliseconds?: number;
};
export enum OpenNewTabTargetType {
  blank = "_blank",
  self = "_self",
  parent = "_parent",
  top = "_top",
  popup = "popup"
}
export enum CONFIG_KEYS {
  CURRENT_URL_ADDRESS = "url_address",
}
