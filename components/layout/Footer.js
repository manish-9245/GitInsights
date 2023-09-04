import React from "react";

const Footer = () => {
  return (
    <footer className="card-item border-t p-3 flex justify-center items-center gap-1 flex-col sm:flex-row">
      <span>
        &copy; {new Date().getFullYear()} by
        <a
          className="ml-1 font-semibold"
          href=""
          target="_blank"
          rel="noreferrer"
        >
          Manish Tiwari
        </a>
        .
      </span>
      <span>
        Made with ❤ {"& "}
        <a
          className="ml-1 font-semibold"
          href="https://github.com/manish-9245/GitInsights"
          target="_blank"
          rel="noreferrer"
        >
          {"<Code/>"}
        </a>
      </span>
    </footer>
  );
};

export default Footer;
