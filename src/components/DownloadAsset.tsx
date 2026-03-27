import { createMemo } from "solid-js";

import { DownloadIcon } from "../icons/Download";


type AssetPath = `/assets/${string}`;

export function DownloadAsset(props: { assetPath: AssetPath }) {
  const name = createMemo(() => props.assetPath.split("/").at(-1));
  const size = createMemo(() => {
    const bytes = ASSET_SIZES[props.assetPath];
    if (bytes >= 1e9) return `${(bytes / 1e9).toFixed(2)} GB`;
    if (bytes >= 1e6) return `${(bytes / 1e6).toFixed(1)} MB`;
    if (bytes >= 1e3) return `${(bytes / 1e3).toFixed(0)} KB`;
    return `${bytes} B`;
  });

  return (
    <a href={props.assetPath} download={name()}>
      <div class="inline-flex flex-row items-center gap-2 p-2 hover:bg-stone-700 border border-stone-400 rounded">
        <div><DownloadIcon px={32} /></div>
        <div>
          <div>Download <span class="font-mono underline">{name()}</span></div>
          <div class="text-sm opacity-70">{size()}</div>
        </div>
      </div>
    </a>
  );
}
