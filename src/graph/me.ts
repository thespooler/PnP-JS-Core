import { GraphQueryable, GraphQueryableInstance } from "./graphqueryable";
import { Events } from "./calendars";

export class Me extends GraphQueryableInstance {

    constructor(baseUrl: string | GraphQueryable, path = "me") {
        super(baseUrl, path);
    }

    /**
     * Retrieve a list of event objects
     */
    public get events(): Events {
        return new Events(this);
    }
}
