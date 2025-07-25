// // components/MountainsScene.js
// import React, { Suspense } from 'react';
// import Mountain from './Mountain';

// // Arrange mountains side-by-side evenly spaced on X-axis
// const mountainConfigs = [
//   {
//     path: '/assets/Mountain1.glb',
//     position: [-6, -1.5, 0],
//     scale: 2.5,
//   },
//   {
//     path: '/assets/Mountain2.glb',
//     position: [-2, -1.5, 0],
//     scale: 2.5,
//   },
//   {
//     path: '/assets/Mountain3.glb',
//     position: [2, -1.5, 0],
//     scale: 2.5,
//   },
//   {
//     path: '/assets/Mountain4.glb',
//     position: [6, -1.5, 0],
//     scale: 2.5,
//   },
// ];

// const MountainsScene = () => {
//   return (
//     <Suspense fallback={null}>
//       {mountainConfigs.map((cfg, idx) => (
//         <Mountain key={idx} {...cfg} />
//       ))}
//     </Suspense>
//   );
// };

// export default MountainsScene;
