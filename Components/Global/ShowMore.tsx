import React, { MutableRefObject } from "react";

interface IProps {
  ref: MutableRefObject<null>;
}

const ShowMore = React.forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <div
      style={{
        width: "100%",
        height: "100px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "pink",
      }}
    >
      더 보기
    </div>
  );
});

export default ShowMore;
