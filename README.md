# NGINX Demo with Docker Compose

## how does it work?

* hot dogs served is incremented with a random int between 0 and 5 every time the /api/hotdogs endpoint gets a hit

* the UI polls /api/hotdogs every three seconds

## spin this up to demo nginx anti DDOS, reverse-proxy, load balance

- set address for proxy in ui .env

- add PROXY_ADDRESS=proxyIpAddress to .env in ui root

1. go the project root

2. start with docker compose (you'll need docker installed)

` docker compose up --build`

## test the funcionality

* try to flood the hotdogs endpoint and watch it resist!

`while true; do curl http://localhost/api/hotdogs; sleep .05; clear; done`

* watch the load balancer work with the UI, as the UI Polls the backend

* the hot dog counts are set in a redis db shared by the load balanced API's 