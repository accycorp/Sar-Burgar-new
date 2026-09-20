import { MenuItem, DiscountCode } from '../types';

export const HERO_BURGER_IMAGE = "https://lh3.googleusercontent.com/aida-public/AB6AXuAWzLOF8Xyyqk9YCKVlzSXFQ5BPnARr5pbcGi1JKb_fHXYlM9679x2pygLhKZejUgPnp8gxyN4ab3EQA0gXVQpARBFEU4P4Rp3Sth8kNOfwEmEBwVQlwQu04R0yLOtMD0S60vq4AoONzct3FTlaLkjLsTFAhhohME52G6EFe36AcSUz13kCyXYhHa07lHl72hf-qdI1ozXPjq5zpvAtOQ4GtnkC9mUXIxf0ZtPRtxikvoUUc_7p4K343g";

export const MENU_ITEMS: MenuItem[] = [
  // --- BEEF BURGERS ---
  {
    id: "smash-burger",
    name: "SMASH BURGER",
    price: 990,
    rating: 4.9,
    reviewsCount: 420,
    description: "Freshly smashed beef patty, cheddar cheese, SAR sauce on a toasted potato bun.",
    category: "burgers",
    tags: ["Signature", "Smash Beef", "Customer Favorite"],
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBZoQ5Ye6jFOIsss7JSxLsaNMqR-QDg8mzTA1xtBdIf_5pe3u4sweSa0D6-hltdg5kyr2qEO4i6VtwCq-MWqUhqN98HRPYZLw_figmpm6uCVCWklP1bXSNrUlN78-DBPbmET1FkN1GptpcpavQOvnmEnMtj2hUyaFbMj3O6w-6Ze2fIwybRvTXSaxeUaS746rfIwzd2qb2BH_METtZuYWWTXQOvv1Z6pnY3fzEB-3ba4T31cwAFqrETHA",
    calories: 680,
    isBestSeller: true,
    ingredients: ["Freshly Smashed Beef Patty", "Aged Cheddar Cheese", "SAR Secret Sauce", "Toasted Potato Bun"],
    customizations: {
      extraPatties: [{ id: "p1", name: "Extra Beef Smash Patty", price: 250 }],
      extraCheese: [{ id: "c1", name: "Extra Cheddar Cheese", price: 100 }],
      sauces: [{ id: "s1", name: "Extra SAR Sauce", price: 50 }, { id: "s2", name: "Spicy Garlic Mayo", price: 50 }],
      bunType: [{ id: "b1", name: "Toasted Potato Bun", price: 0 }, { id: "b2", name: "Sesame Brioche Bun", price: 80 }]
    }
  },
  {
    id: "onion-smash-burger",
    name: "ONION SMASH BURGER",
    price: 1090,
    rating: 4.9,
    reviewsCount: 385,
    description: "Freshly smashed beef patty with thinly sliced onions pressed into the meat as it cooks crispy, topped with cheddar cheese, SAR sauce on a toasted potato bun.",
    category: "burgers",
    tags: ["Crispy Onion", "Smash Beef", "Must Try"],
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB5oQ6hrN3_0MhN4KVMU3TuaRB9xc2w1IBTwLeV1Sf3YAr7Pv8nQDrbMOIP2NnAqaxZn2EZ1ApGLOQv2KReMo-qfq2D02N2SKMOkmwJXKDaogf5B8ARw4fLtrhImXFqL2ytQgPB-DLm3tCJnr4U6KtDnGCghWnw7sVprCTMWhLDdyyUVQBsKhLG-PD4WRygh_L0u9-MCZaMnorSt_tnKkwvXifGOwm9f7utLY2E9ZjHDpYXByrZCyXyiw",
    calories: 720,
    isBestSeller: true,
    ingredients: ["Thinly Sliced Pressed Onions", "Smashed Beef Patty", "Melted Cheddar Cheese", "SAR Sauce", "Toasted Potato Bun"],
    customizations: {
      extraPatties: [{ id: "p1", name: "Extra Beef Smash Patty", price: 250 }],
      extraCheese: [{ id: "c1", name: "Extra Cheddar Cheese", price: 100 }],
      sauces: [{ id: "s1", name: "Extra SAR Sauce", price: 50 }]
    }
  },
  {
    id: "bbq-smash-burger",
    name: "BBQ SMASH BURGER",
    price: 1090,
    rating: 4.8,
    reviewsCount: 310,
    description: "Freshly smashed beef patty, cheddar cheese, SAR BBQ sauce on a toasted potato bun.",
    category: "burgers",
    tags: ["Smoky BBQ", "Smash Beef"],
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAk2ZV6yFKJAM7mYfAgI4AZfhYeM_LkjQ90wB474PIZr2m3xyrzAzAxlj9_s5BM07AKljxgsepfVcbSZ2rO_2UZGpolP-yE8r_cRVbYcD9ozZr0k95CGJbGS-ruRLxat5Zdy0hZ3SVLirb-T8Imn7IAQAmNUAANWEe8IKXZ0DG8ZMY_G5kufoz_nzICJnmlROrclLJQNIJfM1IcjvsukgjRmsOF3q9bgCqFoOu1oiKyiDiYvrkXacVncw",
    calories: 740,
    ingredients: ["Smashed Beef Patty", "Cheddar Cheese", "SAR BBQ Sauce", "Toasted Potato Bun"],
    customizations: {
      extraPatties: [{ id: "p1", name: "Extra Beef Smash Patty", price: 250 }],
      extraCheese: [{ id: "c1", name: "Extra Cheddar Cheese", price: 100 }],
      sauces: [{ id: "s1", name: "Extra SAR BBQ Sauce", price: 50 }]
    }
  },
  {
    id: "butter-smash-burger",
    name: "BUTTER SMASH BURGER",
    price: 1090,
    rating: 4.9,
    reviewsCount: 460,
    description: "Freshly smashed beef patty, seared in butter for extra crispiness and flavor, topped with cheddar cheese, SAR sauce on a toasted potato bun.",
    category: "burgers",
    tags: ["Butter Seared", "Rich & Crispy", "Best Seller"],
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBYrNgFvKQ9AA2gQTIjnGmHlD1W9EWJWm5N0RNqYppaTxDZvDpvLtXViCHlJxW3wdJj0yMSSGSgeKWVxgJMoSYNGQA22zubuX_1Gyg0TxMZEsf5LGkkg1ONzDRL5dAeMiDolyvNEX7NN5YjDlwNfhTxQqaoDFxxFNy8hcgAYTiWpKYrHefvNElJTOnztEAg0Uj6XQkn8peE6Tjns-af7L_KBDPuwZFXrSupulpLj9_eE_zXZOsjXXsA3A",
    calories: 790,
    isBestSeller: true,
    ingredients: ["Butter-Seared Beef Patty", "Cheddar Cheese", "SAR Sauce", "Toasted Potato Bun"],
    customizations: {
      extraPatties: [{ id: "p1", name: "Extra Butter Beef Patty", price: 250 }],
      extraCheese: [{ id: "c1", name: "Extra Cheddar Cheese", price: 100 }]
    }
  },
  {
    id: "thick-beef-burger",
    name: "THICK BEEF BURGER",
    price: 1190,
    rating: 4.8,
    reviewsCount: 290,
    description: "A thick beef patty, cheddar cheese, SAR sauce on a toasted potato bun.",
    category: "burgers",
    tags: ["Thick Patty", "Juicy Beef"],
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDAmzD7uYbmQFFlm4abWMJok3-upntQWHrJD3gPi9wPL2r_dGaj9hsc7dCEtQCN0YPmIrjqAcH18y_rl34rwsscHxaya5CieNOG0D6DAW4ZfsVgtejDWBZiIaQysDWr5xNn4WLw1yYS8jLBHwd8M3UyPCbQY1xYiSqY8WRXpnW5f75H7_cRMmpLUuk6BM1EyURdt6RtUQoUxKZ2dMg1xFD-i9mXoMY6OIUZCnKXiDKPJ0_w3zIIBlwb6A",
    calories: 820,
    ingredients: ["Thick Prime Beef Patty", "Cheddar Cheese", "SAR Sauce", "Toasted Potato Bun"],
    customizations: {
      extraCheese: [{ id: "c1", name: "Extra Cheddar Cheese", price: 100 }],
      sauces: [{ id: "s1", name: "Extra SAR Sauce", price: 50 }]
    }
  },

  // --- THICK CHICKEN BURGERS ---
  {
    id: "chicken-thick",
    name: "CHICKEN THICK",
    price: 1100,
    rating: 4.8,
    reviewsCount: 245,
    description: "A fresh thick chicken patty, cheddar cheese, SAR chicken sauce on a toasted potato bun.",
    category: "chicken",
    tags: ["Thick Chicken", "SAR Chicken Sauce"],
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBRCr8FNxTmvloqBZ7JpoESHCSBgFOJc7Y4YN7X4lRPEYEOhOZPY894JYPBrwQkAxzT0C7BsQmyy2Wu8mdJDnYSQdZp8FeRuej6AEgzte1OQvzzo2_JriH9Rmc5T0mxo7Ge5rX39sOhF2Zosr57gurEta-qp_JTmWNXW4YWnAlUzIvWOxXzBLbmK9Ts41D3-WVUhz7x-Fkhwl6R_1Xs0tSrIsdBr9g8yxvm_TLLQqK1VJskl9TSqMQ2Aw",
    calories: 690,
    ingredients: ["Fresh Thick Chicken Patty", "Cheddar Cheese", "SAR Chicken Sauce", "Toasted Potato Bun"],
    customizations: {
      extraCheese: [{ id: "c1", name: "Extra Cheddar Cheese", price: 100 }],
      sauces: [{ id: "s1", name: "Extra SAR Chicken Sauce", price: 50 }]
    }
  },
  {
    id: "chicken-thick-bbq",
    name: "CHICKEN THICK BBQ",
    price: 1190,
    rating: 4.8,
    reviewsCount: 190,
    description: "A fresh thick chicken patty, cheddar cheese, SAR BBQ sauce on a toasted potato bun.",
    category: "chicken",
    tags: ["Thick Chicken", "BBQ"],
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCsp0aMEr6yAaPtCAG6NEhmND4uj-VjmPY6y2vN_PBmcYRFI-ocOewAUgccvHR1jxjsrPtsiFk2gXE6p1WG8RmNozvc-ZHGCnSz3vou-K7xZ0ZxMAoLp2yzOn64Mo5t3CbcJUWb5A3-Nu_Y2GON220r0Lk6YI_iJP1BcNgU2dchHP5ZlJ1iwr70-XIFEMwfjZ1JUGWwVreNebw1C3YC_bdqw2Tzu1HUezBE2veBK_DKw0T2vO8ID6SLRA",
    calories: 720,
    ingredients: ["Thick Chicken Patty", "Cheddar Cheese", "SAR BBQ Sauce", "Toasted Potato Bun"],
    customizations: {
      extraCheese: [{ id: "c1", name: "Extra Cheddar Cheese", price: 100 }],
      sauces: [{ id: "s1", name: "Extra SAR BBQ Sauce", price: 50 }]
    }
  },
  {
    id: "chicken-thick-butter",
    name: "CHICKEN THICK BUTTER",
    price: 1190,
    rating: 4.9,
    reviewsCount: 280,
    description: "A fresh thick chicken patty, seared in butter for extra flavor, topped with cheddar cheese, SAR chicken sauce on a toasted potato bun.",
    category: "chicken",
    tags: ["Butter Seared", "Thick Chicken", "Rich Flavor"],
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBRCr8FNxTmvloqBZ7JpoESHCSBgFOJc7Y4YN7X4lRPEYEOhOZPY894JYPBrwQkAxzT0C7BsQmyy2Wu8mdJDnYSQdZp8FeRuej6AEgzte1OQvzzo2_JriH9Rmc5T0mxo7Ge5rX39sOhF2Zosr57gurEta-qp_JTmWNXW4YWnAlUzIvWOxXzBLbmK9Ts41D3-WVUhz7x-Fkhwl6R_1Xs0tSrIsdBr9g8yxvm_TLLQqK1VJskl9TSqMQ2Aw",
    calories: 760,
    isBestSeller: true,
    ingredients: ["Butter-Seared Thick Chicken Patty", "Cheddar Cheese", "SAR Chicken Sauce", "Toasted Potato Bun"],
    customizations: {
      extraCheese: [{ id: "c1", name: "Extra Cheddar Cheese", price: 100 }],
      sauces: [{ id: "s1", name: "Extra SAR Chicken Sauce", price: 50 }]
    }
  },
  {
    id: "chicken-thick-onion",
    name: "CHICKEN THICK ONION",
    price: 1190,
    rating: 4.8,
    reviewsCount: 210,
    description: "A fresh thick chicken patty, grilled with thinly sliced onion topped with cheddar cheese, SAR chicken sauce on a toasted potato bun.",
    category: "chicken",
    tags: ["Grilled Onion", "Thick Chicken"],
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB5oQ6hrN3_0MhN4KVMU3TuaRB9xc2w1IBTwLeV1Sf3YAr7Pv8nQDrbMOIP2NnAqaxZn2EZ1ApGLOQv2KReMo-qfq2D02N2SKMOkmwJXKDaogf5B8ARw4fLtrhImXFqL2ytQgPB-DLm3tCJnr4U6KtDnGCghWnw7sVprCTMWhLDdyyUVQBsKhLG-PD4WRygh_L0u9-MCZaMnorSt_tnKkwvXifGOwm9f7utLY2E9ZjHDpYXByrZCyXyiw",
    calories: 730,
    ingredients: ["Grilled Thick Chicken Patty", "Thinly Sliced Onions", "Cheddar Cheese", "SAR Chicken Sauce", "Toasted Potato Bun"],
    customizations: {
      extraCheese: [{ id: "c1", name: "Extra Cheddar Cheese", price: 100 }]
    }
  },

  // --- SMASH CHICKEN BURGERS ---
  {
    id: "chicken-smash",
    name: "CHICKEN SMASH",
    price: 1090,
    rating: 4.8,
    reviewsCount: 310,
    description: "Fresh smashed chicken patty, cheddar cheese, SAR chicken sauce on a toasted potato bun.",
    category: "chicken",
    tags: ["Smash Chicken", "Crispy Edge"],
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBRCr8FNxTmvloqBZ7JpoESHCSBgFOJc7Y4YN7X4lRPEYEOhOZPY894JYPBrwQkAxzT0C7BsQmyy2Wu8mdJDnYSQdZp8FeRuej6AEgzte1OQvzzo2_JriH9Rmc5T0mxo7Ge5rX39sOhF2Zosr57gurEta-qp_JTmWNXW4YWnAlUzIvWOxXzBLbmK9Ts41D3-WVUhz7x-Fkhwl6R_1Xs0tSrIsdBr9g8yxvm_TLLQqK1VJskl9TSqMQ2Aw",
    calories: 640,
    ingredients: ["Fresh Smashed Chicken Patty", "Cheddar Cheese", "SAR Chicken Sauce", "Toasted Potato Bun"],
    customizations: {
      extraCheese: [{ id: "c1", name: "Extra Cheddar Cheese", price: 100 }]
    }
  },
  {
    id: "chicken-smash-bbq",
    name: "CHICKEN SMASH BBQ",
    price: 1150,
    rating: 4.7,
    reviewsCount: 180,
    description: "Fresh smashed chicken patty, cheddar cheese, SAR BBQ sauce on a toasted potato bun.",
    category: "chicken",
    tags: ["Smash Chicken", "BBQ Sauce"],
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCsp0aMEr6yAaPtCAG6NEhmND4uj-VjmPY6y2vN_PBmcYRFI-ocOewAUgccvHR1jxjsrPtsiFk2gXE6p1WG8RmNozvc-ZHGCnSz3vou-K7xZ0ZxMAoLp2yzOn64Mo5t3CbcJUWb5A3-Nu_Y2GON220r0Lk6YI_iJP1BcNgU2dchHP5ZlJ1iwr70-XIFEMwfjZ1JUGWwVreNebw1C3YC_bdqw2Tzu1HUezBE2veBK_DKw0T2vO8ID6SLRA",
    calories: 670,
    ingredients: ["Smashed Chicken Patty", "Cheddar Cheese", "SAR BBQ Sauce", "Toasted Potato Bun"],
    customizations: {}
  },
  {
    id: "chicken-smash-onion",
    name: "CHICKEN SMASH ONION",
    price: 1150,
    rating: 4.9,
    reviewsCount: 340,
    description: "A fresh smashed chicken patty with thinly sliced onions pressed into the chicken as it cooks crispy, topped with cheddar cheese, SAR chicken sauce.",
    category: "chicken",
    tags: ["Pressed Onions", "Crispy Smash", "Customer Favorite"],
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB5oQ6hrN3_0MhN4KVMU3TuaRB9xc2w1IBTwLeV1Sf3YAr7Pv8nQDrbMOIP2NnAqaxZn2EZ1ApGLOQv2KReMo-qfq2D02N2SKMOkmwJXKDaogf5B8ARw4fLtrhImXFqL2ytQgPB-DLm3tCJnr4U6KtDnGCghWnw7sVprCTMWhLDdyyUVQBsKhLG-PD4WRygh_L0u9-MCZaMnorSt_tnKkwvXifGOwm9f7utLY2E9ZjHDpYXByrZCyXyiw",
    calories: 690,
    isBestSeller: true,
    ingredients: ["Smashed Chicken Patty", "Pressed Thin Onions", "Cheddar Cheese", "SAR Chicken Sauce"],
    customizations: {}
  },
  {
    id: "chicken-smash-butter",
    name: "CHICKEN SMASH BUTTER",
    price: 1150,
    rating: 4.8,
    reviewsCount: 260,
    description: "A fresh smashed chicken patty seared in butter for extra crispiness, topped with cheddar cheese, SAR chicken sauce on a toasted potato bun.",
    category: "chicken",
    tags: ["Butter Seared", "Smash Chicken"],
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBRCr8FNxTmvloqBZ7JpoESHCSBgFOJc7Y4YN7X4lRPEYEOhOZPY894JYPBrwQkAxzT0C7BsQmyy2Wu8mdJDnYSQdZp8FeRuej6AEgzte1OQvzzo2_JriH9Rmc5T0mxo7Ge5rX39sOhF2Zosr57gurEta-qp_JTmWNXW4YWnAlUzIvWOxXzBLbmK9Ts41D3-WVUhz7x-Fkhwl6R_1Xs0tSrIsdBr9g8yxvm_TLLQqK1VJskl9TSqMQ2Aw",
    calories: 720,
    ingredients: ["Butter-Seared Smashed Chicken", "Cheddar Cheese", "SAR Chicken Sauce", "Toasted Potato Bun"],
    customizations: {}
  },

  // --- SANDWICHES ---
  {
    id: "philly-cheese-steak",
    name: "PHILLY CHEESE STEAK",
    price: 1150,
    rating: 5.0,
    reviewsCount: 520,
    description: "Tender thin-sliced prime cut beef, grilled with onions and smothered in melted cheese, all served on a toasted hoagie roll.",
    category: "sandwiches",
    tags: ["Prime Cut Beef", "Philly Cheese", "Signature Sandwich"],
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAk2ZV6yFKJAM7mYfAgI4AZfhYeM_LkjQ90wB474PIZr2m3xyrzAzAxlj9_s5BM07AKljxgsepfVcbSZ2rO_2UZGpolP-yE8r_cRVbYcD9ozZr0k95CGJbGS-ruRLxat5Zdy0hZ3SVLirb-T8Imn7IAQAmNUAANWEe8IKXZ0DG8ZMY_G5kufoz_nzICJnmlROrclLJQNIJfM1IcjvsukgjRmsOF3q9bgCqFoOu1oiKyiDiYvrkXacVncw",
    calories: 850,
    isBestSeller: true,
    ingredients: ["Thin-Sliced Prime Beef", "Grilled Onions", "Melted Cheddar & Swiss", "Toasted Hoagie Roll"],
    customizations: {
      extraCheese: [{ id: "c1", name: "Extra Smothered Cheese", price: 120 }]
    }
  },
  {
    id: "chicken-philly-cheese-steak",
    name: "CHICKEN PHILLY CHEESE STEAK",
    price: 1190,
    rating: 4.8,
    reviewsCount: 310,
    description: "Grilled seasoned chicken breast, grilled with onions, melted cheese on a toasted hoagie roll.",
    category: "sandwiches",
    tags: ["Seasoned Chicken", "Grilled Onions", "Hoagie Roll"],
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBRCr8FNxTmvloqBZ7JpoESHCSBgFOJc7Y4YN7X4lRPEYEOhOZPY894JYPBrwQkAxzT0C7BsQmyy2Wu8mdJDnYSQdZp8FeRuej6AEgzte1OQvzzo2_JriH9Rmc5T0mxo7Ge5rX39sOhF2Zosr57gurEta-qp_JTmWNXW4YWnAlUzIvWOxXzBLbmK9Ts41D3-WVUhz7x-Fkhwl6R_1Xs0tSrIsdBr9g8yxvm_TLLQqK1VJskl9TSqMQ2Aw",
    calories: 780,
    ingredients: ["Seasoned Chicken Breast", "Grilled Onions", "Melted Cheese", "Toasted Hoagie Roll"],
    customizations: {}
  },
  {
    id: "tuna-salad-sandwich",
    name: "TUNA SALAD SANDWICH",
    price: 950,
    rating: 4.7,
    reviewsCount: 210,
    description: "A classic favorite made with fresh, flaky tuna mixed with crisp celery, and a hint of mustard for tang. Served on a baguette with a touch of salad and tomato for added crunch.",
    category: "sandwiches",
    tags: ["Fresh Tuna", "Celery & Mustard", "Crisp Baguette"],
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBZ5j15_Is2Lv5xtzs-1J52i9dLtVvkFD4mSOABClnU34giKB5MibKjx3VQ1faGy6KWbNDf5GUdWCm_azUvlSBtwsVRJJi4Cbhj_zYW15jMlcksMcXiDqexyQ91Pd_K6EGG-zTa5I1kVfmHCuHgkrnsEDpcWP6aVnCkV7p4wwwKv2CSHjpy3pSTaIUn8e1aomphuj_ysww9Pswm5G4ixboBkmhYQ9YJi6JlBzvVpQSk3tRqb1YyO81KLg",
    calories: 580,
    ingredients: ["Flaky Tuna", "Crisp Celery", "Tangy Mustard", "Fresh Baguette", "Tomato & Lettuce"],
    customizations: {
      extraCheese: [{ id: "c1", name: "Add Cheese", price: 100 }],
      sauces: [{ id: "s1", name: "Add Mayonnaise", price: 50 }]
    }
  },

  // --- SIDES ---
  {
    id: "french-fries",
    name: "SAR CRISPY FRENCH FRIES",
    price: 280,
    rating: 4.9,
    reviewsCount: 520,
    description: "Golden crispy cut potato fries tossed in coarse sea salt and served piping hot.",
    category: "sides",
    tags: ["Hand-Cut", "Crispy Side"],
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBlYz-WU6pWsqHrz6mVtoQinx-XRwefLiQD7GBRhj81JjiAOhGvSXkQcmeF7X1iyR1ziUaZGjUees7ji-Im7aq9hIsNU2uaWvcA68kmiN5NS2-07xkFU9GnjOJuIY0nqJII5GVpjYNaVFgj5LRWfHI3lzpYoh7pxCuaPlS5KbPXc--_v__wLoX5jmNCjXQ3QUiJrnWNcopk0Hjq8LUH7rL-toz8gJtE49Vm1mfXUVKVdvejq8MfONZqrA",
    calories: 410,
    ingredients: ["Fresh Potato Fries", "Flaky Sea Salt"],
    customizations: {
      sauces: [{ id: "s1", name: "SAR Secret Dip", price: 50 }]
    }
  },
  {
    id: "cheesy-loaded-fries",
    name: "SAR CHEESY LOADED FRIES",
    price: 380,
    rating: 4.9,
    reviewsCount: 310,
    description: "Crispy fries smothered in warm melted cheddar cheese sauce, SAR house secret sauce, and jalapeño coins.",
    category: "sides",
    tags: ["Loaded", "Cheesy"],
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBlYz-WU6pWsqHrz6mVtoQinx-XRwefLiQD7GBRhj81JjiAOhGvSXkQcmeF7X1iyR1ziUaZGjUees7ji-Im7aq9hIsNU2uaWvcA68kmiN5NS2-07xkFU9GnjOJuIY0nqJII5GVpjYNaVFgj5LRWfHI3lzpYoh7pxCuaPlS5KbPXc--_v__wLoX5jmNCjXQ3QUiJrnWNcopk0Hjq8LUH7rL-toz8gJtE49Vm1mfXUVKVdvejq8MfONZqrA",
    calories: 520,
    ingredients: ["Potato Fries", "Melted Cheddar Sauce", "SAR Secret Drizzle", "Jalapeño Coins"],
    customizations: {}
  },

  // --- ALCOHOL FREE COCKTAILS ---
  {
    id: "lemonade-breeze",
    name: "Lemonade Breeze",
    price: 390,
    rating: 4.8,
    reviewsCount: 140,
    description: "Refreshing zesty lemonade blend infused with mint and ice, perfect for sunny days.",
    category: "drinks",
    tags: ["Alcohol Free Cocktail", "Refreshing", "Best Seller"],
    image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80",
    calories: 140,
    isBestSeller: true,
    ingredients: ["Fresh Lemon Juice", "Mint Leaves", "Crushed Ice", "Cane Sugar"],
    customizations: {}
  },
  {
    id: "cinnamon-cooler",
    name: "Cinnamon Cooler",
    price: 400,
    rating: 4.9,
    reviewsCount: 115,
    description: "Chilled spicy-sweet infusion crafted with natural cinnamon spice, apple nectar, and crushed ice.",
    category: "drinks",
    tags: ["Alcohol Free Cocktail", "Spiced Cooler"],
    image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=800&q=80",
    calories: 160,
    ingredients: ["Cinnamon Infusion", "Apple Nectar", "Sparkling Water", "Crushed Ice"],
    customizations: {}
  },
  {
    id: "ginger-delight",
    name: "Ginger Delight",
    price: 390,
    rating: 4.8,
    reviewsCount: 130,
    description: "Zesty fresh Ethiopian ginger root pressed with citrus honey and sparkling water.",
    category: "drinks",
    tags: ["Alcohol Free Cocktail", "Fresh Ginger"],
    image: "https://images.unsplash.com/photo-1621263764928-df1444c5e859?auto=format&fit=crop&w=800&q=80",
    calories: 150,
    ingredients: ["Pressed Ginger", "Lemon Juices", "Local Honey", "Sparkling Soda"],
    customizations: {}
  },
  {
    id: "rosemary-secret",
    name: "Rosemary's Secret",
    price: 390,
    rating: 4.7,
    reviewsCount: 98,
    description: "An aromatic herbal mocktail with muddled fresh rosemary, grapefruit twist, and chilled soda water.",
    category: "drinks",
    tags: ["Alcohol Free Cocktail", "Herbal Twist"],
    image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80",
    calories: 130,
    ingredients: ["Fresh Rosemary", "Grapefruit Juice", "Club Soda"],
    customizations: {}
  },
  {
    id: "strawberry-sunset",
    name: "Strawberry Sunset",
    price: 400,
    rating: 4.9,
    reviewsCount: 220,
    description: "Vibrant puree of fresh ripe strawberries with lime juice, berry drizzle, and crushed ice.",
    category: "drinks",
    tags: ["Alcohol Free Cocktail", "Fruity Favorite"],
    image: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&w=800&q=80",
    calories: 170,
    isBestSeller: true,
    ingredients: ["Fresh Strawberry Puree", "Lime Juice", "Crushed Ice", "Berry Syrup"],
    customizations: {}
  },
  {
    id: "thyme-to-shine",
    name: "Thyme to Shine",
    price: 390,
    rating: 4.8,
    reviewsCount: 105,
    description: "Botanical cooler infused with wild thyme herbs, citrus lemon zest, and crisp sparkling tonic.",
    category: "drinks",
    tags: ["Alcohol Free Cocktail", "Botanical"],
    image: "https://images.unsplash.com/photo-1536935338788-846bb9981813?auto=format&fit=crop&w=800&q=80",
    calories: 125,
    ingredients: ["Wild Thyme", "Lemon Zest", "Tonic Water", "Ice"],
    customizations: {}
  },
  {
    id: "sar-special-cocktail",
    name: "SAR Special Cocktail",
    price: 450,
    rating: 5.0,
    reviewsCount: 380,
    description: "SAR's signature house mocktail blend featuring exotic fruits, passionfruit nectar, and sparkling citrus splash.",
    category: "drinks",
    tags: ["Signature Cocktail", "Must Try", "House Special"],
    image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=800&q=80",
    calories: 180,
    isBestSeller: true,
    ingredients: ["Exotic Fruit Blend", "Passionfruit Nectar", "Lime Splash", "Crushed Ice"],
    customizations: {}
  },

  // --- COLD COFFEE DRINKS ---
  {
    id: "ice-tea",
    name: "Ice Tea",
    price: 250,
    rating: 4.7,
    reviewsCount: 160,
    description: "Freshly brewed iced black tea served cold with fresh lemon slice.",
    category: "drinks",
    tags: ["Cold Coffee & Tea", "Classic Iced Tea"],
    image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=800&q=80",
    calories: 90,
    ingredients: ["Brewed Black Tea", "Lemon Wedge", "Ice"],
    customizations: {}
  },
  {
    id: "ice-latte",
    name: "Ice Latte",
    price: 300,
    rating: 4.8,
    reviewsCount: 290,
    description: "Smooth double shot of Ethiopian Arabica espresso with cold creamy milk over ice.",
    category: "drinks",
    tags: ["Cold Coffee", "Ethiopian Coffee"],
    image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=800&q=80",
    calories: 140,
    ingredients: ["Double Ethiopian Espresso", "Chilled Fresh Milk", "Ice Cubes"],
    customizations: {}
  },
  {
    id: "ice-moca",
    name: "Ice Moca",
    price: 350,
    rating: 4.9,
    reviewsCount: 230,
    description: "Rich dark cocoa blended with espresso, cold milk, and served chilled over ice.",
    category: "drinks",
    tags: ["Cold Coffee", "Chocolate & Espresso"],
    image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&w=800&q=80",
    calories: 210,
    ingredients: ["Rich Cocoa Powder", "Espresso Shot", "Cold Milk", "Ice"],
    customizations: {}
  },
  {
    id: "ice-caramel",
    name: "Ice Caramel",
    price: 350,
    rating: 4.9,
    reviewsCount: 310,
    description: "Espresso with cold milk, decadent caramel drizzle, and ice.",
    category: "drinks",
    tags: ["Cold Coffee", "Caramel Drizzle"],
    image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=800&q=80",
    calories: 220,
    isBestSeller: true,
    ingredients: ["Sweet Caramel Syrup", "Espresso Shot", "Cold Milk", "Ice"],
    customizations: {}
  },
  {
    id: "ice-americano",
    name: "Ice Americano",
    price: 280,
    rating: 4.7,
    reviewsCount: 180,
    description: "Bold double espresso shot diluted with chilled water and ice for a crisp coffee taste.",
    category: "drinks",
    tags: ["Cold Coffee", "Bold Espresso"],
    image: "https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=800&q=80",
    calories: 15,
    ingredients: ["Double Shot Espresso", "Chilled Water", "Ice Cubes"],
    customizations: {}
  },

  // --- SOFT DRINKS ---
  {
    id: "water",
    name: "Water",
    price: 95,
    rating: 4.8,
    reviewsCount: 400,
    description: "Pure bottled mineral spring water.",
    category: "drinks",
    tags: ["Soft Drinks", "Bottled Water"],
    image: "https://images.unsplash.com/photo-1548839140-29a749e1bc4e?auto=format&fit=crop&w=800&q=80",
    calories: 0,
    ingredients: ["Natural Mineral Water"],
    customizations: {}
  },
  {
    id: "sprite",
    name: "Sprite",
    price: 95,
    rating: 4.8,
    reviewsCount: 350,
    description: "Chilled 330ml lemon-lime soft drink.",
    category: "drinks",
    tags: ["Soft Drinks", "Chilled Soda"],
    image: "https://images.unsplash.com/photo-1625772299848-391b6a87d7b3?auto=format&fit=crop&w=800&q=80",
    calories: 140,
    ingredients: ["Chilled Sprite 330ml"],
    customizations: {}
  },
  {
    id: "coca-cola",
    name: "Coca Cola",
    price: 95,
    rating: 4.9,
    reviewsCount: 610,
    description: "Classic ice-cold Coca Cola 330ml.",
    category: "drinks",
    tags: ["Soft Drinks", "Classic Soda"],
    image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=800&q=80",
    calories: 140,
    isBestSeller: true,
    ingredients: ["Chilled Coca Cola 330ml"],
    customizations: {}
  },
  {
    id: "novida",
    name: "Novida",
    price: 95,
    rating: 4.8,
    reviewsCount: 280,
    description: "Crisp apple flavored carbonated soft drink.",
    category: "drinks",
    tags: ["Soft Drinks", "Apple Soda"],
    image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?auto=format&fit=crop&w=800&q=80",
    calories: 135,
    ingredients: ["Novida Apple Soft Drink"],
    customizations: {}
  },
  {
    id: "ambo-water",
    name: "Ambo Water",
    price: 95,
    rating: 4.9,
    reviewsCount: 450,
    description: "Ethiopia's favorite naturally sparkling mineral water, served chilled.",
    category: "drinks",
    tags: ["Soft Drinks", "Naturally Sparkling"],
    image: "https://images.unsplash.com/photo-1527661591475-527312dd65f5?auto=format&fit=crop&w=800&q=80",
    calories: 0,
    isBestSeller: true,
    ingredients: ["Natural Sparkling Ambo Water"],
    customizations: {}
  }
];

