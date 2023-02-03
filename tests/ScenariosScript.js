import http from 'k6/http';
import { sleep } from 'k6';
import {googleGetter} from "./multiScenarioScript/externalGoogleFunc.js";

export const options = {
    scenarios: {
        example_scenario: {
            // name of the executor to use
            executor: 'shared-iterations',

            // common scenario configuration
            startTime: '3s',
            gracefulStop: '5s',
            env: { EXAMPLEVAR: 'testing' },
            tags: { example_tag: 'testing' },
            //Works with func in same file
            //exec: "googleGetter2",
            exec: "getGoog",


            // executor-specific configuration
            vus: 2,
            iterations: 2,
            maxDuration: '2m',
        },
    },
};

export default function () {
    http.get('https://test-api.k6.io/public/crocodiles/1/');
    //sleep(1);
}

export function getGoog(){
    googleGetter();
}