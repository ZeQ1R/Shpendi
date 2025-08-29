
// import React from 'react';
// import { Award, Users, Heart, Clock } from 'lucide-react';

// import { useTranslation } from 'react-i18next';

// const About = () => {

//   const { t } = useTranslation();
  
//   const features = [
//     {
//       icon: Award,
//       title: "Premium Quality",
//       description: "We use only the finest ingredients sourced locally and internationally to create authentic Albanian flavors."
//     },
//     {
//       icon: Users,
//       title: "Family Tradition",
//       description: "Our recipes have been passed down through generations, preserving the authentic taste of Albanian cuisine."
//     },
//     {
//       icon: Heart,
//       title: "Made with Love",
//       description: "Every dish is prepared with passion and attention to detail, ensuring an unforgettable dining experience."
//     },
//     {
//       icon: Clock,
//       title: "Fresh Daily",
//       description: "All our ingredients are fresh and our dishes are prepared daily to guarantee the highest quality."
//     }
//   ];

//   return (
//     <section id="about" className="py-20 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
      
//       <div className="absolute inset-0">
//         <div className="absolute top-0 left-1/4 w-64 h-64 bg-gradient-to-r from-red-600/10 to-red-500/10 rounded-full blur-3xl"></div>
//         <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-l from-red-500/5 to-red-600/5 rounded-full blur-3xl"></div>
//       </div>

//       <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl md:text-5xl font-bold mb-6">
//             <span className="bg-gradient-to-r from-red-500 to-red-400 bg-clip-text text-transparent">
//               {/* About Shpendi */}
//               {t("about.title")}
//             </span>
//           </h2>
//           <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-red-400 mx-auto mb-8"></div>
//           <p className="max-w-3xl mx-auto text-lg text-gray-300 leading-relaxed">
//             {/* Welcome to Shpendi, where traditional Albanian cuisine meets modern dining excellence. 
//             Our restaurant has been serving authentic flavors and creating memorable experiences for food lovers 
//             who appreciate the rich culinary heritage of Albania. */}
//             {t("about.description")}
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {features.map((feature, index) => {
//             const IconComponent = feature.icon;
//             return (
//               <div 
//                 key={index}
//                 className="group relative bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm border border-red-500/20 rounded-xl p-8 hover:border-red-500/40 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-red-500/10"
//               >
                
//                 <div className="mb-6 relative">
//                   <div className="bg-gradient-to-r from-red-600 to-red-500 p-4 rounded-full w-fit mx-auto group-hover:scale-110 transition-transform duration-300">
//                     <IconComponent className="h-8 w-8 text-white" />
//                   </div>
//                 </div>

                
//                 <div className="text-center">
//                   <h3 className="text-xl font-bold text-white mb-4 group-hover:text-red-400 transition-colors duration-300">
//                     {feature.title}
//                   </h3>
//                   <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
//                     {feature.description}
//                   </p>
//                 </div>

                
//                 <div className="absolute inset-0 bg-gradient-to-br from-red-600/5 to-red-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//               </div>
//             );
//           })}
//         </div>

        
//         <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//           <div className="space-y-6">
//             <h3 className="text-3xl font-bold text-white">{t("about.story.title")}</h3>
//             <div className="space-y-4 text-gray-300 leading-relaxed">
//               <p>
//                 Founded with a passion for sharing the authentic flavors of Albania, Shpendi represents 
//                 more than just a restaurant – it's a celebration of culinary heritage and family traditions.
//               </p>
//               <p>
//                 Our name "Shpendi" reflects our commitment to spending time creating exceptional dishes 
//                 that honor traditional recipes while embracing modern culinary techniques. Every meal 
//                 we serve tells a story of our roots and our dedication to excellence.
//               </p>
//               <p>
//                 From our carefully grilled meats to our handcrafted pasta dishes, we invite you to 
//                 experience the warmth and richness of Albanian hospitality in every bite.
//               </p>
//             </div>
//           </div>

//           <div className="relative">
//             <div className="bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm border border-red-500/20 rounded-2xl p-8 hover:border-red-500/40 transition-all duration-300">
//               <div className="space-y-6">
//                 <div className="grid grid-cols-2 gap-6">
//                   <div className="text-center">
//                     <div className="text-3xl font-bold text-red-400 mb-2">20+</div>
//                     <div className="text-gray-400">{t("about.stats.yearsExperience")}</div>
//                   </div>
//                   <div className="text-center">
//                     <div className="text-3xl font-bold text-red-400 mb-2">50+</div>
//                     <div className="text-gray-400">Menu Items</div>
//                   </div>
//                 </div>
//                 <div className="grid grid-cols-2 gap-6">
//                   <div className="text-center">
//                     <div className="text-3xl font-bold text-red-400 mb-2">1000+</div>
//                     <div className="text-gray-400">Happy Customers</div>
//                   </div>
//                   <div className="text-center">
//                     <div className="text-3xl font-bold text-red-400 mb-2">4.6★</div>
//                     <div className="text-gray-400">Average Rating</div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;
  // "Emri ynë 'Shpendi' reflekton përkushtimin tonë për të kaluar kohë duke krijuar pjata të jashtëzakonshme që nderojnë recetat tradicionale ndërsa përqafojnë teknikat moderne kulinare. Çdo vakt që shërbejmë tregon një histori të rrënjëve tona dhe përkushtimit ndaj ekselencës.",

import React from "react";
import { Award, Users, Heart, Clock } from "lucide-react";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();

  const features = [
    { icon: Award, key: "premium" },
    { icon: Users, key: "tradition" },
    { icon: Heart, key: "love" },
    { icon: Clock, key: "fresh" }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-gradient-to-r from-red-600/10 to-red-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-l from-red-500/5 to-red-600/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-red-500 to-red-400 bg-clip-text text-transparent">
              {t("about.title")}
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-red-400 mx-auto mb-8"></div>
          <p className="max-w-3xl mx-auto text-lg text-gray-300 leading-relaxed">
            {t("about.description")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map(({ icon: Icon, key }, index) => (
            <div key={index} className="group relative bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm border border-red-500/20 rounded-xl p-8 hover:border-red-500/40 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-red-500/10">
              <div className="mb-6 relative">
                <div className="bg-gradient-to-r from-red-600 to-red-500 p-4 rounded-full w-fit mx-auto group-hover:scale-110 transition-transform duration-300">
                  <Icon className="h-8 w-8 text-white" />
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-red-400 transition-colors duration-300">
                  {t(`about.features.${key}.title`)}
                </h3>
                <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  {t(`about.features.${key}.description`)}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-white">{t("about.story.title")}</h3>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              {t("about.story.paragraphs", { returnObjects: true }).map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm border border-red-500/20 rounded-2xl p-8 hover:border-red-500/40 transition-all duration-300">
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-red-400 mb-2">20+</div>
                    <div className="text-gray-400">{t("about.stats.yearsExperience")}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-red-400 mb-2">50+</div>
                    <div className="text-gray-400">{t("about.stats.menuItems")}</div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-red-400 mb-2">1000+</div>
                    <div className="text-gray-400">{t("about.stats.happyCustomers")}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-red-400 mb-2">4.6★</div>
                    <div className="text-gray-400">{t("about.stats.averageRating")}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
