import http from 'k6/http';
import { check, group } from 'k6';

const config = [
    { VUs: 10, time: '1m' },
    { VUs: 50, time: '2m' },
    { VUs: 100, time: '2m' },
    { VUs: 500, time: '3m' },
    { VUs: 1000, time: '4m' },
    { VUs: 1500, time: '5m' },
    { VUs: 2000, time: '5m' },
    { VUs: 3000, time: '6m' },
    { VUs: 4000, time: '6m' },
    { VUs: 5000, time: '7m' },
]
const cur = config[3]
export const options = {
    thresholds: {},
    scenarios: {
        // agent: {
        //     executor: 'ramping-vus',
        //     startVUs: 0,
        //     stages: [
        //         { duration: '1m', target: cur.VUs },
        //         { duration: cur.time, target: cur.VUs },
        //     ],
        //     gracefulRampDown: '0s',
        // },
        no_agent: {
            executor: 'ramping-vus',
            startVUs: 0,
            stages: [
                { duration: '1m', target: cur.VUs },
                { duration: cur.time, target: cur.VUs },
            ],
            gracefulRampDown: '0s',
            exec: 'NoAgent'
        },
    },
};

for (let key in options.scenarios) {
    // Each scenario automaticall tags the metrics it generates with its own name
    // let threshold_req_duration = `http_req_duration{scenario:${key}}`;
    // let threshold_group_duration = `group_duration{scenario:${key}}`;
    // let threshold_http_req_failed = `http_req_failed{scenario:${key}}`;
    // let threshold_http_reqs = `http_reqs{scenario:${key}}`;
    // let threshold_iterations = `iterations{scenario:${key}}`;
    // let threshold_checks = `checks{scenario:${key}}`;

    // options.thresholds[threshold_req_duration] = [];
    // options.thresholds[threshold_group_duration] = [];
    // options.thresholds[threshold_http_req_failed] = [];
    // options.thresholds[threshold_http_reqs] = [];
    // options.thresholds[threshold_iterations] = [];
    // options.thresholds[threshold_checks] = [];

    // options.thresholds[threshold_req_duration].push('avg<5000');
    // options.thresholds[threshold_group_duration].push('avg < 5000');
    // options.thresholds[threshold_http_req_failed].push('rate<0.01');
    // options.thresholds[threshold_http_reqs].push('rate > 0.01');
    // options.thresholds[threshold_iterations].push('rate > 0.01');
    // options.thresholds[threshold_checks].push('rate > 0.5');
}

export default function () {
    group('API uptime check', () => {
        const params = {
            // cookies: { my_cookie: 'value' },
            headers: {
                'Content-Type': 'application/json'
            },
            // tags: { k6test: 'yes' },
        };

        // const response = http.get('http://localhost:8080/v2/pro-26151c78-0470-4b4c-88a1-6ec41ef29492/secgroups', params);
        const response = http.get('http://10.76.0.12:8080/', params);

        // const response = http.get('https://todo-app-barkend.herokuapp.com/todos/');
        check(response, {
            "status 1 code should be 200": res => res.status === 200,
        });
    });

};


export function NoAgent() {
    group('API uptime check', () => {
        const params = {
            // cookies: { my_cookie: 'value' },
            headers: {
                'Content-Type': 'application/json'
            },
            // tags: { k6test: 'yes' },
        };

        // const response = http.get('http://localhost:8080/v2/pro-26151c78-0470-4b4c-88a1-6ec41ef29492/secgroups', params);
        const response = http.get('http://10.76.0.14:8085/', params);

        // const response = http.get('https://todo-app-barkend.herokuapp.com/todos/');
        check(response, {
            "status 1 code should be 200": res => res.status === 200,
        });
    });

}