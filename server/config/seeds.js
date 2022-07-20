const db = require('./connection');
const { User, Product, Category } = require('../models');

db.once('open', async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: 'Meat Alternatives' },
    { name: 'Dairy Alternatives' },
    { name: 'Fruits and Vegetables' },
    { name: 'Drinks' },
    { name: 'Snacks' },
    { name: 'Bread' }
  ]);

  console.log('categories seeded');

  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      name: 'Beyond Beef',
      description:
        'Beyond the Meat ground beef.',
      image: 'cookie-tin.jpg',
      category: categories[0]._id,
      price: 9.99,
      quantity: 500
    },
    {
      name: 'Beyond Burger',
      description:
        'Beyond the Meat plant based burger.',
      image: 'canned-coffee.jpg',
      category: categories[0]._id,
      price: 7.99,
      quantity: 500
    },
    {
      name: 'Very Good Burgers',
      category: categories[0]._id,
      description:
        'Very Good Butchers plant based burgers.',
      image: 'toilet-paper.jpg',
      price: 11.99,
      quantity: 500
    },
    {
      name: 'Very Good Steak',
      category: categories[0]._id,
      description:
        'Very Good Butchers plant based steak.',
      image: 'soap.jpg',
      price: 7.19,
      quantity: 500
    },
    {
      name: 'Beyond Sausage',
      category: categories[0]._id,
      description:
        'Beyond the Meat plant based sausage.',
      image: 'wooden-spoons.jpg',
      price: 14.99,
      quantity: 100
    },
    {
      name: 'Gusta Italiana Sausage',
      category: categories[0]._id,
      description:
        'Gusta Vegan plant based sausage.',
      image: 'camera.jpg',
      price: 6.49,
      quantity: 300
    },
    {
        name: 'Sunrise Tofu',
        category: categories[0]._id,
        description: ' Extra firm tofu.',
        image: '',
        price: 2.99,
        quantity: 500
    },
    {
      name: 'Oat Milk',
      category: categories[1]._id,
      description:
        'Califia Farms Unsweetened Oat Milk.',
      image: 'tablet.jpg',
      price: 6.99,
      quantity: 100
    },
    {
      name: 'Almond Milk',
      category: categories[1]._id,
      description:
        'Califia Farms Unsweetened Almond Milk.',
      image: 'bedtime-book.jpg',
      price: 6.99,
      quantity: 100
    },
    {
      name: 'Coconut Milk',
      category: categories[1]._id,
      description: 'Everland Rich Organic Coconut Milk.',
      image: 'spinning-top.jpg',
      price: 2.99,
      quantity: 100
    },
    {
      name: 'Oat Milk',
      category: categories[1]._id,
      description:
        'Isola Bio Light Oat Milk.',
      image: 'plastic-horses.jpg',
      price: 3.99,
      quantity: 1000
    },
    {
      name: 'Coconut Milk',
      category: categories[1]._id,
      description:
        'Native Forest Organic Classic Coconut Milk.',
      image: 'teddy-bear.jpg',
      price: 4.59,
      quantity: 100
    },
    {
      name: 'Almond Milk',
      category: categories[1]._id,
      description:
        'Pacific Barista Series Unsweetend Almond Milk.',
      image: 'alphabet-blocks.jpg',
      price: 5.99,
      quantity: 100
    },
    {
        name: 'Feta Cheese',
        description:
          'Violife "just like" feta cheese block.',
        image: 'cookie-tin.jpg',
        category: categories[1]._id,
        price: 6.49,
        quantity: 500
      },
      {
        name: 'Cheese Slices',
        description:
          'Violife "just like" cheddar cheese slices.',
        image: 'canned-coffee.jpg',
        category: categories[1]._id,
        price: 5.99,
        quantity: 500
      },
      {
        name: 'Parmesan Cheese',
        category: categories[1]._id,
        description:
          'Violife "just like" parmesan cheese wedge.',
        image: 'toilet-paper.jpg',
        price: 11.99,
        quantity: 500
      },
      {
        name: 'Provolone Cheese',
        category: categories[1]._id,
        description:
          'Violife "just like" provolone cheese slices ',
        image: 'soap.jpg',
        price: 7.19,
        quantity: 500
      },
      {
        name: 'Cheddar Cheese',
        category: categories[1]._id,
        description:
          'Violife "just like" cheddar cheese block.',
        image: 'wooden-spoons.jpg',
        price: 7.99,
        quantity: 100
      },
      {
        name: 'Yogurt',
        category: categories[1]._id,
        description:
          'Coconut milk yogurt made by Maison Riviera.',
        image: 'camera.jpg',
        price: 6.49,
        quantity: 300
      },
      {
        name: 'Yogurt',
        category: categories[1]._id,
        description:
          'Strawberry oat milk yogurt by Maison Riviera.',
        image: 'tablet.jpg',
        price: 6.99,
        quantity: 100
      },
      {
        name: 'Butter',
        category: categories[1]._id,
        description:
          'Buttery spread by Earth Balance.',
        image: 'bedtime-book.jpg',
        price: 5.99,
        quantity: 100
      },
      {
        name: 'Butter',
        category: categories[1]._id,
        description: 'Cooking and Baking butter stick by Earth Balance.',
        image: 'spinning-top.jpg',
        price: 2.99,
        quantity: 100
      },
      {
        name: 'Butter',
        category: categories[1]._id,
        description:
          'Soy Free buttery spread by Earth Balance.',
        image: 'plastic-horses.jpg',
        price: 3.99,
        quantity: 1000
      },
      {
        name: 'Lettuce',
        category: categories[2]._id,
        description:
          'Lettuce.',
        image: 'teddy-bear.jpg',
        price: 2.59,
        quantity: 100
      },
      {
        name: 'Spinach',
        category: categories[2]._id,
        description:
          'Spinach.',
        image: 'alphabet-blocks.jpg',
        price: 3.99,
        quantity: 100
      },
      {
        name: 'Kale',
        description:
          'Kale.',
        image: 'cookie-tin.jpg',
        category: categories[2]._id,
        price: 3.99,
        quantity: 500
      },
      {
        name: 'Cucumber',
        description:
          'Cucumber.',
        image: 'canned-coffee.jpg',
        category: categories[2]._id,
        price: .99,
        quantity: 500
      },
      {
        name: 'Zuchinni',
        category: categories[2]._id,
        description:
          'Zuchinni.',
        image: 'toilet-paper.jpg',
        price: .99,
        quantity: 500
      },
      {
        name: 'Tomato',
        category: categories[2]._id,
        description:
          'Tomato.',
        image: 'soap.jpg',
        price: .99,
        quantity: 500
      },
      {
        name: 'Cherry Tomatoes',
        category: categories[2]._id,
        description:
          'Cherry Tomatoes.',
        image: 'wooden-spoons.jpg',
        price: .99,
        quantity: 100
      },
      {
        name: 'Red Pepper',
        category: categories[2]._id,
        description:
          'Red Pepper.',
        image: 'camera.jpg',
        price: 1.49,
        quantity: 300
      },
      {
        name: 'Green Pepper',
        category: categories[2]._id,
        description:
          'Green Pepper.',
        image: 'tablet.jpg',
        price: 1.49,
        quantity: 100
      },
      {
        name: 'Yellow Onion',
        category: categories[2]._id,
        description:
          'Yellow Onion.',
        image: 'bedtime-book.jpg',
        price: .99,
        quantity: 100
      },
      {
        name: 'Red Onion',
        category: categories[2]._id,
        description: 'Red Onion.',
        image: 'spinning-top.jpg',
        price: .99,
        quantity: 100
      },
      {
        name: 'Bananas',
        category: categories[2]._id,
        description:
          'Organic Bananas.',
        image: 'plastic-horses.jpg',
        price: 3.99,
        quantity: 1000
      },
      {
        name: 'Red Apple',
        category: categories[2]._id,
        description:
          'Red Apple.',
        image: 'teddy-bear.jpg',
        price: .99,
        quantity: 100
      },
      {
        name: 'Green Apple',
        category: categories[2]._id,
        description:
          'Green Apple.',
        image: 'alphabet-blocks.jpg',
        price: .99,
        quantity: 100
      },
      {
          name: 'Orange',
          description:
            'Orange.',
          image: 'cookie-tin.jpg',
          category: categories[2]._id,
          price: .99,
          quantity: 500
        },
        {
          name: 'Watermelon',
          description:
            'Watermelon.',
          image: 'canned-coffee.jpg',
          category: categories[2]._id,
          price: 2.99,
          quantity: 500
        },
        {
          name: 'Avocado',
          category: categories[2]._id,
          description:
            'Avocado.',
          image: 'toilet-paper.jpg',
          price: 1.99,
          quantity: 500
        },
        {
          name: 'Lime',
          category: categories[2]._id,
          description:
            'Lime.',
          image: 'soap.jpg',
          price: .99,
          quantity: 500
        },
        {
          name: 'Lemon.',
          category: categories[2]._id,
          description:
            'Lemon.',
          image: 'wooden-spoons.jpg',
          price: .99,
          quantity: 100
        },
        {
          name: 'Sparkling Water',
          category: categories[3]._id,
          description:
            'La Croix watermelon flavoured sparkling water.',
          image: 'camera.jpg',
          price: 1.29,
          quantity: 300
        },
        {
          name: 'Sparkling Water',
          category: categories[3]._id,
          description:
            'La Croix hibiscus flavoured sparkling water.',
          image: 'tablet.jpg',
          price: 1.29,
          quantity: 100
        },
        {
          name: 'Sparkling Water',
          category: categories[3]._id,
          description:
            'La Croix mango flavoured sparkling water.',
          image: 'bedtime-book.jpg',
          price: 1.29,
          quantity: 100
        },
        {
          name: 'Kombucha',
          category: categories[3]._id,
          description: 'Hoochy Booch Bellini kombucha.',
          image: 'spinning-top.jpg',
          price: 2.99,
          quantity: 100
        },
        {
          name: 'Kombucha',
          category: categories[3]._id,
          description:
            'Hoochy Booch Blue Valentine kombucha.',
          image: 'plastic-horses.jpg',
          price: 2.99,
          quantity: 100
        },
        {
          name: 'Chocloate Oat Milk',
          category: categories[3]._id,
          description:
            'Two Bears frothed chocolate oat milk.',
          image: 'teddy-bear.jpg',
          price: 2.59,
          quantity: 100
        },
        {
          name: 'Oat Milk Latte',
          category: categories[3]._id,
          description:
            'Two Bears matcha tea oat milk latte',
          image: 'alphabet-blocks.jpg',
          price: 3.99,
          quantity: 100
        },
        {
            name: 'Granola Bar',
            category: categories[4]._id,
            description:
              'Welo chocolate chip probiotic bar.',
            image: 'alphabet-blocks.jpg',
            price: 1.99,
            quantity: 100
          },
          {
              name: 'Granola Bar',
              description:
                'Welo banana probiotic bar.',
              image: 'cookie-tin.jpg',
              category: categories[4]._id,
              price: 1.99,
              quantity: 500
            },
            {
              name: 'Granola Bar',
              description:
                'Welo apple crumble probitoic bar.',
              image: 'canned-coffee.jpg',
              category: categories[4]._id,
              price: 1.99,
              quantity: 500
            },
            {
              name: 'Chips',
              category: categories[4]._id,
              description:
                'Beanfields Nacho bean chips.',
              image: 'toilet-paper.jpg',
              price: 3.99,
              quantity: 500
            },
            {
              name: 'Chips',
              category: categories[4]._id,
              description:
                'Que Pasa Ranch tortilla chips.',
              image: 'soap.jpg',
              price: 3.99,
              quantity: 500
            },
            {
              name: 'Chips',
              category: categories[4]._id,
              description:
                'Que Pasa nacho tortilla chips.',
              image: 'wooden-spoons.jpg',
              price: 3.99,
              quantity: 100
            },
            {
              name: 'Chips',
              category: categories[4]._id,
              description:
                'Beanfields Pico de Gallo bean chips.',
              image: 'camera.jpg',
              price: 3.99,
              quantity: 300
            },
            {
              name: 'Crackers',
              category: categories[4]._id,
              description:
                'Hippie snacks guacamole avocado crisps.',
              image: 'tablet.jpg',
              price: 3.99,
              quantity: 100
            },
            {
              name: 'Crackers',
              category: categories[4]._id,
              description:
                'Hippie snacks classic ranch cauliflower crisps.',
              image: 'bedtime-book.jpg',
              price: 3.99,
              quantity: 100
            },
            {
              name: 'Crackers',
              category: categories[4]._id,
              description: 'Laiki black rice with cheddar crackers.',
              image: 'spinning-top.jpg',
              price: 2.99,
              quantity: 100
            },
            {
              name: 'Crackers',
              category: categories[4]._id,
              description:
                'Laiki red rice with cracked black pepper crackers.',
              image: 'plastic-horses.jpg',
              price: 2.99,
              quantity: 100
            },
            {
              name: 'Bagels',
              category: categories[5]._id,
              description:
                'Silver Hills Organic Sprouted Everything Bagels',
              image: 'teddy-bear.jpg',
              price: 4.59,
              quantity: 100
            },
            {
              name: 'Bagels',
              category: categories[5]._id,
              description:
                'Silver Hills Organic sporuted cinnamon raisin bagels',
              image: 'alphabet-blocks.jpg',
              price: 4.59,
              quantity: 100
            },
            {
                name: 'Tortillas',
                category: categories[5]._id,
                description:
                  'Lita\'s Mexican Foods whole wheat flour tortillas.',
                image: 'wooden-spoons.jpg',
                price: 3.99,
                quantity: 100
              },
              {
                name: 'Tortillas',
                category: categories[5]._id,
                description:
                  'Lita\'s Mexican Foods white flour tortillas.',
                image: 'camera.jpg',
                price: 3.99,
                quantity: 300
              },
              {
                name: 'Bread',
                category: categories[5]._id,
                description:
                  'Silver Hills "Squirrelly" organic sprouted wheat bread',
                image: 'tablet.jpg',
                price: 4.99,
                quantity: 100
              },
              {
                name: 'Bread',
                category: categories[5]._id,
                description:
                  'Silver Hills "The Big 16" organic sprouted wheat bread.',
                image: 'bedtime-book.jpg',
                price: 4.99,
                quantity: 100
              },
              {
                name: 'Bread',
                category: categories[5]._id,
                description: 'Silver Hills "Soft Wheat" organic sprouted wheat bread.',
                image: 'spinning-top.jpg',
                price: 4.99,
                quantity: 100
              },
              {
                name: 'Bread',
                category: categories[5]._id,
                description:
                  'Silver Hills "Organic Multigrain" organic sprouted wheat bread.',
                image: 'plastic-horses.jpg',
                price: 4.99,
                quantity: 100
              }
  ]);

  console.log('products seeded');

  await User.deleteMany();

  await User.create({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    orders: []
  });

 
  console.log('users seeded');

  process.exit();
});
