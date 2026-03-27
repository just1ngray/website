# website

Personal landing page. Looks like a code editor.

## Getting started

1. Run `git lfs pull`
2. In v2.7.7 of [deno](https://deno.com/), install the dependencies by running `deno install`
3. Start the development server on localhost using `deno run dev`

## Build static files

Run: `deno run build`. Then `dist/` can be deployed as a static website just about anywhere 
([GitHub Pages](https://pages.github.com/), [Cloudflare Pages](https://pages.cloudflare.com/), etc.).

> Adjust `VITE_BASE_URL` environment variable to change the base path from `/` to `/website/` or whatever is needed
> for the static hosting requirements.

It also outputs a `build.stats.html` which can be opened to view the bundle.

## Local docker

```shell
# build the image
docker build -t website .

# run the website available at http://localhost:8080
docker run --rm -p 8080:80 website
```

## Automations

### Build and Push

[This pipeline](.github/workflows/build.yml) runs whenever commits get pushed into master. It will:

1. Build the static site and deploy it to GitHub Pages at [https://just1ngray.github.io/website/](https://just1ngray.github.io/website/).
   This serves as a sort of 'staging' area.
2. Build the docker image and push it to [ghcr.io/just1ngray/website](ghcr.io/just1ngray/website) with the commit hash 
   as the tag. This can later be deployed to my personal infrastructure once I am happy with everything.
