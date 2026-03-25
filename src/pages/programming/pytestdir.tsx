import { GitHubRepoBadge } from "../../components/GitHubRepoBadge";
import { Code } from "../../components/Code";


export function Pytestdir() {
  return (
    <div class="flex flex-col gap-4">
      <GitHubRepoBadge owner="just1ngray" repo="pytestdir" />

      <p>
        A <a href="https://docs.pytest.org/en/stable/" class="underline">pytest</a> fixture that creates a real and
        unique directory that can be used freely for a test. The directory is named sensibly and is only deleted the
        next time you run your tests. This means you can manually inspect its contents if your tests are failing.
      </p>

      <p>
        This is just one of many ways that this kind of fixture could be implemented. For example, you could&nbsp;
        <Code>unittest.mock</Code> things extensively and hope that the test remains durable through implementation
        changes and correct through mocking issues. Alternatively, you can just create your own <Code>tempfile</Code>,
        but it won't persist long enough for you to manually inspect it once the test exits. Admittedly, the built-in
        <Code>tmp_path</Code> fixture can be configured to work nearly the same way as <Code>pytestdir</Code>, but
        depending on your preferences you may like zero configuration and <Code>pytestdir</Code>'s folder structure more.
      </p>

      <p>
        It works out of the box but has to be installed as a git dependency.
        E.g., <Code>pip install git+https://github.com/just1ngray/pytestdir.git</Code>.
        This is usually fine enough for a development-only dependency, but I wouldn't do this for a production
        requirement.
      </p>

    </div>
  );
}
