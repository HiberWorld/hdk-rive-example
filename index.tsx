import { render } from "@hiber3d/hdk-react";
import { HNode, Prefab, RiveUI } from "@hiber3d/hdk-react/dist";

const World = () => (
  <HNode>
    <Prefab id="plane_01" y={-2} />
    <RiveUI filename="healthbar.riv" />
    <RiveUI filename="collect_gem.riv" />
    <RiveUI filename="crosshair.riv" />
    <RiveUI filename="low_health.riv" />
    <RiveUI filename="game_over.riv" />
  </HNode>
);
render(<World />, {
  environment: "midday_01",
  localAssets: true,
});