export const INGREDIENT_GALLERY = [
  {
    id: "wagyu-steak",
    title: "Fresh Prime Beef Grind",
    subtitle: "Daily Morning Preparation",
    description: "Finely marbled beef ground fresh every single morning for peak juiciness and tender smash crusts.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBF6AJr-kldv50cDZKT43p2xwubPde0aOLiAxwotWswXmqKrJlNLbFgTKVcXHMWhg1h1cfuMfEoYd0dvRfK4Jk7UWKHUxNqVP4YKHfsK76SLYHwYasWD2r4V5_FkSjaGygAvJA4ObbOlCb3reHLxaAt27HNoBWb8Gx68z2NcJ8iuAnCkY19HKBmvMsdWulq3C12bsAA2Rzv3Y1oQpiQS3KkHyTm2RUQ6ymW8AEgGbkdo8dPgO-fmSBuTQ"
  },
  {
    id: "hydroponic-lettuce",
    title: "Fresh Local Produce",
    subtitle: "Sourced Daily in Addis",
    description: "Crisp greens and fresh vegetables selected daily from trusted local farms around Addis Ababa.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBZ5j15_Is2Lv5xtzs-1J52i9dLtVvkFD4mSOABClnU34giKB5MibKjx3VQ1faGy6KWbNDf5GUdWCm_azUvlSBtwsVRJJi4Cbhj_zYW15jMlcksMcXiDqexyQ91Pd_K6EGG-zTa5I1kVfmHCuHgkrnsEDpcWP6aVnCkV7p4wwwKv2CSHjpy3pSTaIUn8e1aomphuj_ysww9Pswm5G4ixboBkmhYQ9YJi6JlBzvVpQSk3tRqb1YyO81KLg"
  },
  {
    id: "artisan-buns",
    title: "Fresh Brioche Buns",
    subtitle: "Baked Daily at 5:00 AM",
    description: "Soft, golden, butter-brushed brioche buns baked fresh each morning for the ultimate soft bite.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAq6DPvJmHTKHYnGtADDl_pLq-TQ_9iVbxW2nk-TmkrQkQZu3mTpJFy13-Pl0cin1jW_A7pjugBXh5ayLK2h3WBl1IUvVvIa1Zw1bu7qHXku8h9h02Hl1i3d_wEWmKG4UVIyxrZC1dL40D79FJJ995TMZ7eDPBE1RkhDsQ_7tBE8acv3frWYdg-rW8MMwb7cLpC3YQkGxkb5ODr8SeustDOdvQit7VhCzyJxpOF_OLjWUvs2Wgt1cZiUw"
  },
  {
    id: "heirloom-tomatoes",
    title: "Ripe Vine Tomatoes",
    subtitle: "Juicy Sliced Tomatoes",
    description: "Selected at peak ripeness for natural sweetness, balancing the rich savory smash patties.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDqbcGLpHMRhSOXbUdPkMqgpMsQuDvFO30r-G_e3SPiUaS5aLMVV94F4_RCfoT4e1rAe175J9BlCbpY7hxV-p0Bqi5F4pYDRgZsfw563wfVP4gTj2q0XKMmgwRiCGbtUgYtlI86c7B6cSh820TMRuG3vRSz59sRrHoNDO25pUAnM2s0ZK5lsJckYq8qMP7tzuV1Qv4IESL1rzp3pnT3FHnLMikUNa_d9kHUqcZf4Zg4jqqwuorDTPcxIA"
  },
  {
    id: "pickled-cucumbers",
    title: "Signature House Pickles",
    subtitle: "Crispy Barrel Brined",
    description: "Crunchy pickle ribbons aged in garlic and herb brine for the signature sharp bite.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD4tJu1Ycdmx5T1GKx3_xSVBp5LfTPE5to6GG_dRJ0tLa5qeRTVuaXG3iWDdC1pYk-baVeQYyqCn_jvGKhQDWo5syvoDeBYsSVSZBBPVXBe_Os6PcczBNQpcJfDPn-6QlmgmFsIB79bYL1xIJklSwX5hiOlo0D_KclNmgEyqHKjLDE_phZvgu8jBKukGiuUxRkevGogpTfVfEHjjxYHfrn2G6xjeGbB2ypvRJH1_afuj9DR0T2JF26l6Q"
  }
];

