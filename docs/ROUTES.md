# ROUTES

These are some of the existing routes at the moment.

```sh

.-----------------------------------------.
|              All Routes                 |
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




#  [GET] Categories list 'v1/marketplace/categories/list'


### curl
```curl
curl --location --request GET 'http://localhost:3000/v1/marketplace/categories/list'

```

### response:

```json
{
    "categories": [
        {
            "id": 1,
            "name": "atacado"
        },

    ]
}
```


#  [POST] Create Products 'v1/marketplace/product'

### curl
```curl
curl --location --request POST 'http://localhost:3000/v1/marketplace/product' \
--header 'Content-Type: application/json' \
--data-raw '{
    "code": "XYXY",
    "categoryId": "44",
    "name": "NEW NAME"
}'

```

### Body:

```json
{
    "code": "UNIQUE INFORMED CODE",
    "categoryId": "INFORMED CATEGORY ID",
    "name": "INFORMED NAME"
}
```

### response:

```json
{
    "code": "INFORMED CODE",
    "category": {
        "id": "INFORMED CATEGORY ID",
        "name": "INFORMED CATEGORY NAME"
    },
    "name": "INFORMED NAME",
    "id": 28,
    "createdAt": "2021-12-26T23:03:38.649Z"
}
```


#  [DELETE] Delete products  'v1/marketplace/product'

### curl
```curl
curl --location --request DELETE 'http://localhost:3000/v1/marketplace/product?id=28' \
--header 'Content-Type: application/json'

```

### response:

```json
{
    "OK"
}
```

#  [PATCH] Create Products 'v1/marketplace/product'

### Body:

```json
{
    "categoryId": "UPDATED CATEGORY ID",
    "name": "UPDATED NAME",
    "id": "8"
}
```

### response:

```json
{
    "code": "INFORMED CODE",
    "category": {
        "id": "INFORMED CATEGORY ID",
        "name": "INFORMED CATEGORY NAME"
    },
    "name": "INFORMED NAME",
    "id": 28,
    "createdAt": "2021-12-26T23:03:38.649Z"
}
```
