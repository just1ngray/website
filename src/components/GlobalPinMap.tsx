import { onCleanup, onMount } from "solid-js";
import Globe from "globe.gl";
import * as THREE from "three";


export function GlobalPinMap(props: { lng: number, lat: number, col?: string }) {
  let containerRef!: HTMLDivElement;

  onMount(() => {
    const globe = new Globe(containerRef)
      .width(containerRef.clientWidth)
      .height(containerRef.clientHeight)
      .globeImageUrl("//unpkg.com/three-globe/example/img/earth-night.jpg")
      .pointOfView({ lat: props.lat, lng: props.lng, altitude: 0.4 })
      .pointsData([{ lat: props.lat, lng: props.lng }])
      .pointColor(() => props.col || "red")
      .pointAltitude(0.01)
      .pointRadius(0.3);

    const addedLightIntensity = 3.0;
    const ambientLight = new THREE.AmbientLight(0xffffff, addedLightIntensity);
    globe.scene().add(ambientLight);

    const observer = new ResizeObserver(() => {
      globe.width(containerRef.clientWidth).height(containerRef.clientHeight);
    });
    observer.observe(containerRef.parentElement!);

    onCleanup(() => {
      observer.disconnect();
      globe._destructor();
    });
  });

  return (
    <div style="width:100%;height:100%;position:relative;">
      <div ref={containerRef!} style="position:absolute;top:0;left:0;right:0;bottom:0;" />
    </div>
  );
}
