import Post from "./post";
import PostsList from "./postsList";
import query from "query-string";
import _ from "lodash";
const Posts = ({ match, location }) => {
  const posts = [
    { id: 1, label: "post1" },
    { id: 2, label: "post2" },
    { id: 3, label: "post3" },
  ];
  const search = query.parse(location.search);
  console.log(search);
  const cropPosts = search
    ? _(posts).slice(0).take(search.count).value()
    : posts;
  const postId = match.params.postId;
  return (
    <>
      {postId ? (
        <Post posts={posts} id={postId} />
      ) : (
        <PostsList posts={cropPosts} />
      )}
    </>
  );
};

export default Posts;
