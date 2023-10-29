import { Column, Entity, OneToMany } from "typeorm";
import { PostHashtagHistory } from "./PostHashtagHistory";

@Entity("hashtag", { schema: "social_feed" })
export class Hashtag {
  @Column("varchar", { primary: true, name: "id", length: 12 })
  id: string;

  @Column("varchar", { name: "hashtag_name", length: 45 })
  hashtagName: string;

  @OneToMany(
    () => PostHashtagHistory,
    (postHashtagHistory) => postHashtagHistory.hashtag
  )
  postHashtagHistories: PostHashtagHistory[];
}
