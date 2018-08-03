# rails-docker

## Setup
1. docker-compose run --rm web bundle exec rails new . --force --database=mysql --skip-bundle
2. docker-compose run --rm web bundle --jobs=4 --retry=5
3. `config/database.yml`を編集する
```
...
default: &default
    adapter: mysql2
    encoding: utf8
    pool: <%= ENV.fetch("RAILS_MAX_THREADS") { 5 } %>
    username: root
    password: password
    host: db
...
```
4. docker-compose run --rm web bundle exec rails db:create
6. docker-compose up

