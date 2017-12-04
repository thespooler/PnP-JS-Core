import { GraphQueryable, GraphQueryableInstance } from "./graphqueryable";
import { Events } from "./calendars";
export declare class Me extends GraphQueryableInstance {
    constructor(baseUrl: string | GraphQueryable, path?: string);
    /**
     * Retrieve a list of event objects
     */
    readonly events: Events;
}
