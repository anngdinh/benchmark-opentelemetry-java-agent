import http from 'k6/http';
import { check, group } from 'k6';

const config = {
    ip: [
        { no_agent: '58.84.0.87', agent: '58.84.0.89' },
        { no_agent: '10.76.0.12', agent: '10.76.0.14' },
    ],
    time: [
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
}
const curTime = config.time[0]
const curIp = config.ip[0].agent
// const curIp = config.ip[0].agent


export const options = {
    thresholds: {},
    scenarios: {
        cuongpb: {
            executor: 'ramping-vus',
            startVUs: 0,
            stages: [
                { duration: '1m', target: curTime.VUs },
                { duration: curTime.time, target: curTime.VUs },
            ],
            gracefulRampDown: '0s',
        },
    },
};

function makeid(length = 30) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

export default function () {
    group('API uptime check', () => {
        const url = `http://${curIp}:8090/api/notebooks`
        const body = {
            name: makeid()
        }

        // GET
        let response = http.get(url + '?page=0&pageSize=100', {
            headers: {
                'Content-Type': 'application/json'
            },
        });

        check(response, {
            "status 1 code should be 200": res => res.status === 200,
        });

        // // POST
        // response = http.post(url, JSON.stringify({
        //     "name": makeid()
        // }), {
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        // });
        // check(response, {
        //     "status 1 code should be 201": res => res.status === 201,
        // });

        // // DELETE
        // // const id = JSON.parse(response)
        // const id = response.json().id
        // // console.log(id)

        // response = http.del(`${url}/${id}`, {
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        // });
        // check(response, {
        //     "status 1 code should be 202": res => res.status === 202,
        // });
        // // console.log(response)
    });

};