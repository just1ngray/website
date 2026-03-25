import { GitHubRepoBadge } from "../../components/GitHubRepoBadge";
import { Code } from "../../components/Code";


export function JGit() {
  return (
    <div class="flex flex-col gap-4">
      <GitHubRepoBadge owner="just1ngray" repo="jgit" />

      <p>I install <Code>jgit</Code> on every machine I do any serious development on.</p>

      <p>
        It's just a shell script with a few commands that help manage local git repositories and worktrees
        (see <a href="https://git-scm.com/docs/git-worktree" class="underline">git-worktree</a>). In case you're
        unaware, git worktrees are an amazing, but somehow relatively fringe, git feature that basically works like
        cloning the same repository multiple times, but without the storage/networking overhead because it shares the
        same object store between each worktree.
      </p>

      <p>
        I find that they're indispensable to my daily development workflow because they enable me to avoid annoying
        stash/pop operations, and work against and review multiple branches at the same time.
      </p>

      <p>
        However, they are a tad annoying to work with. To solve this friction, I created <Code>jgit</Code> to handle
        all the git commands behind the scenes. Basically, it strongly suggests that each worktree tracks a branch of
        an identical name to the worktree's path. This CLI tool handles fetching, branching, and setting the upstream
        target so you can start committing without any headaches.
      </p>

    </div>
  );
}
