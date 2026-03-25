import { For, ParentProps, createSignal } from "solid-js";
import { GitHubIcon } from "../icons/GitHub";
import { BurgerIcon } from "../icons/Burger";
import { LinkedInIcon } from "../icons/LinkedIn";
import { Nav } from "./Nav";
import { useLocation } from "@solidjs/router";
import { ChevronIcon } from "../icons/Chevron";


export function Layout(props: ParentProps) {
  const [smallNavOpen, setSmallNavOpen] = createSignal(false);
  const location = useLocation();

  return (
    <div class="min-h-dvh flex flex-col bg-stone-800 text-stone-200">
      <div class="flex-1 flex flex-row">
        {/* external links and a dummy 'home' link  */}
        <div class="text-stone-400 p-1 flex flex-col gap-2">
          <div class="cursor-pointer text-stone-100" onClick={() => setSmallNavOpen(!smallNavOpen())}>
            <BurgerIcon px={48} />
          </div>
          <div class="hover:text-stone-300">
            <a href="https://github.com/just1ngray">
              <GitHubIcon px={48} />
            </a>
          </div>
          <div class="hover:text-stone-300">
            <a href="https://www.linkedin.com/in/justinpgray/">
              <LinkedInIcon px={48} />
            </a>
          </div>
        </div>

        {/* "file" navigation selection */}
        <div class={`grow md:grow-0 ${smallNavOpen() ? "" : "hidden md:inline-block"}`} onClick={() => setSmallNavOpen(false)}>
          <Nav />
        </div>

        {/* main window */}
        <div class={`grow ${smallNavOpen() ? "hidden md:inline-block" : ""}`}>
          <div class="p-2 flex flex-row flex-wrap items-center text-stone-400">
            <span>{window.location.origin}</span>
            <For each={(location.pathname.substring(1) || "index.html").split("/")}>
              {part => <>
                <ChevronIcon />
                <span>{part}</span>
              </>}
            </For>
          </div>

          <hr class="text-stone-400" />

          <main class="p-2 max-w-250">
            {props.children}
          </main>
        </div>
      </div>

      <div class="bg-stone-700 px-4 flex flex-col sm:flex-row sm:justify-between sm:items-center">
        <div class="pb-2 md:pb-0">Me and CSS have... an understanding :)</div>
        <div class="flex flex-col sm:flex-row gap-2">
          <a href="https://grafana.jpgray.ca">
            <div class="p-1 hover:bg-stone-600">Grafana</div>
          </a>
          <a href="https://whoami.jpgray.ca">
            <div class="p-1 hover:bg-stone-600">Whoami</div>
          </a>
        </div>
      </div>
    </div>
  );
}
