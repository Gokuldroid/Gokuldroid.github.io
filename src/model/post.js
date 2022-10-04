class Post {
    constructor(node, parentNode) {
        this.id = node.id;
        this.title = node.frontmatter.title;
        this.path = node.frontmatter.path;
        this.parentPath = node.frontmatter.parentPath;
        if (parentNode != null) {
            this.parentPost = new Post(parentNode);
        } else {
            this.parentPost = null;
        }
    }

    getPostLink() {
        return `/posts/${this.parentPath}/`
    }

    getParentPostLink() {
        return this.parentPost.getPostLink();
    }

    hasParentPost() {
        return this.parentPost != null;
    }
}

export default Post;