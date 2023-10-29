import { Column, Entity } from "typeorm";

@Entity("user", { schema: "social_feed" })
export class User {
  @Column("varchar", { primary: true, name: "id", length: 12 })
  id: string;

  @Column("varchar", { name: "uid", nullable: true, length: 45 })
  uid: string | null;

  @Column("varchar", { name: "nickname", nullable: true, length: 45 })
  nickname: string | null;

  @Column("varchar", { name: "login_id", length: 45 })
  loginId: string;

  @Column("varchar", { name: "email", length: 45 })
  email: string;

  @Column("varchar", { name: "password", length: 20 })
  password: string;

  @Column("tinyint", { name: "is_verified", default: () => "'0'" })
  isVerified: number;

  @Column("datetime", {
    name: "created_dt",
    default: () => "CURRENT_TIMESTAMP",
  })
  createdDt: Date;

  @Column("datetime", {
    name: "updated_dt",
    default: () => "CURRENT_TIMESTAMP",
  })
  updatedDt: Date;
}
