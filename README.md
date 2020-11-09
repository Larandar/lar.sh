# URL Shortener in Cloudflare Worker

[![Deploy to Cloudflare Workers](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/Larandar/lar-sh)

## Stack

### Cloudflare Worker

The shortener work on a [CF Worker, making in quick but basic](https://developers.cloudflare.com/workers/).

### Cloudflare Worker KV

There is no database implemented yet, but a way to implement one would be to use the [Worker KV API](https://developers.cloudflare.com/workers/runtime-apis/kv)

### Wrangler

Generated using [wrangler](https://github.com/cloudflare/wrangler)
Further documentation for Wrangler can be found [here](https://developers.cloudflare.com/workers/tooling/wrangler).
