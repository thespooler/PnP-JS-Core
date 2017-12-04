import { SharePointQueryable, SharePointQueryableCollection } from "./sharepointqueryable";
import { Lists } from "./lists";
import { Fields } from "./fields";
import { Navigation } from "./navigation";
import { SiteGroups, SiteGroup } from "./sitegroups";
import { ContentTypes } from "./contenttypes";
import { Folders, Folder } from "./folders";
import { RoleDefinitions } from "./roles";
import { File } from "./files";
import { TypedHash } from "../collections/collections";
import { ChangeQuery } from "./types";
import { List } from "./lists";
import { SiteUsers, SiteUser, CurrentUser, SiteUserProps } from "./siteusers";
import { UserCustomActions } from "./usercustomactions";
import { ODataBatch } from "./batch";
import { Features } from "./features";
import { SharePointQueryableShareableWeb } from "./sharepointqueryableshareable";
import { RelatedItemManger } from "./relateditems";
import { AppCatalog } from "./appcatalog";
/**
 * Describes a collection of webs
 *
 */
export declare class Webs extends SharePointQueryableCollection {
    /**
     * Creates a new instance of the Webs class
     *
     * @param baseUrl The url or SharePointQueryable which forms the parent of this web collection
     */
    constructor(baseUrl: string | SharePointQueryable, webPath?: string);
    /**
     * Adds a new web to the collection
     *
     * @param title The new web's title
     * @param url The new web's relative url
     * @param description The new web's description
     * @param template The new web's template internal name (default = STS)
     * @param language The locale id that specifies the new web's language (default = 1033 [English, US])
     * @param inheritPermissions When true, permissions will be inherited from the new web's parent (default = true)
     */
    add(title: string, url: string, description?: string, template?: string, language?: number, inheritPermissions?: boolean): Promise<WebAddResult>;
}
/**
 * Describes a collection of web infos
 *
 */
export declare class WebInfos extends SharePointQueryableCollection {
    /**
     * Creates a new instance of the WebInfos class
     *
     * @param baseUrl The url or SharePointQueryable which forms the parent of this web infos collection
     */
    constructor(baseUrl: string | SharePointQueryable, webPath?: string);
}
/**
 * Describes a web
 *
 */
