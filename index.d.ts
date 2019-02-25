/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

interface AlertConfigInterface {
  content: string;
  title: string;
}

declare function Alert(config: AlertConfigInterface): void;

declare module "Magento_Ui/js/modal/alert" {
  export = Alert;
}

interface DismissibleConfirmInterface {
  actions: object;
  content: string;
  dismissKey?: string;
  dismissible?: boolean;
  title: string;
  haveCancelButton?: boolean;
}

declare function DismissibleConfirm(config: DismissibleConfirmInterface): void;

declare module "Magento_PageBuilder/js/modal/dismissible-confirm" {
  export = DismissibleConfirm;
}

declare var DomObserver: {
  /**
   * Disable a node from being observed by the mutations
   *
   * @param {HTMLElement} node
   */
  disableNode(node: HTMLElement): void;

  /**
   * Adds listener for the appearance of nodes that matches provided
   * selector and which are inside of the provided context. Callback will be
   * also invoked on elements which a currently present.
   *
   * @param {String} selector - CSS selector.
   * @param {Function} callback - Function that will invoked when node appears.
   * @param {HTMLElement} [ctx=document.body] - Context inside of which to search for the node.
   */
  get(selector: string, callback: () => void, ctx: HTMLElement): void;

  /**
   * Adds listener for the nodes removal.
   *
   * @param {(jQueryObject|HTMLElement|Array|String)} selector
   * @param {Function} callback - Function that will invoked when node is removed.
   * @param {HTMLElement} [ctx=document.body] - Context inside of which to search for the node.
   */
  remove(selector: string, callback: () => void, ctx: HTMLElement): void;

  /**
   * Removes listeners.
   *
   * @param {String} selector
   * @param {Function} [fn]
   */
  off(selector: string, fn: () => void): void;
};

declare module "Magento_Ui/js/lib/view/utils/dom-observer" {
  export = DomObserver;
}

declare module "Magento_PageBuilder/js/events" {
  export = uiEvents;
}
// Type definitions for jarallax 1.9.3
// Project: https://github.com/nk-o/jarallax
// Definitions by: Dave Macaulay <https://github.com/davemacaulay>
// TypeScript Version: 2.3

/// <reference types="jquery"/>

/**
 * Scroll calculations used by onScroll event
 */
interface JarallaxOnScrollCalculations {
  rect: object;
  beforeTop: number;
  beforeTopEnd: number;
  afterTop: number;
  beforeBottom: number;
  beforeBottomEnd: number;
  afterBottom: number;
  visiblePercent: number;
  fromViewportCenter: number;
}

/**
 * Configurable options for Jarallax
 */
interface JarallaxOptions {
  /**
   * scroll, scale, opacity, scroll-opacity, scale-opacity.
   */
  type?: string;

  /**
   * Parallax effect speed. Provide numbers from -1.0 to 2.0.
   */
  speed?: number;

  /**
   * Image url. By default used image from background.
   */
  imgSrc?: string;

  /**
   * Image tag that will be used as background.
   */
  imgElement?: string;

  /**
   * Image size. If you use <img> tag for background, you should add object-fit values, else use background-size
   * values.
   */
  imgSize?: string;

  /**
   * Image position. If you use <img> tag for background, you should add object-position values, else use
   * background-position values.
   */
  imgPosition?: string;

  /**
   * Image repeat. Supported only background-position values.
   */
  imgRepeat?: "repeat" | "no-repeat";

  /**
   * Keep <img> tag in it's default place after Jarallax inited.
   */
  keepImg?: boolean;

  /**
   * Use custom DOM / jQuery element to check if parallax content type in viewport.
   * More info here - https://github.com/nk-o/jarallax/issues/13.
   */
  elementInViewport?: Element | JQuery;

  /**
   * z-index of parallax container.
   */
  zIndex?: number;

  /**
   * Disable parallax on Android devices.
   */
  noAndroid?: boolean;

  /**
   * Disable parallax on iOS devices.
   */
  noIos?: boolean;

  /**
   * You can use Youtube, Vimeo or local videos. Also you can use data attribute data-jarallax-video.
   */
  videoSrc?: string;

  /**
   * Start time in seconds when video will be started (this value will be applied also after loop).
   */
  videoStartTime?: number;

  /**
   * End time in seconds when video will be ended.
   */
  videoEndTime?: number;

  /**
   * Video volume from 0 to 100.
   */
  videoVolumne?: number;

  /**
   * Play video only when it is visible on the screen.
   */
  videoPlayOnlyVisible?: boolean;

  /**
   * Called when parallax working. Use first argument with calculations.
   * More info https://github.com/nk-o/jarallax#onscroll-event.
   *
   * @param {JarallaxOnScrollCalculations} calculations
   */
  onScroll?: (calculations: JarallaxOnScrollCalculations) => void;

  /**
   * Called after init end.
   */
  onInit?: () => void;

  /**
   * Called after destroy.
   */
  onDestroy?: () => void;

  /**
   * Called after cover image.
   */
  onCoverImage?: () => void;
}

/**
 * Void callable methods
 *
 * @param {Element | Element[] | NodeListOf<Element> | JQuery} elements
 * @param {"destroy" | "onResize" | "onScroll"} methodName
 */
declare function jarallax(
  elements: Element | Element[] | NodeListOf<Element> | JQuery,
  methodName: "destroy" | "onResize" | "onScroll"
): void;

/**
 * Is visible method
 *
 * @param {Element | Element[] | NodeListOf<Element> | JQuery} elements
 * @param {"isVisible"} methodName
 * @returns {boolean}
 */
declare function jarallax(
  elements: Element | Element[] | NodeListOf<Element> | JQuery,
  methodName: "isVisible"
): boolean;

/**
 * Main invocation of Jarallax
 *
 * @param {Element | Element[] | NodeListOf<Element> | JQuery} elements
 * @param {JarallaxOptions} userOptions
 */
declare function jarallax(
  elements: Element | Element[] | NodeListOf<Element> | JQuery,
  userOptions: JarallaxOptions
): void;

interface JQuery {
  /**
   * Init Jarallax with options
   *
   * @param {JarallaxOptions} userOptions
   */
  jarallax(userOptions: JarallaxOptions): void;

  /**
   * Run a method on the current instance of Jaralax
   *
   * @param {"destroy" | "onResize" | "onScroll"} methodName
   */
  jarallax(methodName: "destroy" | "onResize" | "onScroll"): void;

  /**
   * Check if an element is visible
   *
   * @param {"isVisible"} methodName
   * @returns {boolean}
   */
  jarallax(methodName: "isVisible"): boolean;
}

declare module "Magento_Ui/js/lib/key-codes" {
  const keyCodes: {
    [key: number]: string;
  };
  export = keyCodes;
}

declare let koTemplateEngine: {
  waitForFinishRender(): Promise<void>;
};

declare module "Magento_Ui/js/lib/knockout/template/engine" {
  export = koTemplateEngine;
}

declare let mageUtils: {
  /**
   * Generates a unique identifier.
   *
   * @param {Number} [size=7] - Length of a resulting identifier.
   * @returns {String}
   */
  uniqueid(size?: number): string;

  /**
   * Performs deep extend of specified objects.
   *
   * @returns {Object|Array} Extended object.
   */
  extend(...args: any[]): object;
};
declare module "mageUtils" {
  export = mageUtils;
}

interface DOMRectReadOnly {
  readonly x: number;
  readonly y: number;
  readonly width: number;
  readonly height: number;
  readonly top: number;
  readonly right: number;
  readonly bottom: number;
  readonly left: number;
}

type ResizeObserverCallback = (
  entries: ResizeObserverEntry[],
  observer: ResizeObserver
) => void;

interface ResizeObserverEntry {
  readonly target: Element;
  readonly contentRect: DOMRectReadOnly;
}

interface ResizeObserver {
  observe(target: Element): void;
  unobserve(target: Element): void;
  disconnect(): void;
}

declare var ResizeObserver: {
  prototype: ResizeObserver;
  new (callback: ResizeObserverCallback): ResizeObserver;
};

declare module "Magento_PageBuilder/js/resource/resize-observer/ResizeObserver" {
  export = ResizeObserver;
}

/**
 * Application entry point
 *
 * @param {Object} nodes
 * @param {Object} parent
 * @param {Boolean} cached
 * @param {Boolean} merge
 * @returns {Boolean|undefined}
 */
declare function run(
  nodes: object,
  parent?: object,
  cached?: boolean,
  merge?: boolean
): boolean | undefined;

declare module "uiLayout" {
  export = run;
}

interface MapUtilityInterface {
  map: any;
  markers: [any];

  onUpdate(newMarkers: [any], updateOptions: object): void;
  setMarkers(newMarkers: object): void;
}

type MapUtilityConstructorInterface = new (
  element: Element,
  markers: [any],
  additionalOptions: object
) => MapUtilityInterface;

declare var mapUtilityConstructor: MapUtilityConstructorInterface;
declare module "Magento_PageBuilder/js/utils/map" {
  export = mapUtilityConstructor;
}

interface WidgetIntializerConfigInterface {
  config: any;
}

declare function WidgetInitializer(
  data: WidgetIntializerConfigInterface,
  contextElement?: HTMLElement
): void;

declare module "Magento_PageBuilder/js/widget-initializer" {
  export = WidgetInitializer;
}

declare var WysiwygEvents: {
  afterInitialization: "afterInitialization";
  afterChangeContent: "afterChangeContent";
  afterUndo: "afterUndo";
  afterPaste: "afterPaste";
  beforeSetContent: "beforeSetContent";
  afterSetContent: "afterSetContent";
  afterSave: "afterSave";
  afterOpenFileBrowser: "afterOpenFileBrowser";
  afterFormSubmit: "afterFormSubmit";
  afterBlur: "afterBlur";
  afterFocus: "afterFocus";
};

declare module "mage/adminhtml/wysiwyg/events" {
  export = WysiwygEvents;
}

interface EventBusInterface {
  attachEventHandler(eventName: string, handler: () => any): void;
}

interface WysiwygSetupInterface {
  eventBus: EventBusInterface;
  wysiwygInstance: WysiwygInstanceInterface;
  setup(mode: string): void;
}

interface WysiwygInstanceInterface {
  id: string;
  eventBus: EventBusInterface;
  getContent(): string;
  setContent(content: string): void;
}

declare var WysiwygSetup: {
  prototype: WysiwygSetupInterface;
  new (id: string, config: object): WysiwygSetupInterface;
};

declare var WysiwygInstanceInterface: {
  prototype: WysiwygInstanceInterface;
  new (id: string, config: object): WysiwygInstanceInterface;
};

declare module "mage/adminhtml/wysiwyg/tiny_mce/setup" {
  export = WysiwygSetup;
}

declare module "wysiwygAdapter" {
  export = WysiwygInstanceInterface;
}
declare module "Magento_PageBuilder/js/utils/style-blocks" {
  export interface StyleBlocks {
    [key: string]: StyleBlock;
  }

  export interface StyleBlock {
    [key: string]: string | number;
  }
}
declare module "Magento_PageBuilder/js/content-type-config.types" {
  export default interface ContentTypeConfigInterface {
    name: string;
    label: string;
    icon: string;
    form: string;
    group: string;
    fields: ConfigFieldInterface;
    preview_component: string;
    master_component: string;
    component: string;
    appearances: {
      [key: string]: ContentTypeConfigAppearanceInterface;
    };
    allowed_parents: string[];
    is_system: boolean;
    additional_data: AdditionalDataConfigInterface;
  }
  export interface ConfigFieldInterface {
    [key: string]: {
      default: string;
      [key: string]: ConfigFieldInterface | any;
    };
  }
  export interface ContentTypeConfigAppearanceElementInterface {
    style: DataMappingStyleInterface[];
    attributes: DataMappingAttributesInterface[];
    html: DataMappingHtmlInterface;
    css: DataMappingCssInterface;
    tag: DataMappingTagInterface;
  }
  export interface ContentTypeConfigAppearanceInterface {
    reader: string;
    path: string;
    converters: ConverterInterface[];
    elements: {
      [key: string]: ContentTypeConfigAppearanceElementInterface;
    };
    preview_template: string;
    master_template: string;
    render: string;
    default: string;
    form: string;
  }
  export interface ConverterInterface {
    name: string;
    component: string;
    config: {
      [key: string]: string;
    };
  }
  export interface DataMappingStyleInterface {
    var?: string;
    name: string;
    reader?: string;
    value?: string;
    converter?: string;
    preview_converter?: string;
    persistence_mode?: string;
    complex?: boolean;
    static?: boolean;
  }
  export interface DataMappingAttributesInterface {
    var?: string;
    name: string;
    reader?: string;
    value?: string;
    converter?: string;
    preview_converter?: string;
    persistence_mode?: string;
    complex?: boolean;
    static?: boolean;
  }
  export interface DataMappingInterface {
    converter: string;
    preview_converter: string;
    var: string;
  }
  export interface DataMappingHtmlInterface extends DataMappingInterface {}
  export interface DataMappingCssInterface extends DataMappingInterface {
    filter: string[];
  }
  export interface DataMappingTagInterface extends DataMappingInterface {}
  export interface AdditionalDataConfigInterface {
    [key: string]: any;
  }
}
declare module "Magento_PageBuilder/js/utils/object" {
  /**
   * Retrieve a value from an object via a path
   *
   * @param {object} object
   * @param {string} path
   * @param {TResult} defaultValue
   * @returns {TResult}
   */
  export function get<TResult>(
    object: object,
    path: string,
    defaultValue?: TResult
  ): TResult;
  /**
   * Set a value within an object via a path
   *
   * @param {object} object
   * @param {string} path
   * @param {TResult} value
   * @returns {TResult | undefined}
   */
  export function set<TResult = any>(
    object: object,
    path: string,
    value: TResult
  ): TResult | undefined;
}
declare module "Magento_PageBuilder/js/data-store" {
  export interface DataObject<T = any> {
    [key: string]: T;
  }
  export default class DataStore {
    private state;
    private events;
    private previousState;
    /**
     * Retrieve specific data from the data store
     *
     * @param {string} key
     * @param defaultValue
     * @returns {T}
     */
    get<T>(key: string, defaultValue?: any): T;
    /**
     * Retrieve the entire state of the data object
     *
     * @returns {DataObject}
     */
    getState(): DataObject<any>;
    /**
     * Update the state for the content type
     *
     * @param {DataObject | string | number | boolean | any[] | null | undefined} data
     * @param {string | number} key
     */
    update(
      data: DataObject | undefined | null | string | number | boolean | any[],
      key?: string | number
    ): void;
    /**
     * Remove item from DataStore
     *
     * @param {string | number} key
     */
    unset(key: string | number): void;
    /**
     * Subscribe to data changes within the data store of a content type
     *
     * @param {(state: DataObject, event: Event) => void} handler
     * @param {string | number} key
     */
    subscribe(
      handler: (state: DataObject, event: Event) => void,
      key?: string | number
    ): void;
    /**
     * Emit state updates through events
     */
    private emitState;
  }
}
declare module "Magento_PageBuilder/js/config" {
  import ContentTypeConfigInterface from "Magento_PageBuilder/js/content-type-config.types";
  export default class Config {
    /**
     * Set the initial config
     *
     * @param config
     */
    static setConfig(config: object): void;
    /**
     * Retrieve the init config
     *
     * @param {string} key
     * @returns {T}
     */
    static getConfig<T = any>(key?: string): T;
    /**
     * Retrieve a content type from the configuration
     *
     * @param {string} contentType
     * @returns {any}
     */
    static getContentTypeConfig(
      contentType: string
    ): ContentTypeConfigInterface;
    private static config;
  }
}
declare module "Magento_PageBuilder/js/content-type/appearance-config" {
  import { ContentTypeConfigAppearanceInterface } from "Magento_PageBuilder/js/content-type-config.types";
  /**
   * Get config for appearance
   *
   * @param {string} contentType
   * @param {string} appearance
   * @returns {ContentTypeConfigAppearanceInterface}
   * @api
   */
  export default function getAppearanceConfig(
    contentType: string,
    appearance: string
  ): ContentTypeConfigAppearanceInterface;
}
declare module "Magento_PageBuilder/js/converter/converter-interface" {
  import { DataObject } from "Magento_PageBuilder/js/data-store";

  interface ConverterInterface {
    /**
     * Convert value to internal format
     *
     * @param {any} value
     * @returns {any}
     */
    fromDom(value: any): any;
    /**
     * Convert value to knockout format
     *
     * @param {string} name
     * @param {DataObject} data
     * @returns {any}
     */
    toDom(name: string, data: DataObject): any;
  }
  export default ConverterInterface;
}
declare module "Magento_PageBuilder/js/converter/converter-pool" {
  import ConverterInterface from "Magento_PageBuilder/js/converter/converter-interface";
  class ConverterPool {
    private converters;
    /**
     * Retrieve a converter from the pool
     *
     * @param {string} name
     * @returns {ConverterInterface}
     */
    get(name: string): ConverterInterface;
    /**
     * Register a new converter into the pool
     *
     * @param {string} name
     * @param {ConverterInterface} converter
     */
    register(name: string, converter: ConverterInterface): void;
  }
  const _default: ConverterPool;
  export default _default;
}
declare module "Magento_PageBuilder/js/mass-converter/converter-interface" {
  interface ConverterInterface {
    /**
     * Process data after it's read and converted by element converters
     *
     * @param {ConverterDataInterface} data
     * @param {ConverterConfigInterface} config
     * @returns {object}
     */
    fromDom(
      data: ConverterDataInterface,
      config: ConverterConfigInterface
    ): object;
    /**
     * Process data before it's converted by element converters
     *
     * @param {ConverterDataInterface} data
     * @param {ConverterConfigInterface} config
     * @returns {object}
     */
    toDom(
      data: ConverterDataInterface,
      config: ConverterConfigInterface
    ): object;
  }
  export default ConverterInterface;
  export interface ConverterDataInterface {
    [key: string]: any;
  }
  export interface ConverterConfigInterface {
    [key: string]: any;
  }
}
declare module "Magento_PageBuilder/js/mass-converter/converter-pool" {
  import ConverterInterface from "Magento_PageBuilder/js/mass-converter/converter-interface";
  class DataConverterPool {
    private converters;
    /**
     * Retrieve a data converter instance from the pool
     *
     * @param {string} name
     * @returns {ConverterInterface}
     */
    get(name: string): ConverterInterface;
    /**
     * Register a new data converter into the pool
     *
     * @param {string} name
     * @param {ConverterInterface} converter
     */
    register(name: string, converter: ConverterInterface): void;
  }
  const _default: DataConverterPool;
  export default _default;
}
declare module "Magento_PageBuilder/js/utils/string" {
  /**
   * Convert from snake case to camel case
   *
   * @param {string} currentString
   * @returns {string}
   * @api
   */
  export function fromSnakeToCamelCase(currentString: string): string;
}
declare module "Magento_PageBuilder/js/binding/live-edit" {
  export {};
}
declare module "Magento_PageBuilder/js/binding/sortable" {
  export {};
}
declare module "Magento_PageBuilder/js/drag-drop/move-content-type" {
  import ContentTypeCollectionInterface from "Magento_PageBuilder/js/content-type-collection.types";
  import ContentTypeInterface from "Magento_PageBuilder/js/content-type.types";
  /**
   * Move a content type to a new index, with the option to move to a new container
   *
   * @param {ContentTypeInterface | ContentTypeCollectionInterface} contentType
   * @param {number} targetIndex
   * @param {ContentTypeCollectionInterface} targetParent
   */
  export function moveContentType(
    contentType: ContentTypeInterface | ContentTypeCollectionInterface,
    targetIndex: number,
    targetParent?: ContentTypeCollectionInterface
  ): void;
}
declare module "Magento_PageBuilder/js/utils/array" {
  /// <reference types="knockout" />
  /**
   * Move an array item within the current array
   *
   * @param array
   * @param fromIndex
   * @param toIndex
   * @returns {Array<any>}
   */
  export function moveArrayItem(
    array: any[] | KnockoutObservableArray<any>,
    fromIndex: number,
    toIndex: number
  ): any[] | KnockoutObservableArray<any>;
  /**
   * Move an array item from one array into another
   *
   * @param item
   * @param array
   * @param toIndex
   * @returns {Array<any>}
   */
  export function moveArrayItemIntoArray(
    item: any,
    array: any[] | KnockoutObservableArray<any>,
    toIndex: number
  ): any[] | KnockoutObservableArray<any>;
  /**
   * Remove an array item
   *
   * @param array
   * @param item
   * @returns {Array<any>}
   */
  export function removeArrayItem(
    array: any[] | KnockoutObservableArray<any>,
    item: any
  ): any[] | KnockoutObservableArray<any>;
  /**
   * Search outwards from an array item until a callback matches
   *
   * @author https://github.com/thejameskyle/outward-search
   *
   * @param {any[]} items
   * @param {number} start
   * @param {(item: any, index: number) => boolean} callback
   * @returns {any}
   * @api
   */
  export function outwardSearch(
    items: any[],
    start: number,
    callback: (item: any, index: number) => boolean
  ): any;
}
declare module "Magento_PageBuilder/js/binding/sortable-children" {
  export {};
}
declare module "Magento_PageBuilder/js/content-type" {
  import ContentTypeCollectionInterface from "Magento_PageBuilder/js/content-type-collection.types";
  import ContentTypeConfigInterface from "Magento_PageBuilder/js/content-type-config.types";
  import ContentTypeInterface from "Magento_PageBuilder/js/content-type.types";
  import Master from "Magento_PageBuilder/js/content-type/master";
  import Preview from "Magento_PageBuilder/js/content-type/preview";
  import DataStore from "Magento_PageBuilder/js/data-store";
  export default class ContentType<
    P extends Preview = Preview,
    M extends Master = Master
  > implements ContentTypeInterface<P, M> {
    id: string;
    parentContentType: ContentTypeCollectionInterface;
    stageId: string;
    config: ContentTypeConfigInterface;
    element: JQuery;
    dataStore: DataStore;
    preview: P;
    content: M;
    dropped: boolean;
    /**
     * @param {ContentTypeInterface} parentContentType
     * @param {ContentTypeConfigInterface} config
     * @param {string} stageId
     */
    constructor(
      parentContentType: ContentTypeCollectionInterface,
      config: ContentTypeConfigInterface,
      stageId: string
    );
    protected bindEvents(): void;
  }
}
declare module "Magento_PageBuilder/js/content-type/master-collection" {
  import BaseMaster from "Magento_PageBuilder/js/content-type/master";
  export default class MasterCollection extends BaseMaster {
    /**
     * Retrieve the child template
     *
     * @returns {string}
     */
    readonly masterTemplate: string;
  }
}
declare module "Magento_PageBuilder/js/content-type/content-type-events.types" {
  import ContentTypeCollectionInterface from "Magento_PageBuilder/js/content-type-collection.types";
  import ContentTypeInterface from "Magento_PageBuilder/js/content-type.types";
  import Preview from "Magento_PageBuilder/js/content-type/preview";

