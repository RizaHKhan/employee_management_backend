import { Entity, PrimaryGeneratedColumn, Column, Index } from "typeorm";

@Entity({ name: "role" })
export class Role {
  @PrimaryGeneratedColumn("uuid")
  id: number = 0;

  @Index({ unique: true })
  @Column("varchar", { length: 50 })
  name: string | null = null;

  @Column("json", { nullable: true })
  permissions: {} | null = null;
}
