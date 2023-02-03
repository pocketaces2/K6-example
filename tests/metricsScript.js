import http from 'k6/http';
import { Trend } from 'k6/metrics';

const myTrend = new Trend('waiting_time');
const trendStatus = new Trend('response_Status');

export default function () {
    const r = http.get('https://httpbin.test.k6.io');
    myTrend.add(r.timings.waiting);
    trendStatus.add(r.status);
    console.log(myTrend.name); // waiting_time
}