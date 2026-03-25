import { createResource, For, Show } from "solid-js";
import { StarIcon } from "../icons/Star";
import { GitHubIcon } from "../icons/GitHub";


export function GitHubRepoBadge(props: { owner: string, repo: string }) {
  const [repo] = createResource(async () => {
    const res = await fetch(`https://api.github.com/repos/${props.owner}/${props.repo}`);
    const json = await res.json();

    const languagesRes = await fetch(`https://api.github.com/repos/${props.owner}/${props.repo}/languages`);
    const languagesJson: Record<string, number> = await languagesRes.json();

    return {
      htmlUrl: json.html_url as string,
      description: json.description as string,
      createdAt: new Date(json.created_at),
      updatedAt: new Date(json.updated_at),
      pushedAt: new Date(json.pushed_at),
      starsCount: json.stargazers_count as number,
      languages: languagesJson,
      languagesLineSum: Object.values(languagesJson).reduce((prev, cur) => prev + cur, 0),
    };
  });

  return (
    <div class="flex flex-col gap-2">

      <div class="flex flex-row space-between items-center gap-2">
        <div>
          <GitHubIcon />
        </div>

        <div>
          <a class="font-mono text-xl md:text-2xl break-all" href={repo()?.htmlUrl}>
            {props.owner}/{props.repo}
          </a>
        </div>

        <div class="sm:min-w-16 flex-1" />

        <Show when={repo()?.starsCount}>
          <div>
            <StarIcon />
          </div>
          <div>
            <a class="p-1">{repo()?.starsCount}</a>
          </div>
        </Show>
      </div>

      <p>{repo()?.description || "Loading..."}</p>

      <Show when={repo()}>
        <div class="flex border border-stone-400 rounded-lg overflow-clip">
          <For each={Object.entries(repo()!.languages)}>
            {(entry) => {
              const percent100 = entry[1] / repo()!.languagesLineSum * 100;
              let displayPercent;
              if (percent100 > 1) {
                displayPercent = Math.round(percent100);
              }
              else if (percent100 > 0.1) {
                displayPercent = percent100.toPrecision(1);
              }
              else {
                displayPercent = "<0.1";
              }

              return (
                <div
                  style={{ width: `${percent100}%` }}
                  class={`${LANGUAGE_COLOURS[entry[0]] || ""} p-1 font-bold text-center overflow-hidden text-ellipsis min-w-fit`}
                >
                  {entry[0]}&nbsp;<br class="sm:hidden" />
                  ({displayPercent}%)
                </div>
              );
            }
          }
          </For>
        </div>
      </Show>
    </div>
  );
}

// chosen appropriately according to Claude
const LANGUAGE_COLOURS: Record<string, string> = {
  "TypeScript": "bg-blue-400 text-blue-900",
  "JavaScript": "bg-yellow-400 text-yellow-900",
  "Python": "bg-blue-500 text-white",
  "Rust": "bg-orange-500 text-white",
  "Go": "bg-cyan-400 text-cyan-900",
  "Ruby": "bg-red-500 text-white",
  "Java": "bg-orange-400 text-orange-900",
  "Kotlin": "bg-purple-400 text-purple-900",
  "Swift": "bg-orange-400 text-orange-900",
  "C": "bg-gray-400 text-gray-900",
  "C++": "bg-blue-400 text-blue-900",
  "C#": "bg-green-500 text-white",
  "PHP": "bg-indigo-400 text-indigo-900",
  "Scala": "bg-red-400 text-white",
  "Elixir": "bg-purple-500 text-white",
  "Haskell": "bg-purple-400 text-purple-900",
  "Clojure": "bg-green-400 text-green-900",
  "Erlang": "bg-red-400 text-white",
  "Dart": "bg-blue-400 text-blue-900",
  "Lua": "bg-blue-300 text-blue-900",
  "R": "bg-blue-500 text-white",
  "Julia": "bg-purple-400 text-purple-900",
  "Shell": "bg-green-400 text-green-900",
  "PowerShell": "bg-blue-500 text-white",
  "HTML": "bg-orange-500 text-white",
  "CSS": "bg-purple-900 text-purple-400",
  "SCSS": "bg-pink-400 text-pink-900",
  "Vue": "bg-emerald-400 text-emerald-900",
  "Svelte": "bg-orange-500 text-white",
  "Markdown": "bg-stone-400 text-stone-900",
  "YAML": "bg-red-400 text-white",
  "TOML": "bg-orange-400 text-orange-900",
  "JSON": "bg-yellow-300 text-yellow-900",
  "Dockerfile": "bg-blue-400 text-blue-900",
  "Nix": "bg-blue-400 text-blue-900",
  "Zig": "bg-yellow-500 text-yellow-900",
  "OCaml": "bg-orange-400 text-orange-900",
  "F#": "bg-blue-400 text-blue-900",
  "Gleam": "bg-pink-400 text-pink-900",
  "Solidity": "bg-gray-400 text-gray-900",
};
