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
      name: "Sallatë Shpendi",
      nameEn: "Shpendi Salad",
      description: "marule, lakër karrotë, domate, spec, qepë, veze, stek pule",
      descriptionEn: "lettuce, cabbage, carrot, tomato, cucumber, cheese, egg, chicken steak",
      descriptionMk : "марула, зелка, морков, домат, краставица, сирење, јајце, пилешки стек",
      price: "240",
      featured: true
    },
    {
      id: 2,
      name: "Sallatë Shope",
      nameEn: "Shope Salad", 
      description: "domate, kastravec, spec, qepë, djathë",
      descriptionEn: "tomato, cucumber, pepper, cheese",
      descriptionMk : "домати, краставица, мелено сирење ",
      price: "150"
    },
    {
      id: 3,
      name: "Sallatë greke / Грчка салата",
      nameEn: "Greek Salad",
      description: "domate, kastravec, piperak, kriposa, ullinj",
      descriptionEn: "tomato, cucumber, pepper, onion, cheese, olives",
      descriptionMk : "домати, краставица, пиперка, кромид, сирење, маслинки",
      price: "160"
    },
    {
      id: 4,
      name: "Sallatë Greke + Tuna",
      nameEn: "Greek Salad + Tuna",
      description: "domate, kastravec, spec, qepë, djath, ullinj, tuna",
      descriptionEn: "tomato, cucumber, pepper, onion, cheese, olives, tuna",
      descriptionMk : "домати, краставица, пиперка, кромид, сирење, маслинки, туна ",
      price: "250"
    },
    {
      id: 5,
      name: "Sallatë Greke + Pulë",
      nameEn: "Greek Salad + Chicken",
      description: "domate, kastravec, spec, qepë, djath, ullinj, pule panxhikë",
      descriptionEn: "tomato, cucumber, pepper, onion, cheese, olives, chicken",
      descriptionMk : "домати, краставица, пиперка, кромид, сирење, маслинки, пилешко",
      price: "250"
    },
    {
      id: 6,
      name: "Sallatë Tuna",
      nameEn: "Tuna Salad",
      description: "domate, kastravec, marule, djath, tuna",
      descriptionEn: "tomato, cucumber, lettuce, cheese, tuna",
      descriptionMk : "домати, краставица, марула, сирење, туна ",
      price: "250"
    },
    {
      id: 7,
      name: "Sallatë Fshatit / Селска салата",
      nameEn: "Village Salad",
      description: "marule, djathë, domate, ullinj, spec",
      descriptionEn: "lettuce, cheese, tomato, olives, onion",
      descriptionMk: "марула, сирење, домат, маслинки, кромид",
      price: "240"
    },
    {
      id: 8,
      name: "Sallatë e Përzier / Мешана салата",
      nameEn: "Mixed Salad",
      description: "domate, djath, kastravec, marule, karrotë, lakër",
      descriptionEn: "tomato, cheese, cucumber, lettuce, carrot, cabbage",
      descriptionMk : "домати, сирење, краставица, марула, морков, зелка",
      price: "140"
    },
    {
      id: 9,
      name: "Sallatë Chef",
      nameEn: "Chef Salad",
      description: "marule, qepë, domate, djath, mish viçi, ullinj",
      descriptionEn: "lettuce, onion, tomato, cheese, beef, olives",
      descriptionMk : "марула, кромид, домат, сирење, говедско месо, маслинки ",
      price: "330"
    },
    {
      id: 10,
      name: "Sallatë Pulë / Пилешка салата",
      nameEn: "Chicken Salad",
      description: "marule, aromë, domate, djathë, stek pulë",
      descriptionEn: "lettuce, onion, tomato, cheese, chicken steak",
      descriptionMk : "марула, кромид, домат, сирење, пилешки стек, маслинки",
      price: "240"
    },
    {
      id: 11,
      name: "Sallatë Cezar",
      nameEn: "Caesar Salad",
      description: "marule, sherri, stek parmezan, sos majdonezi",
      descriptionEn: "lettuce, cherry, chicken steak, parmesan, croutons, caesar sauce",
      descriptionMk : "марула, шери, пилешки стек, пармезан, крутони, мајонез сос",
      price: "240"
    },
    {
      id: 12,
      name: "Sallatë Rukola",
      nameEn: "Rukola Salad",
      description: "sonuar, parmezan, rukola",
      descriptionEn: "tomato, parmesan, arugula",
      descriptionMk : "домат, пармезан, рукола",
      price: "240"
    }
  ],
  pasta: [
    {
      id: 13,
      nameEn: "Aglio e Olio",
      description: "vaj ulliri, hudher, spec, majdanos",
      descriptionEn: "olive oil, garlic, pepper, parsley",
      price: "260/300",
      featured: true
    },
    {
      id: 14,
      nameEn: "Chef",
      description: "sos domatesh, domate të freskëta, mish viçi",
      descriptionEn: "tomato sauce, fresh tomato, beef",
      price: "280/330"
    },
    {
      id: 15,
      nameEn: "Napoli",
      description: "domate, sos domatesh, majdanos",
      descriptionEn: "tomato, tomato sauce, parsley",
      price: "280/330"
    },
    {
      id: 16,
      nameEn: "Tuna",
      description: "sos domatesh, qepë, majdanos, tuna",
      descriptionEn: "tomato sauce, onion, parsley, tuna",
      price: "280/330"
    },
    {
      id: 17,
      nameEn: "Shpendi",
      description: "sos i bardhë, domate, stek pule, kërpudha, majdanos",
      descriptionEn: "white sauce, tomato, chicken steak, mushrooms, parsley",
      price: "280/330"
    },
    {
      id: 18,
      nameEn: "Bolognese",
      description: "sos domatesh, mish i bluar",
      descriptionEn: "tomato sauce, minced meat, parsley",
      price: "280/330"
    },
    {
      id: 19,
      nameEn : "Seafood",
      nameAM : "Fruta Deti / Морски плодови",
      description: "sos domatesh, mish i bluar, majdanos, fruta deti",
      descriptionEn: "tomato sauce, olive oil, parsley, garlic, seafood",
      price: "280/330"
    },
    {
      id: 20,
      nameEn: "Carbonara",
      description: "sos i bardhë, mish i thate, e kuqe veze, majdanos",
      descriptionEn: "white sauce, dried meat, egg yolk, parsley",
      price: "280/330"
    },
    {
      id: 21,
      
      nameEn: "Baked Pasta",
      nameAM: "Makarona në Furr / Макарони во рерна",
      description: "sos domatesh, djathë, mish i bluar, djathë i verdhë",
      descriptionEn: "tomato sauce, minced meat, yellow cheese",
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
      description: "mish i bluar, sos domatesh, bechamel, kačkaval",
      descriptionEn: "minced meat, tomato sauce, bechamel, yellow cheese",
      price: "300"
    },
    {
      id: 24,
      nameEn: "Arrabiata",
      description: "sos domatesh, djegëse, ullinj",
      descriptionEn: "tomato sauce, chili, olives",
      price: "280/330"
    },
    {
      id: 25,
      nameEn: "Vegetarian",
      description: "perime sezonale, kërpudha, ullinj, sherri, domate",
      descriptionEn: "seasonal vegetables, mushrooms, olives, cherry, tomato",
      price: "280/330"
    }
  ],
  pizza: [
    {
      id: 26,
      name: "Margarita",
      description: "sos domatesh, kačkaval",
      descriptionEn: "tomato sauce, yellow cheese",
      price: "220/280",
      featured: true
    },
    {
      id: 27,
      name: "Salami",
      description: "salami gjizël pule",
      descriptionEn: "chicken breast salami",
      price: "280/340"
    },
    {
      id: 28,
      name: "Suxhuk",
      description: "suxhuk (copë të djegësa)",
      descriptionEn: "beef sujuk (non spicy)",
      price: "280/340"
    },
    {
      id: 29,
      name: "Peperoni",
      description: "sos domatesh, kačkaval, spec",
      descriptionEn: "tomato sauce, yellow cheese, egg, pepper",
      price: "280/340"
    },
    {
      id: 30,
      name: "Bolognese",
      description: "sos domatesh, kačkaval, mish i bluar",
      descriptionEn: "tomato sauce, yellow cheese, minced meat",
      price: "280/340"
    },
    {
      id: 31,
      name: "Al Ponto",
      description: "sos domatesh, kačkaval, suxhuk, salame",
      descriptionEn: "tomato sauce, yellow cheese, sausage, salami",
      price: "280/340"
    },
    {
      id: 32,
      name: "Funghi",
      description: "sos domatesh, kačkaval, kërpudha",
      descriptionEn: "tomato sauce, yellow cheese, mushrooms",
      price: "280/340"
    },
    {
      id: 33,
      name: "Venezia",
      description: "sos domatesh, kačkaval, kërpudha, salame",
      descriptionEn: "tomato sauce, yellow cheese, mushrooms, salami",
      price: "280/340"
    },
    {
      id: 34,
      name: "Rukola",
      description: "sos domatesh, kačkaval, rukolla, parmezan",
      descriptionEn: "tomato sauce, yellow cheese, arugula, parmesan",
      price: "280/340"
    },
    {
      id: 35,
      name: "Tuna",
      description: "sos domatesh, kačkaval, tuna",
      descriptionEn: "tomato sauce, yellow cheese, tuna",
      price: "280/340"
    },
    {
      id: 36,
      name: "Preferita",
      description: "sos domatesh, kačkaval, tuna, kërpudha",
      descriptionEn: "tomato sauce, yellow cheese, tuna, mushrooms",
      price: "280/340"
    },
    {
      id: 37,
      name: "Carnelo",
      description: "mish thatë, suxhuk",
      descriptionEn: "dried meat, sujuk",
      price: "280/340"
    },
    {
      id: 38,
      name: "Cipola",
      description: "qepë, spec djegës",
      descriptionEn: "onion, hot pepper",
      price: "240/300"
    },
    {
      id: 39,
      name: "Prosciutto",
      description: "sos domatesh, kačkaval, mish i thatë",
      descriptionEn: "tomato sauce, yellow cheese, smoked meat",
      price: "280/340"
    },
    {
      id: 40,
      name: "Verona",
      description: "sos domatesh, kačkaval, kërpudha, mish i thatë",
      descriptionEn: "tomato sauce, yellow cheese, mushrooms, smoked meat",
      price: "280/340"
    },
    {
      id: 41,
      name: "Vegjetariane",
      description: "sos domatesh, kačkaval, zeleninçuk, peçurka",
      descriptionEn: "tomato sauce, yellow cheese, vegetables, mushrooms",
      price: "280/340"
    },
    {
      id: 42,
      name: "Shpendi",
      description: "suxhuk, salame, kërpudha, mish i thatë",
      descriptionEn: "sausage, salami, mushrooms, smoked meat",
      price: "280/340"
    },
    {
      id: 43,
      name: "Seafood",
      nameAM : "Fruta Deli / Морски плодови",
      description: "sos domate, kačkaval, fruta deti",
      descriptionEn: "tomato sauce, yellow cheese, seafood",
      price: "350/400"
    },
    {
      id: 44,
      name: "Tunina",
      description: "tuna, sherri, ullinj",
      descriptionEn: "tuna, cherry, olives",
      price: "280/340"
    },
    {
      id: 45,
      name: "Pullino",
      description: "mish pule, sherri, spec djegës",
      descriptionEn: "chicken meat, cherry, hot pepper",
      price: "280/340"
    },
    {
      id: 46,
      name: "Spring",
      nameAM : "Pranvera / Пролет",
      description: "sherri, ullinj, djathë cope, spec jo djegës",
      descriptionEn: "cherry, olives, cow cheese, mild pepper",
      price: "280/340"
    },
    {
      id: 47,
      name: "Chef",
      description: "mish viçi, sherri, ullinj",
      descriptionEn: "beef meat, cherry, olives",
      price: "350/400"
    }
  ],
  grill: [
    {
      id: 48,
      name: "Stek pulë / Пилешки стек",
      nameEn: "Chicken Steak",
      price: "280/350",
      featured: true
    },
    {
      id: 49,
      name: "Pleskavicë / Плескавица",
      nameEn: "Pleskavic",
      price: "200/280"
    },
    {
      id: 50,
      name: "Mini zgarë / Мини грил",
      nameEn: "Mini Grill",
      description: "sharri, stek",
      descriptionEn: "sharri plate, chicken fillet",
      price: "400"
    },
    {
      id: 51,
      name: "T-Bone Steak",
      price: "Special Price"
    },
    {
      id: 52,
      name: "Cordon Bleu", 
      description: "mish pule i mbështjellur / parmezan veze so djathura / wrapped chicken meat",
      price: "Special Price"
    },
    {
      id: 53,
      name: "Pleskavicë Sharri / Шарска плескавица",
      nameEn: "Sharri Pleskavic",
      price: "280/440"
    },
    {
      id: 54,
      name: "Mish viçi / Говедско месо",
      nameEn: "Beef",
      price: "550/850"
    },
    {
      id: 55,
      name: "Mini mix",
      description: "qoftëmeci, mish viçi, gjizël sharri",
      descriptionEn: "beef meat, chicken fillet, sharri plate",
      price: "850"
    },
    {
      id: 56,
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