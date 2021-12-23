import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity("product")
class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50, unique: true })
  code: string;

  @Column()
  name: string;

  @Column()
  categoryId: string;

  @CreateDateColumn()
  createdAt: Date;
}

export default Product;
