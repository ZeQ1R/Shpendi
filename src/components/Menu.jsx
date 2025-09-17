// import React, { useState } from 'react';
// import { ChefHat, Star, Utensils } from 'lucide-react';
// import { menuData } from '../data/mock';

// const Menu = () => {
//   const [activeCategory, setActiveCategory] = useState('salads');

//   const categories = [
//     { id: 'salads', name: 'Salads', icon: '🥗', items: menuData.salads },
//     { id: 'pasta', name: 'Pasta', icon: '🍝', items: menuData.pasta },
//     { id: 'pizza', name: 'Pizza', icon: '🍕', items: menuData.pizza },
//     { id: 'grill', name: 'Grill', icon: '🥩', items: menuData.grill }
//   ];

//   const activeItems = categories.find(cat => cat.id === activeCategory)?.items || [];

//   return (
//     <section id="menu" className="py-20 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
      
//       <div className="absolute inset-0">
//         <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-r from-red-600/10 to-red-500/10 rounded-full blur-3xl"></div>
//         <div className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-l from-red-500/5 to-red-600/5 rounded-full blur-3xl"></div>
//       </div>

//       <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
//         <div className="text-center mb-16">
//           <div className="flex items-center justify-center mb-6">
//             <div className="bg-gradient-to-r from-red-600 to-red-500 p-3 rounded-full mr-4">
//               <ChefHat className="h-8 w-8 text-white" />
//             </div>
//             <h2 className="text-4xl md:text-5xl font-bold">
//               <span className="bg-gradient-to-r from-red-500 to-red-400 bg-clip-text text-transparent">
//                 Our Menu
//               </span>
//             </h2>
//           </div>
//           <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-red-400 mx-auto mb-8"></div>
//           <p className="max-w-2xl mx-auto text-lg text-gray-300">
//             Discover our carefully crafted dishes made with the finest ingredients and traditional Albanian recipes.
//           </p>
//         </div>

        
//         <div className="flex flex-wrap justify-center gap-4 mb-12">
//           {categories.map((category) => (
//             <button
//               key={category.id}
//               onClick={() => setActiveCategory(category.id)}
//               className={`relative px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
//                 activeCategory === category.id
//                   ? 'bg-gradient-to-r from-red-600 to-red-500 text-white shadow-lg shadow-red-500/25 scale-105'
//                   : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
//               }`}
//             >
//               <span className="flex items-center gap-2">
//                 <span className="text-xl">{category.icon}</span>
//                 {category.name}
//               </span>
//               {activeCategory === category.id && (
//                 <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-red-500/20 rounded-full blur-xl"></div>
//               )}
//             </button>
//           ))}
//         </div>

        
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {activeItems.map((item, index) => (
//             <div
//               key={item.id}
//               className={`group relative bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm border border-red-500/20 rounded-xl p-6 hover:border-red-500/40 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-red-500/10 ${
//                 item.featured ? 'ring-2 ring-red-500/30' : ''
//               }`}
//               style={{ animationDelay: `${index * 0.1}s` }}
//             >
              
//               {item.featured && (
//                 <div className="absolute -top-3 -right-3 bg-gradient-to-r from-red-600 to-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
//                   <Star className="h-3 w-3 fill-current" />
//                   Featured
//                 </div>
//               )}

              
//               <div className="space-y-4">
                
//                 <div className="flex justify-between items-start">
//                   <div className="flex-1">
//                     <h3 className="text-xl font-bold text-white group-hover:text-red-400 transition-colors duration-300">
//                       {item.name}
//                     </h3>
//                     {item.nameEn && (
//                       <p className="text-sm text-gray-400 italic">
//                         {item.nameEn}
//                       </p>
//                     )}
//                   </div>
//                   <div className="ml-4">
//                     <span className="text-lg font-bold text-red-400">
//                       {item.price} MKD
//                     </span>
//                   </div>
//                 </div>

               
//                 {item.description && (
//                   <div className="space-y-2">
//                     <p className="text-gray-400 text-sm leading-relaxed">
//                       {item.description}
//                     </p>
//                     {item.descriptionEn && (
//                       <p className="text-gray-500 text-xs italic leading-relaxed">
//                         {item.descriptionEn}
//                       </p>
//                     )}
//                   </div>
//                 )}

                
//                 {item.price.includes('/') && (
//                   <div className="flex items-center gap-2 text-xs text-gray-500">
//                     <Utensils className="h-3 w-3" />
//                     <span>Small / Large portion</span>
//                   </div>
//                 )}

                
//                 {item.price === 'Special Price' && (
//                   <div className="bg-gradient-to-r from-red-600/20 to-red-500/20 rounded-lg p-3 border border-red-500/30">
//                     <p className="text-red-400 text-sm font-semibold text-center">
//                       Ask your server for pricing
//                     </p>
//                   </div>
//                 )}
//               </div>

              
//               <div className="absolute inset-0 bg-gradient-to-br from-red-600/5 to-red-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//             </div>
//           ))}
//         </div>

        
//         <div className="mt-16 text-center">
//           <div className="bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm border border-red-500/20 rounded-xl p-8 max-w-2xl mx-auto">
//             <div className="flex items-center justify-center mb-4">
//               <div className="bg-gradient-to-r from-red-600 to-red-500 p-3 rounded-full">
//                 <Utensils className="h-6 w-6 text-white" />
//               </div>
//             </div>
//             <h3 className="text-xl font-bold text-white mb-4">Special Dietary Requirements?</h3>
//             <p className="text-gray-300 mb-4">
//               We're happy to accommodate vegetarian, vegan, and gluten-free requests. 
//               Please inform your server about any allergies or dietary restrictions.
//             </p>
            
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Menu;

import React, { useState } from 'react';
import { ChefHat, Star, Utensils } from 'lucide-react';
import { menuData } from '../data/mock';
import { useTranslation } from 'react-i18next';


const Menu = () => {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState('salads');

  const categories = [
    { id: 'salads', icon: '🥗', items: menuData.salads },
    { id: 'pasta', icon: '🍝', items: menuData.pasta },
    { id: 'pizza', icon: '🍕', items: menuData.pizza },
    { id: 'grill', icon: '🥩', items: menuData.grill }
  ];

  const activeItems = categories.find(cat => cat.id === activeCategory)?.items || [];

  return (
    <section id="menu" className="py-20 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-r from-red-600/10 to-red-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-l from-red-500/5 to-red-600/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <div className="bg-gradient-to-r from-red-600 to-red-500 p-3 rounded-full mr-4">
              <ChefHat className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="bg-gradient-to-r from-red-500 to-red-400 bg-clip-text text-transparent">
                {t("menuData.title")}
              </span>
            </h2>
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-red-400 mx-auto mb-8"></div>
          <p className="max-w-2xl mx-auto text-lg text-gray-300">
            {t("menuData.description")}
          </p>
        </div>

        {/* Category tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`relative px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-red-600 to-red-500 text-white shadow-lg shadow-red-500/25 scale-105'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
              }`}
            >
              <span className="flex items-center gap-2">
                <span className="text-xl">{category.icon}</span>
                {t(`menuData.categories.${category.id}`)}
              </span>
              {activeCategory === category.id && (
                <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-red-500/20 rounded-full blur-xl"></div>
              )}
            </button>
          ))}
        </div>

        {/* Menu items grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activeItems.map((item, index) => (
            <div
              key={item.id}
              className={`group relative bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm border border-red-500/20 rounded-xl p-6 hover:border-red-500/40 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-red-500/10 ${
                item.featured ? 'ring-2 ring-red-500/30' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Featured badge */}
              {item.featured && (
                <div className="absolute -top-3 -right-3 bg-gradient-to-r from-red-600 to-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                  <Star className="h-3 w-3 fill-current" />
                  {t("menuData.featured")}
                </div>
              )}

              {/* Item content */}
              <div className="space-y-4">
                {/* Header with name and price */}
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white group-hover:text-red-400 transition-colors duration-300">
                      {item.nameEn}
                    </h3>
                    {item.name && (
                      <p className="text-sm text-gray-400 italic">
                        {item.name}
                      </p>
                    )}
                  </div>
                  {item.price && (
                    <div className="ml-4">
                    <span className="text-lg font-bold text-red-400">
                      {item.price} MKD
                      </span>
                    </div>
                  )}
                  
                  
                  
                </div>

                {/* Description */}
                {item.descriptionEn && (
                  <div className="space-y-2">
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {item.descriptionEn}
                    </p>
                    {item.description && (
                      <p className="text-gray-500 text-xs italic leading-relaxed">
                        {item.description}
                      </p>
                    )}
                    {item.descriptionMk && (
                      <p className="text-gray-500 text-xs italic leading-relaxed">
                        {item.descriptionMk}
                      </p>
                    )}
                  </div>
                )}

                {/* Special pricing note */}
                {item.price.includes('/') && (
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <Utensils className="h-3 w-3" />
                    <span>{t("menuData.smallLargeNote")}</span>
                  </div>
                )}

                {/* Special price items */}
                {item.price === 'Special Price' && (
                  <div className="bg-gradient-to-r from-red-600/20 to-red-500/20 rounded-lg p-3 border border-red-500/30">
                    <p className="text-red-400 text-sm font-semibold text-center">
                      {t("menuData.specialPriceNote")}
                    </p>
                  </div>
                )}
                
              </div>

              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-red-600/5 to-red-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        {/* Menu note */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm border border-red-500/20 rounded-xl p-8 max-w-2xl mx-auto">
            <div className="flex items-center justify-center mb-4">
              <div className="bg-gradient-to-r from-red-600 to-red-500 p-3 rounded-full">
                <Utensils className="h-6 w-6 text-white" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-white mb-4">{t("menuData.dietaryTitle")}</h3>
            <p className="text-gray-300 mb-4">
              {t("menuData.dietaryText")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