  export interface ContentTypeAfterRenderEventParamsInterface {
    id: string;
    element: Element;
    contentType: ContentTypeInterface | ContentTypeCollectionInterface;
  }

  export interface ContentTypeBeforeMoveEventParams {
    contentType: ContentTypeInterface | ContentTypeCollectionInterface;
    sourceParent: ContentTypeCollectionInterface;
    targetParent: ContentTypeCollectionInterface;
    targetIndex: number;
    stageId: string;
  }

  export interface ContentTypeCreateEventParamsInterface {
    id: string;
    contentType: ContentTypeInterface | ContentTypeCollectionInterface;
  }

  export interface ContentTypeDroppedCreateEventParamsInterface {
    id: string;
    contentType: ContentTypeInterface | ContentTypeCollectionInterface;
  }

  export interface ContentTypeDuplicateEventParamsInterface {
    originalContentType: ContentTypeInterface | ContentTypeCollectionInterface;
    duplicateContentType: ContentTypeInterface | ContentTypeCollectionInterface;
    index: number;
    direct: boolean;
  }

  export interface ContentTypeMountEventParamsInterface {
    id: string;
    contentType: ContentTypeInterface | ContentTypeCollectionInterface;
    expectChildren: number;
  }

  export interface ContentTypeMoveEventParamsInterface {
    contentType: ContentTypeInterface | ContentTypeCollectionInterface;
    sourceParent: ContentTypeCollectionInterface;
    targetParent: ContentTypeCollectionInterface;
    targetIndex: number;
    stageId: string;
  }

  export interface ContentTypeReadyEventParamsInterface {
    id: string;
    contentType: ContentTypeInterface | ContentTypeCollectionInterface;
  }
  /**
   * Content type event fired whenever content changes dimensions or visibility
   *
   * @api
   */
  export interface ContentTypeRedrawAfterEventParamsInterface {
    id: string;
    contentType: ContentTypeInterface | ContentTypeCollectionInterface;
  }

  export interface ContentTypeRemovedEventParamsInterface {
    contentType: ContentTypeInterface | ContentTypeCollectionInterface;
    index: number;
    parentContentType: ContentTypeCollectionInterface;
    stageId: string;
  }

  export interface ContentTypeRemovedParamsInterface {
    parentContentType: ContentTypeCollectionInterface;
    index: number;
    contentType: ContentTypeInterface;
    stageId: string;
  }

  export interface ContentTypeMoveParamsInterface {
    contentType: ContentTypeInterface;
    sourceParent: ContentTypeCollectionInterface;
    targetParent: ContentTypeCollectionInterface;
    targetIndex: number;
    stageId: string;
  }

  export interface PreviewDataUpdateAfterParamsInterface {
    preview: Preview;
  }
}
declare module "Magento_PageBuilder/js/utils/loader" {
  export default function load(
    dependencies: string[],
    factory: (...results: any[]) => void,
    onError?: (error: Error) => void
  ): void;
}
declare module "Magento_PageBuilder/js/content-type/converter-resolver" {
  import { DataMappingInterface } from "Magento_PageBuilder/js/content-type-config.types";
  /**
   * Resolve converter
   *
   * @param {DataMappingInterface} config
   * @return string
   */
  export default function resolve(config: DataMappingInterface): string;
}
declare module "Magento_PageBuilder/js/converter/converter-pool-factory" {
  import ConverterPool from "Magento_PageBuilder/js/converter/converter-pool";
  /**
   * Create a new instance of converter pool
   */
  export default function create(
    contentType: string
  ): Promise<typeof ConverterPool>;
}
declare module "Magento_PageBuilder/js/mass-converter/converter-pool-factory" {
  import ConverterPool from "Magento_PageBuilder/js/mass-converter/converter-pool";
  /**
   * Create a new instance of converter pool
   */
  export default function create(
    contentType: string
  ): Promise<typeof ConverterPool>;
}
declare module "Magento_PageBuilder/js/content-type/observable-updater-factory" {
  import ContentTypeConfigInterface from "Magento_PageBuilder/js/content-type-config.types";
  import ObservableUpdater from "Magento_PageBuilder/js/content-type/observable-updater";
  /**
   * Create new observable updater instance
   *
   * @param {ContentTypeConfigInterface} config
   * @param {Function} converterResolver
   * @returns {Promise<ObservableUpdater>}
   */
  export default function create(
    config: ContentTypeConfigInterface,
    converterResolver: (config: object) => string
  ): Promise<ObservableUpdater>;
}
declare module "Magento_PageBuilder/js/content-type/master-factory" {
  import ContentTypeCollectionInterface from "Magento_PageBuilder/js/content-type-collection.types";
  import ContentTypeConfigInterface from "Magento_PageBuilder/js/content-type-config.types";
  import ContentTypeInterface from "Magento_PageBuilder/js/content-type.types";
  import Master from "Magento_PageBuilder/js/content-type/master";
  import MasterCollection from "Magento_PageBuilder/js/content-type/master-collection";
  /**
   * Create new content instance
   *
   * @param {ContentTypeInterface | ContentTypeCollectionInterface} contentType
   * @param {ContentTypeConfigInterface} config
   * @returns {Promise<ContentTypeInterface>}
   */
  export default function create(
    contentType: ContentTypeInterface | ContentTypeCollectionInterface,
    config: ContentTypeConfigInterface
  ): Promise<Master | MasterCollection>;
}
declare module "Magento_PageBuilder/js/content-type/preview-converter-resolver" {
  import { DataMappingStyleInterface } from "Magento_PageBuilder/js/content-type-config.types";
  /**
   * Resolve converter
   *
   * @param {DataMappingStyleInterface} config
   * @return string
   */
  export default function resolve(config: DataMappingStyleInterface): string;
}
declare module "Magento_PageBuilder/js/content-type/preview-factory" {
  import ContentTypeCollectionInterface from "Magento_PageBuilder/js/content-type-collection.types";
  import ContentTypeConfigInterface from "Magento_PageBuilder/js/content-type-config.types";
  import ContentTypeInterface from "Magento_PageBuilder/js/content-type.types";
  import Preview from "Magento_PageBuilder/js/content-type/preview";
  import PreviewCollection from "Magento_PageBuilder/js/content-type/preview-collection";
  /**
   * Create new preview instance
   *
   * @param {ContentTypeInterface | ContentTypeCollectionInterface} contentType
   * @param {ContentTypeConfigInterface} config
   * @returns {Promise<Preview | PreviewCollection>}
   */
  export default function create(
    contentType: ContentTypeInterface | ContentTypeCollectionInterface,
    config: ContentTypeConfigInterface
  ): Promise<Preview | PreviewCollection>;
}
declare module "Magento_PageBuilder/js/content-type-factory" {
  import ContentTypeCollectionInterface from "Magento_PageBuilder/js/content-type-collection.types";
  import ContentTypeConfigInterface from "Magento_PageBuilder/js/content-type-config.types";
  import ContentTypeInterface from "Magento_PageBuilder/js/content-type.types";
  /**
   * Create new content type
   *
   * @param {ContentTypeConfigInterface} config
   * @param {ContentTypeInterface} parentContentType
   * @param {string} stageId
   * @param {object} data
   * @param {number} childrenLength
   * @returns {Promise<ContentTypeInterface>}
   * @api
   */
  export default function createContentType(
    config: ContentTypeConfigInterface,
    parentContentType: ContentTypeCollectionInterface,
    stageId: string,
    data?: object,
    childrenLength?: number
  ): Promise<ContentTypeInterface | ContentTypeCollectionInterface>;

  export interface FieldDefaultsInterface {
    [key: string]: any;
  }
}
declare module "Magento_PageBuilder/js/content-type/preview-collection.types" {
  import ContentTypeCollectionInterface from "Magento_PageBuilder/js/content-type-collection.types";
  import PreviewCollection from "Magento_PageBuilder/js/content-type/preview-collection";
  export interface PreviewCollectionInterface extends PreviewCollection {
    contentType: ContentTypeCollectionInterface;
  }
}
declare module "Magento_PageBuilder/js/content-type/preview-collection" {
  import ContentTypeCollectionInterface from "Magento_PageBuilder/js/content-type-collection.types";
  import Preview from "Magento_PageBuilder/js/content-type/preview";
  import { PreviewCollectionInterface } from "Magento_PageBuilder/js/content-type/preview-collection.types";
  export default class PreviewCollection extends Preview
    implements PreviewCollectionInterface {
    contentType: ContentTypeCollectionInterface;
    /**
     * Retrieve the preview child template
     *
     * @returns {string}
     */
    readonly childTemplate: string;
    /**
     * Duplicate a collection content type
     *
     * @param {ContentTypeCollectionInterface} contentType
     * @param {boolean} autoAppend
     * @param {boolean} direct
     * @returns {Promise<ContentTypeCollectionInterface> | void}
     */
    clone(
      contentType: ContentTypeCollectionInterface,
      autoAppend?: boolean,
      direct?: boolean
    ): Promise<ContentTypeCollectionInterface> | void;
    /**
     * Tries to call specified method of a current content type,
     * and delegates attempt to its' children.
     * @param args
     */
    delegate(...args: any[]): void;
    /**
     * Does the current instance have any children or values different from the default for it's type?
     *
     * @returns {boolean}
     */
    protected isConfigured(): boolean;
  }
}
declare module "Magento_PageBuilder/js/content-type-collection" {
  /// <reference types="knockout" />
  import ContentType from "Magento_PageBuilder/js/content-type";
  import ContentTypeCollectionInterface from "Magento_PageBuilder/js/content-type-collection.types";
  import ContentTypeConfigInterface from "Magento_PageBuilder/js/content-type-config.types";
  import ContentTypeInterface from "Magento_PageBuilder/js/content-type.types";
  import MasterCollection from "Magento_PageBuilder/js/content-type/master-collection";
  import PreviewCollection from "Magento_PageBuilder/js/content-type/preview-collection";
  export default class ContentTypeCollection<
    P extends PreviewCollection = PreviewCollection,
    M extends MasterCollection = MasterCollection
  > extends ContentType<P, M> implements ContentTypeCollectionInterface<P, M> {
    private collection;
    /**
     * @param {ContentTypeInterface} parentContentType
     * @param {ContentTypeConfigInterface} config
     * @param {string} stageId
     */
    constructor(
      parentContentType: ContentTypeCollectionInterface,
      config: ContentTypeConfigInterface,
      stageId: string
    );
    /**
     * Return the children of the current element
     *
     * @returns {KnockoutObservableArray<ContentTypeInterface | ContentTypeCollectionInterface>}
     */
    getChildren(): KnockoutObservableArray<
      ContentTypeInterface | ContentTypeCollectionInterface
    >;
    /**
     * Add a child into the observable array
     *
     * @param {ContentTypeInterface | ContentTypeCollectionInterface} child
     * @param {number} index
     */
    addChild(child: ContentTypeInterface, index?: number): void;
    /**
     * Remove a child from the observable array
     *
     * @param {ContentTypeInterface} child
     */
    removeChild(child: ContentTypeInterface): void;
    /**
     * Set the children observable array into the class
     *
     * @param {KnockoutObservableArray<ContentTypeInterface>} children
     */
    setChildren(children: KnockoutObservableArray<ContentTypeInterface>): void;
    readonly children: KnockoutObservableArray<ContentTypeInterface>;
  }
}
declare module "Magento_PageBuilder/js/content-type-menu/option.types" {
  /// <reference types="knockout" />
  import Preview from "Magento_PageBuilder/js/content-type/preview";

  export default interface OptionInterface {
    config: OptionConfigInterface;
    preview: Preview;
    code: string;
    icon: KnockoutObservable<string>;
    title: KnockoutObservable<string>;
    classes: KnockoutObservable<{
      [key: string]: boolean | KnockoutObservable<boolean>;
    }>;
    sort: number;
    action: () => void;
    isDisabled: KnockoutObservable<boolean>;
  }

  export interface OptionsInterface {
    [key: string]: OptionInterface;
  }

  export interface OptionConfigInterface {
    preview: Preview;
    code?: string;
    icon?: string;
    title: string;
    action?: () => void;
    classes?: string[];
    sort?: number;
    template?: string;
  }
}
declare module "Magento_PageBuilder/js/content-type-menu" {
  import OptionInterface, {
    OptionsInterface
  } from "Magento_PageBuilder/js/content-type-menu/option.types";
  import Preview from "Magento_PageBuilder/js/content-type/preview";

  export default class ContentTypeMenu {
    private preview;
    private options;
    /**
     * Options constructor
     *
     * @param preview
     * @param options
     */
    constructor(preview: Preview, options: OptionsInterface);
    readonly template: string;
    /**
     * Get an option from the options array
     *
     * @param {string} code
     * @returns {OptionInterface}
     */
    getOption(code: string): OptionInterface;
    /**
     * Sort the options
     */
    private sort;
  }
}
declare module "Magento_PageBuilder/js/content-type-menu/edit" {
  import ContentTypeInterface from "Magento_PageBuilder/js/content-type.types";
  import DataStore from "Magento_PageBuilder/js/data-store";
  export default class Edit {
    private instance;
    private dataStore;
    /**
     * @param {ContentTypeInterface} instance
     * @param {DataStore} dataStore
     */
    constructor(instance: ContentTypeInterface, dataStore: DataStore);
    /**
     * Open the modal
     */
    open(): void;
    /**
     * Determine the form namespace based on the currently set appearance
     *
     * @param {DataObject} contentTypeData
     * @returns {string}
     */
    private getFormNamespace;
  }
}
declare module "Magento_PageBuilder/js/content-type-menu/option" {
  /// <reference types="knockout" />
  import Preview from "Magento_PageBuilder/js/content-type/preview";
  import OptionInterface, {
    OptionConfigInterface
  } from "Magento_PageBuilder/js/content-type-menu/option.types";
  export default class Option implements OptionInterface {
    config: OptionConfigInterface;
    preview: Preview;
    code: string;
    icon: KnockoutObservable<string>;
    title: KnockoutObservable<string>;
    classes: KnockoutObservable<{
      [key: string]: boolean | KnockoutObservable<boolean>;
    }>;
    sort: number;
    action: () => void;
    isDisabled: KnockoutObservable<boolean>;
    private readonly customTemplate;
    /**
     * @param {OptionConfigInterface} config
     */
    constructor(config: OptionConfigInterface);
    readonly template: string;
  }
}
declare module "Magento_PageBuilder/js/content-type-menu/title-option" {
  import Option from "Magento_PageBuilder/js/content-type-menu/option";
  import OptionInterface, {
    OptionConfigInterface
  } from "Magento_PageBuilder/js/content-type-menu/option.types";
  export default class TitleOption extends Option implements OptionInterface {
    /**
     * @param {OptionConfigInterface} options
     */
    constructor(options: OptionConfigInterface);
  }
}
declare module "Magento_PageBuilder/js/drag-drop/registry" {
  import ContentTypeConfigInterface from "Magento_PageBuilder/js/content-type-config.types";
  /**
   * Set the current dragged blocks config into the registry
   *
   * @param {ContentTypeConfigInterface} config
   */
  export function setDraggedContentTypeConfig(
    config: ContentTypeConfigInterface
  ): void;
  /**
   * Retrieve the dragged blocks config
   *
   * @returns {ContentTypeConfigInterface}
   */
  export function getDraggedContentTypeConfig(): ContentTypeConfigInterface;
}
declare module "Magento_PageBuilder/js/utils/create-stylesheet" {
  import { StyleBlocks } from "Magento_PageBuilder/js/utils/style-blocks";
  /**
   * Create a stylesheet DOM object from a style block declaration
   *
   * @param {StyleBlocks} blocks
   * @returns {HTMLStyleElement}
   * @api
   */
  export function createStyleSheet(blocks: StyleBlocks): HTMLStyleElement;
}
declare module "Magento_PageBuilder/js/drag-drop/matrix" {
  /**
   * Build a matrix of which containers each content type can go into, these are determined by the allowed_parents
   * node within the content types configuration
   */
  export function generateAllowedParents(): void;
  /**
   * Retrieve the containers a specific content type can be contained in
   *
   * @param {string} contentType
   * @returns {any}
   */
  export function getContainersFor(contentType: string): string[];
  /**
   * Generate classes of containers the content type is allowed within
   *
   * @param {string} contentType
   * @param {string} stageId
   * @returns {string}
   */
  export function getAllowedContainersClasses(
    contentType: string,
    stageId: string
  ): string;

  export interface AllowedParentsInterface {
    [key: string]: string[];
  }
}
declare module "Magento_PageBuilder/js/drag-drop/drop-indicators" {
  /**
   * Show the drop indicators for a specific content type
   *
   * We do this by creating a style sheet and injecting it into the head. It's dramatically quicker to allow the browsers
   * CSS engine to display these for us than manually iterating through the DOM and applying a class to the elements.
   *
   * @param {string} contentType
   * @param {string} stageId
   * @returns {HTMLStyleElement}
   */
  export function showDropIndicators(
    contentType: string,
    stageId: string
  ): HTMLStyleElement;
  /**
   * Hide the drop indicators
   */
  export function hideDropIndicators(): void;
}
declare module "Magento_PageBuilder/js/drag-drop/sortable" {
  /// <reference types="jqueryui" />
  import Preview from "Magento_PageBuilder/js/content-type/preview";
  /**
   * The class used when hiding a content type
   * @type {string}
   */
  export const hiddenClass = ".pagebuilder-content-type-hidden";
  /**
   * Return the sortable options for an instance which requires sorting / dropping functionality
   *
   * @param {Preview} preview
   * @returns {JQueryUI.SortableOptions | any}
   */
  export function getSortableOptions(
    preview: Preview
  ): JQueryUI.SortableOptions | any;
}
declare module "Magento_PageBuilder/js/content-type/observable-updater.types" {
  /// <reference types="knockout" />
  export default interface ObservableObject {
    [key: string]: {
      [key: string]: KnockoutObservable<any>;
    };
  }
}
declare module "Magento_PageBuilder/js/content-type/preview.types" {
  /// <reference types="knockout" />
  import ContentTypeConfigInterface from "Magento_PageBuilder/js/content-type-config.types";
  import ContentTypeInterface from "Magento_PageBuilder/js/content-type.types";
  import ObservableObject from "Magento_PageBuilder/js/content-type/observable-updater.types";
  export interface PreviewInterface {
    contentType: ContentTypeInterface;
    config: ContentTypeConfigInterface;
    data: ObservableObject;
    displayLabel: KnockoutObservable<string>;
    display: KnockoutObservable<boolean>;
    wrapperElement: Element;
    placeholderCss: KnockoutObservable<object>;
    isPlaceholderVisible: KnockoutObservable<boolean>;
    isEmpty: KnockoutObservable<boolean>;
    /**
     * @deprecated
     */
    previewData: {
      [key: string]: any;
    };
  }
}
declare module "Magento_PageBuilder/js/content-type/preview" {
  /// <reference types="knockout" />
  /// <reference types="jqueryui" />
  import "Magento_PageBuilder/js/binding/live-edit";
  import "Magento_PageBuilder/js/binding/sortable";
  import "Magento_PageBuilder/js/binding/sortable-children";
  import ContentTypeCollectionInterface from "Magento_PageBuilder/js/content-type-collection.types";
  import ContentTypeConfigInterface from "Magento_PageBuilder/js/content-type-config.types";
  import ContentTypeMenu from "Magento_PageBuilder/js/content-type-menu";
  import { OptionsInterface } from "Magento_PageBuilder/js/content-type-menu/option.types";
  import ContentTypeInterface from "Magento_PageBuilder/js/content-type.types";
  import { DataObject } from "Magento_PageBuilder/js/data-store";
  import ObservableUpdater from "Magento_PageBuilder/js/content-type/observable-updater";
  import ObservableObject from "Magento_PageBuilder/js/content-type/observable-updater.types";
  import { PreviewInterface } from "Magento_PageBuilder/js/content-type/preview.types";

