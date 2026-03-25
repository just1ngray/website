import { GitHubRepoBadge } from "../../components/GitHubRepoBadge";


export function Website() {
  return (
    <div class="flex flex-col gap-4">
      <GitHubRepoBadge owner="just1ngray" repo="website" />

      <p>You're here!</p>

      <p>
        Originally I wanted to just use plain HTML and put everything in my&nbsp;
        <a href="/programming/jpgray.ca" class="underline">jpgray.ca</a> repository but I couldn't live without
        re-usable components.
      </p>

      <p>
        This project uses <a href="https://deno.com/" class="underline">Deno</a> to manage
        a <a href="https://www.solidjs.com/" class="underline">SolidJS</a> project that gets statically built and
        easily deployed.
      </p>

      <p>
        I like SolidJS because it's very conceptually similar to React, but maintains a more stable API (which is
        important as I don't make front-end apps very often), ships a smaller bundle, and is more performant in
        general.
      </p>

    </div>
  );
}
