import { Nav } from "./Nav";


export function Layout() {
  return (
    <div class="bg-stone-800 min-h-dvh text-white">
      <div class="flex flex-row">
        <Nav />
        <div>
          Content
        </div>
      </div>
    </div>
  )
}
