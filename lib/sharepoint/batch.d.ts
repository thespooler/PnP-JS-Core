import { ODataParser } from "../odata/core";
/**
 * Manages a batch of OData operations
 */
export declare class ODataBatch {
    private baseUrl;
    private _batchId;
    private _dependencies;
    private _requests;
    constructor(baseUrl: string, _batchId?: string);
    readonly batchId: string;
    /**
     * Adds a request to a batch (not designed for public use)
     *
     * @param url The full url of the request
     * @param method The http method GET, POST, etc
     * @param options Any options to include in the request
     * @param parser The parser that will hadle the results of the request
     */
    add<T>(url: string, method: string, options: any, parser: ODataParser<T>): Promise<T>;
    /**
     * Adds a dependency insuring that some set of actions will occur before a batch is processed.
     * MUST be cleared using the returned resolve delegate to allow batches to run
     */
    addDependency(): () => void;
    /**
     * Execute the current batch and resolve the associated promises
     *
     * @returns A promise which will be resolved once all of the batch's child promises have resolved
     */
    execute(): Promise<any>;
    private executeImpl();
    /**
     * Parses the response from a batch request into an array of Response instances
     *
     * @param body Text body of the response from the batch request
     */
    private _parseResponse(body);
}
