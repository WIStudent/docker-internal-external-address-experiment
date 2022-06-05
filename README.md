# docker-internal-external-address-experiment

Trying to figure out a docker-compose config that allows reaching services on the same address from within and from outside docker.

## Setup

1. Add the following to `/etc/hosts`:
```
127.0.0.1  service1.local
127.0.0.1  service2.local
127.0.0.1  service3.local
```

2. Run `docker compose up`

Service 1, 2 and 3 should now be available on `http://service1.local/greetings`, `http://service2.local/greetings` and `http://service3.local/greetings`.