import http from 'k6/http';

export function googleGetter() {
    http.get('https://www.google.com');
    //sleep(1);
}