  export default class Preview implements PreviewInterface {
    contentType: ContentTypeInterface;
    config: ContentTypeConfigInterface;
    data: ObservableObject;
    displayLabel: KnockoutObservable<string>;
    display: KnockoutObservable<boolean>;
    wrapperElement: Element;
    placeholderCss: KnockoutObservable<object>;
    isPlaceholderVisible: KnockoutObservable<boolean>;
    isEmpty: KnockoutObservable<boolean>;
    /**
     * @deprecated
     */
    previewData: {
      [key: string]: any;
    };
    /**
     * Fields that should not be considered when evaluating whether an object has been configured.
     *
     * @see {Preview.isConfigured}
     * @type {[string]}
     */
    protected fieldsToIgnoreOnRemove: string[];
    protected events: DataObject;
    private edit;
    private optionsMenu;
    private observableUpdater;
    private mouseover;
    private mouseoverContext;
    /**
     * @param {ContentTypeInterface} contentType
     * @param {ContentTypeConfigInterface} config
     * @param {ObservableUpdater} observableUpdater
     */
    constructor(
      contentType: ContentTypeInterface,
      config: ContentTypeConfigInterface,
      observableUpdater: ObservableUpdater
    );
    /**
     * Retrieve the preview template
     *
     * @returns {string}
     */
    readonly template: string;
    /**
     * Calls methods by event name.
     *
     * @param {string}  eventName
     * @param {any} params
     */
    trigger(eventName: string, params: any): void;
    /**
     * Tries to call specified method of a current content type.
     *
     * @param args
     */
    delegate(...args: any[]): void;
    /**
     * Open the edit form for this content type
     */
    openEdit(): void;
    /**
     * Update data store
     *
     * @param {string} key
     * @param {string} value
     */
    updateData(key: string, value: string): void;
    /**
     * Update the data value of a part of our internal Knockout data store
     *
     * @param {string} key
     * @param value
     * @deprecated
     */
    updateDataValue(key: string, value: any): void;
    /**
     * Set state based on mouseover event for the preview
     *
     * @param {Preview} context
     * @param {Event} event
     */
    onMouseOver(context: Preview, event: Event): void;
    /**
     * Set state based on mouseout event for the preview
     *
     * @param {Preview} context
     * @param {Event} event
     */
    onMouseOut(context: Preview, event: Event): void;
    /**
     * After children render fire an event
     *
     * @param {Element} element
     * @deprecated
     */
    afterChildrenRender(element: Element): void;
    /**
     * Dispatch an after render event for individual content types
     *
     * @param {Element[]} elements
     */
    dispatchAfterRenderEvent(elements: Element[]): void;
    /**
     * Get the options instance
     *
     * @returns {ContentTypeMenu}
     */
    getOptions(): ContentTypeMenu;
    /**
     * Handle user editing an instance
     */
    onOptionEdit(): void;
    /**
     * Reverse the display data currently in the data store
     */
    onOptionVisibilityToggle(): void;
    /**
     * Handle duplicate of items
     */
    onOptionDuplicate(): void;
    /**
     * Duplicate content type
     *
     * @param {ContentTypeInterface | ContentTypeCollectionInterface} contentType
     * @param {boolean} autoAppend
     * @param {boolean} direct
     * @returns {Promise<ContentTypeInterface> | void}
     */
    clone(
      contentType: ContentTypeInterface | ContentTypeCollectionInterface,
      autoAppend?: boolean,
      direct?: boolean
    ): Promise<ContentTypeInterface> | void;
    /**
     * Handle content type removal
     */
    onOptionRemove(): void;
    /**
     * Determine if the container can receive drop events? With the current matrix system everything can unless
     * specified in an inherited preview instance.
     *
     * @returns {boolean}
     */
    isContainer(): boolean;
    /**
     * Return the sortable options
     *
     * @returns {JQueryUI.SortableOptions}
     */
    getSortableOptions(): JQueryUI.SortableOptions | any;
    /**
     * Get the CSS classes for the children element, as we dynamically create this class name it can't sit in the DOM
     * without causing browser issues
     *
     * @returns {{[p: string]: boolean}}
     */
    getChildrenCss(): {
      [x: string]: boolean;
    };
    /**
     * Return an array of options
     *
     * @returns {OptionsInterface}
     */
    protected retrieveOptions(): OptionsInterface;
    /**
     * Dispatch content type clone events
     *
     * @param {ContentTypeInterface | ContentTypeCollectionInterface} originalContentType
     * @param {ContentTypeInterface | ContentTypeCollectionInterface} duplicateContentType
     * @param {number} index
     * @param {boolean} direct
     */
    protected dispatchContentTypeCloneEvents(
      originalContentType:
        | ContentTypeInterface
        | ContentTypeCollectionInterface,
      duplicateContentType:
        | ContentTypeInterface
        | ContentTypeCollectionInterface,
      index: number,
      direct: boolean
    ): void;
    /**
     * Bind events
     */
    protected bindEvents(): void;
    /**
     * After observables updated, allows to modify observables
     */
    protected afterObservablesUpdated(): void;
    /**
     * Setup fields observables within the data class property
     *
     * @deprecated
     */
    protected setupDataFields(): void;
    /**
     * Does the current instance have any children or values different from the default for it's type?
     *
     * @returns {boolean}
     */
    protected isConfigured(): boolean;
    /**
     * Any hidden element should block drag / drop events from uploading images from the OS. We have to block this for
     * all elements as underlying elements could still receive the events if a parent is hidden.
     *
     * @param {Element} element
     */
    private disableImageUploadOnHide;
    /**
     * Update observables
     */
    private updateObservables;
    /**
     * Update placeholder background visibility base on height and padding
     *
     * @param {DataObject} data
     */
    private updatePlaceholderVisibility;
  }
}
declare module "Magento_PageBuilder/js/content-type/observable-updater" {
  import { ConverterInterface } from "Magento_PageBuilder/js/content-type-config.types";
  import ConverterPool from "Magento_PageBuilder/js/converter/converter-pool";
  import { DataObject } from "Magento_PageBuilder/js/data-store";
  import MassConverterPool from "Magento_PageBuilder/js/mass-converter/converter-pool";
  import Master from "Magento_PageBuilder/js/content-type/master";
  import Preview from "Magento_PageBuilder/js/content-type/preview";
  export default class ObservableUpdater {
    private converterPool;
    private massConverterPool;
    private converterResolver;
    /**
     * @param {typeof ConverterPool} converterPool
     * @param {typeof MassConverterPool} massConverterPool
     * @param {(config: object) => string} converterResolver
     */
    constructor(
      converterPool: typeof ConverterPool,
      massConverterPool: typeof MassConverterPool,
      converterResolver: (config: object) => string
    );
    /**
     * Generate our data.ELEMENT.style Knockout observable objects for use within master and preview formats.
     *
     * @param {Preview} viewModel
     * @param {DataObject} data
     */
    update(viewModel: Preview | Master, data: DataObject): void;
    /**
     * Process data for elements before its converted to knockout format
     *
     * @param {object} data
     * @param {ConverterInterface[]} convertersConfig
     * @returns {object}
     */
    convertData(data: object, convertersConfig: ConverterInterface[]): object;
    /**
     * Convert attributes
     *
     * @param {object} config
     * @param {DataObject} data
     * @returns {object}
     */
    private convertAttributes;
    /**
     * Convert style properties
     *
     * @param {object}config
     * @param {object}data
     * @returns {object}
     */
    private convertStyle;
    /**
     * Convert html property
     *
     * @param {object} config
     * @param {DataObject} data
     * @returns {string}
     */
    private convertHtml;
  }
}
declare module "Magento_PageBuilder/js/content-type/master" {
  import ContentTypeInterface from "Magento_PageBuilder/js/content-type.types";
  import { DataObject } from "Magento_PageBuilder/js/data-store";
  import ObservableUpdater from "Magento_PageBuilder/js/content-type/observable-updater";
  import ObservableObject from "Magento_PageBuilder/js/content-type/observable-updater.types";

  export default class Master {
    data: ObservableObject;
    contentType: ContentTypeInterface;
    private observableUpdater;
    /**
     * @param {ContentTypeInterface} contentType
     * @param {ObservableUpdater} observableUpdater
     */
    constructor(
      contentType: ContentTypeInterface,
      observableUpdater: ObservableUpdater
    );
    /**
     * Retrieve the render template
     *
     * @returns {string}
     */
    readonly template: string;
    /**
     * Get content type data
     *
     * @param {string} element
     * @returns {DataObject}
     * @deprecated
     */
    getData(element?: string): DataObject;
    /**
     * Attach event to updating data in data store to update observables
     */
    protected bindEvents(): void;
    /**
     * After observables updated, allows to modify observables
     */
    protected afterObservablesUpdated(): void;
    /**
     * Update observables
     */
    private updateObservables;
  }
}
declare module "Magento_PageBuilder/js/content-type.types" {
  import ContentTypeCollectionInterface from "Magento_PageBuilder/js/content-type-collection.types";
  import ContentTypeConfigInterface from "Magento_PageBuilder/js/content-type-config.types";
  import Master from "Magento_PageBuilder/js/content-type/master";
  import Preview from "Magento_PageBuilder/js/content-type/preview";
  import DataStore from "Magento_PageBuilder/js/data-store";
  export default interface ContentTypeInterface<
    P extends Preview = Preview,
    M extends Master = Master
  > {
    id: string;
    stageId: string;
    parentContentType?: ContentTypeCollectionInterface;
    config: ContentTypeConfigInterface;
    element: JQuery;
    dataStore: DataStore;
    preview: P;
    content: M;
    dropped: boolean;
  }
}
declare module "Magento_PageBuilder/js/content-type-collection.types" {
  /// <reference types="knockout" />
  import ContentTypeInterface from "Magento_PageBuilder/js/content-type.types";
  import MasterCollection from "Magento_PageBuilder/js/content-type/master-collection";
  import PreviewCollection from "Magento_PageBuilder/js/content-type/preview-collection";
  export default interface ContentTypeCollectionInterface<
    P extends PreviewCollection = PreviewCollection,
    M extends MasterCollection = MasterCollection
  > extends ContentTypeInterface<P, M> {
    readonly children: KnockoutObservableArray<
      ContentTypeCollectionInterface | ContentTypeInterface
    >;
    /**
     * Add a child into the observable array
     *
     * @param {ContentTypeInterface} child
     * @param {number} index
     */
    addChild(child: ContentTypeInterface, index?: number): void;
    /**
     * Set the children observable array into the class
     *
     * @param {KnockoutObservableArray<ContentTypeInterface>} children
     */
    setChildren(children: KnockoutObservableArray<ContentTypeInterface>): void;
    /**
     * Return the children of the current element
     *
     * @returns {KnockoutObservableArray<ContentTypeInterface | ContentTypeCollectionInterface>}
     */
    getChildren(): KnockoutObservableArray<
      ContentTypeInterface | ContentTypeCollectionInterface
    >;
    /**
     * Remove a child from the observable array
     *
     * @param child
     */
    removeChild(child: ContentTypeInterface): void;
  }
}
declare module "Magento_PageBuilder/js/collection" {
  /// <reference types="knockout" />
  import ContentTypeCollectionInterface from "Magento_PageBuilder/js/content-type-collection.types";
  import ContentTypeInterface from "Magento_PageBuilder/js/content-type.types";

  export default class Collection {
    children: KnockoutObservableArray<
      ContentTypeInterface | ContentTypeCollectionInterface
    >;
    constructor(
      children?: KnockoutObservableArray<
        ContentTypeInterface | ContentTypeCollectionInterface
      >
    );
    /**
     * Return the children of the current element
     *
     * @returns {KnockoutObservableArray<ContentTypeInterface | ContentTypeCollectionInterface>}
     */
    getChildren(): KnockoutObservableArray<
      ContentTypeInterface | ContentTypeCollectionInterface
    >;
    /**
     * Add a child into the observable array
     *
     * @param child
     * @param index
     */
    addChild(child: any, index?: number): void;
    /**
     * Remove a child from the observable array
     *
     * @param child
     */
    removeChild(child: any): void;
    /**
     * Set the children observable array into the class
     *
     * @param children
     */
    setChildren(
      children: KnockoutObservableArray<
        ContentTypeInterface | ContentTypeCollectionInterface
      >
    ): void;
  }
}
declare module "Magento_PageBuilder/js/content-type-toolbar.types" {
  export interface OptionInterface {
    key: string;
    type: string;
    values: ValueInterface[];
  }

  export interface ValueInterface {
    value: string;
    label: string;
    icon: string;
  }
}
declare module "Magento_PageBuilder/js/utils/check-stage-full-screen" {
  /**
   * Check if stage full screen mode is active
   *
   * @param {string} stageId
   * @returns {boolean}
   */
  export default function checkStageFullScreen(stageId: string): boolean;
}
declare module "Magento_PageBuilder/js/content-type-toolbar" {
  /// <reference types="knockout" />
  import {
    OptionInterface,
    ValueInterface
  } from "Magento_PageBuilder/js/content-type-toolbar.types";
  import Preview from "Magento_PageBuilder/js/content-type/preview";
  import { PreviewCollectionInterface } from "Magento_PageBuilder/js/content-type/preview-collection.types";
  import { PreviewInterface } from "Magento_PageBuilder/js/content-type/preview.types";

  export default class Toolbar {
    options: KnockoutObservableArray<OptionInterface>;
    observer: MutationObserver;
    private preview;
    /**
     * Toolbar Options constructor
     *
     * @param preview
     * @param options
     */
    constructor(preview: Preview, options: OptionInterface[]);
    /**
     * Toolbar template
     *
     * @returns {string}
     */
    readonly template: string;
    /**
     * Upon clicking the option update the value as directed
     * When user toggles the option off, set the value back to default
     *
     * @param {OptionInterface} option
     * @param {ValueInterface} value
     */
    onOptionClick(option: OptionInterface, value: ValueInterface): void;
    /**
     * Set state based on toolbar focusin event for the preview
     *
     * @param {ContentTypeToolbarPreviewInterface} context
     * @param {Event} event
     */
    onFocusIn(context: ContentTypeToolbarPreviewInterface, event: Event): void;
    /**
     * Set state based on toolbar focusout event for the preview
     *
     * @param {ContentTypeToolbarPreviewInterface} context
     * @param {Event} event
     */
    onFocusOut(context: ContentTypeToolbarPreviewInterface, event: Event): void;
    /**
     * Get fixed toolbar container element referenced as selector in wysiwyg adapter settings
     *
     * @returns {jQuery}
     */
    private getCurrentContentTypeTarget;
  }
  /**
   * Preview interface for preview instances implementation the toolbar functionality
   */
  export interface ContentTypeToolbarPreviewInterface extends PreviewInterface {
    toolbar: Toolbar;
  }
  export interface ContentTypeToolbarPreviewCollectionInterface
    extends PreviewCollectionInterface {
    toolbar: Toolbar;
  }
}
declare module "Magento_PageBuilder/js/binding/draggable" {
  export {};
}
declare module "Magento_PageBuilder/js/panel/menu" {
  /// <reference types="knockout" />
  export class Menu {
    hidden: KnockoutObservable<boolean>;
    id: KnockoutObservable<number>;
    code: KnockoutObservable<string>;
    label: KnockoutObservable<string>;
    icon: KnockoutObservable<string>;
    sort: KnockoutObservable<number>;
    contentTypes: KnockoutObservableArray<[any]>;
    active: KnockoutObservable<boolean>;
    stageId: string;
    /**
     * Menu constructor
     *
     * @param id
     * @param menu
     * @param contentTypes
     * @param stageId
     */
    constructor(id: number, menu: any, contentTypes: any[], stageId: string);
    /**
     * Toggle the menu
     */
    toggle(): void;
  }
}
declare module "Magento_PageBuilder/js/panel/menu/content-type" {
  import ContentTypeConfigInterface from "Magento_PageBuilder/js/content-type-config.types";
  export class ContentType {
    droppable: boolean;
    private config;
    private icon;
    private identifier;
    private label;
    private stageId;
    /**
     * @param {string} identifier
     * @param {ContentTypeConfigInterface} config
     * @param {string} stageId
     */
    constructor(
      identifier: string,
      config: ContentTypeConfigInterface,
      stageId: string
    );
    /**
     * Retrieve the config object
     *
     * @returns {ContentTypeConfigInterface}
     */
    getConfig(): ContentTypeConfigInterface;
    /**
     * Only connect to container sortable instances that the current content type is accepted into
     *
     * @returns {string}
     */
    getDraggableOptions(): {
      connectToSortable: string;
    };
  }
}
declare module "Magento_PageBuilder/js/utils/position-sticky" {
  /**
   * Determine if the current browser supports position sticky
   *
   * @returns {boolean}
   */
  export function supportsPositionSticky(): boolean;
}
declare module "Magento_PageBuilder/js/panel" {
  /// <reference types="knockout" />
  /// <reference types="jqueryui" />
  import "Magento_PageBuilder/js/binding/draggable";
  import PageBuilder from "Magento_PageBuilder/js/page-builder";

  export default class Panel {
    menuSections: KnockoutObservableArray<any>;
    searchResults: KnockoutObservableArray<any>;
    isVisible: KnockoutObservable<boolean>;
    isStickyBottom: KnockoutObservable<boolean>;
    isStickyTop: KnockoutObservable<boolean>;
    searching: KnockoutObservable<boolean>;
    searchValue: KnockoutObservable<string>;
    searchPlaceholder: string;
    searchNoResult: string;
    searchTitle: string;
    pageBuilder: PageBuilder;
    id: string;
    private element;
    private template;
    constructor(pageBuilder: PageBuilder);
    /**
     * On render init the panel
     *
     * @param {Element} element
     */
    afterRender(element: Element): void;
    /**
     * Init listeners
     */
    initListeners(): void;
    /**
     * Return the template string
     *
     * @returns {string}
     */
    getTemplate(): string;
    /**
     * Conduct a search on the available content types,
     * and find matches for beginning of words.
     *
     * @param self
     * @param event
     */
    search(self: Panel, event: any): void;
    /**
     * Clear Search Results
     */
    clearSearch(): void;
    /**
     * Toggle stickiness of panel based on browser scroll position and height of panel
     * Enable panel stickiness if panel and stage are available
     * Only stick when panel height is smaller than stage height
     * Stick panel to top when scroll reaches top position of stage
     * Stick panel to bottom when scroll reaches bottom position of stage
     */
    onScroll(): void;
    /**
     * Retrieve the draggable options for the panel items
     *
     * @returns {JQueryUI.DraggableOptions}
     */
    getDraggableOptions(element: HTMLElement): JQueryUI.DraggableOptions;
    /**
     * Populate the panel with the content types
     */
    private populateContentTypes;
  }
}
declare module "Magento_PageBuilder/js/utils/directives" {
  /**
   * Convert a directive into our data URI
   *
   * @param {string} directive
   * @returns {string}
   * @api
   */
  export function toDataUrl(directive: string): string;
  /**
   * Convert a URI to it's directive equivalent
   *
   * @param {string} url
   * @returns {string}
   * @api
   */
  export function fromDataUrl(url: string): string;
  /**
   * Decode all data URIs present in a string
   *
   * @param {string} str
   * @returns {string}
   * @api
   */
  export default function decodeAllDataUrlsInString(str: string): string;
  /**
   * Retrieve the image URL with directive
   *
   * @param {Array} image
   * @returns {string}
   * @api
   */
  export function getImageUrl(image: any[]): string;
  /**
   * Remove quotes in media directives, {{media url="wysiwyg/image.png"}} convert to {{media url=wysiwyg/image.png}}
   *
   * @param {string} html
   * @returns {string}
   * @api
   */
  export function removeQuotesInMediaDirectives(html: string): string;
  /**
   * Replace media directives with actual media URLs
   *
   * @param {string} html
   * @returns {string}
   * @api
   */
  export function convertMediaDirectivesToUrls(html: string): string;
}
declare module "Magento_PageBuilder/js/master-format/filter-html" {
  /**
   * Filter the HTML output to only include necessary attributes & nodes
   *
   * @param {JQuery} element
   * @returns {JQuery}
   */
  export default function filterHtml(element: JQuery): JQuery;
}
declare module "Magento_PageBuilder/js/master-format/render" {
  import ContentTypeCollectionInterface from "Magento_PageBuilder/js/content-type-collection.types";
  export default class MasterFormatRenderer {
    /**
     * Render the root container into a string
     *
     * @param {ContentTypeCollection} rootContainer
     * @returns {Promise<string>}
     */
    applyBindings(
      rootContainer: ContentTypeCollectionInterface
    ): Promise<string>;
  }
}
declare module "Magento_PageBuilder/js/master-format/validator" {
  /**
   * Validate if content has page builder format by checking for any data-content-type attributes
   *
   * @param {string} content
   * @returns {boolean}
   */
  export default function validate(content: string): boolean;
}
declare module "Magento_PageBuilder/js/stage-builder" {
  import Stage from "Magento_PageBuilder/js/stage";
  /**
   * Build a stage with the provided content type, content observable and initial value
   *
   * @param {Stage} stage
   * @param {string} content
   * @returns {Promise}
   */
  export default function build(stage: Stage, content: string): Promise<any>;
}
declare module "Magento_PageBuilder/js/stage-events.types" {
  export interface StageToggleFullScreenParamsInterface {
    animate?: boolean;
  }

