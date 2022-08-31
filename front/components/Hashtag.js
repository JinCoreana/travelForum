import Link from "next/link";
import React from "react";
import PropTypes from "prop-types";
const Hashtag = ({ postContent }) => (
  <div>
    {postContent.split(/(#[^\s#]+)/g).map((v) => {
      if (v.match(/(#[^\s]+)/)) {
        return (
          <Link
            href={{
              pathname: "https://www.google.com/search?q=",
              query: { tag: v.slice(1) },
            }}
            as={`https://www.google.com/search?q=${v.slice(1)}`}
            key={v}
          >
            <a>{v}</a>
          </Link>
        );
      }
      return v;
    })}
  </div>
);

Hashtag.propTypes = {
  postContent: PropTypes.string.isRequired,
};

export default Hashtag;
