import { Camera } from "components/camera/camera";
import { Logo } from "components/logo/logo";
import React, { Suspense } from "react";
import { Canvas } from "react-three-fiber";
import {
  Bloom,
  EffectComposer,
  Noise,
  Vignette,
  DotScreen,
} from "react-postprocessing";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import { Navigation } from "components/navigation/Navigation";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Navigation />
      <Canvas orthographic>
        <Suspense fallback={null}>
          <Camera />
          <color attach="background" args={[0.08, 0.08, 0.08]} />
          <Logo />
        </Suspense>
        <EffectComposer>
          <Bloom
            luminanceThreshold={0}
            luminanceSmoothing={0.9}
            height={300}
            opacity={2}
          />
          <Noise opacity={0.1} />
          <Vignette eskil={false} offset={0.1} darkness={1.1} />
          <DotScreen />
        </EffectComposer>
      </Canvas>
      <Switch>
        <Route path="/manifesto">
          <div>
            <h1>MANIFESTO</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
