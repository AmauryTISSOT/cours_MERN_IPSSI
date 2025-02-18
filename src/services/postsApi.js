const PostsApi = {
    /**
     * Fonction permettant d'appeler mon API
     * @returns List de posts
     */
    getPosts: () => {
        return fetch(
            "https://api.slingacademy.com/v1/sample-data/blog-posts"
        ).then((response) => response.json());
    },

    /**
     * Fonction permettant d'obtenir les posts depuis leurs id
     * @param {*} id
     * @returns
     */
    getPostsById: (id) => {
        return fetch(
            `https://api.slingacademy.com/v1/sample-data/blog-posts/${id}`
        ).then((response) => response.json());
    },
};

export default PostsApi;