  export interface StageUpdateAfterParamsInterface {
    stageId: string;
  }
}
declare module "Magento_PageBuilder/js/utils/promise-deferred" {
  /**
   * Returns a deferred promise
   *
   * @returns {DeferredInterface}
   * @api
   */
  export default function deferred(): DeferredInterface;
  export interface DeferredInterface {
    resolve: (...args: any[]) => void;
    reject: (...args: any[]) => void;
    promise: Promise<{}>;
  }
}
declare module "Magento_PageBuilder/js/stage" {
  /// <reference types="knockout" />
  import "Magento_PageBuilder/js/resource/jquery/ui/jquery.ui.touch-punch";
  import "Magento_PageBuilder/js/binding/sortable";
  import ContentTypeCollectionInterface from "Magento_PageBuilder/js/content-type-collection.types";
  import DataStore from "Magento_PageBuilder/js/data-store";
  import PageBuilderInterface from "Magento_PageBuilder/js/page-builder.types";
  import { DeferredInterface } from "Magento_PageBuilder/js/utils/promise-deferred";
  export default class Stage {
    static readonly rootContainerName: string;
    pageBuilder: PageBuilderInterface;
    id: string;
    loading: KnockoutObservable<boolean>;
    showBorders: KnockoutObservable<boolean>;
    interacting: KnockoutObservable<boolean>;
    userSelect: KnockoutObservable<boolean>;
    focusChild: KnockoutObservable<boolean>;
    dataStore: DataStore;
    afterRenderDeferred: DeferredInterface;
    rootContainer: ContentTypeCollectionInterface;
    private template;
    private render;
    private collection;
    /**
     * Debounce the applyBindings call by 500ms to stop duplicate calls
     *
     * @type {(() => void) & _.Cancelable}
     */
    private applyBindingsDebounce;
    /**
     * @param {PageBuilderInterface} pageBuilder
     * @param {ContentTypeCollectionInterface} rootContainer
     */
    constructor(
      pageBuilder: PageBuilderInterface,
      rootContainer: ContentTypeCollectionInterface
    );
    /**
     * Get template.
     *
     * @returns {string}
     */
    getTemplate(): string;
    /**
     * The stage has been initiated fully and is ready
     */
    ready(): void;
    /**
     * Init listeners
     */
    protected initListeners(): void;
    /**
     * On content type removed
     *
     * @param params
     */
    private onContentTypeRemoved;
  }
}
declare module "Magento_PageBuilder/js/page-builder.types" {
  /// <reference types="knockout" />
  import Panel from "Magento_PageBuilder/js/panel";
  import Stage from "Magento_PageBuilder/js/stage";
  export default interface PageBuilderInterface {
    template: string;
    panel: Panel;
    stage: Stage;
    isStageReady: KnockoutObservable<boolean>;
    config: object;
    initialValue: string;
    id: string;
    originalScrollTop: number;
    isFullScreen: KnockoutObservable<boolean>;
    loading: KnockoutObservable<boolean>;
    wrapperStyles: KnockoutObservable<{
      [key: string]: string;
    }>;
  }
}
declare module "Magento_PageBuilder/js/page-builder" {
  /// <reference types="knockout" />
  import PageBuilderInterface from "Magento_PageBuilder/js/page-builder.types";
  import Panel from "Magento_PageBuilder/js/panel";
  import Stage from "Magento_PageBuilder/js/stage";
  import { StageToggleFullScreenParamsInterface } from "Magento_PageBuilder/js/stage-events.types";
  export default class PageBuilder implements PageBuilderInterface {
    template: string;
    panel: Panel;
    stage: Stage;
    isStageReady: KnockoutObservable<boolean>;
    config: object;
    initialValue: string;
    id: string;
    originalScrollTop: number;
    isFullScreen: KnockoutObservable<boolean>;
    loading: KnockoutObservable<boolean>;
    wrapperStyles: KnockoutObservable<{
      [key: string]: string;
    }>;
    private previousWrapperStyles;
    private previousPanelHeight;
    constructor(config: any, initialValue: string);
    /**
     * Init listeners.
     */
    initListeners(): void;
    /**
     * Tells the stage wrapper to expand to fullScreen
     *
     * @param {StageToggleFullScreenParamsInterface} args
     */
    toggleFullScreen(args: StageToggleFullScreenParamsInterface): void;
    /**
     * Change window scroll base on full screen mode.
     */
    onFullScreenChange(): void;
    /**
     * Get template.
     *
     * @returns {string}
     */
    getTemplate(): string;
  }
}
declare module "Magento_PageBuilder/js/uploader" {
  import DataStore from "Magento_PageBuilder/js/data-store";

  export default class Uploader {
    /**
     * Config data of uploader instance
     */
    private config;
    /**
     * The supplied data store
     */
    private dataStore;
    /**
     * @param {String} name Name to use for lookup reference in registry
     * @param {Object} uploaderConfig The config used when initializing the Uploader UI component
     * @param {String} contentTypeId The id of the content type this will be used in
     * @param {DataStore} dataStore The datastore that the selected image should be stored in.
     * @param {Object[]} initialValue The value that should be used for the initial state of the component.
     * @param {Function} onChangeCallback Called when image is added or updated
     * @param {Function} onDeleteCallback Called when currently set image is deleted from storage
     */
    constructor(
      name: string,
      uploaderConfig: object,
      contentTypeId: string,
      dataStore: DataStore,
      initialValue: string | any[],
      onChangeCallback?: (data: object[]) => void,
      onDeleteCallback?: () => void
    );
    /**
     * Default callback for upload event
     * @param {object[]} data
     */
    onImageChanged(data: object[]): void;
    /**
     * Default callback for image deleted event
     */
    onImageDeleted(): void;
    /**
     * Get registry callback reference to uploader UI component
     *
     * @returns {Function}
     */
    getUiComponent(): Function;
    /**
     * Instantiate uploader through layout UI component renderer
     */
    private render;
  }
}
declare module "Magento_PageBuilder/js/binding/focus" {
  export {};
}
declare module "Magento_PageBuilder/js/content-type-menu/hide-show-option" {
  import Option from "Magento_PageBuilder/js/content-type-menu/option";
  import OptionInterface, {
    OptionConfigInterface
  } from "Magento_PageBuilder/js/content-type-menu/option.types";
  export default class HideShowOption extends Option
    implements OptionInterface {
    static showText: string;
    static showIcon: string;
    static hideText: string;
    static hideIcon: string;
    /**
     * @param {OptionConfigInterface} options
     */
    constructor(options: OptionConfigInterface);
    /**
     * On display change update the title and icon
     *
     * @param {DataObject} state
     */
    private onDisplayChange;
  }
}
declare module "Magento_PageBuilder/js/wysiwyg/wysiwyg-interface" {
  import { AdditionalDataConfigInterface } from "Magento_PageBuilder/js/content-type-config.types";
  import DataStore from "Magento_PageBuilder/js/data-store";
  /**
   * Provides an interface for the constructor of a WysiwygInterface object
   */
  export type WysiwygConstructorInterface = new (
    contentTypeId: string,
    elementId: string,
    config: AdditionalDataConfigInterface,
    dataStore: DataStore,
    fieldName: string,
    stageId: string
  ) => WysiwygInterface;
  /**
   * Describes an instance of a WYSIWYG component not specific to a specific editor
   */
  export interface WysiwygInterface {
    contentTypeId: string;
    stageId: string;
    elementId: string;
    config: AdditionalDataConfigInterface;
    /**
     * Retrieves the created component for the editor
     *
     * @return {WysiwygInstanceInterface}
     */
    getAdapter(): WysiwygInstanceInterface;
  }
  export default WysiwygInterface;
}
declare module "Magento_PageBuilder/js/utils/nesting-link-dialog" {
  import DataStore from "Magento_PageBuilder/js/data-store";
  import WysiwygInterface from "Magento_PageBuilder/js/wysiwyg/wysiwyg-interface";
  /**
   * Validate inline editor for having nested link
   * Creates a dialog and removes inline editor link if present
   *
   * @param {DataStore} dataStore
   * @param {WysiwygInterface} wysiwyg
   * @param {string} inlineMessageField
   * @param {string} linkUrlField
   */
  export default function nestingLinkDialog(
    dataStore: DataStore,
    wysiwyg: WysiwygInterface,
    inlineMessageField: string,
    linkUrlField: string
  ): void;
}
declare module "Magento_PageBuilder/js/wysiwyg/factory" {
  import { AdditionalDataConfigInterface } from "Magento_PageBuilder/js/content-type-config.types";
  import DataStore from "Magento_PageBuilder/js/data-store";
  import WysiwygInterface from "Magento_PageBuilder/js/wysiwyg/wysiwyg-interface";
  /**
   * @param {String} contentTypeId The ID in the registry of the content type.
   * @param {String} elementId The ID of the editor element in the DOM.
   * @param {String} contentTypeName The type of content type this editor will be used in. E.g. "banner".
   * @param {AdditionalDataConfigInterface} config The configuration for the wysiwyg.
   * @param {DataStore} dataStore The datastore to store the content in.
   * @param {String} fieldName The key in the provided datastore to set the data.
   * @param {String} stageId The ID in the registry of the stage containing the content type.
   * @returns {Wysiwyg}
   */
  export default function create(
    contentTypeId: string,
    elementId: string,
    contentTypeName: string,
    config: AdditionalDataConfigInterface,
    dataStore: DataStore,
    fieldName: string,
    stageId: string
  ): Promise<WysiwygInterface>;
}
declare module "Magento_PageBuilder/js/content-type/banner/preview" {
  /// <reference types="jquery" />
  import { OptionsInterface } from "Magento_PageBuilder/js/content-type-menu/option.types";
  import Uploader from "Magento_PageBuilder/js/uploader";
  import BasePreview from "Magento_PageBuilder/js/content-type/preview";

  export default class Preview extends BasePreview {
    buttonPlaceholder: string;
    /**
     * Wysiwyg instance
     */
    private wysiwyg;
    /**
     * The element the text content type is bound to
     */
    private element;
    /**
     * The textarea element in disabled mode
     */
    private textarea;
    /**
     * Return an array of options
     *
     * @returns {OptionsInterface}
     */
    retrieveOptions(): OptionsInterface;
    /**
     * Get registry callback reference to uploader UI component
     *
     * @returns {Uploader}
     */
    getUploader(): Uploader;
    /**
     * Makes WYSIWYG active
     *
     * @param {Preview} preview
     * @param {JQueryEventObject} event
     */
    activateEditor(preview: Preview, event: JQueryEventObject): void;
    /**
     * Stop event to prevent execution of action when editing textarea.
     *
     * @param {Preview} preview
     * @param {JQueryEventObject} event
     * @returns {Boolean}
     */
    stopEvent(preview: Preview, event: JQueryEventObject): boolean;
    /**
     * Set state based on overlay mouseover event for the preview
     */
    onMouseOverWrapper(): void;
    /**
     * Set state based on overlay mouseout event for the preview
     */
    onMouseOutWrapper(): void;
    /**
     * @returns {Boolean}
     */
    isWysiwygSupported(): boolean;
    /**
     * @param {HTMLElement} element
     */
    initWysiwyg(element: HTMLElement): void;
    /**
     * @param {HTMLTextAreaElement} element
     */
    initTextarea(element: HTMLTextAreaElement): void;
    /**
     * Save current value of textarea in data store
     */
    onTextareaKeyUp(): void;
    /**
     * Start stage interaction on textarea blur
     */
    onTextareaFocus(): void;
    /**
     * Stop stage interaction on textarea blur
     */
    onTextareaBlur(): void;
    /**
     * @inheritDoc
     */
    protected bindEvents(): void;
    /**
     * Adjust textarea's height based on scrollHeight
     */
    private adjustTextareaHeightBasedOnScrollHeight;
  }
}
declare module "Magento_PageBuilder/js/content-type/banner/converter/attribute/overlay-color" {
  import ConverterInterface from "Magento_PageBuilder/js/converter/converter-interface";
  import { DataObject } from "Magento_PageBuilder/js/data-store";
  export default class OverlayColor implements ConverterInterface {
    /**
     * Convert value to internal format
     *
     * @param value string
     * @returns {string | object}
     */
    fromDom(value: string): string | object;
    /**
     * Convert value to knockout format
     *
     * @param {string} name
     * @param {DataObject} data
     * @returns {string | object}
     */
    toDom(name: string, data: DataObject): string | object;
  }
}
declare module "Magento_PageBuilder/js/content-type/banner/converter/style/button-opacity" {
  import ConverterInterface from "Magento_PageBuilder/js/converter/converter-interface";
  import { DataObject } from "Magento_PageBuilder/js/data-store";
  export default class ButtonOpacity implements ConverterInterface {
    /**
     * Convert value to internal format
     *
     * @param value string
     * @returns {string | object}
     */
    fromDom(value: string): string | object;
    /**
     * Convert value to knockout format
     *
     * @param {string} name
     * @param {DataObject} data
     * @returns {string | object}
     */
    toDom(name: string, data: DataObject): string | object;
  }
}
declare module "Magento_PageBuilder/js/content-type/banner/converter/style/button-visibility" {
  import ConverterInterface from "Magento_PageBuilder/js/converter/converter-interface";
  import { DataObject } from "Magento_PageBuilder/js/data-store";
  export default class ButtonVisibility implements ConverterInterface {
    /**
     * Convert value to internal format
     *
     * @param value string
     * @returns {string | object}
     */
    fromDom(value: string): string | object;
    /**
     * Convert value to knockout format
     *
     * @param {string} name
     * @param {DataObject} data
     * @returns {string | object}
     */
    toDom(name: string, data: DataObject): string | object;
  }
}
declare module "Magento_PageBuilder/js/content-type/banner/converter/style/overlay-background-color" {
  import ConverterInterface from "Magento_PageBuilder/js/converter/converter-interface";
  import { DataObject } from "Magento_PageBuilder/js/data-store";
  export default class OverlayBackgroundColor implements ConverterInterface {
    /**
     * Convert value to internal format
     *
     * @param value string
     * @returns {string | object}
     */
    fromDom(value: string): string | object;
    /**
     * Convert value to knockout format
     *
     * @param name string
     * @param data Object
     * @returns {string | object}
     */
    toDom(name: string, data: DataObject): string | object;
  }
}
declare module "Magento_PageBuilder/js/wysiwyg/component-initializer-interface" {
  import WysiwygInterface from "Magento_PageBuilder/js/wysiwyg/wysiwyg-interface";
  export interface WysiwygComponentInitializerInterface {
    initialize(wysiwyg: WysiwygInterface): void;
  }
  export default WysiwygComponentInitializerInterface;
}
declare module "Magento_PageBuilder/js/content-type/banner/wysiwyg/tinymce4/component-initializer" {
  import WysiwygComponentInitializerInterface from "Magento_PageBuilder/js/wysiwyg/component-initializer-interface";
  import WysiwygInterface from "Magento_PageBuilder/js/wysiwyg/wysiwyg-interface";
  export default class ComponentInitializer
    implements WysiwygComponentInitializerInterface {
    /**
     * The editor element
     */
    private $element;
    /**
     * The configuration of the wysiwyg content type
     */
    private config;
    /**
     * Initialize the instance
     *
     * @param {Wysiwyg} wysiwyg
     */
    initialize(wysiwyg: WysiwygInterface): void;
    /**
     * Called when tinymce is focused
     */
    private onFocus;
    /**
     * Called when tinymce is blurred
     */
    private onBlur;
  }
}
declare module "Magento_PageBuilder/js/content-type/block/preview" {
  /// <reference types="knockout" />
  import ContentTypeInterface from "Magento_PageBuilder/js/content-type";
  import ContentTypeConfigInterface from "Magento_PageBuilder/js/content-type-config.types";
  import { OptionsInterface } from "Magento_PageBuilder/js/content-type-menu/option.types";
  import { DataObject } from "Magento_PageBuilder/js/data-store";
  import ObservableUpdater from "Magento_PageBuilder/js/content-type/observable-updater";
  import BasePreview from "Magento_PageBuilder/js/content-type/preview";

  export default class Preview extends BasePreview {
    displayingBlockPreview: KnockoutObservable<boolean>;
    loading: KnockoutObservable<boolean>;
    placeholderText: KnockoutObservable<string>;
    element: HTMLElement;
    protected messages: {
      NOT_SELECTED: string;
      UNKNOWN_ERROR: string;
    };
    private lastBlockId;
    private lastTemplate;
    private lastRenderedHtml;
    /**
     * @inheritdoc
     */
    constructor(
      contentType: ContentTypeInterface,
      config: ContentTypeConfigInterface,
      observableUpdater: ObservableUpdater
    );
    /**
     * Return an array of options
     *
     * @returns {OptionsInterface}
     */
    retrieveOptions(): OptionsInterface;
    /**
     * Runs the widget initializer for each configured widget
     */
    initializeWidgets(element: HTMLElement): void;
    /**
     * Updates the view state using the data provided
     * @param {DataObject} data
     */
    processBlockData(data: DataObject): void;
    /**
     * @inheritdoc
     */
    protected afterObservablesUpdated(): void;
    /**
     * Display preview placeholder
     *
     * @param {DataObject} data
     * @param {string} identifierName
     */
    protected displayPreviewPlaceholder(
      data: DataObject,
      identifierName: string
    ): void;
    /**
     *
     * @param {DataObject} data
     * @param {string} identifierName
     * @param {string} labelKey
     */
    protected processRequest(
      data: DataObject,
      identifierName: string,
      labelKey: string
    ): void;
    /**
     * Toggle display of block preview.  If showing block preview, add hidden mode to PB preview.
     * @param {boolean} isShow
     */
    private showBlockPreview;
  }
}
declare module "Magento_PageBuilder/js/mass-converter/widget-directive-abstract" {
  import ConverterInterface, {
    ConverterConfigInterface,
    ConverterDataInterface
  } from "Magento_PageBuilder/js/mass-converter/converter-interface";
  export default class WidgetDirectiveAbstract implements ConverterInterface {
    /**
     * Convert value to internal format
     *
     * @param {ConverterDataInterface} data
     * @param {ConverterConfigInterface} config
     * @returns {WidgetDirectiveAttributes}
     */
    fromDom(
      data: ConverterDataInterface,
      config: ConverterConfigInterface
    ): WidgetDirectiveAttributes;
    /**
     * Convert value to knockout format
     *
     * @param {ConverterDataInterface} data
     * @param {ConverterConfigInterface} config
     * @returns {object}
     */
    toDom(
      data: ConverterDataInterface,
      config: ConverterConfigInterface
    ): object;
    /**
     * Build the directive string using the supplies attributes
     *
     * @param {object} attributes
     * @returns {string}
     */
    protected buildDirective(attributes: {
      [key: string]: string | number;
    }): string;
    /**
     * @param {string} attributes
     * @return {Object}
     */
    protected parseAttributesString(attributes: string): object;
    /**
     * @param {Object} attributes
     * @return {string}
     */
    protected createAttributesString(attributes: {
      [key: string]: string | number;
    }): string;
  }
  export interface WidgetDirectiveAttributes {
    [key: string]: any;
  }
}
declare module "Magento_PageBuilder/js/content-type/block/mass-converter/widget-directive" {
  import {
    ConverterConfigInterface,
    ConverterDataInterface
  } from "Magento_PageBuilder/js/mass-converter/converter-interface";
  import BaseWidgetDirective from "Magento_PageBuilder/js/mass-converter/widget-directive-abstract";
  /**
   * Enables the settings of the content type to be stored as a widget directive.
   *
   * @api
   */
  export default class WidgetDirective extends BaseWidgetDirective {
    /**
     * Convert value to internal format
     *
     * @param {object} data
     * @param {object} config
     * @returns {object}
     */
    fromDom(
      data: ConverterDataInterface,
      config: ConverterConfigInterface
    ): object;
    /**
     * Convert value to knockout format
     *
     * @param {object} data
     * @param {object} config
     * @returns {object}
     */
    toDom(
      data: ConverterDataInterface,
      config: ConverterConfigInterface
    ): object;
  }
}
declare module "Magento_PageBuilder/js/content-type-menu/conditional-remove-option" {
  import Option from "Magento_PageBuilder/js/content-type-menu/option";
  import OptionInterface, {
    OptionConfigInterface
  } from "Magento_PageBuilder/js/content-type-menu/option.types";
  export default class ConditionalRemoveOption extends Option
    implements OptionInterface {
    /**
     * @param {OptionConfigInterface} config
     */
    constructor(config: OptionConfigInterface);
  }
}
declare module "Magento_PageBuilder/js/binding/sortable-children.types" {
  /// <reference types="jqueryui" />
  /// <reference types="jquery" />
  import ContentTypeCollectionInterface from "Magento_PageBuilder/js/content-type-collection.types";

  export interface PreviewSortableSortUpdateEventParams {
    instance: ContentTypeCollectionInterface;
    newPosition: number;
    originalPosition: number;
    ui: JQueryUI.SortableUIParams;
    event: JQueryEventObject;
  }

  export interface PlaceholderOptionsInterface {
    element: (clone: JQuery) => JQuery;
    update: () => boolean;
  }

