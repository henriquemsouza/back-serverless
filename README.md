
# Back Serverless


## Folder Structure (/src) ##
```sh
.
├── infra
│   ├── config
│   ├── container
│   └── db
│       ├── entities
│       ├── migrations
│       ├── seeds
│       └── utils
├── modules
│   └── Marketplace
│       ├── CreateProduct
│       │   └── interfaces
│       ├── DeleteProduct
│       │   └── interfaces
│       ├── Products
│       │   └── interfaces
│       └── UpdateProduct
│           └── interfaces
├── server
├── shared
│   ├── adapters
│   ├── contracts
│   ├── decorators
│   ├── exceptions
│   ├── responses
│   └── types
└── utils
```


Modules Structure 

```sh
.
├── Marketplace
│   ├── CreateProduct
│   │   ├── CreateProductCase.ts
│   │   ├── CreateProductRouter.ts
│   │   └── interfaces
│   │       └── CreateProductsInterface.ts
│   ├── DeleteProduct
│   │   ├── DeleteProductCase.ts
│   │   ├── DeleteProductRouter.ts
│   │   └── interfaces
│   │       └── CreateProductsInterface.ts
│   ├── MarketplaceContainer.ts
│   ├── MarketplaceRoutes.ts
│   ├── Products
│   │   ├── interfaces
│   │   │   └── ProductsInterface.ts
│   │   ├── ProductsCase.ts
│   │   └── ProductsRouter.ts
│   └── UpdateProduct
│       ├── interfaces
│       │   └── UpdateProductsInterface.ts
│       ├── UpdateProductCase.ts
│       └── UpdateProductRouter.ts
└── Routes.ts

```
### Initial build with docker
```sh
docker-compose up --build
```



### after the initial build with docker execute the command below to generate the initial categories and products:
```sh
yarn seed:run
```


## Install
```sh
yarn
```

## Run
```sh
yarn start:dev
```

## List all routes created
```sh
yarn routes
```