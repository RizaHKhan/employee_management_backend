import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  Index,
  BeforeUpdate,
} from "typeorm";

@Entity({ name: "user" })
export class User {
  @PrimaryGeneratedColumn("uuid")
  id: number = 0;

  @Index({ unique: true })
  @Column("varchar", { length: 500 })
  email: string | null = null;

  @Column("varchar", { length: 1000 })
  password: string = "";

  @Column("varchar", { length: 50, nullable: true })
  firstName: string = "";

  @Column("varchar", { length: 50, nullable: true })
  lastName: string = "";

  @Column("varchar", { length: 15000, nullable: true })
  photo: string = "";

  @Column("varchar", { length: 100, nullable: true })
  phone: string = "";

  @Column("text", { nullable: true })
  about: string = "";

  @Column({ type: "timestamptz", default: "now()" })
  createdAt: Date = new Date();

  @Column({ type: "timestamptz", default: "now()", nullable: true })
  updatedAt: Date = new Date();
}