  export interface SortableOptionsInterface extends JQueryUI.SortableOptions {
    placeholder?: any | string | PlaceholderOptionsInterface;
  }
}
declare module "Magento_PageBuilder/js/utils/delay-until" {
  /**
   * Delay until a condition is met
   *
   * @param {() => void} callback
   * @param {() => boolean} condition
   * @param {number} interval
   */
  export default function delayUntil(
    callback: () => void,
    condition: () => boolean,
    interval?: number
  ): void;
}
declare module "Magento_PageBuilder/js/content-type/buttons/preview" {
  /// <reference types="knockout" />
  import { SortableOptionsInterface } from "Magento_PageBuilder/js/binding/sortable-children.types";
  import ContentTypeCollectionInterface from "Magento_PageBuilder/js/content-type-collection.types";
  import ContentTypeConfigInterface from "Magento_PageBuilder/js/content-type-config.types";
  import { OptionsInterface } from "Magento_PageBuilder/js/content-type-menu/option.types";
  import ObservableUpdater from "Magento_PageBuilder/js/content-type/observable-updater";
  import PreviewCollection from "Magento_PageBuilder/js/content-type/preview-collection";

  export default class Preview extends PreviewCollection {
    focusedButton: KnockoutObservable<number>;
    private debouncedResizeHandler;
    /**
     * @param {ContentTypeCollectionInterface} contentType
     * @param {ContentTypeConfigInterface} config
     * @param {ObservableUpdater} observableUpdater
     */
    constructor(
      contentType: ContentTypeCollectionInterface,
      config: ContentTypeConfigInterface,
      observableUpdater: ObservableUpdater
    );
    /**
     * Bind events
     */
    bindEvents(): void;
    /**
     * Return an array of options
     *
     * @returns {OptionsInterface}
     */
    retrieveOptions(): OptionsInterface;
    /**
     * Add button-item to buttons children array
     */
    addButton(): void;
    /**
     * Get the sortable options for the buttons sorting
     *
     * @param {string} orientation
     * @param {string} tolerance
     * @returns {JQueryUI.Sortable}
     */
    getSortableOptions(
      orientation?: string,
      tolerance?: string
    ): SortableOptionsInterface;
    /**
     * Resize width of all child buttons. Dependently make them the same width if configured.
     */
    private resizeChildButtons;
    /**
     * Find the largest button width for calculating same size value.
     *
     * @param {JQuery} buttonItems
     * @returns {number}
     */
    private findLargestButtonWidth;
    /**
     * Manually calculate button width using content plus box widths (padding, border)
     *
     * @param {JQuery} buttonItem
     * @returns {number}
     */
    private calculateButtonWidth;
  }
}
declare module "Magento_PageBuilder/js/content-type/button-item/preview" {
  /// <reference types="jquery" />
  import { OptionsInterface } from "Magento_PageBuilder/js/content-type-menu/option.types";
  import BasePreview from "Magento_PageBuilder/js/content-type/preview";

  export default class Preview extends BasePreview {
    buttonPlaceholder: string;
    /**
     * Use the conditional remove to disable the option when the parent has a single child
     *
     * @returns {OptionsInterface}
     */
    retrieveOptions(): OptionsInterface;
    /**
     * Force the focus on the clicked button
     *
     * @param {number} index
     * @param {JQueryEventObject} event
     */
    onClick(index: number, event: JQueryEventObject): void;
    /**
     * Handle on focus out events, when the button item is focused out we need to set our focusedButton record on the
     * buttons preview item to null. If we detect this focus out event is to focus into another button we need to ensure
     * we update the record appropriately.
     *
     * @param {number} index
     * @param {Event} event
     */
    onFocusOut(index: number, event: JQueryEventObject): void;
    /**
     * On focus in set the focused button
     *
     * @param {number} index
     * @param {Event} event
     */
    onFocusIn(index: number, event: Event): void;
    /**
     * If the button is displayed we need to show the options menu on hover
     *
     * @param {Preview} context
     * @param {Event} event
     */
    onButtonMouseOver(context: Preview, event: Event): void;
    /**
     * If the button is displayed we need to hide the options menu on mouse out
     *
     * @param {Preview} context
     * @param {Event} event
     */
    onButtonMouseOut(context: Preview, event: Event): void;
  }
}
declare module "Magento_PageBuilder/js/content-type/button-item/converter/style/display" {
  import ConverterInterface from "Magento_PageBuilder/js/converter/converter-interface";
  import { DataObject } from "Magento_PageBuilder/js/data-store";

  export default class Display implements ConverterInterface {
    /**
     * Convert value to internal format
     *
     * @param value string
     * @returns {string | object}
     */
    fromDom(value: string): boolean;
    /**
     * Convert value to knockout format, if buttons are displayed they should be inline block
     *
     * @param {string} name
     * @param {DataObject} data
     * @returns {string}
     */
    toDom(name: string, data: DataObject): string;
  }
}
declare module "Magento_PageBuilder/js/content-type/buttons/converter/style/display/flex" {
  import ConverterInterface from "Magento_PageBuilder/js/converter/converter-interface";
  import { DataObject } from "Magento_PageBuilder/js/data-store";

  export default class Flex implements ConverterInterface {
    /**
     * Convert value to internal format
     *
     * @param value string
     * @returns {string | object}
     */
    fromDom(value: string): boolean;
    /**
     * Convert value to knockout format, if buttons are displayed they should be inline block
     *
     * @param {string} name
     * @param {DataObject} data
     * @returns {string}
     */
    toDom(name: string, data: DataObject): string;
  }
}
declare module "Magento_PageBuilder/js/content-type/buttons/converter/style/display/inline-block" {
  import ConverterInterface from "Magento_PageBuilder/js/converter/converter-interface";
  import { DataObject } from "Magento_PageBuilder/js/data-store";

  export default class InlineBlock implements ConverterInterface {
    /**
     * Convert value to internal format
     *
     * @param value string
     * @returns {string | object}
     */
    fromDom(value: string): boolean;
    /**
     * Convert value to knockout format, if buttons are displayed they should be inline block
     *
     * @param {string} name
     * @param {DataObject} data
     * @returns {string}
     */
    toDom(name: string, data: DataObject): string;
  }
}
declare module "Magento_PageBuilder/js/content-type/buttons/converter/style/preview/display/flex" {
  import ConverterInterface from "Magento_PageBuilder/js/converter/converter-interface";
  import { DataObject } from "Magento_PageBuilder/js/data-store";

  export default class Display implements ConverterInterface {
    /**
     * Ensure the display none property doesn't persist to the preview
     *
     * @param value string
     * @returns {string | object}
     */
    fromDom(value: string): string | object;
    /**
     * Ensure the display none property doesn't persist to the preview
     *
     * @param name string
     * @param data Object
     * @returns {string}
     */
    toDom(name: string, data: DataObject): string;
  }
}
declare module "Magento_PageBuilder/js/content-type/column/column-events.types" {
  import ContentTypeCollectionInterface from "Magento_PageBuilder/js/content-type-collection.types";
  import ColumnGroupPreview from "Magento_PageBuilder/js/content-type/column-group/preview";
  import ColumnPreview from "Magento_PageBuilder/js/content-type/column/preview";

  export interface BindResizeHandleEventParamsInterface {
    column: ContentTypeCollectionInterface<ColumnPreview>;
    handle: JQuery;
    columnGroup: ContentTypeCollectionInterface<ColumnGroupPreview>;
  }

  export interface InitElementEventParamsInterface {
    column: ContentTypeCollectionInterface<ColumnPreview>;
    element: JQuery;
    columnGroup: ContentTypeCollectionInterface<ColumnGroupPreview>;
  }
}
declare module "Magento_PageBuilder/js/content-type/column-group/drag-and-drop" {
  import ContentTypeCollectionInterface from "Magento_PageBuilder/js/content-type-collection.types";
  import ColumnPreview from "Magento_PageBuilder/js/content-type/column/preview";
  import ColumnGroupPreview from "Magento_PageBuilder/js/content-type/column-group/preview";
  /**
   * Calculate the drop positions of a column group
   *
   * @param {ContentTypeCollectionInterface} group
   * @returns {any[]}
   */
  export function calculateDropPositions(
    group: ContentTypeCollectionInterface<ColumnGroupPreview>
  ): DropPosition[];
  export interface DropPosition {
    left: number;
    right: number;
    insertIndex: number;
    placement: string;
    affectedColumn: ContentTypeCollectionInterface<ColumnPreview>;
    canShrink: boolean;
  }
}
declare module "Magento_PageBuilder/js/content-type/column-group/factory" {
  import ContentTypeCollectionInterface from "Magento_PageBuilder/js/content-type-collection.types";
  import ColumnPreview from "Magento_PageBuilder/js/content-type/column/preview";
  /**
   * Create a column and add it to it's column group
   *
   * @param {ContentTypeCollectionInterface} columnGroup
   * @param {number} width
   * @param {number} index
   * @returns {Promise<ContentTypeCollectionInterface>}
   */
  export function createColumn(
    columnGroup: ContentTypeCollectionInterface,
    width: number,
    index?: number
  ): Promise<ContentTypeCollectionInterface<ColumnPreview>>;
}
declare module "Magento_PageBuilder/js/content-type/column-group/registry" {
  import ContentTypeCollectionInterface from "Magento_PageBuilder/js/content-type-collection.types";
  import ColumnPreview from "Magento_PageBuilder/js/content-type/column/preview";
  /**
   * Retrieve the drag column from the registry
   *
   * @returns {ContentTypeCollectionInterface}
   */
  export function getDragColumn(): ContentTypeCollectionInterface<
    ColumnPreview
  >;
  /**
   * Remove the drag column reference
   */
  export function removeDragColumn(): void;
  /**
   * Set the drag column in the registry
   *
   * @param {ContentTypeCollectionInterface<ColumnPreview>} column
   */
  export function setDragColumn(
    column: ContentTypeCollectionInterface<ColumnPreview>
  ): void;
}
declare module "Magento_PageBuilder/js/content-type/column-group/preview" {
  /// <reference types="knockout" />
  import ColumnGroup from "Magento_PageBuilder/js/content-type-collection";
  import ContentTypeCollectionInterface from "Magento_PageBuilder/js/content-type-collection.types";
  import ContentTypeConfigInterface from "Magento_PageBuilder/js/content-type-config.types";
  import { default as ColumnGroupPreview } from "Magento_PageBuilder/js/content-type/column-group/preview";
  import ColumnPreview from "Magento_PageBuilder/js/content-type/column/preview";
  import Resize from "Magento_PageBuilder/js/content-type/column/resize";
  import ObservableUpdater from "Magento_PageBuilder/js/content-type/observable-updater";
  import PreviewCollection from "Magento_PageBuilder/js/content-type/preview-collection";
  import { DropPosition } from "Magento_PageBuilder/js/content-type/column-group/drag-and-drop";

  export default class Preview extends PreviewCollection {
    contentType: ContentTypeCollectionInterface<ColumnGroupPreview>;
    resizing: KnockoutObservable<boolean>;
    hasEmptyChild: KnockoutComputed<boolean>;
    gridSize: KnockoutObservable<number>;
    gridSizeInput: KnockoutObservable<number>;
    gridSizeArray: KnockoutObservableArray<any[]>;
    gridSizeError: KnockoutObservable<string>;
    gridSizeMax: KnockoutObservable<number>;
    gridFormOpen: KnockoutObservable<boolean>;
    gridChange: KnockoutObservable<boolean>;
    gridToolTipOverFlow: KnockoutObservable<boolean>;
    private dropPlaceholder;
    private movePlaceholder;
    private groupElement;
    private resizeGhost;
    private resizeColumnInstance;
    private resizeColumnWidths;
    private resizeMaxGhostWidth;
    private resizeMouseDown;
    private resizeLeftLastColumnShrunk;
    private resizeRightLastColumnShrunk;
    private resizeLastPosition;
    private resizeLastColumnInPair;
    private resizeHistory;
    private dropOverElement;
    private dropPositions;
    private dropPosition;
    private movePosition;
    private groupPositionCache;
    private resizeUtils;
    private gridSizeHistory;
    private interactionLevel;
    private startDragEvent;
    /**
     *
     * @param {ContentTypeCollection} contentType
     * @param {ContentTypeConfigInterface} config
     * @param {ObservableUpdater} observableUpdater
     */
    constructor(
      contentType: ColumnGroup,
      config: ContentTypeConfigInterface,
      observableUpdater: ObservableUpdater
    );
    /**
     * Retrieve the resize utils
     *
     * @returns {Resize}
     */
    getResizeUtils(): Resize;
    /**
     * Handle a new column being dropped into the group
     *
     * @param {DropPosition} dropPosition
     */
    onNewColumnDrop(dropPosition: DropPosition): void;
    /**
     * Handle an existing column being dropped into a new column group
     *
     * @param {DropPosition} movePosition
     */
    onExistingColumnDrop(movePosition: DropPosition): void;
    /**
     * Handle a column being sorted into a new position in the group
     *
     * @param {ContentTypeCollectionInterface<ColumnPreview>} column
     * @param {number} newIndex
     */
    onColumnSort(
      column: ContentTypeCollectionInterface<ColumnPreview>,
      newIndex: number
    ): void;
    /**
     * Handle a column being resized
     *
     * @param {ContentTypeCollectionInterface<ColumnPreview>} column
     * @param {number} width
     * @param {ContentTypeCollectionInterface<ColumnPreview>} adjustedColumn
     */
    onColumnResize(
      column: ContentTypeCollectionInterface<ColumnPreview>,
      width: number,
      adjustedColumn: ContentTypeCollectionInterface<ColumnPreview>
    ): void;
    /**
     * Init the droppable & resizing interactions
     *
     * @param group
     */
    bindInteractions(group: Element): void;
    /**
     * Init the drop placeholder
     *
     * @param {Element} element
     */
    bindDropPlaceholder(element: Element): void;
    /**
     * Init the move placeholder
     *
     * @param {Element} element
     */
    bindMovePlaceholder(element: Element): void;
    /**
     * Retrieve the ghost element from the template
     *
     * @param {Element} ghost
     */
    bindGhost(ghost: Element): void;
    /**
     * Register a resize handle within a child column
     *
     * @param {ContentTypeCollectionInterface<ColumnPreview>} column
     * @param {JQuery} handle
     */
    registerResizeHandle(
      column: ContentTypeCollectionInterface<ColumnPreview>,
      handle: JQuery
    ): void;
    /**
     * Bind draggable instances to the child columns
     *
     * @param {ContentTypeCollectionInterface<ColumnPreview>} column
     */
    bindDraggable(column: ContentTypeCollectionInterface<ColumnPreview>): void;
    /**
     * Update the grid size on enter or blur of the input
     */
    updateGridSize(): void;
    /**
     * On grid input key up, check if the enter key was used and submit
     *
     * @param {Preview} context
     * @param {KeyboardEvent} event
     */
    onGridInputKeyUp(context: Preview, event: KeyboardEvent): void;
    /**
     * On grid input blur, update the grid size
     */
    onGridInputBlur(): void;
    /**
     * Hide grid size panel on focus out
     */
    closeGridForm(): void;
    /**
     * Show grid size panel on click and start interaction
     */
    openGridForm(): void;
    /**
     * Handle a click on the document closing the grid form
     *
     * @param {Event} event
     */
    private onDocumentClick;
    /**
     * Set columns in the group as resizing
     *
     * @param {Array<ContentTypeCollectionInterface<ColumnPreview>>} columns
     */
    private setColumnsAsResizing;
    /**
     * Unset resizing flag on all child columns
     */
    private unsetResizingColumns;
    /**
     * End all current interactions
     */
    private endAllInteractions;
    /**
     * Init the resizing events on the group
     *
     * @param {JQuery} group
     */
    private initMouseMove;
    /**
     * Handle the mouse up action, either adding a new column or moving an existing
     */
    private handleMouseUp;
    /**
     * Does the current event intersect with the group?
     *
     * @param {JQueryEventObject} event
     * @param {GroupPositionCache} groupPosition
     * @returns {boolean}
     */
    private eventIntersectsGroup;
    /**
     * Cache the groups positions
     *
     * @param {JQuery} group
     * @returns {GroupPositionCache}
     */
    private getGroupPosition;
    /**
     * Record the resizing history for this action
     *
     * @param {string} usedHistory
     * @param {string} direction
     * @param {ContentTypeCollectionInterface<ColumnPreview>} adjustedColumn
     * @param {string} modifyColumnInPair
     */
    private recordResizeHistory;
    /**
     * Handle the resizing on mouse move, we always resize a pair of columns at once
     *
     * @param {JQueryEventObject} event
     * @param {JQuery} group
     * @param {GroupPositionCache} groupPosition
     */
    private onResizingMouseMove;
    /**
     * Handle a column being dragged around the group
     *
     * @param {JQueryEventObject} event
     * @param {JQuery} group
     * @param {GroupPositionCache} groupPosition
     */
    private onDraggingMouseMove;
    /**
     * Handle mouse move events on when dropping elements
     *
     * @param {JQueryEventObject} event
     * @param {JQuery} group
     * @param {GroupPositionCache} groupPosition
     */
    private onDroppingMouseMove;
    /**
     * Init the droppable functionality for new columns
     *
     * @param {JQuery} group
     */
    private initDroppable;
    /**
     * Spread any empty space across the other columns when a column is removed
     *
     * @param {number} removedIndex
     */
    private spreadWidth;
    /**
     * Remove self if we contain no children
     */
    private removeIfEmpty;
    /**
     * Record the grid resize operation into a history for later restoration
     *
     * @param {number} newGridSize
     */
    private recordGridResize;
  }
  export interface GroupPositionCache {
    left: number;
    top: number;
    width: number;
    height: number;
    outerWidth: number;
    outerHeight: number;
  }
  export interface ResizeHistory {
    left: ResizeHistoryItem[];
    right: ResizeHistoryItem[];
    [key: string]: ResizeHistoryItem[];
  }
  export interface ResizeHistoryItem {
    adjustedColumn: ContentTypeCollectionInterface<ColumnPreview>;
    modifyColumnInPair: string;
  }
  export interface MaxGhostWidth {
    left: number;
    right: number;
  }
  export interface ColumnWidth {
    name: string;
    position: number;
    width: number;
    forColumn: string;
  }
}
declare module "Magento_PageBuilder/js/content-type/column/resize" {
  import ContentTypeCollectionInterface from "Magento_PageBuilder/js/content-type-collection.types";
  import {
    ColumnWidth,
    GroupPositionCache,
    MaxGhostWidth,
    ResizeHistory
  } from "Magento_PageBuilder/js/content-type/column-group/preview";
  import ColumnPreview from "Magento_PageBuilder/js/content-type/column/preview";
  export default class Resize {
    private columnGroup;
    constructor(columnGroup: ContentTypeCollectionInterface);
    /**
     * Get the grid size for this columnGroup
     *
     * @returns {number}
     */
    getGridSize(): number;
    /**
     * Get the smallest column width possible
     *
     * @param {number} gridSize
     * @returns {number}
     */
    getSmallestColumnWidth(gridSize?: number): number;
    /**
     * Get an accepted column width to resolve rounding issues, e.g. turn 49.995% into 50%
     *
     * @param {string} width
     * @param {number} gridSize
     * @returns {number}
     */
    getAcceptedColumnWidth(width: string, gridSize?: number): number;
    /**
     * Return the width of the column
     *
     * @param {ContentTypeCollectionInterface<ColumnPreview>} column
     * @returns {number}
     */
    getColumnWidth(
      column: ContentTypeCollectionInterface<ColumnPreview>
    ): number;
    /**
     * Get the total width of all columns in the group
     *
     * @returns {number}
     */
    getColumnsWidth(): number;
    /**
     * Determine the pixel position of every column that can be created within the group
     *
     * @param {ContentTypeCollectionInterface<ColumnPreview>} column
     * @param {GroupPositionCache} groupPosition
     * @returns {ColumnWidth[]}
     */
    determineColumnWidths(
      column: ContentTypeCollectionInterface<ColumnPreview>,
      groupPosition: GroupPositionCache
    ): ColumnWidth[];
    /**
     * Find a column which can be shrunk for the current resize action
     *
     * @param {ContentTypeCollectionInterface<ColumnPreview>} column
     * @param {"left" | "right"} direction
     * @returns {ContentTypeCollectionInterface<ColumnPreview>}
     */
    findShrinkableColumnForResize(
      column: ContentTypeCollectionInterface<ColumnPreview>,
      direction: "left" | "right"
    ): ContentTypeCollectionInterface<ColumnPreview>;
    /**
     * Find a shrinkable column outwards from the current column
     *
     * @param {ContentTypeCollectionInterface<ColumnPreview>} column
     * @returns {ContentTypeCollectionInterface<ColumnPreview>}
     */
    findShrinkableColumn(
      column: ContentTypeCollectionInterface<ColumnPreview>
    ): ContentTypeCollectionInterface<ColumnPreview>;
    /**
     * Calculate the ghost size for the resizing action
     *
     * @param {GroupPositionCache} groupPosition
     * @param {number} currentPos
     * @param {ContentTypeCollectionInterface<ColumnPreview>} column
     * @param {string} modifyColumnInPair
     * @param {MaxGhostWidth} maxGhostWidth
     * @returns {number}
     */
    calculateGhostWidth(
      groupPosition: GroupPositionCache,
      currentPos: number,
      column: ContentTypeCollectionInterface<ColumnPreview>,
      modifyColumnInPair: string,
      maxGhostWidth: MaxGhostWidth
    ): number;
    /**
     * Determine which column in the group should be adjusted for the current resize action
     *
     * @param {number} currentPos
     * @param {ContentTypeCollectionInterface<ColumnPreview>} column
     * @param {ResizeHistory} history
     * @returns {[ContentTypeCollectionInterface<ColumnPreview>, string, string]}
     */
    determineAdjustedColumn(
      currentPos: number,
      column: ContentTypeCollectionInterface<ColumnPreview>,
      history: ResizeHistory
    ): [ContentTypeCollectionInterface<ColumnPreview>, string, string];
    /**
     * Resize a column to a specific width
     *
     * @param {ContentTypeCollectionInterface<Preview>} column
     * @param {number} width
     * @param {ContentTypeCollectionInterface<Preview>} shrinkableColumn
     */
    resizeColumn(
      column: ContentTypeCollectionInterface<ColumnPreview>,
      width: number,
      shrinkableColumn: ContentTypeCollectionInterface<ColumnPreview>
    ): void;
    /**
     * Determine if the grid supports the new proposed grid size
     *
     * @param {ContentTypeCollectionInterface<Preview>} column
     * @param {number} newWidth
     * @param {ContentTypeCollectionInterface<Preview>} shrinkableColumn
     * @param {number} shrinkableColumnNewWidth
     * @returns {boolean}
     */
    private gridSupportsResize;
  }
  /**
   * Retrieve the index of the column within it's group
   *
   * @param {ContentTypeCollectionInterface<ColumnPreview>} column
   * @returns {number}
   */
  export function getColumnIndexInGroup(
    column: ContentTypeCollectionInterface<ColumnPreview>
  ): number;
  /**
   * Retrieve the adjacent column based on a direction of +1 or -1
   *
   * @param {ContentTypeCollectionInterface<Preview>} column
   * @param {"+1" | "-1"} direction
   * @returns {ContentTypeCollectionInterface<Preview>}
   */
  export function getAdjacentColumn(
    column: ContentTypeCollectionInterface<ColumnPreview>,
    direction: "+1" | "-1"
  ): ContentTypeCollectionInterface<ColumnPreview>;
  /**
   * Determine the max ghost width based on the calculated columns
   *
   * @param {ColumnWidth[]} columnWidths
   * @returns {MaxGhostWidth}
   */
  export function determineMaxGhostWidth(
    columnWidths: ColumnWidth[]
  ): MaxGhostWidth;
  /**
   * Return the column width to 8 decimal places if it's not a whole number
   *
   * @param {number} width
   * @returns {string}
   */
  export function getRoundedColumnWidth(width: number): number;
  /**
   * Compare if two numbers are within a certain threshold of each other
   *
   * comparator(10,11,2) => true
   * comparator(1.1,1.11,0.5) => true
   *
   * @param {number} num1
   * @param {number} num2
   * @param {number} threshold
   * @returns {boolean}
   */
  export function comparator(
    num1: number,
    num2: number,
    threshold: number
  ): boolean;
  /**
   * Update the width of a column
   *
   * @param {ContentTypeCollectionInterface<ColumnPreview>} column
   * @param {number} width
   */
  export function updateColumnWidth(
    column: ContentTypeCollectionInterface<ColumnPreview>,
    width: number
  ): void;
}
declare module "Magento_PageBuilder/js/content-type/column-group/grid-size" {
  import ContentTypeCollectionInterface from "Magento_PageBuilder/js/content-type-collection.types";
  import ColumnGroupPreview from "Magento_PageBuilder/js/content-type/column-group/preview";
  /**
   * Retrieve default  grid size
   *
   * @returns {number}
   */
  export function getDefaultGridSize(): number;
  /**
   * Retrieve the max grid size
   *
   * @returns {number}
   */
  export function getMaxGridSize(): number;
  /**
   * Apply the new grid size, adjusting the existing columns as needed.
   *
   * Rules for resizing the grid:
   *  - The grid size can be increased up to the configured maximum value.
   *  - The grid size can be decreased only if the number of non-empty columns is less than or equal to the new size.
   *  - If the new grid size is less than the number of columns currently in the grid, empty columns will be deleted
   *    to accommodate the new size.
   *
   * @param {ContentTypeCollectionInterface<Preview>} columnGroup
   * @param {number} newGridSize
   * @param {Map<number, number[]>} gridSizeHistory
   */
  export function resizeGrid(
    columnGroup: ContentTypeCollectionInterface<ColumnGroupPreview>,
    newGridSize: number,
    gridSizeHistory: Map<number, number[]>
  ): void;
  export class GridSizeError extends Error {
    constructor(m: string);
  }
}
declare module "Magento_PageBuilder/js/content-type/column/preview" {
  /// <reference types="knockout" />
  import ContentTypeCollectionInterface from "Magento_PageBuilder/js/content-type-collection.types";
  import ContentTypeConfigInterface from "Magento_PageBuilder/js/content-type-config.types";
  import { OptionsInterface } from "Magento_PageBuilder/js/content-type-menu/option.types";
  import ContentTypeInterface from "Magento_PageBuilder/js/content-type.types";
  import ObservableUpdater from "Magento_PageBuilder/js/content-type/observable-updater";
  import PreviewCollection from "Magento_PageBuilder/js/content-type/preview-collection";

