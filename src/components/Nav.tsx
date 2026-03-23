import { createSignal, ParentProps, Show } from "solid-js";
import { A } from "@solidjs/router";
import { ChevronIcon } from "../icons/Chevron";
import { CodeIcon } from "../icons/Code";


function NavItem(props: { name?: string, href: string, }) {
  return (
    <div class="cursor-pointer hover:bg-stone-600 p-1">
      <div class="flex flex-row">
        <div class="mr-1">
          <CodeIcon />
        </div>
        <A href={props.href}>{props.name || props.href}</A>
      </div>
    </div>
  );
}

function NavFolder(props: ParentProps & { name: string }) {
  const [isOpen, setIsOpen] = createSignal(true);

  return (
    <div>
      <div
        class="flex flex-row cursor-pointer hover:bg-stone-600 p-1"
        onClick={() => setIsOpen(!isOpen())}
      >
        <div class={isOpen() ? "rotate-90" : ""}>
          <ChevronIcon />
        </div>
        <div>{props.name}</div>
      </div>
      <Show when={isOpen()}>
        <div class="ml-4 pl-1 border-l">
          {props.children}
        </div>
      </Show>
    </div>

  );
}

export function Nav() {
  return (
    <div class="flex flex-row">
      <div class="min-h-dvh bg-stone-700/50 p-1">
        <NavItem href="/" name="index.html" />
        <NavFolder name="Folder Name">
          <NavItem href="foo" />
          <NavItem href="bar" />
          <NavItem href="baz" />
        </NavFolder>
        <NavItem href="foobarbaz" />
      </div>
    </div>
  );
}
