import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useLike } from "../hooks/useButtonLike";

const ButtonLike = () => {
  const { isLiked, handleLike } = useLike();
  return (
    <div className="mt-20">
      <button
        onClick={handleLike}
        className={`flex gap-3 items-center p-2 rounded-xl bg-blue-500 cursor-pointer ${isLiked ? "text-red-500" : "text-slate-100"}`}
      >
        {isLiked ? <FaHeart /> : <FaRegHeart />}
      </button>
    </div>
  );
};

export default ButtonLike;
