import { ParentProps } from "solid-js";


export function Code(props: ParentProps) {
  return (

    <span class="px-1 py-0.5 font-mono outline outline-stone-500 rounded text-sky-400">
      {props.children}
    </span>
  );
}
