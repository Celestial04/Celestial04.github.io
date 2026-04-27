"use client";

import moment from "moment";

export default function Me() {
  return (
    <div
      id="Me"
      className="flex scroll-m-24 flex-col mt-[67vh] border-2 rounded-2xl w-full border-foreground backdrop-blur-md p-1 list-inside"
    >
      <div>
        <h2 className="text-2xl">About me</h2>
      </div>
        <div className="flex max-md:flex-col gap-3">
        <div className="Bubble bg-red-600/25">
          <h4 className="text-xl">
            Who am I!?
          </h4>
          <p>
            I&apos;m Celeste, I have {moment().diff(moment('2004-07-11'), 'years')} years
            old and I&apos;m born in France.
          </p>
        </div>
        <div className="Bubble bg-purple-300/25">
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
