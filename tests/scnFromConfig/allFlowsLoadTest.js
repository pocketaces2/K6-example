import http from "k6/http";

let myOptions = JSON.parse(open('./StressTestConfig.json'));


export let options = {
    scenarios: myOptions.scenarios

};

export default function () {

    console.log("Hello wolrd!!!!!!!!!!!!!!")

    console.log(myOptions);
    let k6Response =  http.get('https://test-api.k6.io/public/crocodiles/1/');
}