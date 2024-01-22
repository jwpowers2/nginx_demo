# NGINX Demo with Docker Compose

## demo reverse proxy

without the abstraction of containerization, you use proxy_pass directive in a location for your server to 
redirect traffic to somewhere else when it hits that 'location' route for the front-facing interface, the proxy.

with docker compose containerization and its internal network (host only network mode), and internal name resolution, we can use the load balancer
functionality to direct traffic 'upstream' to another host in the internal network. 
You use the proxy_pass directive in the server > location and also the 'upstream' directive. 

## demo DDOS protection

can test slow loris using
https://github.com/GinjaChris/bashloris

sudo sh bashloris.sh localhost 80

look at resource using using 'top'

test flood using curl 
this exceeds the rate limiting, but you see the site is still up and the hot dogs are 
still being made, but the numbers are not increasing at a crazy rate. It is dumping off the excess 
requests but still processing a minimal ammount within the designated threshold.

while true; do curl http://localhost/api/hotdogs; sleep .05; clear; done

references:
https://www.nginx.com/blog/mitigating-ddos-attacks-with-nginx-and-nginx-plus/
https://www.nginx.com/blog/rate-limiting-nginx/

## demo load balancing



https://www.nginx.com/resources/glossary/reverse-proxy-vs-load-balancer/
https://umasrinivask.medium.com/configure-nginx-as-a-reverse-proxy-with-docker-compose-file-4ebba2b75c89

https://github.com/gofiber/recipes/blob/master/mongodb/main.go