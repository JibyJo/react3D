import { useGLTF } from '@react-three/drei';

export const Model = () => {
  const { scene } = useGLTF('https://JibyJo.github.io/react3D/models/realistic_palm_tree_free.glb
');
  return <primitive object={scene} scale={0.5} position={[0, 0, 0]} />;
};
