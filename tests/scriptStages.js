import http from 'k6/http';
import { check, sleep } from 'k6';

//e.g. init options & imports
export const options = {
    stages: [
        { duration: '10s', target: 20 },
        { duration: '10s', target: 10 },
        { duration: '10s', target: 20 },
    ]
};

//e.g. init global variables and custom functions
const customTrend = 'helloworld'
function myCustomFunction (){
    console.log('init custom function call');
}

export function setup() {
    // 2. setup code - called ONCE (after init code), must be exported function
    console.log('hello world setup')
    //The return value here is passed to the other methods
    return { v: 1 };
}


export default function (data) {
    // VU code - called for every VU iteration
    const res = http.get('https://httpbin.test.k6.io/');
    check(res, {'status was 200': (r) => r.status == 200});
    sleep(1);
    console.log(JSON.stringify(data));
}


export function teardown(data) {
    // Teardown code called ONCE after completion of all tests
    console.log('hello world tearing down')

    if (data.v != 1){
        throw new Error('incorrect data: ' + JSON.stringify(data));
    }
}