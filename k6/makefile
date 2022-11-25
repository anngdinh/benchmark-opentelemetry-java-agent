run1:
	k6 run --out influxdb=http://10.76.0.6:8086/agent test.js

run2:
	k6 run --out influxdb=http://10.76.0.6:8086/no_agent test.js

# .....................

FOLDER := no_agent
runk:
	K6_SUMMARY_EXPORT="./${FOLDER}/result_0.json"	K6_STAGES="1m:10,1m:10" 			k6 run test_v2.js
	K6_SUMMARY_EXPORT="./${FOLDER}/result_1.json"	K6_STAGES="1m:50,2m:50" 			k6 run test_v2.js
	K6_SUMMARY_EXPORT="./${FOLDER}/result_2.json"	K6_STAGES="1m:100,3m:100" 			k6 run test_v2.js
	K6_SUMMARY_EXPORT="./${FOLDER}/result_3.json"	K6_STAGES="1m:500,4m:500" 			k6 run test_v2.js
	K6_SUMMARY_EXPORT="./${FOLDER}/result_4.json"	K6_STAGES="1m:1000,5m:1000" 		k6 run test_v2.js
	K6_SUMMARY_EXPORT="./${FOLDER}/result_5.json"	K6_STAGES="1m:1500,6m:1500" 		k6 run test_v2.js
	K6_SUMMARY_EXPORT="./${FOLDER}/result_6.json"	K6_STAGES="1m:2000,7m:2000" 		k6 run test_v2.js
	K6_SUMMARY_EXPORT="./${FOLDER}/result_7.json"	K6_STAGES="1m:3000,8m:3000" 		k6 run test_v2.js
	K6_SUMMARY_EXPORT="./${FOLDER}/result_8.json"	K6_STAGES="1m:4000,9m:4000" 		k6 run test_v2.js
	K6_SUMMARY_EXPORT="./${FOLDER}/result_9.json"	K6_STAGES="1m:5000,10m:5000" 		k6 run test_v2.js