import { Entity, PrimaryGeneratedColumn, Column, Index } from "typeorm";

@Entity({ name: "criteria" })
export class Criteria {
  @Index({ unique: true })
  @PrimaryGeneratedColumn("uuid")
  id: number = 0;

  @Column("varchar", { length: 500 })
  question: string | null = null;
}
