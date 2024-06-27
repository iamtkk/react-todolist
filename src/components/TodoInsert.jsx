/* eslint-disable react/prop-types */
import { useState, useCallback } from "react";
import { MdAdd } from "react-icons/md";

const TodoInsert = ({ onInsert }) => {
  const [value, setValue] = useState("");

  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  const onSubmit = useCallback(
    (e) => {
      onInsert(value);
      setValue("");
      e.preventDefault();
    },
    [onInsert, value]
  );

  return (
    <form className="flex" onSubmit={onSubmit}>
      <input
        className="p-2 text-lg bg-[#495057] text-white outline-none placeholder-[#dee2e6] flex-1"
        placeholder="할 일을 입력하세요"
        value={value}
        onChange={onChange}
      />
      <button
        className="outline-none bg-[#868e96] text-white px-4 text-2xl flex items-center cursor-pointer transition-all duration-100 ease-in hover:bg-[#adb4bd]"
        type="submit"
      >
        <MdAdd />
      </button>
    </form>
  );
};

export default TodoInsert;
