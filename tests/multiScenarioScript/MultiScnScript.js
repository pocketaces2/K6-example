import http from 'k6/http';
import {googleGetter} from "./externalGoogleFunc.js";


export const options = {
    scenarios: {
        example_scenario: {
            executor: 'shared-iterations',

            startTime: '3s',
            gracefulStop: '5s',
            exec: "getGoogle",

            vus: 2,
            iterations: 2,
            maxDuration: '2m',
        },
        another_scenario: {
            executor: 'shared-iterations',

            startTime: '5s',
            gracefulStop: '5s',
            exec: "default",

            vus: 2,
            iterations: 5,
            maxDuration: '2m',
        },
    },
};

export default function () {
    http.get('https://test-api.k6.io/public/crocodiles/1/');
    //sleep(1);
}

export function getGoogle(){
    googleGetter();
}