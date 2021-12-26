
# Back Serverless

## Requirements:
  * [Docker](https://docs.docker.com/engine/installation/)

  * [Docker-compose](https://docs.docker.com/compose/install/)

  * The frontend of this project is in the following repo [repository link](https://github.com/henriquemsouza/front-angular)



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

## Made with


[Typescript](https://www.typescriptlang.org/)

[aws-serverless-express](https://www.npmjs.com/package/aws-serverless-express)

[TypeOrm](https://typeorm.io/#/)

[inversify](https://inversify.io/)


## Docs

[CREATE A NEW TABLE](docs/CREATE-NEW-TABLES.md)

[EXISTING ROUTES](docs/ROUTES.md)
