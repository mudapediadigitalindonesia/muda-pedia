import PropType from "prop-types";
import { useState } from "react";
import { Button } from "@nextui-org/react";
import Content from "../../api/content";
import LoadingAnimate from "../LoadingAnimate";

const SearchInput = ({
  setContents,
  setLoadingContents,
  setSrc,
  setContentHasMore,
  setStartContent,
}) => {
  const [btnLoading, setBtnLoading] = useState(false);
  const [search, setSearch] = useState("");

  const enter = async (e) => {
    if (e.key === "Enter") {
      try {
        setLoadingContents(true);
        setContentHasMore(true);
        const res = await Content.All(0, 20, search);
        setSrc(search);
        setStartContent(0);
        setContents(res.data);
        setLoadingContents(false);
      } catch (err) {
        console.log(err);
      }
    }
  };

  const btnContent = async () => {
    try {
      setSrc("");
      setSearch("");
      setContentHasMore(true);
      let isLoading = btnLoading;
      setLoadingContents(true);
      setBtnLoading(true);
      if (!isLoading) {
        const res = await Content.All();
        setContents(res.data);
        setBtnLoading(false);
        setStartContent(0);
      }
      setLoadingContents(false);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <section className="flex  justify-center items-center mt-10">
      <input
        type="text"
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={(e) => enter(e)}
        className="border border-blue-500 outline-none py-1 px-2 rounded-l-md w-1/2 h-10"
        placeholder="Enter untuk cari"
        value={search}
      />
      <Button
        color="primary"
        radius="none"
        size="md"
        className={`rounded-r-md ${
          btnLoading ? "cursor-default" : "cursor-pointer"
        }`}
        onClick={btnContent}
      >
        {btnLoading ? <LoadingAnimate /> : "semua data"}
      </Button>
    </section>
  );
};

export default SearchInput;

SearchInput.propTypes = {
  setContents: PropType.func,
  setLoadingContents: PropType.func,
  setSrc: PropType.func,
  setContentHasMore: PropType.func,
  setStartContent: PropType.func,
};
