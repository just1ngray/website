import { mergeProps } from "solid-js";
import { IconProps, DEFAULT_ICON_PROPS } from "./iconprops";


export function ChevronIcon(props: IconProps) {
  const merged = mergeProps(DEFAULT_ICON_PROPS, props);

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={merged.px} height={merged.px} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width={merged.width} stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-chevron-right"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M9 6l6 6l-6 6" /></svg>
  );
}
