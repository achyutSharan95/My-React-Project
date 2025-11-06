import React from "react";
import Images from "../../assets/Media";

const SearchInput = ({ onSubmit, value, setValue }) => {
  return (
    <form onSubmit={onSubmit} className="mb-4">
      <div className="flex items-center gap-3 rounded-[30px] px-4 py-2 w-full bg-white shadow-[0px_11px_15px_#e3d7c8]">
        <input
          type="text"
          placeholder="What’s on your mind?"
          className="border-0 px-4 py-2 w-full focus:outline-0 text-[#C2B39F] alpina-font text-[22px] not-italic font-normal leading-[145%] tracking-[-0.22px]"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button
          type="submit"
          disabled={value.length === 0}
          className={`flex items-center justify-between rounded-full size-[26px]  transition-all duration-200 ease-in-out ${value.length === 0 ? "opacity-50 cursor-not-allowed bg-[#FAF3EA]" : "cursor-pointer bg-[#036D3C] hover:bg-[#036D3C]"
            }`}
        >
          <img src={Images.Arrow} alt="search icon" />
        </button>
      </div>
    </form>
  );
};

export default SearchInput;
