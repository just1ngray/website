import { createSignal, onMount, onCleanup } from "solid-js";
import { GlobalPinMap } from "../components/GlobalPinMap";


function formatDateTimeMyWay(date: Date, timeZone='America/Halifax') {
  const parts = new Intl.DateTimeFormat('en-CA', {
    timeZone,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: 'numeric',
    minute: '2-digit',
    second: '2-digit',
    hour12: true,
  }).formatToParts(date);

  const get = (type) => parts.find(p => p.type === type).value;

  const ampm = get('dayPeriod').toLowerCase().replaceAll(".", "");
  return `${get('year')}-${get('month')}-${get('day')} ${get('hour')}:${get('minute')}:${get('second')} ${ampm}`;
}


export function indexHtml() {
  const [now, setNow] = createSignal(new Date());

  onMount(() => {
    const timer = setInterval(() => {
      setNow(new Date());
    }, 1000);
    onCleanup(() => clearInterval(timer));
  });

  return (
    <div class="font-mono flex flex-col gap-4 p-2">
      <h1 class="text-2xl"># Hi, I'm Justin!</h1>
      <p>Welcome to my landing page. I am a software engineer from Halifax, NS, Canada.</p>

      <div class="mx-4 my-2 max-w-300 border border-stone-400 p-0.5">
        <div class="p-2 text-center">{formatDateTimeMyWay(now())}</div>
        <div class="h-100">
          <GlobalPinMap lat={44.647} lng={-63.580} />
        </div>
      </div>

      <h2 class="text-xl">## About</h2>
      <p>This is my landing page for my personal website that hosts various bits 'n' bobs.</p>
      <p>Use the file browser to navigate this page. You might find something that interests you!</p>
      <p>There are also some external links along the left and bottom edges.</p>

    </div>
  );
}
