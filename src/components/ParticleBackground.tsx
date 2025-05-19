// src/components/ParticleBackground.tsx
import { useCallback } from "react";
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";
import type { Engine } from "tsparticles-engine";

const ParticleBackground = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: {
          color: {
            value: "transparent",
          },
        },
        particles: {
          number: {
            value: 50,
            density: {
              enable: true,
              value_area: 800,
            },
          },
          color: {
            value: "#6b7280",
          },
          line_linked: {
            enable: true,
            distance: 150,
            color: "#6b7280",
            opacity: 0.4,
            width: 1,
          },
          move: {
            enable: true,
            speed: 2,
            random: true,
          },
          size: {
            value: 3,
            random: true,
          },
          opacity: {
            value: 0.5,
            random: true,
          },
        },
      }}
      className="absolute inset-0 -z-10"
    />
  );
};

export default ParticleBackground;
