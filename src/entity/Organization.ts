import { Entity, PrimaryGeneratedColumn, Column, Index } from "typeorm";

@Entity({ name: "organization" })
export class Organization {
  @Index({ unique: true })
  @PrimaryGeneratedColumn("uuid")
  id: number = 0;

  @Column("varchar", { length: 100 })
  name: string | null = null;

  @Column("varchar", { length: 200 })
  address: string | null = null;
}
