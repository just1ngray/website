import { ParentProps } from "solid-js";
import { GitHubIcon } from "../icons/GitHub";
import { HomeIcon } from "../icons/Home";
import { LinkedInIcon } from "../icons/LinkedIn";
import { Nav } from "./Nav";


export function Layout(props: ParentProps) {
  return (
    <div class="bg-stone-800 min-h-dvh text-stone-200">
      <div class="flex flex-row">
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
        <Nav />
        <div>
          {props.children}
        </div>
      </div>
    </div>
  )
}
