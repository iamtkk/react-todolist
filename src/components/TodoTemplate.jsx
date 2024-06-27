/* eslint-disable react/prop-types */
const TodoTemplate = ({ children }) => {
  return (
    <div className="w-[512px] mx-auto mt-[6rem] rounded overflow-hidden">
      <div className="bg-[#22b8cf] text-white h-16 text-2xl flex justify-center items-center">
        일정 관리
      </div>
      <div className="bg-white">{children}</div>
    </div>
  );
};

export default TodoTemplate;