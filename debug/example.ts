// use of relative paths to the modules
import pnp from "../src/pnp";
import { Logger, LogLevel } from "../src/utils/logging";

// shim a type of process
declare var process: { exit(code?: number): void };

export function Example() {

    // run some debugging
    pnp.sp.web.select("Title", "Description").get().then(w => {

        // logging results to the Logger
        Logger.log({
            data: w,
            level: LogLevel.Info,
            message: "Web's Title",
        });

        process.exit(0);
    });
}
