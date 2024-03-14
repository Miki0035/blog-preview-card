import React from "react";
import illArticle from "./assets/images/illustration-article.svg";
import avatar from "./assets/images/image-avatar.webp";
import "./App.css";

const App = () => {
  return (
    <main className="rounded-lg border-2 shadow-[6px_8px_black] border-black flex flex-col  py-5 px-3 xl:w-96 w-80 max-[320px]:w-64 bg-white font-FigTree text-normal my-24 mx-auto">
      <article className="mb-5">
        <img
          src={illArticle}
          alt="illustration"
          className="rounded-lg w-full h-full"
        />
      </article>
      <article className="w-full flex flex-col my-2">
        <span className="rounded-md w-24  mb-2 px-4 py-2 font-bold bg-yellow">
          Learning
        </span>
        <span className="font-normal">Published 21 Dec 2023</span>
      </article>
      <article className="w-full my-3 ">
        <h1 className="w-full mb-3 font-bold text-[1.1rem] hover:text-yellow hover:cursor-pointer">
          HTML & CSS foundations
        </h1>
        <p className="font-normal text-grey w-full text-xs">
          These languages are the backbone of every website, defining structure,
          content, and presentation.
        </p>
      </article>
      <article className="w-32 flex justify-between items-center">
        <img className="w-1/4" src={avatar} alt="avatar image" />
        <span className="font-bold">Greg Hooper</span>
      </article>
      <footer class="attribution mt-3">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a href="https://www.linkedin.com/in/mikiyas-kebede-b661aa225/" target="_blank">
          Mikiyas Kebede
        </a>
        .
      </footer>
    </main>
  );
};

export default App;
