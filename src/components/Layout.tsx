import { For, ParentProps } from "solid-js";
import { GitHubIcon } from "../icons/GitHub";
import { HomeIcon } from "../icons/Home";
import { LinkedInIcon } from "../icons/LinkedIn";
import { Nav } from "./Nav";
import { useLocation } from "@solidjs/router";
import { ChevronIcon } from "../icons/Chevron";


export function Layout(props: ParentProps) {
  const location = useLocation();

  return (
    <div class="min-h-dvh flex flex-col bg-stone-800 text-stone-200">
      <div class="bg-stone-700 px-4 py-1">
        jpgray.ca
      </div>

      <div class="flex-1 flex flex-row">
        {/* external links and a dummy 'home' link  */}
        <div class="text-stone-400 p-1 flex flex-col gap-2">
          <div class="cursor-pointer text-stone-100">
            <HomeIcon px={48} />
          </div>
          <div>
            <a href="https://github.com/just1ngray">
              <GitHubIcon px={48} />
            </a>
          </div>
          <div>
            <a href="https://www.linkedin.com/in/justinpgray/">
              <LinkedInIcon px={48} />
            </a>
          </div>
        </div>

        {/* "file" navigation selection */}
        <Nav />

        {/* main window */}
        <div class="grow">
          <div class="p-2 flex flex-row items-center text-stone-400">
            <span>{window.location.origin}</span>
            <For each={location.pathname.split("/").filter(part => part.length > 0)}>
              {part => <>
                <ChevronIcon />
                <span>{part}</span>
              </>}
            </For>
          </div>

          <hr class="text-stone-400" />

          <main class="p-2">
            {props.children}
          </main>
        </div>
      </div>

      <div class="bg-stone-700 px-4 py-1">
        Not a UI designer or front-end developer... clearly :)
      </div>
    </div>
  )
}
