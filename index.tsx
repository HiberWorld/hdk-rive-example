import { render } from "@hiber3d/hdk-react";
import { HNode, Prefab, RiveUI } from "@hiber3d/hdk-react/dist";

const World = () => (
  <HNode>
    <Prefab id="plane_01" y={-2} />
    <RiveUI filename="healthbar.riv" />
  </HNode>
);
render(<World />, {
  environment: "midday_01",
  localAssets: true,
});
