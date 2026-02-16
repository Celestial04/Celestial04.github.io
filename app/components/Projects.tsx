"use client";

export default function Projects() {
  return (
    <div
      id="Projects"
      className="flex flex-col mt-300 border-2 rounded-2xl w-full border-(border-stats) backdrop-blur-md m-2 p-1 list-inside"
    >
      <div className="">
        <h2 className="text-2xl">Projects</h2>
      </div>
      <div className="backdrop-blur-md">
        <p>Here&apos;s all my projects:</p>
        <div
        className="rounded-2xl backdrop-opacity-100 bg-opa"
        >
          <h4 className="text-xl">Dideet:</h4>
          <p>It&apos;s a social network that&apos;s I started to think about it since the last year</p>
        </div>
      </div>
    </div>
  );
}
