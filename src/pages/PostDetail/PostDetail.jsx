import { useEffect, useState } from "react";
import PostsApi from "../../services/postsApi";
import { useParams } from "react-router-dom";

function PostDetail() {
    const [postById, setPostById] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        PostsApi.getPostsById(id).then((data) => setPostById(data.blog));
    }, [id]);

    return (
        <div>
            <h1>Blog post numéro : {postById.id}</h1>
            <h2>Titre : {postById.title}</h2>
            <p>
                <strong>Catégorie :</strong> {postById.category}
            </p>
            <p>
                <strong>Description :</strong> {postById.description}
            </p>
            <p>{postById.content_text}</p>
        </div>
    );
}

export default PostDetail;
