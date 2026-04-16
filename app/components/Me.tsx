"use client";

import moment from "moment";

export default function Me() {
  return (
    <div
      id="Me"
      className="flex scroll-m-24 flex-col mt-150 border-2 rounded-2xl w-full border-foreground backdrop-blur-md p-1 list-inside"
    >
      <div>
        <h2 className="text-2xl">About me</h2>
      </div>
      <div className="backdrop-blur-md flex flex-col">
        <div className="rounded-2xl bg-/25 p-4 mb-8 hover:scale-107 duration-150">
          <h4 className="text-xl">
            Who am I!?
          </h4>
          <p>
            I&apos;m Celeste, I have {moment().diff(moment('2004-07-11'), 'years')} years
            old and I&apos;m born in France.
          </p>
        </div>
        <div className="rounded-2xl bg-purple-300/25 p-4 hover:scale-107 duration-150">
          <h4 className="text-xl">
            What I do!?
          </h4>
          <p>
            I&apos;m a developer, I love coding since I was 12
            years old, I started to code with HTML, CSS and JavaScript
          </p>
        </div>
      </div>
    </div>
  );
}
