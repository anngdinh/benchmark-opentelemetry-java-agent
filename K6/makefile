run1:
	k6 run --out influxdb=http://localhost:8086/myk6db test.js
run2:
	k6 run test.js

install-xk6:
	./xk6 build --with github.com/grafana/xk6-output-prometheus-remote

run3:
	K6_PROMETHEUS_REMOTE_URL=http://localhost:9090/api/v1/write ./k6 run test.js -o output-prometheus-remote