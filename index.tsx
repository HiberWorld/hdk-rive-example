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
    <Prefab id="plane_01" z={10} y={-2} />
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
    <RiveUI filename="win_screen.riv" maxWidth={500} />
    <RiveUI
      filename="healthbar.riv"
      verticalAlignment="TOP"
      horizontalAlignment="LEFT"
      maxWidth={300}
      margin={[30, 30, 20, 20]}
      zIndex={10}
    />
    <RiveUI
      filename="collect_gem.riv"
      verticalAlignment="TOP"
      horizontalAlignment="RIGHT"
      maxWidth={300}
    />
  </HNode>
);

const baseUrl = "https://dao-pr.dev.hiberdev.net/engine/dev/latest/release";

render(<World />, {
  environment: "cloud_pillars_01",
  engineUrl: `${baseUrl}/hiber.js`,
  wasmUrl: `${baseUrl}/Hiberworld.wasm.gz`,
  localAssets: true,
});