  export default class Preview extends PreviewCollection {
    resizing: KnockoutObservable<boolean>;
    element: JQuery;
    /**
     * Fields that should not be considered when evaluating whether an object has been configured.
     *
     * @see {Preview.isConfigured}
     * @type {[string]}
     */
    protected fieldsToIgnoreOnRemove: string[];
    /**
     * @param {ContentTypeInterface} contentType
     * @param {ContentTypeConfigInterface} config
     * @param {ObservableUpdater} observableUpdater
     */
    constructor(
      contentType: ContentTypeInterface,
      config: ContentTypeConfigInterface,
      observableUpdater: ObservableUpdater
    );
    /**
     * Bind events
     */
    bindEvents(): void;
    /**
     * Make a reference to the element in the column
     *
     * @param element
     */
    initColumn(element: Element): void;
    /**
     * Return an array of options
     *
     * @returns {OptionsInterface}
     */
    retrieveOptions(): OptionsInterface;
    /**
     * Init the resize handle for the resizing functionality
     *
     * @param handle
     */
    bindResizeHandle(handle: Element): void;
    /**
     * Wrap the current column in a group if it not in a column-group
     *
     * @returns {Promise<ContentTypeCollectionInterface>}
     */
    createColumnGroup(): Promise<ContentTypeCollectionInterface>;
    /**
     * Duplicate a child of the current instance
     *
     * @param {ContentTypeCollectionInterface<Preview>} contentType
     * @param {boolean} autoAppend
     * @returns {Promise<ContentTypeCollectionInterface> | void}
     */
    clone(
      contentType: ContentTypeCollectionInterface<Preview>,
      autoAppend?: boolean
    ): Promise<ContentTypeCollectionInterface> | void;
    /**
     * Update the display label for the column
     */
    updateDisplayLabel(): void;
    /**
     * Syncs the column-width-* class on the children-wrapper with the current width to the nearest tenth rounded up
     */
    updateColumnWidthClass(): void;
    /**
     * Fire the mount event for content types
     *
     * @param {ContentTypeInterface[]} contentTypes
     */
    private fireMountEvent;
    /**
     * Delegate trigger call on children elements.
     */
    private triggerChildren;
  }
}
declare module "Magento_PageBuilder/js/content-type/divider/preview" {
  import { OptionsInterface } from "Magento_PageBuilder/js/content-type-menu/option.types";
  import BasePreview from "Magento_PageBuilder/js/content-type/preview";

  export default class Preview extends BasePreview {
    /**
     * Return an array of options
     *
     * @returns {OptionsInterface}
     */
    retrieveOptions(): OptionsInterface;
  }
}
declare module "Magento_PageBuilder/js/content-type/heading/preview" {
  import ContentTypeConfigInterface from "Magento_PageBuilder/js/content-type-config.types";
  import { OptionsInterface } from "Magento_PageBuilder/js/content-type-menu/option.types";
  import Toolbar, {
    ContentTypeToolbarPreviewInterface
  } from "Magento_PageBuilder/js/content-type-toolbar";
  import ContentTypeInterface from "Magento_PageBuilder/js/content-type.types";
  import ObservableUpdater from "Magento_PageBuilder/js/content-type/observable-updater";
  import BasePreview from "Magento_PageBuilder/js/content-type/preview";

  export default class Preview extends BasePreview
    implements ContentTypeToolbarPreviewInterface {
    toolbar: Toolbar;
    private element;
    /**
     * @param {ContentTypeInterface} contentType
     * @param {ContentTypeConfigInterface} config
     * @param {ObservableUpdater} observableUpdater
     */
    constructor(
      contentType: ContentTypeInterface,
      config: ContentTypeConfigInterface,
      observableUpdater: ObservableUpdater
    );
    /**
     * Return an array of options
     *
     * @returns {OptionsInterface}
     */
    retrieveOptions(): OptionsInterface;
    /**
     * On render init the tabs widget
     *
     * @param {Element} element
     */
    afterRender(element: Element): void;
    bindEvents(): void;
    /**
     * Build and return the tool bar options for heading
     *
     * @returns {OptionInterface[]}
     */
    private getToolbarOptions;
  }
}
declare module "Magento_PageBuilder/js/content-type/html/preview" {
  import { OptionsInterface } from "Magento_PageBuilder/js/content-type-menu/option.types";
  import BasePreview from "Magento_PageBuilder/js/content-type/preview";

  export default class Preview extends BasePreview {
    /**
     * Return an array of options
     *
     * @returns {OptionsInterface}
     */
    retrieveOptions(): OptionsInterface;
  }
}
declare module "Magento_PageBuilder/js/content-type/image/preview" {
  import { OptionsInterface } from "Magento_PageBuilder/js/content-type-menu/option.types";
  import Uploader from "Magento_PageBuilder/js/uploader";
  import BasePreview from "Magento_PageBuilder/js/content-type/preview";

  export default class Preview extends BasePreview {
    /**
     * Return an array of options
     *
     * @returns {OptionsInterface}
     */
    retrieveOptions(): OptionsInterface;
    /**
     * Get registry callback reference to uploader UI component
     *
     * @returns {Uploader}
     */
    getUploader(): Uploader;
    /**
     * @inheritDoc
     */
    protected bindEvents(): void;
  }
}
declare module "Magento_PageBuilder/js/content-type/map/preview" {
  /// <reference types="knockout" />
  import { OptionsInterface } from "Magento_PageBuilder/js/content-type-menu/option.types";
  import BasePreview from "Magento_PageBuilder/js/content-type/preview";

  export default class Preview extends BasePreview {
    apiKeyValid: KnockoutObservable<boolean>;
    apiKeyErrorMessage: string;
    private element;
    private mapElement;
    /**
     * Return an array of options
     *
     * @returns {OptionsInterface}
     */
    retrieveOptions(): OptionsInterface;
    /**
     * Open edit menu on map content type drop with a delay of 300ms
     */
    bindEvents(): void;
    /**
     * Renders the map and subscribe to position for updates
     *
     * @param {Element} element
     * @returns {void}
     */
    renderMap(element: Element): void;
    /**
     * Generate maps
     *
     * @param {Element} element
     * @returns {void}
     */
    private generateMap;
    /**
     * Updates map
     *
     * @returns {void}
     */
    private updateMap;
    /**
     * Get locations, center coordinates, and zoom from data.position
     *
     * @returns {Object}
     */
    private getMapData;
  }
}
declare module "Magento_PageBuilder/js/converter/location-object.types" {
  export default interface LocationObject {
    position: {
      latitude: string;
      longitude: string;
    };
  }
}
declare module "Magento_PageBuilder/js/content-type/map/converter/attribute/locations" {
  import ConverterInterface from "Magento_PageBuilder/js/converter/converter-interface";
  import { DataObject } from "Magento_PageBuilder/js/data-store";
  export default class Locations implements ConverterInterface {
    /**
     * Convert value to internal format
     *
     * @param value string
     * @returns {string | object}
     */
    fromDom(value: string): string | object;
    /**
     * Convert value to knockout format
     *
     * @param name string
     * @param data Object
     * @returns {string | object}
     */
    toDom(name: string, data: DataObject): string | object;
  }
}
declare module "Magento_PageBuilder/js/content-type/products/preview" {
  /// <reference types="knockout" />
  import ContentTypeInterface from "Magento_PageBuilder/js/content-type";
  import ContentTypeConfigInterface from "Magento_PageBuilder/js/content-type-config.types";
  import { OptionsInterface } from "Magento_PageBuilder/js/content-type-menu/option.types";
  import ObservableUpdater from "Magento_PageBuilder/js/content-type/observable-updater";
  import BasePreview from "Magento_PageBuilder/js/content-type/preview";

  export default class Preview extends BasePreview {
    displayPreview: KnockoutObservable<boolean>;
    placeholderText: KnockoutObservable<string>;
    private messages;
    /**
     * @inheritdoc
     */
    constructor(
      contentType: ContentTypeInterface,
      config: ContentTypeConfigInterface,
      observableUpdater: ObservableUpdater
    );
    /**
     * Return an array of options
     *
     * @returns {OptionsInterface}
     */
    retrieveOptions(): OptionsInterface;
    /**
     * @inheritdoc
     */
    protected afterObservablesUpdated(): void;
  }
}
declare module "Magento_PageBuilder/js/content-type/products/mass-converter/widget-directive" {
  import {
    ConverterConfigInterface,
    ConverterDataInterface
  } from "Magento_PageBuilder/js/mass-converter/converter-interface";
  import BaseWidgetDirective from "Magento_PageBuilder/js/mass-converter/widget-directive-abstract";

  export default class WidgetDirective extends BaseWidgetDirective {
    /**
     * Convert value to internal format
     *
     * @param {object} data
     * @param {object} config
     * @returns {object}
     */
    fromDom(
      data: ConverterDataInterface,
      config: ConverterConfigInterface
    ): object;
    /**
     * Convert value to knockout format
     *
     * @param {object} data
     * @param {object} config
     * @returns {object}
     */
    toDom(
      data: ConverterDataInterface,
      config: ConverterConfigInterface
    ): object;
    /**
     * @param {string} content
     * @returns {string}
     */
    private encodeWysiwygCharacters;
    /**
     * @param {string} content
     * @returns {string}
     */
    private decodeWysiwygCharacters;
  }
}
declare module "Magento_PageBuilder/js/content-type/root-container/content-type-collection" {
  import ContentTypeCollection from "Magento_PageBuilder/js/content-type-collection";

  export default class RootContainer extends ContentTypeCollection {
    /**
     * Remove a child from the observable array
     *
     * @param child
     */
    removeChild(child: any): void;
  }
}
declare module "Magento_PageBuilder/js/content-type/row/preview" {
  /// <reference types="knockout" />
  import "jarallax";
  import ContentTypeConfigInterface from "Magento_PageBuilder/js/content-type-config.types";
  import { OptionsInterface } from "Magento_PageBuilder/js/content-type-menu/option.types";
  import ContentTypeInterface from "Magento_PageBuilder/js/content-type.types";
  import ObservableUpdater from "Magento_PageBuilder/js/content-type/observable-updater";
  import PreviewCollection from "Magento_PageBuilder/js/content-type/preview-collection";

  export default class Preview extends PreviewCollection {
    getChildren: KnockoutComputed<{}>;
    wrapClass: KnockoutObservable<boolean>;
    private element;
    /**
     * Debounce and defer the init of Jarallax
     *
     * @type {(() => void) & _.Cancelable}
     */
    private buildJarallax;
    /**
     * @param {ContentTypeInterface} contentType
     * @param {ContentTypeConfigInterface} config
     * @param {ObservableUpdater} observableUpdater
     */
    constructor(
      contentType: ContentTypeInterface,
      config: ContentTypeConfigInterface,
      observableUpdater: ObservableUpdater
    );
    /**
     * Use the conditional remove to disable the option when the content type has a single child
     *
     * @returns {OptionsInterface}
     */
    retrieveOptions(): OptionsInterface;
    /**
     * Init the parallax element
     *
     * @param {Element} element
     */
    initParallax(element: Element): void;
  }
}
declare module "Magento_PageBuilder/js/property/property-reader-interface" {
  interface PropertyReaderInterface {
    /**
     * Read element data
     *
     * @param {HTMLElement} element
     * @param {string} source
     * @returns {string | object}
     */
    read(element: HTMLElement, source: string): string | object;
  }
  export default PropertyReaderInterface;
}
declare module "Magento_PageBuilder/js/property/margins" {
  import PropertyReaderInterface from "Magento_PageBuilder/js/property/property-reader-interface";

  export default class Margins implements PropertyReaderInterface {
    /**
     * Read margins from element
     *
     * @param {HTMLElement} element
     * @returns {string | object}
     */
    read(element: HTMLElement): DataObjectMargins;
  }
  export interface DataObjectMargins {
    margin?: {
      left: string;
      top: string;
      right: string;
      bottom: string;
    };
  }
}
declare module "Magento_PageBuilder/js/content-type/row/converter/style/margins" {
  import ConverterInterface from "Magento_PageBuilder/js/converter/converter-interface";
  import { DataObject } from "Magento_PageBuilder/js/data-store";
  export default class Margins implements ConverterInterface {
    /**
     * @param {string} value
     * @returns {Object | string}
     */
    fromDom(value: string): string | object;
    /**
     * Convert value to knockout format
     *
     * @param {string} name
     * @param {DataObject} data
     * @returns {string | object}
     */
    toDom(name: string, data: DataObject): string | object;
  }
}
declare module "Magento_PageBuilder/js/property/paddings" {
  import PropertyReaderInterface from "Magento_PageBuilder/js/property/property-reader-interface";

  export default class Paddings implements PropertyReaderInterface {
    /**
     * Read paddings from element
     *
     * @param {HTMLElement} element
     * @returns {string | object}
     */
    read(element: HTMLElement): DataObjectPaddings;
  }
  export interface DataObjectPaddings {
    padding?: {
      left: string;
      top: string;
      right: string;
      bottom: string;
    };
  }
}
declare module "Magento_PageBuilder/js/content-type/row/converter/style/paddings" {
  import ConverterInterface from "Magento_PageBuilder/js/converter/converter-interface";
  import { DataObject } from "Magento_PageBuilder/js/data-store";
  export default class Paddings implements ConverterInterface {
    /**
     * @param {string} value
     * @returns {Object | string}
     */
    fromDom(value: string): string | object;
    /**
     * Convert value to knockout format
     *
     * @param {string} name
     * @param {DataObject} data
     * @returns {string | object}
     */
    toDom(name: string, data: DataObject): string | object;
  }
}
declare module "Magento_PageBuilder/js/content-type/slider/preview" {
  /// <reference types="knockout" />
  /// <reference types="jquery" />
  /// <reference types="jqueryui" />
  import "slick";
  import "Magento_PageBuilder/js/binding/focus";
  import ContentTypeCollectionInterface from "Magento_PageBuilder/js/content-type-collection.types";
  import ContentTypeConfigInterface from "Magento_PageBuilder/js/content-type-config.types";
  import { OptionsInterface } from "Magento_PageBuilder/js/content-type-menu/option.types";
  import { DataObject } from "Magento_PageBuilder/js/data-store";
  import ObservableUpdater from "Magento_PageBuilder/js/content-type/observable-updater";
  import PreviewCollection from "Magento_PageBuilder/js/content-type/preview-collection";

  export default class Preview extends PreviewCollection {
    focusedSlide: KnockoutObservable<number>;
    activeSlide: KnockoutObservable<number>;
    element: HTMLElement;
    protected events: DataObject;
    private navigationElement;
    private ready;
    private childSubscribe;
    private contentTypeHeightReset;
    private mountAfterDeferred;
    private afterChildrenRenderDeferred;
    private buildSlickDebounce;
    /**
     * Define keys which when changed should not trigger the slider to be rebuilt
     *
     * @type {string[]}
     */
    private ignoredKeysForBuild;
    private previousData;
    /**
     * @param {ContentTypeCollectionInterface} contentType
     * @param {ContentTypeConfigInterface} config
     * @param {ObservableUpdater} observableUpdater
     */
    constructor(
      contentType: ContentTypeCollectionInterface,
      config: ContentTypeConfigInterface,
      observableUpdater: ObservableUpdater
    );
    /**
     * Return an array of options
     *
     * @returns {OptionsInterface}
     */
    retrieveOptions(): OptionsInterface;
    /**
     * Set an active slide for navigation dot
     *
     * @param slideIndex
     */
    setActiveSlide(slideIndex: number): void;
    /**
     * Set the focused slide
     *
     * @param {number} slideIndex
     * @param {boolean} force
     */
    setFocusedSlide(slideIndex: number, force?: boolean): void;
    /**
     * Unset focused slide on focusout event.
     *
     * @param {PreviewCollection} data
     * @param {JQueryEventObject} event
     */
    onFocusOut(data: PreviewCollection, event: JQueryEventObject): void;
    /**
     * Set reference to navigation element in template
     *
     * @param {HTMLElement} navigationElement
     */
    afterNavigationRender(navigationElement: HTMLElement): void;
    /**
     * Navigate to a slide
     *
     * @param {number} slideIndex
     * @param {boolean} dontAnimate
     * @param {boolean} force
     */
    navigateToSlide(
      slideIndex: number,
      dontAnimate?: boolean,
      force?: boolean
    ): void;
    /**
     * After child render record element
     *
     * @param {HTMLElement} element
     */
    afterChildrenRender(element: HTMLElement): void;
    /**
     * On sort start force the container height, also focus to that slide
     *
     * @param {Event} event
     * @param {JQueryUI.SortableUIParams} params
     */
    onSortStart(event: Event, params: JQueryUI.SortableUIParams): void;
    /**
     * On sort stop ensure the focused slide and the active slide are in sync, as the focus can be lost in this
     * operation
     */
    onSortStop(
      event: JQueryEventObject,
      params: JQueryUI.SortableUIParams
    ): void;
    /**
     * Add a slide into the slider
     */
    addSlide(): void;
    /**
     * Slider can not receive drops by default
     *
     * @returns {boolean}
     */
    isContainer(): boolean;
    /**
     * Slider navigation click handler.
     *
     * @param {number} index
     * @param {Preview} context
     * @param {Event} event
     */
    onControlClick(index: number, context: Preview, event: Event): void;
    /**
     * Bind events
     */
    protected bindEvents(): void;
    /**
     * Determine if the data has changed, whilst ignoring certain keys which don't require a rebuild
     *
     * @param {DataObject} previousData
     * @param {DataObject} newData
     * @returns {boolean}
     */
    private hasDataChanged;
    /**
     * Build our instance of slick
     */
    private buildSlick;
    /**
     * Take dropped element on focus.
     *
     * @param {JQueryEventObject} event
     * @param {number} index
     */
    private focusElement;
    /**
     * To ensure smooth animations we need to lock the container height
     */
    private forceContainerHeight;
    /**
     * Build the slick config object
     *
     * @returns {{autoplay: boolean; autoplaySpeed: (any | number);
     * fade: boolean; infinite: boolean; arrows: boolean; dots: boolean}}
     */
    private buildSlickConfig;
    /**
     * Fit slider in column container
     *
     * @param params
     */
    private onColumnResize;
    /**
     * Check width and add class that marks element as small
     */
    private checkWidth;
  }
}
declare module "Magento_PageBuilder/js/content-type/slide/preview" {
  /// <reference types="jquery" />
  import { OptionsInterface } from "Magento_PageBuilder/js/content-type-menu/option.types";
  import Uploader from "Magento_PageBuilder/js/uploader";
  import BasePreview from "Magento_PageBuilder/js/content-type/preview";

