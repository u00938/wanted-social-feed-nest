import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Post } from "./Post";
import { Hashtag } from "./Hashtag";

@Index("hashtag_id", ["hashtagId"], {})
@Index("post_id", ["postId", "hashtagId"], { unique: true })
@Entity("post_hashtag_history", { schema: "social_feed" })
export class PostHashtagHistory {
  @Column("varchar", { primary: true, name: "id", length: 12 })
  id: string;

  @Column("varchar", { name: "post_id", length: 12 })
  postId: string;

  @Column("varchar", { name: "hashtag_id", length: 12 })
  hashtagId: string;

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

  @ManyToOne(() => Post, (post) => post.postHashtagHistories, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "post_id", referencedColumnName: "id" }])
  post: Post;

  @ManyToOne(() => Hashtag, (hashtag) => hashtag.postHashtagHistories, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "hashtag_id", referencedColumnName: "id" }])
  hashtag: Hashtag;
}
