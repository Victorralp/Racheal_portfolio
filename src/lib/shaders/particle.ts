// src/lib/shaders/particle.ts
import { Color } from 'three';

export const particleVertexShader = `
  attribute float size;
  varying vec3 vColor;
  
  void main() {
    vColor = color;
    vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
    gl_PointSize = size * (300.0 / -mvPosition.z);
    gl_Position = projectionMatrix * mvPosition;
  }
`;

export const particleFragmentShader = `
  varying vec3 vColor;
  
  void main() {
    if (length(gl_PointCoord - vec2(0.5, 0.5)) > 0.475) discard;
    gl_FragColor = vec4(vColor, 1.0);
  }
`;

export const createParticleColors = (isDark: boolean): Color[] => {
  const baseColor = isDark ? new Color(0x334155) : new Color(0x94a3b8);
  return Array(5000).fill(baseColor);
};