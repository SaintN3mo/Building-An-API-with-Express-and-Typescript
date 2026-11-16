# Pet Shelter API

A small REST API built with Express and TypeScript. It serves sample pet records stored in memory.

## Requirements

- Node.js 24 or later
- npm

## Getting started

Install dependencies:

```bash
npm install
```

Start the development server. It rebuilds and restarts when files in `src/` change:

```bash
npm run dev
```

The server listens at `http://localhost:8000`.

To build and run the compiled server:

```bash
npm run build
npm start
```

## API

### List pets

`GET /pets`

Optional query parameters:

| Parameter | Description |
| --- | --- |
| `species` | Filter by species, case-insensitively |
| `adopted` | Filter by adoption status (`true` or `false`) |
| `minAge` | Include pets at least this age |
| `maxAge` | Include pets no older than this age |

Example:

```text
GET http://localhost:8000/pets?species=dog&adopted=false
```

### Get a pet by ID

`GET /pets/:id?password=please`

The ID must be numeric. This route currently requires the `password=please` query parameter.

Example:

```text
GET http://localhost:8000/pets/2?password=please
```

The API returns `400` for a non-numeric ID, `401` if the required password is missing or incorrect, and `404` if no pet with that ID exists.

> The query-parameter password is a demo check, not production authentication. Replace it with a suitable authentication method before deploying publicly.
