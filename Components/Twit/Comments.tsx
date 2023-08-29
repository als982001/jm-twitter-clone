import useGetComments from "@/Hooks/useGetComments";
import Comment from "./Comment";

interface IProps {
  commentIds: string[];
}

export default function Comments({ commentIds }: IProps) {
  const { isLoading, comments } = useGetComments(commentIds);

  return (
    <ul>
      {isLoading ? (
        <h1>로딩중...</h1>
      ) : (
        comments.map((comment) => (
          <Comment key={comment._id.toString()} comment={comment} />
        ))
      )}
    </ul>
  );
}
