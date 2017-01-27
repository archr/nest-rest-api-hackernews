# nest-rest-api-hackernews

  This is a example based in the [nest-hackernews](https://github.com/d-oliveros/nest-hackernews) repo and the [nest-rest-api](https://github.com/archr/nest-rest-api) project.

## Requirements

  * MongoDB
  * Node >=6.9.1


## Instalation

```sh
git clone https://github.com/archr/nest-rest-api-hackernews.git
cd nest-rest-api-hackernews
npm install
```

## Usage

Run this program by doing:

```
node index.js
```

Create the first job
```sh
curl -H "Content-Type: application/json" -X POST -d '{"key":"hackernews-articles"}' http://localhost:3000/jobs
```

Start nest
```sh
curl http://localhost:3000/queue/start
```

Get items
```sh
curl http://localhost:3000/items
```

---
Thanks to [David Oliveros](https://github.com/d-oliveros) for create `nest`
