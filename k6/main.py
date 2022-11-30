# To get result

import json

for i in range(10):
    f = open('saveResult2/agent-3/result_'+ str(i) +'.json')
    # f = open('saveResult2/no_agent-3/result_'+ str(i) +'.json')
    data = json.load(f)
    # print(data["metrics"]["http_req_duration"]["avg"], data["metrics"]["http_req_duration"]["p(90)"])
    print(\
        # data["metrics"]["http_req_failed"]["passes"], \
        # data["metrics"]["vus_max"]["max"], \
        data["metrics"]["http_req_failed"]["fails"], \
        data["metrics"]["http_req_duration"]["avg"], \
        data["metrics"]["http_req_duration"]["p(90)"], \
        data["metrics"]["http_reqs"]["rate"] \
        )
    f.close()
