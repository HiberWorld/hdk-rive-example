import { render } from "@hiber3d/hdk-react";
import {
  Distribute,
  Ground,
  Line,
  Spawnpoint,
} from "@hiber3d/hdk-react-components";
import { HNode, Prefab, RiveUI } from "@hiber3d/hdk-react/dist";

const World = () => (
  <HNode>
    <placedPrefab id="plane_01" z={10} y={-2} />
    <Spawnpoint z={-20} />
    <Line
      z={-10}
      delta={[0, 0, 10]}
      numberOfItems={5}
      renderItem={
        <>
          <placedPrefab id="gpl_spiked_barrel_01" scale={0.5} x={-5} y={-1} />
          <placedPrefab id="collectible_gem_01" />
        </>
      }
      renderAfter={<placedPrefab id="goal_01" />}
    />
    <RiveUI filename="low_health.riv" stretch="FILL" />
    <RiveUI filename="game_over.riv" maxWidth={500} />
    <RiveUI
      filename="healthbar.riv"
      horizontalAlignment="LEFT"
      verticalAlignment="TOP"
      maxWidth={300}
      margin={[30, 30, 20, 20]}
      zIndex={10}
    />
    <RiveUI
      filename="collect_gem.riv"
      horizontalAlignment="CENTER"
      verticalAlignment="TOP"
      maxWidth={300}
    />
  </HNode>
);

render(<World />, {
  environment: "aurora_01",
  localAssets: true,
});
