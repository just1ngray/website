import { GitHubRepoBadge } from "../../components/GitHubRepoBadge";


export function Pyfig() {
  return (
    <div class="flex flex-col gap-4">
      <GitHubRepoBadge owner="just1ngray" repo="pyfig" />

      <p>
        This is my dream configuration library for almost all Python applications. Unfortunately it doesn't work on
        small deployments like <a href="https://micropython.org/" class="underline">MicroPython</a> due to its
        core <a href="https://docs.pydantic.dev/" class="underline">Pydantic</a> dependency.
      </p>

      <p>
        You can read all about it on the project's README.md on GitHub, but here are a few reasons why I personally
        like it so much:
      </p>
      <ol class="list-decimal list-outside pl-6 space-y-2">
        <li>
          The configuration is defined as Python classes and accessed through real Python classes. Your IDE can
          infer types and you can view any relevant docstrings during development.
        </li>
        <li>
          Pydantic is incredibly powerful for validating and re-shaping data. I am always learning new ways to define
          and use its BaseModels. Pyfig can leverage it all.
        </li>
        <li>
          Pyfig's scope sits firmly between deserialization and Pydantic. It's only concerned with merging dicts and
          evaluating variables. This means the implementation is rather minimal and elegant, and as such: has so far
          proven easy to maintain.
        </li>
      </ol>

      <p>
        This library is installable through <a class="underline" href="https://pypi.org/project/jpyfig/">Pypi</a>. The
        only catch is that I <i>really</i> wanted to import it as&nbsp;
        <a class="border px-1 border-stone-400 rounded">pyfig</a> but that package name was already taken. So it has
        to be installed with <a class="border px-1 border-stone-400 rounded">pip install jpyfig</a>.
      </p>
    </div>
  );
}
