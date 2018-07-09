Follow us on [Twitter](https://twitter.com/PSPDFKit) for updates. Our [blog](https://pspdfkit.com/blog) highlights the best new features and changes.

## Newest Release

### 2018.3.2 – 20 Jun 2018

#### UI

* Fixes a regression where readOnly form fields where not properly disabled. (#1921)
* Fixes an issue with selection grippers not working on Windows touch devices. (#1925)
* Fixes an issue with contextual menus overlap the text markup annotation popover on some touch devices. (#1925)
* Fixes an issue where creating an ink annotation with a background color caused the page content to disappear. (#1916)
* Fixes an issue with stylesheets not being cached by a user defined service worker. (#1928)

#### Model

* Fixes an issue with the newly introduced `isFitting` property for text annotations. (#C15597)
* Fixes an issue where search did not work in IE 11 when using standalone. (#1883)
* Fixes an issue with all the custom overlay items for a page being removed in bulk. (#1942)

## Previous Releases

### 2018.3.1 – 4 Jun 2018

#### UI

* API: Adds `Configuration#disableIndexedDBCaching` to force disable caching of the WASM module when IndexedDB is supported. (#1905)
* API: Adds `Configuration#disableWebAssemblyStreaming` to force disable WebAssembly streaming instantiation. (#1907)
* API: Adds `Configuration#standaloneInstancesPoolSize` to configure the number of disposed instances to keep in memory for fast reuse. (#1908)
* Fixes an issue where forms were not rendered as read only when the server's `write` permission was not set. (#1870)

#### Model

* Fixes a crash when setting the `interactionMode` and enabling `readOnly` mode at the same time. (#1901)

#### Instant

* Adds annotation `note` to Instant JSON. (#C15404)

### 2018.3 – 31 May 2018

#### UI

* API: Adds `PSPDFKit.Annotations.toSerializableObject` and `PSPDFKit.Annotations.fromSerializableObject` to convert annotations to and from serializable objects which adhere to the InstantJSON format. (#1704)
* Adds support for touch events on desktop browsers. (#1459)
* Adds support for ink signatures. (#1704)
  * API: Adds `Instance#getInkSignatures` to retrieve the list of ink signatures.
  * API: Adds `Instance#setInkSignatures` to set or update the list of ink signatures.
  * API: Adds `Configuration#populateInkSignatures` to load the initial list of ink signatures.
* Adds public CSS classes to Link Annotations for easy styling. (#1860)
* Improves the file size of the required style sheet. (#1795)
* Improves rendering performance when resizing the sidebar and when switching between page modes. (#1859)
* Fixes an with responsive toolbar groups including items from other groups. (#1784)
* Fixes responsive behavior of the text annotation toolbar. (#1800)
* Fixes a regression when copying text on IE11. (#1454)
* Fixes an issue where multi line text widgets that have an automatic text size had a font size that was too big. (#1844)
* Fixes opacity of Text Annotations in editable mode. (#1799)
* Fixes an issue where opacity was being doubled on editing mode text annotations. (#1799)

#### Model

* Adds a new annotation event: `annotations.load` that is triggered whenever annotations are loaded from the underlying data source. This was previously firing `annotations.create`. (#1690)
* Adds support for `fontSize` property on widget annotations. (#1747)
* Adds `Annotation#name` to all annotation records. This will default to the annotation identifier to mimic the behavior of our other platforms. (#C14856)
* Adds support for dynamic code loading to reduce bundle size. (#1755)
* Adds new instance events for ink signatures: `inkSignatures.create`, `inkSignatures.update`, `inkSignatures.delete`. (#1704)
* Adds support for password protected PDFs. (#1632)
* Fixes an issue where the loading of the initial annotations would not cause an event to be triggered when using Instant. (#1690)
* Fixes an issue with the `ViewState` API which allowed to change `InteractionMode` when the document was in read only mode. (#1838)
* Fixes an issue where the text of a TextAnnotation in the generated PDF was cut off. (#1275)
* Fixes a race condition when trying to use `Instange#getAnnotations` for a page that is loading its annotations. (#1871)

#### Instant

* Adds annotation `name` to Instant JSON. Also renamed `pspdfkit/file` `name` to `filename` to prevent collisions. (#C14856)
* Adds `isFitting` to text annotations in Instant JSON. This property is used to correctly display the annotation in environments where the annotation's font is not available. (#977)

#### Example

* Adds support for simple layer authentication to the Node.js example app. (#1817)
* Improves experience for Windows users for all example applications. (#1857)
* Update React and Webpack example apps to work with the new `pspdfkit-lib` asset directory. (#1826)
* Fixes an issue with the wrong mime types in the React example app. (#1825)

### 2018.2.1 - 2 May 2018

#### UI

* Fixes an issue with responsive toolbar groups including items from other groups. (#1784)
* Fixes missing translation in search UI. (#1791)

#### Model

* Fixes an issue where forms where not properly loaded when starting in read only mode. (#1794)

### 2018.2 – 28 Mar 2018

#### UI

* API: Adds `Configuration#disableTextSelection` to disable text selection and `Configuration#disableHighQualityPrinting` to disable high quality printing. (#1424)
* API: Adds `Instance#getTextSelection()` and a new event `textSelection.change` to access the text selection state. (#1724)
* API: Adds `page.onPress` and `textLine.onPress` events to control clicks in the document. (#1724)
* API: Adds `Instance#jumpToRect()` to make sure a specific rect (in PDF page coordinates) is brought into the viewport. (#1750)
* API: Adds ability to create and add custom overlay items to the document. (#1709)
  * API: Adds `Instance#setCustomOverlayItem()` to create and update a custom overlay item.
  * API: Adds `Instance#removeCustomOverlayItem()` to remove a custom overlay item.
  * API: Adds `PSPDFKit.CustomOverlayItem` - a record to create custom overlay items.
* API: Adds I18n (internationalization) support. (#1732)
  * API: Adds `PSPDFKit.I18n` to access and modify internationalization data. (#1732)
  * API: Adds `Instance#locale` and `Instance#setLocale` to manage the application locale. (#1732)
* API: Adds support for customizing the search behavior. (#1739)
  * API: Adds `Instance#searchState`, `Instance#setSearchState()`, and `PSPDFKit.SearchState` to control the state of the search UI.
  * API: Adds `Instance#startUISearch()` as a shortcut to show the search box, type in a search term, and start the default search behavior.
  * API: Adds new search events: `search.stateChange` will be fired whenever `PSPDFKit.SearchState` updates, `search.termChange` will be fired whenever the user changes the search term.
* API: Adds `Instance#getSelectedAnnotation()`, `Instance#setSelectedAnnotation()`, and the event `annotationSelection.change` to interact with the currently selected annotation. (#1562)
* Adds PSPDFKit for Electron. (#1758)
* Adds I18n (internationalization) support. (#1732)
* Adds a customizable confirm dialog instead of using `confirm()`. (#1670)
* Adds support for iOS 11.3. (#1746)
* Improves rendering performance on low resolution and mobile devices. (#1727)
* Changes the breakpoint for showing note annotation contents in full screen. (#1783)
* Fixes ToolbarItems with not unique IDs render multiple times on resize. (#1728)
* Fixes an issue with an invalid cursor for the pan tool on Internet Explorer 11. (#1777)
* Fixes an issue where the wrong toolbar items where shown quickly after closing the native print dialog. (#1734)
* Fixes an issue with the layout of slider inputs on Microsoft Edge and Internet Explorer 11. (#1775)
* Fixes a rendering issue when using standalone deployments and rotated pages on WebKit. (#1778)

#### Model

* Adds support for parsing `GoToEmbeddedAction`, `GoToRemoteAction`, `HideAction`, `JavaScriptAction`, `LaunchAction`, and `NamedAction`. (#1736)
* Adds `Instance#setAnnotationCreatorName()` to set the annotation creator name and `Annotation#creatorName` , `Annotation#createdAt`, and `Annotation#updatedAt` to an annotation. (#1714)
* Adds `Instance#search()` to find occurrences of a text string in the raw PDF. (#1739)
* Adds `PSPDFKit.SearchResult` to describe a search result. (#1739)
* Adds `Instance#renderPageAsArrayBuffer` to render a page as an `ArrayBuffer`. (#1431)
* Adds `Instance#renderPageAsImageURL` to render a page and get a URL to it. (#1431)
* Adds `Instance#getMarkupAnnotationText` to extract the text from markup annotations. (#1705)
* Adds validation for annotations created and/or updated via public API. (#1731)
* Improves `Instance#getAnnotations` to throw an error, when called with invalid arguments. (#1781)
* Fixes an issue in our WASM regression detection for iOS 11.2.6. (#1745)
* Fixes an issue with `exportXFDF` not preserving the document state. (#1768)
* Deprecates `Instance#renderCover`. (#1431)

#### Example

* Adds the new PSPDFKit for Electron example. (#1758)

#### Instant

* Adds createdAt, updatedAt and creatorName to Instant JSON. (#C14443)

### 2018.1.4 – 15 Mar 2018

No web-specific changes in this version.

### 2018.1.3 – 8 Mar 2018

* Fixes an issue where the wrong toolbar items where shown quickly after closing the native print dialog. (#1734)
* Fixes an issue in our WASM regression detection for iOS 11.2.6. (#1745)

### 2018.1.2 – 28 Feb 2018

* Adds support for automatically extracting links from text. (#C13944)
* Significantly reduces the memory usage for Standalone deployments. (#1453)
* Fixes clients presence connections failures that were not handled. (#1723)

### 2018.1.1 – 14 Feb 2018

* Fixes sidebar button not selected when the sidebar is open. (#1712)

### 2018.1 – 8 Feb 2018

* API: Adds support for rotating pages in the current view. (#1621)
  * API: Adds `ViewState#pagesRotation` to set the currently applied rotation.
  * API: Adds `ViewState#rotateLeft()` and `ViewState#rotateRight()` to rotate the current view by 90° clockwise or counterclockwise.
* API: Adds a new toolbar item `sidebar-thumbnails`. (#1614)
* API: Adds `ViewState#sidebarMode` to control the sidebar. (#1614)
* Adds support for rotating pages. (#1621)
* Adds support for importing and exporting XFDF. (#1651)
* Adds support for exporting Instant JSON on server setups. (#1662)
* Adds support for grouped checkbox form fields. (#1689)
* Adds WASM streaming initialization and caching for supported browsers. (#1644)
* Adds more runtime type checks to the `ViewState` API. (#1655)
* Adds sidebar for page thumbnails previews. (#1614)
* Adds keyboard shortcuts to change page using the left and right arrow keys. (#1666)
* Adds support for the `NoView` flag for all supported annotations. (#1683)
* Fixes a WASM regression on iOS 11.2.2 and 11.2.5 by disabling WASM support on these particular versions. (#1650)
* Fixes a bug where opening the `layout-config` menu will hide new ink drawings. (#1652)
* Fixes an issue where unchecked checkboxes were not properly exported. (#1673)
* Fixes a bug where pages were briefly rendered in the browser while printing. (#1678)
* Fixes keyboard shortcuts work in combination with `shift` key. (#1696)

### 2017.9.4 – 24 Jan 2018

No web-specific changes in this version.

### 2017.9.3 – 17 Jan 2018

* Fixes an issue when opening a PDF using the RESTProvider and a license without forms. (#1612)
* Fixes an issue when deleting an annotation using the RESTProvider. (#1635)
* Fixes a bug preventing client presences to be updated. (#1618)
* Fixes full screen keyboard shortcut instead open search. (#1609)
* Fixes incorrect text lines in some documents. (#C13148)
* Fixes an assertion when a non-specified named action was deserialized via Instant JSON. (#C13804)
* Fixes `PrintMode.EXPORT_PDF` not working in Edge and IE11 for Standalone deployments. (#1640)

### 2017.9.2 – 20 Dec 2017

* Fixes permission compatibility with server. (#1601)
* Fixes `setFormFieldValue` sending malformed payload to the server. (#1599)

### 2017.9.1 – 15 Dec 2017

* Fixes an issue where trial licenses did not have the form license flag set. (#C13553)

### 2017.9 – 14 Dec 2017

* API: Adds support for programmatic form filling. (#936)
  * API: Adds `Instance#getFormFields()` to access form fields.
  * API: Adds `Instance#getFormFieldsValues()` and `Instance#setFormFieldsValues()` to easily access the current form field values.
  * API: Adds `WidgetAnnotation` to the annotation API. This annotation can never be modified and is used to render form fields.
  * API: Adds `SubmitFormAction` and `ResetFormAction`. The submit action will also fire `forms.willSubmit` and `forms.didSubmit`, respectively.
* API: Adds a new toolbar item type, `responsive-group`. This can be used to create groups of toolbar items for smaller screens. (#1412)
* Adds support for interactive forms. (#936)
* Adds support for filling forms via Instant. (#936)
* Adds a responsive mode to the toolbar. Annotation tools are now by default grouped under an “Annotate” option on small screens. (#1412)
* Adds headless mode to run PSPDFKit for Web without a user interface. (#1534)
* Fixes an error in Instant when two clients edit text annotations simultaneously. (#1522)
* Fixes flickering of the note annotation popover when a note annotation is selected. (#1363)
* Fixes an issue where default colors for highlight annotations were not rendered properly. (#C12938)

### 2017.8.1 – 6 Dec 2017

No web-specific changes in this version.

### 2017.8 – 22 Nov 2017

* Changes annotation IDs from numerical to client-side generated string IDs. (#1303)
* Fixes a bug that prevented text selection starting from non-text nodes. (#1492)
* Fixes impossible to deselect text. (#1492)
* Fixes canceled text lines requests in standalone resolve anyway. (#1506)
* Fixes an issue with Instant on documents without the `edit-annotations` permission. (#1451)

### 2017.7.1 – 15 Nov 2017

* Improved memory management for standalone deployments. (#1453)
* Fixes `getBaseUrl` removes part of the url in IE. (#1456)
* Fixes copied text includes new lines in Firefox and IE. (#1463)

### 2017.7 – 25 Oct 2017

* API: Adds `PSPDFKit.unload` to terminate running and loading instances in favor of the now deprecated `Instance#destroy`. (#1389)
* API: Adds new CSS classes to select annotations. (#1414)
* API: Adds new CSS class to select text. (#1406)
* API: Adds option to specify a `pageIndex` to the `Instance#renderCover` standalone API. (#1404)
* API: Adds option to disable WebAssembly when using standalone deployments. (#1416)
* API: Adds new `contentWindow` and `contentDocument` getters to the `Instance` to quickly access the content of the PSPDFKit viewer. (#1439)
* API: Adds API for printing and introduces printing modes. (#1319)
* API: Fixes the casing in CSS class names of specific note annotation icons to be more consistent. (#1414)
* Adds new printing mode `DOM`. This method will render all pages of the PDF document in advance before it sends the results to the printer. (#1319)
* Adds a new icon set for all toolbar items. (#1413)
* Adds pinching for touch devices in `PER_SPREAD` scroll mode. (#1315)
* Improved support for Apple Pencil. (#1415)
* Improved WebAssembly/asm.js loading time of subsequent initializations. (#1390)
* Fixes an issue where an Instant sync conflict was causing an invalid state. (#1347)
* Fixes an issue with the transition of note annotation popovers. (#1388)
* Fixes an issue that sometimes prevented the text caret to be drawn in IE11 and Edge. (#1395)
* Fixes the position of the initial text caret on Safari. (#1396)
* Fixes a rendering issue that resulted into a blurry pages when using standalone deployments. (#1261)
* Fixes the spacing of color picker items in responsive mode. (#1414)
* Fixes an issue that emitted the wrong payload with the `annotations.delete` event. (#1423)
* Fixes an issue that caused a crash when the page index of an annotation was out of bounds. (#1397)
* Fixes an issue that prevent toolbar items from being disabled via the API. (#1432)

### 2017.6.1 – 2 Oct 2017

* Adds support for Internet Explorer 11 when using standalone deployments. (#C11782)
* Improves read-only mode for note annotations. (#1360)
* Improves error messages when invalid JWT token is supplied. (#1379)
* Changes the default breakpoint for the `layout-config` toolbar item. (#1364)

### 2017.6 – 18 Sept 2017

* API: `ViewState#pageSpacing` is now used for the spacing between pages in `LayoutMode.DOUBLE`. For the previous behavior, please use `ViewState#spreadSpacing` instead.
* API: Deprecates `ViewState#viewMode` and adds `ViewState#layoutMode` and `ViewState#scrollMode`. (#1272)
* API: Renames `ZoomMode.PAGE_FIT` and `ZoomMode.PAGE_WIDTH` to `ZoomMode.FIT_TO_VIEWPORT` and `ZoomMode.FIT_TO_WIDTH`. (#1277)
* API: Adds `ViewState#keepFirstSpreadAsSinglePage` to start with a single page in `LayoutMode.DOUBLE`. (#737)
* API: Adds `Instance#textLinesForPageIndex` to extract text content of a page. (#1302)
* Adds double page mode for both scroll modes. (#737)
* Adds support for zooming and scrolling in `PER_SPREAD` scroll mode. (#1285)
* Adds pagination by using the mouse scroll wheel in `PER_SPREAD` scroll mode. (#1285)
* Adds support for Note annotations. (#1235)
* Improves error messages for some APIs. (#1304)
* Improves performance when opening a big PDF with many annotations. (#1304)
* Improves user experience while rendering pages. (#1301)
* Fixes an issue where annotations imported via Instant JSON could no longer be updated or deleted. (#1312)
* Fixes an issue where the zoom level was not properly recalculated, when the viewport dimensions changed. (#1310)
* Fixes an issue with printing still working after being disabled via API. (#1324)
* Fixes an issue where an error was logged when refreshing the browser. (#1329)
* Fixes errors that ocurred when the root element was removed from the DOM, before the viewer finished loading. (#1328)
* Fixes a race condition that could occur when syncing annotations. (#1343)

### 2017.5.4 – 31 Aug 2017

No web-specific changes in this version.

### 2017.5.3 – 17 Aug 2017

* Fixes an issue with Chrome that prevented the document from rendering in certain environments. (#1293)

### 2017.5.2 – 9 Aug 2017

* Improves backoff behavior of Instant endpoint when an error occurs. (#1249)
* Fixes an issue where zooming in or out when text is selected caused a wrong popover position. (#1269)
* Fixes Safari/IE11 not including request headers for tiles request. (#1283)
* Fixes `exportPDF` flattens by default converting annotations to non-editable content. We made it configurable. (#1276)
* Fixes an issue where a floating point font size for a text annotation causes two options with the same value in the dropdown list. (#1284)

### 2017.5.1 – 24 Jul 2017

* Improves standalone rendering speed. (#1243)
* Improves error logging in some cases. (#1251)
* Fixes the default save mode when using standalone deployments. (#1257)
* Fixes an issue with Edge when using standalone deployments. (#1250)

### 2017.5 – 20 Jul 2017

* API: Adds `Configuration#pdf` to load a PDF for client side rendering via an `URI` or an `ArrayBuffer`. (#966)
* API: Adds ability to create, read, update, and delete annotations as well as an API to observe annotation changes. (#937)
* API: Adds event before and after the annotations are saved. (#1150)
* API: Expose annotation interfaces (`Annotation`, `HighlightAnnotation`, `InkAnnotation`, `LinkAnnotation`, `SquiggleAnnotation`, `StrikeOutAnnotation`, `TextAnnotation`, `MarkupAnnotation` `UnderlineAnnotation`, `UnknownAnnotation`). (#1049)
* API: Exposes new primitives types (`Immutable.List`, `Geometry.Point`, `Geometry.DrawingPoint`, `Geometry.Rect`, `Geometry.Size` and `Color`). (#1031)
* API: Exposes PDF action types (`Actions.GoToAction`, `Actions.URIAction`). (#1037)
* API: Supports different save modes and adds ability to save annotations manually. (#964)
* API: Renames `viewstatechanged`, `currentpageindexchanged`, `zoomchanged` and `connectedclientschanged` events. (#1151)
* API: Adds `Instance#hasUnsavedAnnotations` to find out if unsaved annotations are present. (#1152)
* API: Adds `Instance#exportPDF` to access the raw PDF binary data as `ArrayBuffer`. (#1163)
* API: Adds `Instance#exportInstantJSON` and `Configuration#instantJSON` to serialize and deserialize the document state including all annotations using Instant JSON when no server is present. (#1158)
* API: Adds `Instance#renderCover` to render the first page as a thumbnail for client side rendering. (#1178)
* API: Allow to override onPress handlers for annotations. (#1175)
* API: Allow to overwrite the inferred base url for the Server in case the JavaScript is loaded from a different host. (#1185)
* Adds support for client side rendering using WebAssembly (wasm) or asm.js. Please visit our guides for more information. (#966)
* Adds support for bundling PSPDFKit for Web using an npm package. (#1098)
* Improves pinching performance on mobile devices. (#1085)
* Improves performance of tile rendering. (#1125)
* Fixes zoom buttons should only be hidden for touch devices. (#1077)
* Fixes error in the Custom Toolbar when `mediaQueries` is set to `undefined`. (#1080)
* Fixes cleanup of event listeners when drawing ink annotations. (#1061)
* Fixes a bug that caused Safari on iOS to trigger the default zoom behavior on double tap. (#859)
* Fixes an issue with `babel-polyfill`. (#1108)
* Fixes issue when quickly jumping through search results. (#1078)
* Fixes prevent text annotation to increase page size when created at the edge. (#1130)
* Fixes sliders' thumb position for Edge. (#1136)
* Fixes sliders' vertical alignment in IE11. (#1136)
* Fixes an issue where the initial viewport size was wrong. (#1240)
* Fixes link annotations not clickable when in read-only mode. (#1242)

### 2017.4 – 16 May 2017

* API: Adds ability to customize and add new items to the main toolbar. (#1048)
* API: Adds new option `interactionMode` to `ViewState` to enable ink, text, search and pan mode. (#1003)
* API: Adds `version` to `PSPDFKit` to get the current version of PSPDFKit for Web. (#1047)
* Adds support for interacting with all annotation types (ink, text, highlight, squiggle, underline, strike-through, and link) on mobile devices. (#906)
* Adds a special annotation toolbar that appears when text is selected to allow the creation of markup annotations on mobile devices. (#1060)
* Adds pan tool to allow users to navigate on a desktop browser using mouse dragging. (#887)
* Improves the scrolling performance in Chrome browsers when an ink annotation is inside the viewport. (#616)
* Improves tiling by avoiding unnecessary calculations. (#1000)
* Improves ink annotation creation on different pages. (#985)
* Improves logging and descriptiveness of messages for errors in HTTP APIs. (#S1078, #S1110)
* Fixes issues with empty text annotations. (#821)
* Fixes an issue with text annotations that get dragged while they're changed. (#980)
* Fixes a bug that prevented the focus of the text annotation after clicking on it. (#1013)
* Fixes a bug that caused a wrong initial text selection within a text annotation. (#929)
* Fixes a bug that caused an exception when destroying the PSPDFKit for Web instance on IE 11. (#1034)
* Fixes the centering of the content inside the viewport. (#998)
* Fixes a bug where delete annotation can delete pdf assets. (#S1117)

### 2017.3.2 – 19 Apr 2017

* Adds CSS class for unsupported annotations and hides them by default. (#991)
* Fixes a bug where the `user_id` of the user performing a change was not always persisted. (#S1083)

### 2017.3.1 – 12 Apr 2017

* Adds a new license information page to the dashboard. (#S1074)
* Adds `cmd+g` and `cmd+shift+g` keyboard shortcuts to jump to the next/previous search result (macOS only). (#961)
* `load()` will now throw if the `container` element has children. (#957)
* Fixes buggy behavior in Firefox where the user needs to press backspace twice to start to delete from the end of a text annotation. (#974)
* Fixes a bug in Firefox where a NO-BREAK SPACE was inserted after the first line break. (#976)
* Fixes a bug when switching annotation modes. (#818)

### 2017.3 – 29 Mar 2017

* API: Adds option to enable read only mode. (#886)
* API: Adds option to hide annotations. (#886)
* API: Custom style sheets must now be set through the JavaScript API. (#630)
* API: Adds option to hide the print icon to `ViewState`. (#845)
* API: Adds many new public CSS classes. (#733)
* API: Adds documentation for `load()`. (#839)
* Adds support for printing documents. (#845)
* Adds new AUTO zoom mode for a better default experience. (#741)
* Adds support for flattening annotations into the PDF before it is downloaded. (#S1026)
* Adds support for permissions to selectively enable/disable viewing and editing features. These replace the old access control based on the `access` and `user_id` fields. (#S1031)
* Prevents CSS conflicts by encapsulating the viewer. (#630)
* Enforces `document_id` to be type of `string` in the JWT. (#824)
* Updates the format of the JWT used for authentication. (#S1031, #S1043)
* Removes border of link annotations. (#882)
* Fixes an error for Chrome >= 56 that was caused by Chrome making event handlers passive per default. (#792)
* Fixes z-index ordering for some annotations to prioritize newer ones. (#746)
* Fixes an issue that prevented dragging annotations in IE 11. (#870)
* Fixes an issue with editing a text annotation after reloading. (#852)

### 2017.2 – 17 Feb 2017

* API: The server will now always return and expect string document IDs. (#808)
* Adds HTTP API for working with annotations.
* Adds a debug mode to track down issues during development. (#760)
* Adds shortcuts to zoom in, out and back to page-fit.
* Shows toolbar when starting to create an ink or text annotation. (#801)
* Improves read-only mode. (#761)
* Improves the contrast of resize anchors. (#751)
* Improves the Dashboard experience.
* Search now also appears via CMD-G on macOS. (#758)
* Fixes an issue that sends an invalid search request. (#756)
* Fixes an issue where parts of the annotation toolbar disappeared. (#647)
* Fixes an issue with hidden toolbar buttons. (#794)

### 2017.1 – 25 Jan 2017

* Adds search. (#722)
* Adds custom dropdown to preview fonts. (#413)
* Optimizes ink annotations. (#590)

### 2016.3 – 21 Dec 2016

* Adds a dashboard for easy control over the server.
* Shows a font's name in the dropdown even if the font is not available. (#665)

### 2016.2.1 – 12 Dec 2016

* Fixes an issue with external events. (#699)

### 2016.2 – 8 Dec 2016

* Adds support for Internet Explorer 11. (#676)
* Removes white space after the last page on Firefox for Android. (#651, #652)
* Fixes an issue with text annotation clipping on Edge. (#644)
* Fixes an issue with PDF documents that have fractional page dimensions. (#660)
* Fixes an issue with the AnnotationToolbar position. (#661)

### 2016.1 – 1 Dec 2016

* First public release.