  export default class Preview extends BasePreview {
    buttonPlaceholder: string;
    /**
     * Wysiwyg instance
     */
    private wysiwyg;
    /**
     * The textarea element in disabled mode
     */
    private textarea;
    /**
     * The element the text content type is bound to
     */
    private element;
    /**
     * Slide flag
     */
    private slideChanged;
    /**
     * @param {HTMLElement} element
     */
    afterRenderWysiwyg(element: HTMLElement): void;
    /**
     * Set state based on overlay mouseover event for the preview
     */
    onMouseOverWrapper(): void;
    /**
     * Set state based on overlay mouseout event for the preview
     */
    onMouseOutWrapper(): void;
    /**
     * Get the options instance
     *
     * @returns {OptionsInterface}
     */
    retrieveOptions(): OptionsInterface;
    /**
     * Get registry callback reference to uploader UI component
     *
     * @returns {Uploader}
     */
    getUploader(): Uploader;
    /**
     * Makes WYSIWYG active
     *
     * @param {Preview} preview
     * @param {JQueryEventObject} event
     * @returns {Boolean}
     */
    activateEditor(preview: Preview, event: JQueryEventObject): boolean;
    /**
     * Stop event to prevent execution of action when editing textarea.
     *
     * @param {Preview} preview
     * @param {JQueryEventObject} event
     * @returns {Boolean}
     */
    stopEvent(preview: Preview, event: JQueryEventObject): boolean;
    /**
     * @returns {Boolean}
     */
    isWysiwygSupported(): boolean;
    /**
     * @param {HTMLTextAreaElement} element
     */
    initTextarea(element: HTMLTextAreaElement): void;
    /**
     * Save current value of textarea in data store
     */
    onTextareaKeyUp(): void;
    /**
     * Start stage interaction on textarea blur
     */
    onTextareaFocus(): void;
    /**
     * Stop stage interaction on textarea blur
     */
    onTextareaBlur(): void;
    /**
     * Init the WYSIWYG
     *
     * @param {boolean} focus Should wysiwyg focus after initialization?
     * @returns Promise
     */
    initWysiwyg(focus?: boolean): Promise<void>;
    /**
     * @inheritDoc
     */
    protected bindEvents(): void;
    /**
     * Update image data inside data store
     *
     * @param {Array} data - list of each files' data
     */
    private onImageUploaded;
    /**
     * Adjust textarea's height based on scrollHeight
     */
    private adjustTextareaHeightBasedOnScrollHeight;
    /**
     * Save the current selection to be restored at a later point
     *
     * @returns {Selection}
     */
    private saveSelection;
    /**
     * Restore the original selection
     *
     * @param {HTMLElement} element
     * @param {Selection} selection
     */
    private restoreSelection;
    /**
     * Find a text node within an existing element
     *
     * @param {HTMLElement} element
     * @param {string} text
     * @returns {HTMLElement}
     */
    private findTextNode;
  }
}
declare module "Magento_PageBuilder/js/content-type/slide/converter/attribute/overlay-color" {
  import ConverterInterface from "Magento_PageBuilder/js/converter/converter-interface";
  import { DataObject } from "Magento_PageBuilder/js/data-store";
  export default class OverlayColor implements ConverterInterface {
    /**
     * Convert value to internal format
     *
     * @param value string
     * @returns {string | object}
     */
    fromDom(value: string): string | object;
    /**
     * Convert value to knockout format
     *
     * @param {string} name
     * @param {DataObject} data
     * @returns {string | object}
     */
    toDom(name: string, data: DataObject): string | object;
  }
}
declare module "Magento_PageBuilder/js/content-type/slide/converter/style/button-opacity" {
  import ConverterInterface from "Magento_PageBuilder/js/converter/converter-interface";
  import { DataObject } from "Magento_PageBuilder/js/data-store";
  export default class ButtonOpacity implements ConverterInterface {
    /**
     * Convert value to internal format
     *
     * @param value string
     * @returns {string | object}
     */
    fromDom(value: string): string | object;
    /**
     * Convert value to knockout format
     *
     * @param {string} name
     * @param {DataObject} data
     * @returns {string | object}
     */
    toDom(name: string, data: DataObject): string | object;
  }
}
declare module "Magento_PageBuilder/js/content-type/slide/converter/style/button-visibility" {
  import ConverterInterface from "Magento_PageBuilder/js/converter/converter-interface";
  import { DataObject } from "Magento_PageBuilder/js/data-store";
  export default class ButtonVisibility implements ConverterInterface {
    /**
     * Convert value to internal format
     *
     * @param value string
     * @returns {string | object}
     */
    fromDom(value: string): string | object;
    /**
     * Convert value to knockout format
     *
     * @param {string} name
     * @param {DataObject} data
     * @returns {string | object}
     */
    toDom(name: string, data: DataObject): string | object;
  }
}
declare module "Magento_PageBuilder/js/content-type/slide/converter/style/margins" {
  import ConverterInterface from "Magento_PageBuilder/js/converter/converter-interface";
  import { DataObject } from "Magento_PageBuilder/js/data-store";
  import { DataObjectMargins } from "Magento_PageBuilder/js/property/margins";
  export default class Margins implements ConverterInterface {
    /**
     * Convert value to internal format
     *
     * @param value string
     * @returns {string | object}
     */
    fromDom(value: DataObjectMargins): DataObjectMargins;
    /**
     * Convert value to knockout format
     *
     * @param {string} name
     * @param {DataObject} data
     * @returns {string | object}
     */
    toDom(name: string, data: DataObject): string | object;
  }
}
declare module "Magento_PageBuilder/js/content-type/slide/converter/style/overlay-background-color" {
  import ConverterInterface from "Magento_PageBuilder/js/converter/converter-interface";
  import { DataObject } from "Magento_PageBuilder/js/data-store";
  export default class OverlayBackgroundColor implements ConverterInterface {
    /**
     * Convert value to internal format
     *
     * @param value string
     * @returns {string | object}
     */
    fromDom(value: string): string | object;
    /**
     * Convert value to knockout format
     *
     * @param name string
     * @param data Object
     * @returns {string | object}
     */
    toDom(name: string, data: DataObject): string | object;
  }
}
declare module "Magento_PageBuilder/js/content-type/slide/converter/style/paddings" {
  import ConverterInterface from "Magento_PageBuilder/js/converter/converter-interface";
  import { DataObject } from "Magento_PageBuilder/js/data-store";
  import { DataObjectPaddings } from "Magento_PageBuilder/js/property/paddings";
  export default class Paddings implements ConverterInterface {
    /**
     * Convert value to internal format
     *
     * @param value string
     * @returns {string | object}
     */
    fromDom(value: DataObjectPaddings): DataObjectPaddings;
    /**
     * Convert value to knockout format
     *
     * @param {string} name
     * @param {DataObject} data
     * @returns {string | object}
     */
    toDom(name: string, data: DataObject): string | object;
  }
}
declare module "Magento_PageBuilder/js/content-type/slide/wysiwyg/tinymce4/component-initializer" {
  import WysiwygComponentInitializerInterface from "Magento_PageBuilder/js/wysiwyg/component-initializer-interface";
  import WysiwygInterface from "Magento_PageBuilder/js/wysiwyg/wysiwyg-interface";
  export default class ComponentInitializer
    implements WysiwygComponentInitializerInterface {
    /**
     * The editor element
     */
    private $element;
    /**
     * The configuration of the wysiwyg content type
     */
    private config;
    /**
     * Slider transform
     */
    private sliderTransform;
    /**
     * Slider selector
     */
    private sliderSelector;
    /**
     * Slider content selector
     */
    private sliderContentSelector;
    /**
     * Slide selector
     */
    private slideSelector;
    /**
     * Active slide selector
     */
    private activeSlideSelector;
    /**
     * Slider autoplay
     */
    private autoplay;
    /**
     * Slider fade
     */
    private fade;
    /**
     * Slider changing flag
     */
    private slideChanging;
    /**
     * Initialize the instance
     *
     * @param {Wysiwyg} wysiwyg
     */
    initialize(wysiwyg: WysiwygInterface): void;
    /**
     * Event handler for wysiwyg focus
     * Fixes z-index issues for tabs and column
     * Fixes slider
     */
    private onFocus;
    /**
     * Event handler for wysiwyg blur
     * Fixes z-index issues for tabs and column
     * Fixes slider
     */
    private onBlur;
  }
}
declare module "Magento_PageBuilder/js/wysiwyg/config-modifier-interface" {
  export interface WysiwygConfigModifierInterface {
    modify(contentTypeId: string, config: any): void;
  }
  export default WysiwygConfigModifierInterface;
}
declare module "Magento_PageBuilder/js/content-type/slide/wysiwyg/tinymce4/config-modifier" {
  import WysiwygConfigInitializerInterface from "Magento_PageBuilder/js/wysiwyg/config-modifier-interface";
  export default class ConfigModifier
    implements WysiwygConfigInitializerInterface {
    /**
     * Initialize the config
     *
     * @param {String} contentTypeId
     * @param {Object} config
     */
    modify(contentTypeId: string, config: any): void;
  }
}
declare module "Magento_PageBuilder/js/binding/active-options.types" {
  export interface ActiveOptionsInterface {
    label: string;
    labeltitle: string;
    value: number;
  }
}
declare module "Magento_PageBuilder/js/content-type/tabs/preview" {
  /// <reference types="knockout" />
  import "tabs";
  import { SortableOptionsInterface } from "Magento_PageBuilder/js/binding/sortable-children.types";
  import ContentTypeCollectionInterface from "Magento_PageBuilder/js/content-type-collection.types";
  import ContentTypeConfigInterface from "Magento_PageBuilder/js/content-type-config.types";
  import { OptionsInterface } from "Magento_PageBuilder/js/content-type-menu/option.types";
  import ObservableUpdater from "Magento_PageBuilder/js/content-type/observable-updater";
  import PreviewCollection from "Magento_PageBuilder/js/content-type/preview-collection";

  export default class Preview extends PreviewCollection {
    focusedTab: KnockoutObservable<number>;
    activeTab: KnockoutObservable<number>;
    private disableInteracting;
    private element;
    private ready;
    private onContainerRenderDeferred;
    private mountAfterDeferred;
    /**
     * @param {ContentTypeCollectionInterface} contentType
     * @param {ContentTypeConfigInterface} config
     * @param {ObservableUpdater} observableUpdater
     */
    constructor(
      contentType: ContentTypeCollectionInterface,
      config: ContentTypeConfigInterface,
      observableUpdater: ObservableUpdater
    );
    /**
     * Refresh the tabs instance when new content appears
     *
     * @param {number} focusIndex
     * @param {boolean} forceFocus
     * @param {number} activeIndex
     */
    refreshTabs(
      focusIndex?: number,
      forceFocus?: boolean,
      activeIndex?: number
    ): void;
    /**
     * Set the active tab, we maintain a reference to it in an observable for when we rebuild the tab instance
     *
     * @param {number} index
     */
    setActiveTab(index: number): void;
    /**
     * Set the focused tab
     *
     * @param {number} index
     * @param {boolean} force
     */
    setFocusedTab(index: number, force?: boolean): void;
    /**
     * Return an array of options
     *
     * @returns {OptionsInterface}
     */
    retrieveOptions(): OptionsInterface;
    /**
     * Add a tab
     */
    addTab(): void;
    /**
     * On render init the tabs widget
     *
     * @param {Element} element
     */
    onContainerRender(element: Element): void;
    /**
     * Copy over border styles to the tab headers
     *
     * @returns {any}
     */
    getTabHeaderStyles(): any;
    /**
     * Get the sortable options for the tab heading sorting
     *
     * @returns {JQueryUI.SortableOptions}
     */
    getSortableOptions(): SortableOptionsInterface;
    /**
     * Bind events
     */
    protected bindEvents(): void;
    /**
     * Update data store with active options
     */
    private updateTabNamesInDataStore;
    /**
     * Assign a debounce and delay to the init of tabs to ensure the DOM has updated
     *
     * @type {(() => void) & _.Cancelable}
     */
    private buildTabs;
  }
}
declare module "Magento_PageBuilder/js/content-type/tab-item/preview" {
  /// <reference types="jquery" />
  import { OptionsInterface } from "Magento_PageBuilder/js/content-type-menu/option.types";
  import PreviewCollection from "Magento_PageBuilder/js/content-type/preview-collection";

  export default class Preview extends PreviewCollection {
    /**
     * Fields that should not be considered when evaluating whether an object has been configured.
     *
     * @see {Preview.isConfigured}
     * @type {[string]}
     */
    protected fieldsToIgnoreOnRemove: string[];
    /**
     * Force the focus on the clicked tab header
     *
     * @param {number} index
     * @param {JQueryEventObject} event
     */
    onClick(index: number, event: JQueryEventObject): void;
    /**
     * On focus in set the focused button
     *
     * @param {number} index
     * @param {Event} event
     */
    onFocusIn(index: number, event: Event): void;
    /**
     * On focus out set the focused tab to null
     *
     * @param {number} index
     * @param {JQueryEventObject} event
     */
    onFocusOut(index: number, event: JQueryEventObject): void;
    /**
     * Get the options instance
     *
     * @returns {OptionsInterface}
     */
    retrieveOptions(): OptionsInterface;
  }
}
declare module "Magento_PageBuilder/js/content-type/tabs/mass-converter/header-alignment" {
  import MassConverterInterface, {
    ConverterConfigInterface,
    ConverterDataInterface
  } from "Magento_PageBuilder/js/mass-converter/converter-interface";
  export default class HeaderAlignment implements MassConverterInterface {
    /**
     * Process data after it's read and converted by element converters
     *
     * @param {ConverterDataInterface} data
     * @param {ConverterConfigInterface} config
     * @returns {object}
     */
    fromDom(
      data: ConverterDataInterface,
      config: ConverterConfigInterface
    ): object;
    /**
     * Add our tab alignment class into the data for the tabs
     *
     * @param {ConverterDataInterface} data
     * @param {ConverterConfigInterface} config
     * @returns {object}
     */
    toDom(
      data: ConverterDataInterface,
      config: ConverterConfigInterface
    ): object;
  }
}
declare module "Magento_PageBuilder/js/content-type/text/preview" {
  import { OptionsInterface } from "Magento_PageBuilder/js/content-type-menu/option.types";
  import BasePreview from "Magento_PageBuilder/js/content-type/preview";

  export default class Preview extends BasePreview {
    /**
     * Wysiwyg instance
     */
    private wysiwyg;
    /**
     * The element the text content type is bound to
     */
    private element;
    /**
     * The textarea element in disabled mode
     */
    private textarea;
    /**
     * @returns {Boolean}
     */
    isWysiwygSupported(): boolean;
    /**
     * Return an array of options
     *
     * @returns {OptionsInterface}
     */
    retrieveOptions(): OptionsInterface;
    /**
     * @param {HTMLElement} element
     */
    initWysiwyg(element: HTMLElement): void;
    /**
     * @param {HTMLTextAreaElement} element
     */
    initTextarea(element: HTMLTextAreaElement): void;
    /**
     * Save current value of textarea in data store
     */
    onTextareaKeyUp(): void;
    /**
     * Start stage interaction on textarea blur
     */
    onTextareaFocus(): void;
    /**
     * Stop stage interaction on textarea blur
     */
    onTextareaBlur(): void;
    /**
     * Retrieve the margin & padding & alignment styles for the placeholder
     *
     * @returns {any}
     */
    getPlaceholderStyle(): any;
    /**
     * Adjust textarea's height based on scrollHeight
     */
    private adjustTextareaHeightBasedOnScrollHeight;
  }
}
declare module "Magento_PageBuilder/js/content-type/text/wysiwyg/tinymce4/component-initializer" {
  import WysiwygComponentInitializerInterface from "Magento_PageBuilder/js/wysiwyg/component-initializer-interface";
  import WysiwygInterface from "Magento_PageBuilder/js/wysiwyg/wysiwyg-interface";
  export default class ComponentInitializer
    implements WysiwygComponentInitializerInterface {
    /**
     * The editor element
     */
    private $element;
    /**
     * The configuration of the wysiwyg content type
     */
    private config;
    /**
     * Initialize the instance
     *
     * @param {Wysiwyg} wysiwyg
     */
    initialize(wysiwyg: WysiwygInterface): void;
    /**
     * Called when tinymce is focused
     */
    private onFocus;
    /**
     * Called when tinymce is blurred
     */
    private onBlur;
  }
}
declare module "Magento_PageBuilder/js/content-type/text/wysiwyg/tinymce4/config-modifier" {
  import WysiwygConfigInitializerInterface from "Magento_PageBuilder/js/wysiwyg/config-modifier-interface";
  export default class ConfigModifier
    implements WysiwygConfigInitializerInterface {
    /**
     * Initialize the config
     *
     * @param {String} contentTypeId
     * @param {Object} config
     */
    modify(contentTypeId: string, config: any): void;
  }
}
declare module "Magento_PageBuilder/js/content-type/video/preview" {
  import { OptionsInterface } from "Magento_PageBuilder/js/content-type-menu/option.types";
  import BasePreview from "Magento_PageBuilder/js/content-type/preview";

  export default class Preview extends BasePreview {
    /**
     * Return an array of options
     *
     * @returns {OptionsInterface}
     */
    retrieveOptions(): OptionsInterface;
  }
}
declare module "Magento_PageBuilder/js/content-type/video/converter/attribute/src" {
  import ConverterInterface from "Magento_PageBuilder/js/converter/converter-interface";
  import { DataObject } from "Magento_PageBuilder/js/data-store";
  export default class Src implements ConverterInterface {
    /**
     * Convert value to internal format
     *
     * @param value string
     * @returns {string | object}
     */
    fromDom(value: string): string | object;
    /**
     * Convert value to knockout format
     *
     * @param name string
     * @param data Object
     * @returns {string}
     */
    toDom(name: string, data: DataObject): string;
  }
}
declare module "Magento_PageBuilder/js/converter/link-object.types" {
  export default interface LinkObject {
    type: string;
    setting: string;
    [key: string]: string;
  }
}
declare module "Magento_PageBuilder/js/converter/attribute/link-href" {
  import { DataObject } from "Magento_PageBuilder/js/data-store";
  import ConverterInterface from "Magento_PageBuilder/js/converter/converter-interface";

  export default class CreateValueForHref implements ConverterInterface {
    /**
     * @type object
     */
    private widgetParamsByLinkType;
    /**
     * Convert value to internal format
     *
     * @param value string
     * @returns {string | object}
     */
    fromDom(value: string): string | object;
    /**
     * Convert value to knockout format
     *
     * @param name string
     * @param data Object
     * @returns {string}
     */
    toDom(name: string, data: DataObject): string;
    /**
     * @param {string} href
     * @param {string} linkType
     * @returns {string}
     */
    private convertToWidget;
  }
}
declare module "Magento_PageBuilder/js/converter/attribute/link-target" {
  import { DataObject } from "Magento_PageBuilder/js/data-store";
  import ConverterInterface from "Magento_PageBuilder/js/converter/converter-interface";

  export default class CreateValueForTarget implements ConverterInterface {
    /**
     * Convert value to internal format
     *
     * @param value string
     * @returns {string | object}
     */
    fromDom(value: string): string | object;
    /**
     * Convert value to knockout format
     *
     * @param name string
     * @param data Object
     * @returns {string}
     */
    toDom(name: string, data: DataObject): string;
  }
}
declare module "Magento_PageBuilder/js/converter/attribute/link-type" {
  import { DataObject } from "Magento_PageBuilder/js/data-store";
  import ConverterInterface from "Magento_PageBuilder/js/converter/converter-interface";