export const DISCOUNT_CODES: DiscountCode[] = [
  {
    code: "FIRSTBITE15",
    title: "First Order Discount",
    description: "Get 15% OFF your first online order across all SAR burgers and combos.",
    discountPercentage: 15,
    minSpend: 500,
    expiresText: "Valid for new guests"
  },
  {
    code: "SAR50",
    title: "SAR Special Discount",
    description: "Enjoy 20% OFF any SAR Special Burger or Royal Quad purchase.",
    discountPercentage: 20,
    minSpend: 600,
    expiresText: "Limited time offer"
  },
  {
    code: "BOLEVIP",
    title: "Bole Local Perk",
    description: "10% OFF + Free Fries with any Double Burger order.",
    discountPercentage: 10,
    minSpend: 700,
    expiresText: "Dine-in & Delivery"
  }
];

export const LOCATION_DETAILS = {
  brand: "SAR BURGER",
  subBrand: "Addis Ababa",
  address: "XQWR+Q9V, ADDIS ABABA",
  city: "ADDIS ABABA",
  phone: "+251 91 123 4567",
  email: "orders@sarburgeraddis.com",
  fullAddressText: "SAR Burger, XQWR+Q9V, Addis Ababa, Ethiopia",
  hours: [
    { days: "Mon - Thu", time: "11:00 AM - 10:30 PM" },
    { days: "Fri - Sat", time: "11:00 AM - 11:30 PM" },
    { days: "Sunday", time: "12:00 PM - 10:00 PM" }
  ]
};

