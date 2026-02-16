"use client";

export default function Projects() {
  return (
    <div
      id="Projects"
      className="flex flex-col mt-300 border-2 rounded-2xl w-full border-foreground backdrop-blur-md m-2 p-1 list-inside"
    >
      <div>
        <h2 className="text-2xl">Projects</h2>
      </div>
      <div className="backdrop-blur-md">
        <p>Here&apos;s all my projects:</p>
        <div className="rounded-2xl bg-indigo-600/25 p-4 mb-8">
          <h4 className="text-xl">
            <a href="https://dideet.com">Dideet</a>:
          </h4>
          <p>
            It&apos;s a social network that&apos;s I started to think about it
            since the last year but I research some people to help me to
            concretize this project, so if you are interested to build with me
            this project, you can write me at{" "}
            <a href="mailto:write@katsuu04.dev">write@katsuu04.dev</a>!
          </p>
        </div>
                <div className="rounded-2xl bg-purple-300/25 p-4">
          <h4 className="text-xl">
            <a href="https://github.com/Celestial04/WebApperAndroid">
            WebApper
            </a>:
          </h4>
          <p>
            It&apos;s a very simple-to-use (in my opinion) web browser app. Today&apos;s web browser
            are very complicated to set. For example, for just change the default search engine
            , you need to navigate into multiple menu, like this: 
            <code>
              tap to the settings icon {"> "}
              search the search engine option, then tap on this setting {"> "} then tap again to 
              finally change the search engine set by default
              </code>...
               {" "} So yeah, this app as proper goal: to simplify all menus of a web browser app.
          </p>
        </div>
      </div>
    </div>
  );
}
