import { Column, Entity, OneToMany } from "typeorm";
import { PostHashtagHistory } from "./PostHashtagHistory";

@Entity("post", { schema: "social_feed" })
export class Post {
  @Column("varchar", { primary: true, name: "id", length: 12 })
  id: string;

  @Column("varchar", { name: "sns_type", length: 45 })
  snsType: string;

  @Column("varchar", { name: "title", length: 45 })
  title: string;

  @Column("longtext", { name: "content" })
  content: string;

  @Column("int", { name: "view_count", nullable: true, default: () => "'0'" })
  viewCount: number | null;

  @Column("int", { name: "like_count", nullable: true, default: () => "'0'" })
  likeCount: number | null;

  @Column("int", { name: "share_count", nullable: true, default: () => "'0'" })
  shareCount: number | null;

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

  @OneToMany(
    () => PostHashtagHistory,
    (postHashtagHistory) => postHashtagHistory.post
  )
  postHashtagHistories: PostHashtagHistory[];
}
