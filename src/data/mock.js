// Mock data for Shpendi Restaurant
export const restaurantInfo = {
  name: "Shpendi",
  tagline: "Kuzhinë Autentike Shqiptare",
  description: "Përjetoni kulinarinë më të mirë shqiptare me pjatat tona të përgatitura me kujdes nga përbërësit më të freskët. Nga mishrat tradicionale të pjekur në zgarrë deri tek pasta e bërë në shtëpi, çdo vakt rrëfen një histori trashëgimie dhe shijeje.",
  address: "Rr 402 , Zhelino, Tetovë, North Macedonia",
  phone: "+389 70 505 909",
  email: "shpendi2003@gmail.com",
  hours: {
    weekdays: "08:00 AM - 11:00 PM",
    weekends: "13:00 PM - 11:00 PM"
  },
  social: {
    instagram: "shpendirestaurant",
    facebook: "Shpendi Restaurant"
  }
};

export const menuData = {
  salads: [
    {
      id: 1,
      name: "Sallatë Shpendi / Шпенди Салата",
      nameEn: "Shpendi Salad",
      description: "marullë, lakër, karotë, domate, kastravec, djath, vezë, stek pule",
      descriptionEn: "lettuce, cabbage, carrot, tomato, cucumber, cheese, egg, chicken steak",
      descriptionMk : "марула, зелка, морков, домат, краставица, сирење, јајце, пилешки стек",
      price: "240",
      featured: true
    },
    {
      id: 2,
      name: "Sallatë Shope / Шопска салата",
      nameEn: "Shope Salad", 
      description: "domate, kastravec, djath i bluar",
      descriptionEn: "tomato, cucumber, grated cheese",
      descriptionMk : "домати, краставица, мелено сирење ",
      price: "150"
    },
    {
      id: 3,
      name: "Sallatë greke / Грчка салата",
      nameEn: "Greek Salad",
      description: "domate, kastravec, spec, qepë, djath, ullinj",
      descriptionEn: "tomato, cucumber, pepper, onion, cheese, olives",
      descriptionMk : "домати, краставица, пиперка, кромид, сирење, маслинки",
      price: "160"
    },
    {
      id: 4,
      name: "Sallatë Greke + Tuna / Грчка салата + туна",
      nameEn: "Greek Salad + Tuna",
      description: "domate, kastravec, spec, qepë, djath, ullinj, tuna",
      descriptionEn: "tomato, cucumber, pepper, onion, cheese, olives, tuna",
      descriptionMk : "домати, краставица, пиперка, кромид, сирење, маслинки, туна ",
      price: "250"
    },
    {
      id: 5,
      name: "Sallatë Greke + Pulë / Грчка салата + пилешко",
      nameEn: "Greek Salad + Chicken",
      description: "domate, kastravec, spec, qepë, djath, ullinj, pulë",
      descriptionEn: "tomato, cucumber, pepper, onion, cheese, olives, chicken",
      descriptionMk : "домати, краставица, пиперка, кромид, сирење, маслинки, пилешко",
      price: "250"
    },
    {
      id: 6,
      name: "Sallatë Tuna / Туна салата",
      nameEn: "Tuna Salad",
      description: "domate, kastravec,  marullë, djath, tuna",
      descriptionEn: "tomato, cucumber, lettuce, cheese, tuna",
      descriptionMk : "домати, краставица, марула, сирење, туна ",
      price: "250"
    },
    {
      id: 7,
      name: "Sallatë Fshatit / Селска салата",
      nameEn: "Village Salad",
      description: "marullë, djath, domate, ullinj, qepë",
      descriptionEn: "lettuce, cheese, tomato, olives, onion",
      descriptionMk: "марула, сирење, домат, маслинки, кромид",
      price: "240"
    },
    {
      id: 8,
      name: "Sallatë e Përzier / Мешана салата",
      nameEn: "Mixed Salad",
      description: "domate, djath, kastravec, marullë, karotë, lakër",
      descriptionEn: "tomato, cheese, cucumber, lettuce, carrot, cabbage",
      descriptionMk : "домати, сирење, краставица, марула, морков, зелка",
      price: "140"
    },
    {
      id: 9,
      name: "Sallatë Chef / Шеф салата",
      nameEn: "Chef Salad",
      description: "marullë, qepë, domate, djath, mish viçi, ullinj ",
      descriptionEn: "lettuce, onion, tomato, cheese, beef, olives",
      descriptionMk : "марула, кромид, домат, сирење, говедско месо, маслинки ",
      price: "330"
    },
    {
      id: 10,
      name: "Sallatë Pulë / Пилешка салата",
      nameEn: "Chicken Salad",
      description: "marullë, qepë, domate, djath, stek pule, ullinj ",
      descriptionEn: "lettuce, onion, tomato, cheese, chicken steak, olives",
      descriptionMk : "марула, кромид, домат, сирење, пилешки стек, маслинки",
      price: "240"
    },
    {
      id: 11,
      name: "Sallatë Cezar / Цезар салата",
      nameEn: "Caesar Salad",
      description: "marullë, sherri, stek pule, parmezan, kubeti, sos majonezi",
      descriptionEn: "lettuce, cherry, chicken steak, parmesan, croutons, mayonnaise sauce",
      descriptionMk : "марула, шери, пилешки стек, пармезан, крутони, мајонез сос",
      price: "240"
    },
    {
      id: 12,
      name: "Sallatë Rukola / Рукола салата",
      nameEn: "Rukola Salad",
      description: "domate, permezan, rukola",
      descriptionEn: "tomato, parmesan, arugula",
      descriptionMk : "домат, пармезан, рукола",
      price: "240"
    }
  ],
  pasta: [
    {
      id: 13,
      nameEn: "Aglio e Olio",
      description: "vaj ulliri, hudhër, spec, magdanos ",
      descriptionEn: "olive oil, garlic, pepper, parsley",
      descriptionMk : "маслиново масло, лук, пиперка, магдонос",
      price: "260/300",
      featured: true
    },
    {
      id: 14,
      nameEn: "Chef",
      description: "sos domatesh, domate të freskëta, mish viçi",
      descriptionEn: "tomato sauce, fresh tomato, beef",
      descriptionMk : "домат сос, свеж домат, говедско месо",
      price: "280/330"
    },
    {
      id: 15,
      nameEn: "Napoli",
      description: "domate, sos domatesh, magdanos",
      descriptionEn: "tomato, tomato sauce, parsley",
      descriptionMk : "домат, домат сос, магдонос",
      price: "280/330"
    },
    {
      id: 16,
      nameEn: "Tuna",
      description: "sos domatesh, qepë, magdanos, tuna",
      descriptionEn: "tomato sauce, onion, parsley, tuna",
      descriptionMk : "домат сос, кромид, магдонос, туна",
      price: "280/330"
    },
    {
      id: 17,
      nameEn: "Shpendi",
      description: "sos i bardhë, domate, stek pule, kërpudha, magdanos",
      descriptionEn: "white sauce, tomato, chicken steak, mushrooms, parsley",
      descriptionMk : "бел сос, домат, пилешки стек, печурки, магдонос",
      price: "280/330"
    },
    {
      id: 18,
      nameEn: "Bolognese",
      description: "sos domatesh, mish i bluar,magdanos",
      descriptionEn: "tomato sauce, minced meat, parsley",
      descriptionMk : "домат сос, мелено месо, магдонос",
      price: "280/330"
    },
    {
      id: 19,
      nameEn : "Seafood",
      name : "Fruta Deti / Морски плодови",
      description: "sos domatesh, vaj ulliri, magdanos, hudhër, fruta deti",
      descriptionEn: "tomato sauce, olive oil, parsley, garlic, seafood",
      descriptionMk : "домат сос, маслиново масло, магдонос, лук, морски плодови",
      price: "280/330"
    },
    {
      id: 20,
      nameEn: "Carbonara",
      description: "sos i bardhë, mish i thate, e kuqe veze, magdanos",
      descriptionEn: "white sauce, dried meat, egg yolk, parsley",
      descriptionMk : "бел сос, суво месо, жолчка од јајце, магдонос",
      price: "280/330"
    },
    {
      id: 21,
      nameEn: "Baked Pasta",
      name: "Makarona në Furr / Макарони во рерна",
      description: "sos domatesh, mish i bluar, kaçkavall",
      descriptionEn: "tomato sauce, minced meat, yellow cheese",
      descriptionMk : "домат сос, мелено месо, кашкавал",
      price: "300"
    },
    {
      id: 22,
      nameEn: "Funghi",
      description: "sos domatesh, kërpudha, majdanos",
      descriptionEn: "tomato sauce, mushrooms, parsley",
      price: "260/300"
    },
    {
      id: 23,
      nameEn: "Lazania",
      description: "mish i bluar, sos domatesh, bechamel, kaçkavall",
      descriptionEn: "minced meat, tomato sauce, béchamel, yellow cheese",
      descriptionMk : "мелено месо, домат сос, бешамел, кашкавал",
      price: "300"
    },
    {
      id: 24,
      nameEn: "Arrabiata",
      description: "sos domatesh, djegës, ullinj",
      descriptionEn: "tomato sauce, chili, olives",
      descriptionMk : "домат сос, лута пиперка, маслинки",
      price: "280/330"
    },
    {
      id: 25,
      nameEn: "Vegetarian",
      description: "perime sezonale, kërpudha, ullinj, sherri, domate",
      descriptionEn: "seasonal vegetables, mushrooms, olives, cherry, tomato",
      descriptionMk : "сезонски зеленчук, печурки, маслинки, шери, домат",
      price: "280/330"
    }
  ],
  pizza: [
    {
      id: 26,
      nameEn: "Margarita",
      description: "sos domatesh, kačkaval",
      descriptionEn: "tomato sauce, yellow cheese",
      descriptionMk : "домат сос, кашкавал",
      price: "220/280",
      featured: true
    },
    {
      id: 27,
      nameEn: "Salami",
      description: "salami gjizël pule",
      descriptionEn: "chicken breast salami",
      descriptionMk : "пилешки салам",
      price: "280/340"
    },
    {
      id: 28,
      nameEn: "Suxhuk",
      description: "suxhuk (copë të djegësa)",
      descriptionEn: "sausage (non spicy)",
      descriptionMk : "колбас (не лути)",
      price: "280/340"
    },
    {
      id: 29,
      nameEn: "Peperoni",
      description: "sos domatesh, kačkaval, spec",
      descriptionEn: "tomato sauce, yellow cheese, egg, pepper",
      descriptionMk : "домат сос, кашкавал, јајце, пиперка",
      price: "280/340"
    },
    {
      id: 30,
      nameEn: "Bolognese",
      description: "sos domatesh, kačkaval, mish i bluar",
      descriptionEn: "tomato sauce, yellow cheese, minced meat",
      descriptionMk : "домат сос, кашкавал, мелено месо",
      price: "280/340"
    },
    {
      id: 31,
      nameEn: "Al Ponto",
      description: "sos domatesh, kačkaval, suxhuk, salame",
      descriptionEn: "tomato sauce, yellow cheese, sausage, salami",
      descriptionMk : "домат сос, кашкавал, колбас, салам",
      price: "280/340"
    },
    {
      id: 32,
      nameEn: "Funghi",
      description: "sos domatesh, kačkaval, kërpudha",
      descriptionEn: "tomato sauce, yellow cheese, mushrooms",
      descriptionMk : "домат сос, кашкавал, печурки",
      price: "280/340"
    },
    {
      id: 33,
      nameEn: "Venezia",
      description: "sos domatesh, kačkaval, kërpudha, salame",
      descriptionEn: "tomato sauce, yellow cheese, mushrooms, salami",
      descriptionMk : "домат сос, кашкавал, печурки, салам",
      price: "280/340"
    },
    {
      id: 34,
      nameEn: "Rukola",
      description: "sos domatesh, kačkaval, rukolla, parmezan",
      descriptionEn: "tomato sauce, yellow cheese, arugula, parmesan",
      descriptionMk : "домат сос, кашкавал, рукола, пармезан",
      price: "280/340"
    },
    {
      id: 35,
      nameEn: "Tuna",
      description: "sos domatesh, kačkaval, tuna",
      descriptionEn: "tomato sauce, yellow cheese, tuna",
      descriptionMk : "домат сос, кашкавал, туна",
      price: "280/340"
    },
    {
      id: 36,
      nameEn: "Preferita",
      description: "sos domatesh, kačkaval, tuna, kërpudha",
      descriptionEn: "tomato sauce, yellow cheese, tuna, mushrooms",
      descriptionMk : "домат сос, кашкавал, туна, печурки",
      price: "280/340"
    },
    {
      id: 37,
      nameEn: "Carnelo",
      description: "mish thatë, suxhuk",
      descriptionEn: "dried meat, sausage",
      descriptionMk : "суво месо, колбас",
      price: "280/340"
    },
    {
      id: 38,
      nameEn: "Cipola",
      description: "qepë, spec djegës",
      descriptionEn: "onion, hot pepper",
      descriptionMk : "кромид, лута пиперка",
      price: "240/300"
    },
    {
      id: 39,
      nameEn: "Torino",
      description: "suxhuk,qepë, ullinj",
      descriptionEn: "sausage, onion, olives",
      descriptionMk : "колбас, кромид, маслинки",
      price: "280/340"
    },
    {
      id: 40,
      nameEn: "Pepola",
      description : "sallam, qepë, spec",
      descriptionEn : "salami, onion, pepper",
      descriptionMk : "салам, кромид, пиперка",
      price: "280/340"
    },
    {
      id: 41,
      nameEn: "Proscioutto & Tuna",
      description : "mish i thatë, tuna",
      descriptionEn : "smoked meat, tuna",
      descriptionMk : "суво месо, туна",
      price: "300/360"
    },
    {
      id: 42,
      nameEn : "Olivina",
      description : "ullinj,sheri,spec djegës,lëng hudre",
      descriptionEn : "olives,cherry,hot pepper,garlic sauce",
      descriptionMk : "маслинки, шери, лута пиперка, лук сос",
      price : "280/340"
    },
    {
      id : 43,
      nameEn : "Rustika",
      description : "suxhuk, kërpudha",
      descriptionEn : "sausage, mushrooms",
      descriptionMk : "колбас, печурки",
      price : "280/340"
    },
    {
      id: 44,
      nameEn: "Prosciutto",
      description: "sos domatesh, kačkaval, mish i thatë",
      descriptionEn: "tomato sauce, yellow cheese, smoked meat",
      descriptionMk : "домат сос, кашкавал, суво месо",
      price: "280/340"
    },
    {
      id: 45,
      nameEn: "Verona",
      description: "sos domatesh, kačkaval, kërpudha, mish i thatë",
      descriptionEn: "tomato sauce, yellow cheese, mushrooms, smoked meat",
      descriptionMk : "домат сос, кашкавал, печурки, суво месо",
      price: "280/340"
    },
    {
      id: 46,
      nameEn: "Vegetarian",
      description: "sos domatesh, kačkaval, zeleninçuk, peçurka",
      descriptionEn: "tomato sauce, yellow cheese, vegetables, mushrooms",
      descriptionMk : "домат сос, кашкавал, зеленчук, печурки",
      price: "280/340"
    },
    {
      id: 47,
      nameEn: "Shpendi",
      description: "suxhuk, salame, kërpudha, mish i thatë",
      descriptionEn: "sausage, salami, mushrooms, smoked meat",
      descriptionMk : "колбас, салам, печурки, суво месо",
      price: "280/340"
    },
    {
      id: 48,
      nameEn: "Seafood",
      name : "Fruta Deti / Морски плодови",
      description: "sos domate, kačkaval, fruta deti",
      descriptionEn: "tomato sauce, yellow cheese, seafood",
      descriptionMk : "домат сос, кашкавал, морски плодови",
      price: "350/400"
    },
    {
      id: 49,
      nameEn: "Tunalina",
      description: "tuna, sherri, ullinj",
      descriptionEn: "tuna, cherry, olives",
      descriptionMk : "туна, шери, маслинки",
      price: "280/340"
    },
    {
      id: 50,
      nameEn: "Pulino",
      description: "mish pule, sherri, spec djegës",
      descriptionEn: "chicken meat, cherry, hot pepper",
      descriptionMk : "пилешко месо, шери, лута пиперка",
      price: "280/340"
    },
    {
      id: 51,
      nameEn: "Spring",
      name : "Pranvera / Пролет",
      description: "sherri, ullinj, djathë cope, spec jo djegës",
      descriptionEn: "cherry, olives, cow cheese, mild pepper",
      descriptionMk : "шери, маслинки, сирење, блага пиперка",
      price: "280/340"
    },
    {
      id: 52,
      nameEn: "Chef",
      description: "mish viçi, sherri, ullinj",
      descriptionEn: "beef meat, cherry, olives",
      descriptionMk : "говедско месо, шери, маслинки",
      price: "350/400"
    }
  ],
  grill: [
    {
      id: 53,
      name: "Stek pulë / Пилешки стек",
      nameEn: "Chicken Steak",
      price: "280/350",
      featured: true
    },
    {
      id: 54,
      name: "Pleskavicë / Плескавица",
      nameEn: "Pleskavic",
      price: "200/280"
    },
    {
      id: 55,
      name: "Mini zgarë / Мини грил",
      nameEn: "Mini Grill",
      description: "Pleskavic sharri, stek",
      descriptionMk : "плескавица шарри, стек",
      descriptionEn: "sharri plate, chicken fillet",
      price: "400"
    },
    {
      id: 56,
      nameEn: "T-Bone Steak",
      price: "Special Price",
      priceMk: "Специјална цена",
      priceAl: "Çmim Special"
    },
    {
      id: 57,
      nameEn: "Cordon Bleu", 
      description: "mish pule i mbështjellur me djathë",
      descriptionMk : "пилешко месо завиткано со сирење",
      descriptionEn: " wrapped chicken meat",
      price: "Special Price",
      priceMk: "Специјална цена",
      priceAl: "Çmim Special"
    },
    {
      id: 58,
      name: "Pleskavicë Sharri / Шарска плескавица",
      nameEn: "Sharri Pleskavic",
      price: "280/440"
    },
    {
      id: 59,
      name: "Mish viçi / Говедско месо",
      nameEn: "Beef",
      price: "550/850"
    },
    {
      id: 60,
      nameEn: "Mini mix",
      description: "qoftëmeci, mish viçi, gjizël sharri",
      descriptionEn: "beef meat, chicken fillet, sharri plate",
      descriptionMk : "говедско месо, пилешко месо, шарска плата",
      price: "850"
    },
    {
      id: 61,
      name: "Biftek viçi / Говедски бифтек",
      nameEn: "Beefsteak",
      price: "1200"
    }
  ]
};

  export const testimonials = [
    {
      id: 1,
      name: "Евгения",
      text: "Great place. Very tasty pasta and wonderful staff. We really enjoyed having lunch with you. Delicious coffee. Thank you for everything!",
      rating: 5
    },
    {
      id: 2,
      name: "Valerii Liebiediev",
      text: "Delicious cafe and pleasant staff. I recommend this establishment.",
      rating: 5
    },
    {
      id: 3,
      name: "Rexhep Veseli",
      text: "If you're looking for choices and delicious food, you won't go wrong with your visit.",
      rating: 5
    }
  ];