export declare class Web extends SharePointQueryableShareableWeb {
    /**
     * Creates a new web instance from the given url by indexing the location of the /_api/
     * segment. If this is not found the method creates a new web with the entire string as
     * supplied.
     *
     * @param url
     */
    static fromUrl(url: string, path?: string): Web;
    /**
     * Creates a new instance of the Web class
     *
     * @param baseUrl The url or SharePointQueryable which forms the parent of this web
     */
    constructor(baseUrl: string | SharePointQueryable, path?: string);
    /**
     * Gets this web's subwebs
     *
     */
    readonly webs: Webs;
    /**
    * Returns a collection of objects that contain metadata about subsites of the current site in which the current user is a member.
    *
    * @param nWebTemplateFilter Specifies the site definition (default = -1)
    * @param nConfigurationFilter A 16-bit integer that specifies the identifier of a configuration (default = -1)
    */
    getSubwebsFilteredForCurrentUser(nWebTemplateFilter?: number, nConfigurationFilter?: number): Webs;
    /**
     * Gets a collection of WebInfos for this web's subwebs
     *
     */
    readonly webinfos: WebInfos;
    /**
     * Gets the content types available in this web
     *
     */
    readonly contentTypes: ContentTypes;
    /**
     * Gets the lists in this web
     *
     */
    readonly lists: Lists;
    /**
     * Gets the fields in this web
     *
     */
    readonly fields: Fields;
    /**
     * Gets the active features for this web
     *
     */
    readonly features: Features;
    /**
     * Gets the available fields in this web
     *
     */
    readonly availablefields: Fields;
    /**
     * Gets the navigation options in this web
     *
     */
    readonly navigation: Navigation;
    /**
     * Gets the site users
     *
     */
    readonly siteUsers: SiteUsers;
    /**
     * Gets the site groups
     *
     */
    readonly siteGroups: SiteGroups;
    /**
     * Gets site user info list
     *
     */
    readonly siteUserInfoList: List;
    /**
     * Gets the current user
     */
    readonly currentUser: CurrentUser;
    /**
     * Gets the top-level folders in this web
     *
     */
    readonly folders: Folders;
    /**
     * Gets all user custom actions for this web
     *
     */
    readonly userCustomActions: UserCustomActions;
    /**
     * Gets the collection of RoleDefinition resources
     *
     */
    readonly roleDefinitions: RoleDefinitions;
    /**
     * Provides an interface to manage related items
     *
     */
    readonly relatedItems: RelatedItemManger;
    /**
     * Creates a new batch for requests within the context of this web
     *
     */
    createBatch(): ODataBatch;
    /**
     * Gets the root folder of this web
     *
     */
    readonly rootFolder: Folder;
    /**
     * Gets the associated owner group for this web
     *
     */
    readonly associatedOwnerGroup: SiteGroup;
    /**
     * Gets the associated member group for this web
     *
     */
    readonly associatedMemberGroup: SiteGroup;
    /**
     * Gets the associated visitor group for this web
     *
     */
    readonly associatedVisitorGroup: SiteGroup;
    /**
     * Gets a folder by server relative url
     *
     * @param folderRelativeUrl The server relative path to the folder (including /sites/ if applicable)
     */
    getFolderByServerRelativeUrl(folderRelativeUrl: string): Folder;
    /**
     * Gets a file by server relative url
     *
     * @param fileRelativeUrl The server relative path to the file (including /sites/ if applicable)
     */
    getFileByServerRelativeUrl(fileRelativeUrl: string): File;
    /**
     * Gets a list by server relative url (list's root folder)
     *
     * @param listRelativeUrl The server relative path to the list's root folder (including /sites/ if applicable)
     */
    getList(listRelativeUrl: string): List;
    /**
     * Updates this web instance with the supplied properties
     *
     * @param properties A plain object hash of values to update for the web
     */
    update(properties: TypedHash<string | number | boolean>): Promise<WebUpdateResult>;
    /**
     * Deletes this web
     *
     */
    delete(): Promise<void>;
    /**
     * Applies the theme specified by the contents of each of the files specified in the arguments to the site
     *
     * @param colorPaletteUrl The server-relative URL of the color palette file
     * @param fontSchemeUrl The server-relative URL of the font scheme
     * @param backgroundImageUrl The server-relative URL of the background image
     * @param shareGenerated When true, the generated theme files are stored in the root site. When false, they are stored in this web
     */
    applyTheme(colorPaletteUrl: string, fontSchemeUrl: string, backgroundImageUrl: string, shareGenerated: boolean): Promise<void>;
    /**
     * Applies the specified site definition or site template to the Web site that has no template applied to it
     *
     * @param template Name of the site definition or the name of the site template
     */
    applyWebTemplate(template: string): Promise<void>;
    /**
     * Checks whether the specified login name belongs to a valid user in the web. If the user doesn't exist, adds the user to the web.
     *
     * @param loginName The login name of the user (ex: i:0#.f|membership|user@domain.onmicrosoft.com)
     */
    ensureUser(loginName: string): Promise<WebEnsureUserResult>;
    /**
     * Returns a collection of site templates available for the site
     *
     * @param language The locale id of the site templates to retrieve (default = 1033 [English, US])
     * @param includeCrossLanguage When true, includes language-neutral site templates; otherwise false (default = true)
     */
    availableWebTemplates(language?: number, includeCrossLanugage?: boolean): SharePointQueryableCollection;
    /**
     * Returns the list gallery on the site
     *
     * @param type The gallery type - WebTemplateCatalog = 111, WebPartCatalog = 113 ListTemplateCatalog = 114,
     * MasterPageCatalog = 116, SolutionCatalog = 121, ThemeCatalog = 123, DesignCatalog = 124, AppDataCatalog = 125
     */
    getCatalog(type: number): Promise<List>;
    /**
     * Returns the collection of changes from the change log that have occurred within the list, based on the specified query
     *
     * @param query The change query
     */
    getChanges(query: ChangeQuery): Promise<any>;
    /**
     * Gets the custom list templates for the site
     *
     */
    readonly customListTemplate: SharePointQueryableCollection;
    /**
     * Returns the user corresponding to the specified member identifier for the current site
     *
     * @param id The id of the user
     */
    getUserById(id: number): SiteUser;
    /**
     * Returns the name of the image file for the icon that is used to represent the specified file
     *
     * @param filename The file name. If this parameter is empty, the server returns an empty string
     * @param size The size of the icon: 16x16 pixels = 0, 32x32 pixels = 1 (default = 0)
     * @param progId The ProgID of the application that was used to create the file, in the form OLEServerName.ObjectName
     */
    mapToIcon(filename: string, size?: number, progId?: string): Promise<string>;
    /**
     * Returns the tenant property corresponding to the specified key in the app catalog site
     *
     * @param key
     */
    getStorageEntity(key: string): Promise<string>;
    /**
     * Gets the app catalog for this web
     *
     * @param url Optional url or web containing the app catalog (default: current web)
     */
    getAppCatalog(url?: string | Web): AppCatalog;
}
/**
 * Result from adding a web
 *
 */
export interface WebAddResult {
    data: any;
    web: Web;
}
/**
 * Result from updating a web
 *
 */
export interface WebUpdateResult {
    data: any;
    web: Web;
}
/**
 * Result from retrieving a catalog
 *
 */
export interface GetCatalogResult {
    data: any;
    list: List;
}
/**
 * Result from ensuring a user
 *
 */
export interface WebEnsureUserResult {
    data: SiteUserProps;
    user: SiteUser;
}
