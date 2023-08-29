import useGetComments from "@/Hooks/useGetComments";
import Comment from "./Comment";
import { IComment } from "@/utils/types";

interface IProps {
  commentIds: string[];
  newComments: IComment[];
}

export default function Comments({ commentIds, newComments }: IProps) {
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
      {newComments.map((comment) => (
        <Comment key={comment._id.toString()} comment={comment} />
      ))}
    </ul>
  );
}
