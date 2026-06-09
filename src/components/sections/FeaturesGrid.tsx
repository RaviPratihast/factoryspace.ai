

// import { Card } from '@/components/ui';

// const features = [
//   {
//     id: 'enhanced-mobility',
//     icon: '⚡', // Replace with custom-icon-set glyph
//     title: 'Enhanced Mobility',
//     body:  'Full-body articulation with 28 degrees of freedom — walk, climb, crouch, and recover across any terrain.',
//   },
//   {
//     id: 'advanced-ai',
//     icon: '🤖',
//     title: 'Advanced AI',
//     body:  'On-device neural processing enables real-time environment understanding and adaptive decision-making.',
//   },
//   {
//     id: 'human-like-dexterity',
//     icon: '🖐',
//     title: 'Human-like Dexterity',
//     body:  'Multi-fingered hands with force-sensitive touch deliver sub-millimetre precision for assembly and handling.',
//   },
// ];

// export function FeaturesGrid() {
//   return (
//     <section
//       id="features"
//       className="features-grid-section py-[200px] max-[991px]:py-[160px] max-[767px]:py-[80px]"
//       aria-labelledby="features-grid-title"
//     >
//       <div className="features-grid-container container-default mx-auto px-6">
//         <div className="features-grid-header flex flex-col items-center text-center mb-16 animate-on-scroll opacity-0 translate-y-[50px]">
//           <h2
//             id="features-grid-title"
//             className="features-grid-title text-[48px] max-[991px]:text-[36px] max-[767px]:text-[32px] font-medium leading-[1.25em] text-white"
//           >
//             Key features
//           </h2>
//         </div>

//         <div className="features-grid-list grid grid-cols-1 gap-y-10 gap-x-7 lg:grid-cols-3 lg:gap-y-16">
//           {features.map((feature) => (
//             <Card
//               key={feature.id}
//               className="features-grid-card p-8 flex flex-col gap-6 animate-on-scroll opacity-0 translate-y-[50px]"
//             >
//               <div className="features-grid-card-icon text-4xl">{feature.icon}</div>

//               <h3 className="features-grid-card-title text-[36px] max-[767px]:text-[28px] font-medium leading-[1.25em] text-white">
//                 {feature.title}
//               </h3>

//               <p className="features-grid-card-description text-[18px] max-[767px]:text-[16px] leading-[1.5em] text-[#b6bcc9]">
//                 {feature.body}
//               </p>
//             </Card>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
