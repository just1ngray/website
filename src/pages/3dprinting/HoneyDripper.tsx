import { DownloadAsset } from "../../components/DownloadAsset";

export function HoneyDripper() {
  return (
    <div class="flex flex-col gap-4 p-2">
      <h1 class="text-2xl">Honey Dripper</h1>

      <p>
        Getting the last little bit of honey out of a bottle is sticky business. The stuff isn't cheap, so I'm not
        going to throw it away. Instead, I spent a few hours perfecting a 3D part I could print and use to drip a
        near-empty bottle into another bottle (without spilling!) or small jar.
      </p>

      <p>
        This model is a bit interesting because not only does it snap onto the neck of the bottle, balancing stability
        with ease of installation, but it also includes an inset design of everyone's favourite honey-loving bear. This
        inset image was a lot of work and it's not something I'd be eager to do again.
      </p>

      {/* TODO add image */}
      <img src="/assets/3dprinting/honey/img1" />

      <p>
        I printed this in PETG HF. If you print it as well, be sure to enable supports.
      </p>

      <div class="mx-auto">
        <DownloadAsset assetPath="/assets/3dprinting/honey/model.FCStd" />
      </div>
    </div>
  );
}
