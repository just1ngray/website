import { GitHubRepoBadge } from "../../components/GitHubRepoBadge";
import { Code } from "../../components/Code";


export function CovidExposures() {
  return (
    <div class="flex flex-col gap-4">
      <GitHubRepoBadge owner="just1ngray" repo="covidexposures" />

      <p>
        Back before ChatGPT, I threw this full-stack application together in a few weeks both as a tech project
        but also as a better way to view COVID exposure locations. Previously, you'd have to manually check all
        exposure locations on the NS Health website every day if you wanted to stay informed. And back in spring of
        2021, pretty much everyone was worried and wanted to stay up to date.
      </p>

      <p>
        A webscraper would periodically check for new potential exposures from official health sources, geocode the
        address into lng/lat, and save them in a private database. Anyone could browse a heatmap of the last 30-days
        of potential exposure sites (without signing-in). Clicking on a specific location would show more details:
        name of the location, address, time of exposure, and a link to the public health website to confirm. A Google
        account could be used to sign-in to the covidexposures website. Once there, users could input recently visited
        location & times to be stored for 30-days. If a potential exposure was detected at their location during their
        time window, they'd be sent an automated email notification. This was the main motivation behind this project.
      </p>

      <p>
        The technical details are available in the repository's <Code>README.md</Code>. A semi-functional static demo
        was also deployed soon after taking the website down and can still be seen&nbsp;
        <a href="https://just1ngray.github.io/covidexposures/out" class="underline">here</a>.
      </p>
    </div>
  );
}
