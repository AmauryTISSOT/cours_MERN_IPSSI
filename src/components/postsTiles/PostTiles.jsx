import { useEffect, useState } from "react";
import PostsApi from "../../services/postsApi";
import { Link } from "react-router-dom";
import styles from "./PostTiles.module.css";

function PostTiles() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        PostsApi.getPosts().then((data) => setPosts(data.blogs));
    }, []);

    return (
        <>
            <div className={styles.container}>
                {posts.map((post) => (
                    <Link
                        className={styles.item}
                        key={post.id}
                        to={`/detail/${post.id}`}
                    >
                        <h3>{post.title}</h3>
                    </Link>
                ))}
            </div>
        </>
    );
}

export default PostTiles;
