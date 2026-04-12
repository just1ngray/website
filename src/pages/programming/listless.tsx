import { A } from "@solidjs/router";
import { GitHubRepoBadge } from "../../components/GitHubRepoBadge";


export function Listless() {
  return (
    <div class="flex flex-col gap-4">
      <GitHubRepoBadge owner="just1ngray" repo="listless" />

      <p>
        I want to have a shared grocery list for my household, but shockingly neither Apple Reminders nor Microsoft Todo
        would actually synchronize properly across devices. Some other options I found included obnoxious advertisements
        or questionable data practices.
      </p>

      <p>So, like any good Software Engineer, I made an app myself!</p>

      <p>High level implementation details</p>
      <ul class="list-disc list-inside">
        <li>Lists support end-to-end encryption on the client-side using AES-GCM encryption.</li>
        <li>Lists may be 'protected' against unauthorized mutations. Clients must provide a valid ED25519 signature for their requests.</li>
        <li>Clients share encryption and mutation keys among themselves using the hash part of a share URL.</li>
        <li>Clients store list information using their browser's localStorage.</li>
        <li>The styling is very simple and its UI is heavily tailored to mobile usage (e.g., as a homescreen app!)</li>
      </ul>

      <hr />

      <p>
        Click <A class="underline" href="https://listless.jpgray.ca">here</A> to try it out for yourself! <br/>
        <i class="text-xs opacity-70">
          Please note this is a functional project that I have not taken the time to fully polish!
        </i>
      </p>
    </div>
  );
}
