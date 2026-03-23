

export function ReadmeMd() {
  return (
    <div class="flex flex-col gap-4 p-2 font-mono">
      <h1 class="text-2xl"># 3D Printing</h1>
      <p>I am fortunate to have a Bambu Lab A1 3D printer.</p>
      <p>
        Though I do enjoy printing designs from others, it's most rewarding when used alongside some <br />
        3D modelling software. In my case I have previous experience with&nbsp;
          <a href="https://en.wikipedia.org/wiki/SketchUp" class="underline">SketchUp</a>,
          but years later <br />
        I was disappointed to see the free desktop SketchUp program I knew and loved had been <br/>
        discontinued.
      </p>
      <p>On the search for a new modelling software, I had the following criteria:</p>
      <ol class="list-decimal list-inside">
        <li>Free</li>
        <li>Fully featured even when offline</li>
        <li>First-class Linux support</li>
        <li>Preferrably open source</li>
        <li>Oh yeah, and it has to not crash all the time</li>
      </ol>
      <p>
        After some consideration, I've chosen to use&nbsp;
          <a href="https://www.freecad.org/" class="underline">FreeCAD</a>
          &nbsp;for developing my custom models. <br />
        It took some getting used to, and I'm not sure I'll ever conquer 'Wire not closed' errors, <br />
        but it's clear to me parametric modelling is incredibly powerful and something I want to <br />
        get better at.
      </p>
      <p>
        As such, all the models included on this site are FreeCAD files. I could upload them to <br />
        one of the various 3D printing model sharing sites (
          <a href="https://www.printables.com/" class="underline">Printables</a>,&nbsp;
          <a href="https://makerworld.com/en" class="underline">Maker World</a>,&nbsp;
          <a href="https://www.thingiverse.com/" class="underline">Thingiverse</a>
        ) <br />
        but then I'd have to support print profiles and see comments & critiques of my hobby.
      </p>
    </div>
  );
}
