import * as React from "react";

interface IProps {
  comment: string;
}

const CommentCard: React.FC<IProps> = ({ comment }) => {
  return (
    <div className="relative shadow bg-white rounded-sm p-2 w-fit h-fit">
      <p className="text-sm text-[#212121]]">{comment}</p>
    </div>
  );
};

export default CommentCard;
