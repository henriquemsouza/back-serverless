# ROUTES

These are some of the existing routes at the moment.

```sh

.-----------------------------------------.
|             List All Routes             |
|-----------------------------------------|
| Method |              URI               |
|--------|--------------------------------|
| GET    | v1/marketplace/products/list   |
| GET    | v1/marketplace/categories/list |
| POST   | v1/marketplace/product         |
| DELETE | v1/marketplace/product         |
| PATCH  | v1/marketplace/product         |
'-----------------------------------------'

```


#  [GET] Products list 'v1/marketplace/products/list'

| Header | Description |
| --- | ----------- |
| code | Product code you want to filter |
| category | Product category id you want to filter |
| id | the Product id you want to filter |


### curl
```curl
curl --location --request GET 'http://localhost:3000/v1/marketplace/products/list' \
--header 'category: 44' \
--header 'Content-Type: application/json' \
--header 'code: 123' \
--header 'id: 9'

```

### response:

```json
{
    "products": [
        {
            "id": 21,
            "code": "xxx11",
            "name": "novo produto update",
            "createdAt": "2021-12-24T17:33:02.233Z",
            "category": {
                "id": 44,
                "name": "todos"
            }
        }
    ]
}
```


