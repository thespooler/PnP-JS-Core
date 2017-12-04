import { SearchQuery, SearchResults, SearchQueryBuilder } from "./search";
import { SearchSuggestQuery, SearchSuggestResult } from "./searchsuggest";
import { Site } from "./site";
import { Web } from "./webs";
import { UserProfileQuery } from "./userprofiles";
import { ODataBatch } from "./batch";
import { UtilityMethods } from "./utilities";
import { ConfigOptions } from "../net/utils";
/**
 * Root of the SharePoint REST module
 */
export declare class SPRest {
    /**
     * Additional options to be set before sending actual http requests
     */
    private _options;
    /**
     * A string that should form the base part of the url
     */
    private _baseUrl;
    /**
     * Creates a new instance of the SPRest class
     *
     * @param options Additional options
     * @param baseUrl A string that should form the base part of the url
     */
    constructor(options?: ConfigOptions, baseUrl?: string);
    /**
     * Configures instance with additional options and baseUrl.
     * Provided configuration used by other objects in a chain
     *
     * @param options Additional options
     * @param baseUrl A string that should form the base part of the url
     */
    configure(options: ConfigOptions, baseUrl?: string): SPRest;
    /**
     * Executes a search against this web context
     *
     * @param query The SearchQuery definition
     */
    searchSuggest(query: string | SearchSuggestQuery): Promise<SearchSuggestResult>;
    /**
     * Executes a search against this web context
     *
     * @param query The SearchQuery definition
     */
    search(query: string | SearchQuery | SearchQueryBuilder): Promise<SearchResults>;
    /**
     * Begins a site collection scoped REST request
     *
     */
    readonly site: Site;
    /**
     * Begins a web scoped REST request
     *
     */
    readonly web: Web;
    /**
     * Access to user profile methods
     *
     */
    readonly profiles: UserProfileQuery;
    /**
     * Creates a new batch object for use with the SharePointQueryable.addToBatch method
     *
     */
    createBatch(): ODataBatch;
    /**
     * Static utilities methods from SP.Utilities.Utility
     */
    readonly utility: UtilityMethods;
    /**
     * Begins a cross-domain, host site scoped REST request, for use in add-in webs
     *
     * @param addInWebUrl The absolute url of the add-in web
     * @param hostWebUrl The absolute url of the host web
     */
    crossDomainSite(addInWebUrl: string, hostWebUrl: string): Site;
    /**
     * Begins a cross-domain, host web scoped REST request, for use in add-in webs
     *
     * @param addInWebUrl The absolute url of the add-in web
     * @param hostWebUrl The absolute url of the host web
     */
    crossDomainWeb(addInWebUrl: string, hostWebUrl: string): Web;
    /**
     * Implements the creation of cross domain REST urls
     *
     * @param factory The constructor of the object to create Site | Web
     * @param addInWebUrl The absolute url of the add-in web
     * @param hostWebUrl The absolute url of the host web
     * @param urlPart String part to append to the url "site" | "web"
     */
    private _cdImpl<T>(factory, addInWebUrl, hostWebUrl, urlPart);
}
