import { GitHubRepoBadge } from "../../components/GitHubRepoBadge";
import { Code } from "../../components/Code";


export function JFSWatch() {
  return (
    <div class="flex flex-col gap-4">
      <GitHubRepoBadge owner="just1ngray" repo="jfswatch" />

      <p>
        <Code>jfswatch</Code> is a handy binary application that watches files for modifications (via mtime and
        different kinds of file matching) and runs a command anytime the watched files change. The files may be
        new, modified, or deleted for it to be considered changed. The executed command can use the <Code>$path</Code>
        as an interpolated argument.
      </p>

      <p>
        This program can be handy for use-cases such as:
      </p>

      <ul class="list-disc list-inside">
        <li>Automatically running unit tests any time a project file changes</li>
        <li>Restarting a program any time its configuration has changed</li>
        <li>Auto-generating files (like a pdf) when its sources are updated</li>
        <li>... and much more!</li>
      </ul>

    </div>
  );
}
