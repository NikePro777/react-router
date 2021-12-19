import Post from "./post";
import PostsList from "./postsList";
import { useParams } from "react-router-dom";
// import query from "query-string";
// import _ from "lodash";
const Posts = ({ match }) => {
  const posts = [
    { id: 1, label: "post1" },
    { id: 2, label: "post2" },
    { id: 3, label: "post3" },
  ];
  const params = useParams();
  // const search = query.parse(location.search);
  // console.log(search);
  // const cropPosts = search
  //   ? _(posts).slice(0).take(search.count).value()
  //   : posts;
  const { postId } = params;
  return (
    <>
      {postId ? (
        <Post posts={posts} id={postId} />
      ) : (
        <PostsList posts={posts} />
      )}
    </>
  );
};

export default Posts;
