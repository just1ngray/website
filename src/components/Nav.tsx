import { createSignal, ParentProps, Show } from "solid-js";
import { A, useLocation } from "@solidjs/router";
import { ChevronIcon } from "../icons/Chevron";
import { CodeIcon } from "../icons/Code";


function NavItem(props: { name?: string, href: string, }) {
  const location = useLocation();

  return (
    <A href={props.href}>
      <div class="relative cursor-pointer group p-1">
        <div class={`absolute inset-y-0 -left-[9999px] right-0
                     ${location.pathname == props.href ? "bg-stone-600" : "group-hover:bg-stone-600/50"}
        `} />
        <div class="relative flex flex-row">
          <div class="mr-1"><CodeIcon /></div>
          <span>{props.name || props.href.slice(1)}</span>
        </div>
      </div>
    </A>
    );
}

function NavFolder(props: ParentProps & { name: string }) {
  const [isOpen, setIsOpen] = createSignal(true);

  return (
    <div>
      <div
        class="relative flex flex-row cursor-pointer group p-1"
        onClick={() => setIsOpen(!isOpen())}
      >
        <div class="absolute inset-y-0 -left-[9999px] right-0 group-hover:bg-stone-600/50" />
        <div class={`relative ${isOpen() ? "rotate-90" : ""}`}>
          <ChevronIcon />
        </div>
        <div class="relative">{props.name}</div>
      </div>

      <Show when={isOpen()}>
        <div class="ml-4 pl-1 border-l-2 border-stone-400">
          {props.children}
        </div>
      </Show>
    </div>
  );
}


export function Nav() {
  return (
    <div class="min-h-dvh bg-stone-700/50 p-1 overflow-hidden">
      <NavItem href="/" name="index.html" />
      <NavFolder name="Folder Name">
        <NavItem href="/foo" />
        <NavItem href="/bar" />
        <NavItem href="/baz" />
      </NavFolder>
      <NavItem href="/foobarbaz" />
    </div>
  );
}
