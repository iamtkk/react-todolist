/* eslint-disable react/prop-types */
import {
  MdCheckBox,
  MdCheckBoxOutlineBlank,
  MdRemoveCircleOutline,
} from "react-icons/md";
import cn from "classnames";

const TodoListItem = ({ todo, onRemove, onToggle }) => {
  const { id, text, checked } = todo;
  return (
    <div
      id="TodoListItem"
      className="p-4 flex items-center even:bg-[#f8f9fa] border-t-2 border-[#dee2e6] first:border-t-0"
    >
      <div
        className="cursor-pointer flex-1 flex items-center"
        onClick={() => onToggle(id)}
      >
        {checked ? (
          <MdCheckBox
            className={cn("text-2xl", {
              "text-[#22b8cf]": checked,
            })}
          />
        ) : (
          <MdCheckBoxOutlineBlank className="text-2xl" />
        )}
        <div
          id="text"
          className={cn("ml-2", "flex-1", {
            "text-[#adb5db]": checked,
            "line-through": checked,
          })}
        >
          {text}
        </div>
      </div>
      <div
        id="remove"
        className="flex items-center text-2xl text-[#ff6b6b] cursor-pointer hover:text-[#ff8787]"
        onClick={() => onRemove(id)}
      >
        <MdRemoveCircleOutline />
      </div>
    </div>
  );
};

export default TodoListItem;
