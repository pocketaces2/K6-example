import http from 'k6/http';
import { sleep } from 'k6';

    export const options = {

        vus: 10,
        duration: '30s',

        thresholds: {
            // 90% of requests must finish within 400ms.
            http_req_duration: ['p(90) < 100'],

            // During the whole test execution, the error rate must be lower than 1%.
            http_req_failed: ['rate<0.01'],
        },
    };

export default function () {
    http.get('https://test-api.k6.io/public/crocodiles/1/');
    sleep(1);
}