  export default class CreateValueForLinkType implements ConverterInterface {
    /**
     * Convert value to internal format
     *
     * @param value string
     * @returns {string | object}
     */
    fromDom(value: string): string | object;
    /**
     * Convert value to knockout format
     *
     * @param name string
     * @param data Object
     * @returns {string}
     */
    toDom(name: string, data: DataObject): string;
  }
}
declare module "Magento_PageBuilder/js/utils/url" {
  /**
   * Convert url to path if other url is only a path
   *
   * @param {string} url
   * @param {string} otherUrl
   * @returns {string}
   * @api
   */
  export function convertUrlToPathIfOtherUrlIsOnlyAPath(
    url: string,
    otherUrl: string
  ): string;
}
declare module "Magento_PageBuilder/js/utils/image" {
  /**
   * Decode image background URL to object
   *
   * @param value
   * @returns {Object}
   * @api
   */
  export function decodeUrl(value: string): string | [object];
  /**
   * Convert a URL to an image directive
   *
   * @param {string} imageUrl
   * @returns {string}
   */
  export function urlToDirective(imageUrl: string): string;
  /**
   * Convert an image URL to a background image data uri
   *
   * @param {string} imageUrl
   * @returns {string}
   */
  export function imageToBackgroundImageDataUrl(imageUrl: string): string;
}
declare module "Magento_PageBuilder/js/converter/image-array-object.types" {
  export default interface ImageArrayObject {
    [key: number]: {
      url: string;
    };
  }
}
declare module "Magento_PageBuilder/js/converter/attribute/src" {
  import ConverterInterface from "Magento_PageBuilder/js/converter/converter-interface";

  export default class Src implements ConverterInterface {
    /**
     * Convert value to internal format
     *
     * @param value string
     * @returns {string | object}
     */
    fromDom(value: string): string | object;
    /**
     * Convert value to knockout format
     *
     * @param {string} name
     * @param {DataObject} data
     * @returns {string}
     */
    toDom(
      name: string,
      data: {
        [key: string]: {
          [key: number]: {
            url: string;
          };
        };
      }
    ): string;
  }
}
declare module "Magento_PageBuilder/js/converter/attribute/preview/src" {
  import { DataObject } from "Magento_PageBuilder/js/data-store";
  import ConverterInterface from "Magento_PageBuilder/js/converter/converter-interface";

  export default class Src implements ConverterInterface {
    /**
     * Convert value to internal format
     *
     * @param value string
     * @returns {string | object}
     */
    fromDom(value: string): string | object;
    /**
     * Convert value to knockout format
     *
     * @param name string
     * @param data Object
     * @returns {string}
     */
    toDom(name: string, data: DataObject): string;
  }
}
declare module "Magento_PageBuilder/js/converter/html/decode" {
  import { DataObject } from "Magento_PageBuilder/js/data-store";
  import ConverterInterface from "Magento_PageBuilder/js/converter/converter-interface";

  export default class Decode implements ConverterInterface {
    /**
     * Convert value to internal format
     *
     * @param {string} value
     * @returns {string | object}
     */
    fromDom(value: string): string | object;
    /**
     * Convert value to knockout format
     *
     * @param {string} name
     * @param {Object} data
     * @returns {string}
     */
    toDom(name: string, data: DataObject): string;
  }
}
declare module "Magento_PageBuilder/js/converter/html/directive" {
  import { DataObject } from "Magento_PageBuilder/js/data-store";
  import ConverterInterface from "Magento_PageBuilder/js/converter/converter-interface";

  export default class Directives implements ConverterInterface {
    /**
     * Convert value to internal format
     *
     * @param {string} value
     * @returns {string | object}
     */
    fromDom(value: string): string | object;
    /**
     * Convert value to knockout format
     *
     * @param {string} name
     * @param {Object} data
     * @returns {string}
     */
    toDom(name: string, data: DataObject): string;
  }
}
declare module "Magento_PageBuilder/js/converter/html/tag-escaper" {
  import { DataObject } from "Magento_PageBuilder/js/data-store";
  import ConverterInterface from "Magento_PageBuilder/js/converter/converter-interface";
  export default class TagEscaper implements ConverterInterface {
    /**
     * Convert value to internal format
     *
     * @param {string} value
     * @returns {string | object}
     */
    fromDom(value: string): string | object;
    /**
     * Convert value to knockout format
     *
     * @param {string} name
     * @param {Object} data
     * @returns {string}
     */
    toDom(name: string, data: DataObject): string;
  }
}
declare module "Magento_PageBuilder/js/converter/style/background-image" {
  import { DataObject } from "Magento_PageBuilder/js/data-store";
  import ConverterInterface from "Magento_PageBuilder/js/converter/converter-interface";

  export default class BackgroundImage implements ConverterInterface {
    /**
     * Convert value to internal format
     *
     * @param value string
     * @returns {string | object}
     */
    fromDom(value: string): string | object;
    /**
     * Convert value to knockout format
     *
     * @param name string
     * @param data Object
     * @returns {string}
     */
    toDom(name: string, data: DataObject): string;
  }
}
declare module "Magento_PageBuilder/js/converter/style/border-style" {
  import { DataObject } from "Magento_PageBuilder/js/data-store";
  import ConverterInterface from "Magento_PageBuilder/js/converter/converter-interface";

  export default class BorderStyleDefault implements ConverterInterface {
    /**
     * Convert value to internal format
     *
     * @param value string
     * @returns {string | object}
     */
    fromDom(value: string): string | object;
    /**
     * Convert value to knockout format
     *
     * @param {string} name
     * @param {DataObject} data
     * @returns {string}
     */
    toDom(name: string, data: DataObject): string;
  }
}
declare module "Magento_PageBuilder/js/converter/style/border-width" {
  import { DataObject } from "Magento_PageBuilder/js/data-store";
  import ConverterInterface from "Magento_PageBuilder/js/converter/converter-interface";

  export default class BorderWidth implements ConverterInterface {
    /**
     * Convert value to internal format
     *
     * @param value string
     * @returns {string | object}
     */
    fromDom(value: string): string | object;
    /**
     * Convert value to knockout format
     *
     * @param {string} name
     * @param {DataObject} data
     * @returns {string | object}
     */
    toDom(name: string, data: DataObject): string | object;
  }
}
declare module "Magento_PageBuilder/js/converter/style/color" {
  import { DataObject } from "Magento_PageBuilder/js/data-store";
  import ConverterInterface from "Magento_PageBuilder/js/converter/converter-interface";

  export default class Color implements ConverterInterface {
    /**
     * Convert value to internal format
     *
     * @param value string
     * @returns {string | object}
     */
    fromDom(value: string): string | object;
    /**
     * Convert value to knockout format
     *
     * @param name string
     * @param data Object
     * @returns {string | object}
     */
    toDom(name: string, data: DataObject): string;
    /**
     * Convert from int to hex
     *
     * @param {number} value
     * @returns {string}
     */
    private fromIntToHex;
  }
}
declare module "Magento_PageBuilder/js/converter/style/display" {
  import { DataObject } from "Magento_PageBuilder/js/data-store";
  import ConverterInterface from "Magento_PageBuilder/js/converter/converter-interface";

  export default class Display implements ConverterInterface {
    /**
     * Convert value to internal format
     *
     * @param value string
     * @returns {string | object}
     */
    fromDom(value: string): boolean;
    /**
     * Convert value to knockout format, we only provide a none property if we intend for the content type to be hidden,
     * otherwise we let the original display property handle the display of the content type.
     *
     * @param {string} name
     * @param {DataObject} data
     * @returns {string}
     */
    toDom(name: string, data: DataObject): string;
  }
}
declare module "Magento_PageBuilder/js/converter/style/margins" {
  import { DataObject } from "Magento_PageBuilder/js/data-store";
  import { DataObjectMargins } from "Magento_PageBuilder/js/property/margins";
  import ConverterInterface from "Magento_PageBuilder/js/converter/converter-interface";

  export default class Margins implements ConverterInterface {
    /**
     * Convert value to internal format
     *
     * @param value string
     * @returns {string | object}
     */
    fromDom(value: DataObjectMargins): DataObjectMargins;
    /**
     * Convert value to knockout format
     *
     * @param {string} name
     * @param {DataObject} data
     * @returns {string | object}
     */
    toDom(name: string, data: DataObject): string | object;
  }
}
declare module "Magento_PageBuilder/js/converter/style/overlay-border-radius" {
  import { DataObject } from "Magento_PageBuilder/js/data-store";
  import ConverterInterface from "Magento_PageBuilder/js/converter/converter-interface";
  /**
   * Takes difference of border width from border radius to conform snugly to edges of wrapper border
   *
   * @api
   */
  export default class OverlayBorderRadius implements ConverterInterface {
    /**
     * Convert value to internal format
     *
     * @param value string
     * @returns {string}
     */
    fromDom(value: string): string | object;
    /**
     * Convert value to knockout format
     *
     * @param {string} name
     * @param {DataObject} data
     * @returns {string}
     */
    toDom(name: string, data: DataObject): string | object;
  }
}
declare module "Magento_PageBuilder/js/converter/style/paddings" {
  import { DataObject } from "Magento_PageBuilder/js/data-store";
  import { DataObjectPaddings } from "Magento_PageBuilder/js/property/paddings";
  import ConverterInterface from "Magento_PageBuilder/js/converter/converter-interface";

  export default class Paddings implements ConverterInterface {
    /**
     * Convert value to internal format
     *
     * @param value string
     * @returns {string | object}
     */
    fromDom(value: DataObjectPaddings): DataObjectPaddings;
    /**
     * Convert value to knockout format
     *
     * @param {string} name
     * @param {DataObject} data
     * @returns {string | object}
     */
    toDom(name: string, data: DataObject): string | object;
  }
}
declare module "Magento_PageBuilder/js/converter/style/remove-px" {
  import { DataObject } from "Magento_PageBuilder/js/data-store";
  import ConverterInterface from "Magento_PageBuilder/js/converter/converter-interface";

  export default class RemovePx implements ConverterInterface {
    /**
     * Convert value to internal format
     *
     * @param value string
     * @returns {string | object}
     */
    fromDom(value: string): object | string;
    /**
     * Convert value to knockout format
     *
     * @param name string
     * @param data Object
     * @returns {string | object}
     */
    toDom(name: string, data: DataObject): string;
  }
}
declare module "Magento_PageBuilder/js/converter/style/width" {
  import { DataObject } from "Magento_PageBuilder/js/data-store";
  import ConverterInterface from "Magento_PageBuilder/js/converter/converter-interface";
  /**
   * Subtract margin from width to ensure adjacent elements do not
   * move or resize when positive or negative margins are present
   *
   * @api
   */
  export default class Width implements ConverterInterface {
    /**
     * Convert value to internal format
     *
     * @param value string
     * @returns {string | object}
     */
    fromDom(value: string): object | string;
    /**
     * Convert value to knockout format
     *
     * @param name string
     * @param data Object
     * @returns {string | object}
     */
    toDom(name: string, data: DataObject): string;
  }
}
declare module "Magento_PageBuilder/js/converter/style/preview/background-image" {
  import { DataObject } from "Magento_PageBuilder/js/data-store";
  import ConverterInterface from "Magento_PageBuilder/js/converter/converter-interface";

  export default class BackgroundImage implements ConverterInterface {
    /**
     * Convert value to internal format
     *
     * @param value string
     * @returns {string | object}
     */
    fromDom(value: string): string | object;
    /**
     * Convert value to knockout format
     *
     * @param name string
     * @param data Object
     * @returns {string}
     */
    toDom(name: string, data: DataObject): string;
  }
}
declare module "Magento_PageBuilder/js/converter/style/preview/display" {
  import { DataObject } from "Magento_PageBuilder/js/data-store";
  import ConverterInterface from "Magento_PageBuilder/js/converter/converter-interface";

  export default class Display implements ConverterInterface {
    /**
     * Ensure the display none property doesn't persist to the preview
     *
     * @param value string
     * @returns {string | object}
     */
    fromDom(value: string): string | object;
    /**
     * Ensure the display none property doesn't persist to the preview
     *
     * @param name string
     * @param data Object
     * @returns {string}
     */
    toDom(name: string, data: DataObject): string;
  }
}
declare module "Magento_PageBuilder/js/mass-converter/background-images" {
  import ConverterInterface, {
    ConverterConfigInterface,
    ConverterDataInterface
  } from "Magento_PageBuilder/js/mass-converter/converter-interface";
  export default class BackgroundImages implements ConverterInterface {
    /**
     * Process data after it's read and converted by element converters
     *
     * @param {ConverterDataInterface} data
     * @param {ConverterConfigInterface} config
     * @returns {object}
     */
    fromDom(
      data: ConverterDataInterface,
      config: ConverterConfigInterface
    ): ConverterDataInterface;
    /**
     * Process data before it's converted by element converters
     *
     * @param {ConverterDataInterface} data
     * @param {ConverterConfigInterface} config
     * @returns {object}
     */
    toDom(
      data: ConverterDataInterface,
      config: ConverterConfigInterface
    ): ConverterDataInterface;
  }
}
declare module "Magento_PageBuilder/js/mass-converter/empty-mobile-image" {
  import ConverterInterface, {
    ConverterConfigInterface,
    ConverterDataInterface
  } from "Magento_PageBuilder/js/mass-converter/converter-interface";
  export default class EmptyMobileImage implements ConverterInterface {
    /**
     * Process data after it's read and converted by element converters
     *
     * @param {ConverterDataInterface} data
     * @param {object} config
     * @returns {object}
     */
    fromDom(
      data: ConverterDataInterface,
      config: ConverterConfigInterface
    ): object;
    /**
     * Process data before it's converted by element converters
     *
     * @param {ConverterDataInterface} data
     * @param {object} config
     * @returns {object}
     */
    toDom(
      data: ConverterDataInterface,
      config: ConverterConfigInterface
    ): object;
  }
}
declare module "Magento_PageBuilder/js/master-format/read-interface" {
  export interface ReadInterface {
    /**
     * Read data from the element
     *
     * @param element HTMLElement
     * @returns {Promise<any>}
     */
    read(element: HTMLElement): Promise<any>;
  }
}
declare module "Magento_PageBuilder/js/property/property-reader-pool" {
  import PropertyReaderInterface from "Magento_PageBuilder/js/property/property-reader-interface";
  export class PropertyReaderPool {
    private propertyReaders;
    /**
     * Retrieve a property reader from the pool
     *
     * @param {string} name
     * @returns {PropertyReaderInterface}
     */
    get(name: string): PropertyReaderInterface;
    /**
     * Register a new property reader into the pool
     *
     * @param {string} name
     * @param {PropertyReaderInterface} property
     */
    register(name: string, property: PropertyReaderInterface): void;
  }
  const _default: PropertyReaderPool;
  export default _default;
}
declare module "Magento_PageBuilder/js/property/property-reader-pool-factory" {
  import PropertyReaderPool from "Magento_PageBuilder/js/property/property-reader-pool";
  /**
   * Create a new instance of property reader pool
   */
  export default function create(
    contentType: string
  ): Promise<typeof PropertyReaderPool>;
}
declare module "Magento_PageBuilder/js/master-format/read/configurable" {
  import { ReadInterface } from "Magento_PageBuilder/js/master-format/read-interface";

  export default class Configurable implements ReadInterface {
    /**
     * Read data from the dom based on configuration
     *
     * @param element HTMLElement
     * @returns {Promise<any>}
     */
    read(element: HTMLElement): Promise<any>;
    /**
     * Find the element for the current content type by it's name, avoiding searching in other content types by
     * removing any other element which contains it's own data-content-type.
     *
     * @param {HTMLElement} element
     * @param {string} name
     * @returns {HTMLElement}
     */
    private findElementByName;
    /**
     * Read attributes for element
     *
     * @param {DataMappingAttributesInterface[]} config
     * @param {HTMLElement} element
     * @param {object} data
     * @param {typeof PropertyReaderPool} propertyReaderPool
     * @param {typeof ConverterPool} converterPool
     * @returns {any}
     */
    private readAttributes;
    /**
     * Read style properties for element
     *
     * @param {DataMappingStyleInterface[]} config
     * @param {HTMLElement} element
     * @param {object} data
     * @param {typeof PropertyReaderPool} propertyReaderPool
     * @param {typeof ConverterPool} converterPool
     * @returns {{[p: string]: string}}
     */
    private readStyle;
    /**
     * Read element's tag
     *
     * @param {object} config
     * @param {HTMLElement} element
     * @param {object} data
     * @returns {object}
     */
    private readHtmlTag;
    /**
     * Read element's css
     *
     * @param {ContentTypeConfigAppearanceElementInterface} config
     * @param {HTMLElement} element
     * @param {object} data
     * @returns {any}
     */
    private readCss;
    /**
     * Read element's content
     *
     * @param {ContentTypeConfigAppearanceElementInterface} config
     * @param {HTMLElement} element
     * @param {object} data
     * @param {typeof ConverterPool} converterPool
     * @returns {any}
     */
    private readHtml;
    /**
     * Convert data after it's read for all elements
     *
     * @param config
     * @param {object} data
     * @param {typeof MassConverterPool} massConverterPool
     * @returns {object}
     */
    private convertData;
  }
}
declare module "Magento_PageBuilder/js/property/attribute-reader" {
  import PropertyReaderInterface from "Magento_PageBuilder/js/property/property-reader-interface";

  export default class AttributeReader implements PropertyReaderInterface {
    /**
     * Read attribute from element
     *
     * @param {HTMLElement} element
     * @param {string} source
     * @returns {string | object}
     */
    read(element: HTMLElement, source: string): string | object;
  }
}
declare module "Magento_PageBuilder/js/property/link" {
  import PropertyReaderInterface from "Magento_PageBuilder/js/property/property-reader-interface";

  export default class Link implements PropertyReaderInterface {
    private regexpByLinkType;
    /**
     * Read link from element
     *
     * @param {HTMLElement} element
     * @returns {string | object}
     */
    read(element: HTMLElement): string | object;
    /**
     * Returns link value from widget string
     *
     * @param {string} href
     * @param {RegExp} regexp
     * @return {string}
     */
    private getIdFromWidgetSyntax;
  }
}
declare module "Magento_PageBuilder/js/property/style-property-reader" {
  import PropertyReaderInterface from "Magento_PageBuilder/js/property/property-reader-interface";

  export default class StylePropertyReader implements PropertyReaderInterface {
    /**
     * Read style property from element
     *
     * @param {HTMLElement} element
     * @param {string} source
     * @returns {string | object}
     */
    read(element: HTMLElement, source: string): string | object;
  }
}
declare module "Magento_PageBuilder/js/wysiwyg/tinymce4" {
  import WysiwygInstanceInterface from "wysiwygAdapter";
  import { AdditionalDataConfigInterface } from "Magento_PageBuilder/js/content-type-config.types";
  import DataStore from "Magento_PageBuilder/js/data-store";
  import WysiwygInterface from "Magento_PageBuilder/js/wysiwyg/wysiwyg-interface";
  /**
   * Inline editing wysiwyg component
   *
   * @api
   */
  export default class Wysiwyg implements WysiwygInterface {
    /**
     * The id of the editor element
     */
    elementId: string;
    /**
     * The supplied wysiwyg configuration
     */
    config: AdditionalDataConfigInterface;
    /**
     * Id of content type
     */
    contentTypeId: string;
    /**
     * Id of the stage
     */
    stageId: string;
    /**
     * Wysiwyg adapter instance
     */
    private wysiwygAdapter;
    /**
     * Content type's data store
     */
    private dataStore;
    /**
     * Field name in data store reflecting value held in wysiwyg
     */
    private fieldName;
    /**
     * @param {String} contentTypeId The ID in the registry of the content type.
     * @param {String} elementId The ID of the editor element in the DOM.
     * @param {AdditionalDataConfigInterface} config The configuration for the wysiwyg.
     * @param {DataStore} dataStore The datastore to store the content in.
     * @param {String} fieldName The key in the provided datastore to set the data.
     * @param {String} stageId The ID in the registry of the stage containing the content type.
     */
    constructor(
      contentTypeId: string,
      elementId: string,
      config: AdditionalDataConfigInterface,
      dataStore: DataStore,
      fieldName: string,
      stageId: string
    );
    /**
     * @returns {WysiwygInstanceInterface}
     */
    getAdapter(): WysiwygInstanceInterface;
    /**
     * Called for the onFocus event
     */
    private onFocus;
    /**
     * Called for the onChangeContent event
     */
    private onChangeContent;
    /**
     * Called for the onBlur events
     */
    private onBlur;
    /**
     * Update content in our data store after our stage preview wysiwyg gets updated
     */
    private saveContentFromWysiwygToDataStore;
    /**
     * Update content in our stage wysiwyg after our data store gets updated
     */
    private setContentFromDataStoreToWysiwyg;
    /**
     * Clear any selections in the editable area
     */
    private clearSelection;
    /**
     * Adjust padding on stage if in fullscreen mode to accommodate inline wysiwyg toolbar overflowing fixed viewport
     */
    private invertInlineEditorToAccommodateOffscreenToolbar;
    /**
     * Get fixed toolbar container element referenced as selector in wysiwyg adapter settings
     *
     * @returns {jQuery}
     */
    private getFixedToolbarContainer;
  }
}
