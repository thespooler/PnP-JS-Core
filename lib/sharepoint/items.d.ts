import { SharePointQueryable, SharePointQueryableCollection, SharePointQueryableInstance } from "./sharepointqueryable";
import { SharePointQueryableShareableItem } from "./sharepointqueryableshareable";
import { Folder } from "./folders";
import { File } from "./files";
import { ContentType } from "./contenttypes";
import { TypedHash } from "../collections/collections";
import { ListItemFormUpdateValue } from "./types";
import { AttachmentFiles } from "./attachmentfiles";
/**
 * Describes a collection of Item objects
 *
 */
export declare class Items extends SharePointQueryableCollection {
    /**
     * Creates a new instance of the Items class
     *
     * @param baseUrl The url or SharePointQueryable which forms the parent of this fields collection
     */
    constructor(baseUrl: string | SharePointQueryable, path?: string);
    /**
     * Gets an Item by id
     *
     * @param id The integer id of the item to retrieve
     */
    getById(id: number): Item;
    /**
     * Gets BCS Item by string id
     *
     * @param stringId The string id of the BCS item to retrieve
     */
    getItemByStringId(stringId: string): Item;
    /**
     * Skips the specified number of items (https://msdn.microsoft.com/en-us/library/office/fp142385.aspx#sectionSection6)
     *
     * @param skip The starting id where the page should start, use with top to specify pages
     */
    skip(skip: number): this;
    /**
     * Gets a collection designed to aid in paging through data
     *
     */
    getPaged(): Promise<PagedItemCollection<any>>;
    /**
     * Adds a new item to the collection
     *
     * @param properties The new items's properties
     */
    add(properties?: TypedHash<any>, listItemEntityTypeFullName?: string): Promise<ItemAddResult>;
    /**
     * Ensures we have the proper list item entity type name, either from the value provided or from the list
     *
     * @param candidatelistItemEntityTypeFullName The potential type name
     */
    private ensureListItemEntityTypeName(candidatelistItemEntityTypeFullName);
}
/**
 * Descrines a single Item instance
 *
 */
export declare class Item extends SharePointQueryableShareableItem {
    /**
     * Gets the set of attachments for this item
     *
     */
    readonly attachmentFiles: AttachmentFiles;
    /**
     * Gets the content type for this item
     *
     */
    readonly contentType: ContentType;
    /**
     * Gets the effective base permissions for the item
     *
     */
    readonly effectiveBasePermissions: SharePointQueryable;
    /**
     * Gets the effective base permissions for the item in a UI context
     *
     */
    readonly effectiveBasePermissionsForUI: SharePointQueryable;
    /**
     * Gets the field values for this list item in their HTML representation
     *
     */
    readonly fieldValuesAsHTML: SharePointQueryableInstance;
    /**
     * Gets the field values for this list item in their text representation
     *
     */
    readonly fieldValuesAsText: SharePointQueryableInstance;
    /**
     * Gets the field values for this list item for use in editing controls
     *
     */
    readonly fieldValuesForEdit: SharePointQueryableInstance;
    /**
     * Gets the folder associated with this list item (if this item represents a folder)
     *
     */
    readonly folder: Folder;
    /**
     * Gets the folder associated with this list item (if this item represents a folder)
     *
     */
    readonly file: File;
    /**
     * Updates this list intance with the supplied properties
     *
     * @param properties A plain object hash of values to update for the list
     * @param eTag Value used in the IF-Match header, by default "*"
     */
    update(properties: TypedHash<any>, eTag?: string, listItemEntityTypeFullName?: string): Promise<ItemUpdateResult>;
    /**
     * Delete this item
     *
     * @param eTag Value used in the IF-Match header, by default "*"
     */
    delete(eTag?: string): Promise<void>;
    /**
     * Moves the list item to the Recycle Bin and returns the identifier of the new Recycle Bin item.
     */
    recycle(): Promise<string>;
    /**
     * Gets a string representation of the full URL to the WOPI frame.
     * If there is no associated WOPI application, or no associated action, an empty string is returned.
     *
     * @param action Display mode: 0: view, 1: edit, 2: mobileView, 3: interactivePreview
     */
    getWopiFrameUrl(action?: number): Promise<string>;
    /**
     * Validates and sets the values of the specified collection of fields for the list item.
     *
     * @param formValues The fields to change and their new values.
     * @param newDocumentUpdate true if the list item is a document being updated after upload; otherwise false.
     */
    validateUpdateListItem(formValues: ListItemFormUpdateValue[], newDocumentUpdate?: boolean): Promise<ListItemFormUpdateValue[]>;
    /**
     * Ensures we have the proper list item entity type name, either from the value provided or from the list
     *
     * @param candidatelistItemEntityTypeFullName The potential type name
     */
    private ensureListItemEntityTypeName(candidatelistItemEntityTypeFullName);
}
export interface ItemAddResult {
    item: Item;
    data: any;
}
export interface ItemUpdateResult {
    item: Item;
    data: ItemUpdateResultData;
}
export interface ItemUpdateResultData {
    "odata.etag": string;
}
/**
 * Provides paging functionality for list items
 */
export declare class PagedItemCollection<T> {
    private nextUrl;
    results: T;
    constructor(nextUrl: string, results: T);
    /**
     * If true there are more results available in the set, otherwise there are not
     */
    readonly hasNext: boolean;
    /**
     * Gets the next set of results, or resolves to null if no results are available
     */
    getNext(): Promise<PagedItemCollection<any>>;
}
