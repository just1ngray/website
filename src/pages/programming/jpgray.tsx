import { GitHubRepoBadge } from "../../components/GitHubRepoBadge";
import { Code } from "../../components/Code";


export function JPGray() {
  return (
    <div class="flex flex-col gap-4">
      <GitHubRepoBadge owner="just1ngray" repo="jpgray.ca" />

      <p>
        I use this repository to manage my <Code>jpgray</Code> kubernetes cluster running on a small VPS. My domain (and
        all of its subdomains) point to this server: <a href="https://jpgray.ca" class="underline">jpgray.ca</a>
      </p>

      <p>
        It doesn't manage the domain or provision the cluster itself, but this is a small one-time step that's
        basically foolproof.
      </p>

      <p>
        I've tried several different approaches for managing the k8s resources, and&nbsp;
        <a href="https://www.pulumi.com/" class="underline">pulumi</a> has really stolen the show.
      </p>

      <ul class="list-disc list-outside pl-6 space-y-2">
        <li>Writing my own manifests is insane and obviously out of the question</li>
        <li>
          <a href="https://helm.sh/" class="underline">Helm</a> is an awesome improvement but using it stand-alone
          didn't provide the lifecycle management I was hoping to achieve. It also meant I would have to run multiple
          commands or maintain my own deploy script. Too complicated!
        </li>
        <li>
          A natural extension of this is <a href="https://helmfile.readthedocs.io/" class="underline">helmfile</a>. At
          first I was pleased with this solution because it appeared like a simple way to deploy several charts at once
          without needing to create sub-charts. But as my stack grew slightly it became more complicated, and fast. For
          example, I wanted a single command to create everything, but ran into a problem where <Code>CRD</Code>s had to
          be installed in order to run the <Code>helmfile apply</Code> command, but I didn't want to install them
          manually. I think the main fix for this is to create a two-layer approach, but once again... added complexity.
        </li>
        <li>
          Oh no. I might have to use <a href="https://developer.hashicorp.com/terraform" class="underline">terraform</a>
          &nbsp;for managing my k8s cluster. Hands down, terraform is a great tool for infrastructure provisioning, but it's
          not ideal at managing the resources within a cluster. Let's look elsewhere.
        </li>
        <li>
          Enter pulumi: sanity at last. I've been very pleased with this framework because it uses real programming
          languages like TypeScript or Python for defining the resources that should be in the cluster. Then, kind of
          like terraform, it figures out the best way to make the cluster match your specification.
        </li>
      </ul>
    </div>
  );
}
