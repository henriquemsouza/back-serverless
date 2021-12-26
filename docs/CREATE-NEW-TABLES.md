# CREATE NEW TABLES




## To create a new table first you have to create a a new entity  on folder

```sh
src/infra/db/entities/*
```

### 1. model of entity

```ts
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from "typeorm";


@Entity("sample") // name of table
class Sample {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nameSample: string;

  @CreateDateColumn()
  createdAt: Date;
}

export default Sample;

```

### 2. after create the entity you need to import the entity on src/infra/db/utils/Database.ts


#### 3. Create a migration based on an Entity
#####  The command below will generate a file in the folder src/infra/db/migrations/*

```sh
yarn typeorm migration:generate -n [migrationName] -d [path/to/save/migration] -c [connectionName]
```

### 4.  How to run the migration?

#### Every time the project starts it runs pending migrations and records it in the migrations table.

#### Manually you can run migrations with the command below


```sh
yarn migration:up
```
