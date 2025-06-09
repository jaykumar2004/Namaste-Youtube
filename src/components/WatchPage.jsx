import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice.jsx";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer.jsx";
import LiveChat from "./LiveChat.jsx";

const WatchPage = () => {
  const [searchParams] = useSearchParams({});

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  return (
    <div className="flex flex-col w-full">
      <div className="px-5 flex">
        <div>
          <iframe
            width="800"
            height="400"
            src={`https://www.youtube.com/embed/${searchParams.get(
              "v"
            )}?autoplay=0`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <div className="w-full">
          <LiveChat/>
        </div>
      </div>
      <CommentsContainer />
    </div>
  );
};

export default WatchPage;
