import { useState } from "react";
import Search from "./components/Search";
import "./App.css";

function App() {
  const [searchValue, setSearchValue] = useState("");
  const [kickUsername, setKickUsername] = useState(null);
  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };

  //si se apreta enter se hace el fetch
  const handleOnKeyDown = async (e) => {
    if (e.key === "Enter") {
      if (searchValue.includes("kick.com/")) {
        setKickUsername(searchValue.split("kick.com/")[1].split("/")[0]);
      } else {
        setKickUsername(searchValue);
      }
    }
  };
  return (
    <div
      className={`${
        !kickUsername
          ? "flex flex-col max-h-[190px]  rounded-xl  bg-white text-black"
          : ` rounded-xl text-white bg-[#141414] h-[240px] `
      } mx-auto my-12 p-4 max-w-[390px]   shadow-2xl rounded-3x `}
    >
      {kickUsername ? (
        <iframe
          title="kick"
          src={`https://player.kick.com/${kickUsername}`}
          width="100%"
          height="100%"
          frameBorder="0"
          scrolling="no"
          allowFullScreen
        ></iframe>
      ) : (
        <Search
          searchValue={searchValue}
          handleSearchChange={handleSearchChange}
          handleOnKeyDown={handleOnKeyDown}
        />
      )}
    </div>
  );
}

export default App;
