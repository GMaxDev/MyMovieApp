import MediaCard from "@/components/Header/media-card/MediaCard";
import styles from "./page.module.css";
import PostList from "@/components/PostList";

export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.main}>
        <MediaCard mediaId={10}/>
        <PostList />
      </div>
    </div>
  );
}
