import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("category")
class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}

export default Category;
