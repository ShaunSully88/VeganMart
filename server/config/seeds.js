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
    { name: 'Bakery' },
    { name: 'Grains and Legumes' }
  ]);

  console.log('categories seeded');

  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      name: 'Beyond Beef',
      description:
        'Beyond the Meat ground beef.',
      image: 'beyond-beef.jpg',
      category: categories[0]._id,
      price: 9.99,
      quantity: 500
    },
    {
      name: 'Beyond Burger',
      description:
        'Beyond the Meat plant based burger.',
      image: 'beyond-burger.jpg',
      category: categories[0]._id,
      price: 7.99,
      quantity: 500
    },
    {
      name: 'Very Good Burgers',
      category: categories[0]._id,
      description:
        'Very Good Butchers plant based burgers.',
      image: 'good-burger.jpg',
      price: 11.99,
      quantity: 500
    },
    {
      name: 'Very Good Steak',
      category: categories[0]._id,
      description:
        'Very Good Butchers plant based steak.',
      image: 'good-steak.jpg',
      price: 7.19,
      quantity: 500
    },
    {
      name: 'Beyond Sausage',
      category: categories[0]._id,
      description:
        'Beyond the Meat plant based sausage.',
      image: 'beyond-sausage.jpg',
      price: 14.99,
      quantity: 100
    },
    {
      name: 'Gusta Italiana Sausage',
      category: categories[0]._id,
      description:
        'Gusta Vegan plant based sausage.',
      image: 'gusta-sausage.jpg',
      price: 6.49,
      quantity: 300
    },
    {
        name: 'Sunrise Tofu',
        category: categories[0]._id,
        description: ' Extra firm tofu.',
        image: 'tofu.jpg',
        price: 2.99,
        quantity: 500
    },
    {
      name: 'Oat Milk',
      category: categories[1]._id,
      description:
        'Califia Farms Unsweetened Oat Milk.',
      image: 'califia-oat.jpg',
      price: 6.99,
      quantity: 100
    },
    {
      name: 'Almond Milk',
      category: categories[1]._id,
      description:
        'Califia Farms Unsweetened Almond Milk.',
      image: 'califia-almond.jpg',
      price: 6.99,
      quantity: 100
    },
    {
      name: 'Coconut Milk',
      category: categories[1]._id,
      description: 'Everland Rich Organic Coconut Milk.',
      image: 'everland-coconut.jpg',
      price: 2.99,
      quantity: 100
    },
    {
      name: 'Oat Milk',
      category: categories[1]._id,
      description:
        'Isola Bio Light Oat Milk.',
      image: 'isola-oat.jpg',
      price: 6.99,
      quantity: 1000
    },
    {
      name: 'Coconut Milk',
      category: categories[1]._id,
      description:
        'Native Forest Organic Classic Coconut Milk.',
      image: 'native-coconut.jpg',
      price: 2.59,
      quantity: 100
    },
    {
      name: 'Almond Milk',
      category: categories[1]._id,
      description:
        'Pacific Barista Series Unsweetend Almond Milk.',
      image: 'pacific-barista.jpg',
      price: 5.99,
      quantity: 100
    },
    {
        name: 'Feta Cheese',
        description:
          'Violife "just like" feta cheese block.',
        image: 'feta-cheese.jpg',
        category: categories[1]._id,
        price: 5.49,
        quantity: 500
      },
      {
        name: 'Cheese Slices',
        description:
          'Violife "just like" cheddar cheese slices.',
        image: 'cheese-slices.jpg',
        category: categories[1]._id,
        price: 5.99,
        quantity: 500
      },
      {
        name: 'Parmesan Cheese',
        category: categories[1]._id,
        description:
          'Violife "just like" parmesan cheese wedge.',
        image: 'parmesan.jpg',
        price: 5.99,
        quantity: 500
      },
      {
        name: 'Provolone Cheese',
        category: categories[1]._id,
        description:
          'Violife "just like" provolone cheese slices ',
        image: 'provolone.jpg',
        price: 5.99,
        quantity: 500
      },
      {
        name: 'Cheddar Cheese',
        category: categories[1]._id,
        description:
          'Violife "just like" cheddar cheese block.',
        image: 'cheddar.jpg',
        price: 5.99,
        quantity: 100
      },
      {
        name: 'Yogurt',
        category: categories[1]._id,
        description:
          'Coconut milk yogurt made by Maison Riviera.',
        image: 'yogurt.jpg',
        price: 6.49,
        quantity: 300
      },
      {
        name: 'Yogurt',
        category: categories[1]._id,
        description:
          'Strawberry oat milk yogurt by Maison Riviera.',
        image: 'strawberry-yogurt.jpg',
        price: 6.99,
        quantity: 100
      },
      {
        name: 'Butter',
        category: categories[1]._id,
        description:
          'Buttery spread by Earth Balance.',
        image: 'earth-butter.jpg',
        price: 5.99,
        quantity: 100
      },
      {
        name: 'Butter',
        category: categories[1]._id,
        description: 'Cooking and Baking butter stick by Earth Balance.',
        image: 'butter-sticks.jpg',
        price: 2.99,
        quantity: 100
      },
      {
        name: 'Butter',
        category: categories[1]._id,
        description:
          'Soy Free buttery spread by Earth Balance.',
        image: 'soyfree-butter.jpg',
        price: 3.99,
        quantity: 1000
      },
      {
        name: 'Lettuce',
        category: categories[2]._id,
        description:
          'Lettuce.',
        image: 'lettuce.jpg',
        price: 2.59,
        quantity: 100
      },
      {
        name: 'Spinach',
        category: categories[2]._id,
        description:
          'Spinach.',
        image: 'spinach.jpg',
        price: 3.99,
        quantity: 100
      },
      {
        name: 'Kale',
        description:
          'Kale.',
        image: 'kale.jpg',
        category: categories[2]._id,
        price: 3.99,
        quantity: 500
      },
      {
        name: 'Cucumber',
        description:
          'Cucumber.',
        image: 'cucumber.jpg',
        category: categories[2]._id,
        price: .99,
        quantity: 500
      },
      {
        name: 'Zucchini',
        category: categories[2]._id,
        description:
          'Zucchini.',
        image: 'zucchini.jpg',
        price: .99,
        quantity: 500
      },
      {
        name: 'Tomato',
        category: categories[2]._id,
        description:
          'Tomato.',
        image: 'tomato.jpg',
        price: .99,
        quantity: 500
      },
      {
        name: 'Cherry Tomatoes',
        category: categories[2]._id,
        description:
          'Cherry Tomatoes.',
        image: 'cherry-tomato.jpg',
        price: .99,
        quantity: 100
      },
      {
        name: 'Red Pepper',
        category: categories[2]._id,
        description:
          'Red Pepper.',
        image: 'red-pepper.jpg',
        price: 1.49,
        quantity: 300
      },
      {
        name: 'Green Pepper',
        category: categories[2]._id,
        description:
          'Green Pepper.',
        image: 'green-pepper.jpg',
        price: 1.49,
        quantity: 100
      },
      {
        name: 'Yellow Onion',
        category: categories[2]._id,
        description:
          'Yellow Onion.',
        image: 'yellow-onion.jpg',
        price: .99,
        quantity: 100
      },
      {
        name: 'Red Onion',
        category: categories[2]._id,
        description: 'Red Onion.',
        image: 'red-onion.jpg',
        price: .99,
        quantity: 100
      },
      {
        name: 'Bananas',
        category: categories[2]._id,
        description:
          'Organic Bananas.',
        image: 'bananas.jpg',
        price: 3.99,
        quantity: 1000
      },
      {
        name: 'Red Apple',
        category: categories[2]._id,
        description:
          'Red Apple.',
        image: 'red-apple.jpg',
        price: .99,
        quantity: 100
      },
      {
        name: 'Green Apple',
        category: categories[2]._id,
        description:
          'Green Apple.',
        image: 'green-apple.jpg',
        price: .99,
        quantity: 100
      },
      {
          name: 'Orange',
          description:
            'Orange.',
          image: 'orange.jpg',
          category: categories[2]._id,
          price: .99,
          quantity: 500
        },
        {
          name: 'Watermelon',
          description:
            'Watermelon.',
          image: 'watermelon.jpg',
          category: categories[2]._id,
          price: 2.99,
          quantity: 500
        },
        {
          name: 'Avocado',
          category: categories[2]._id,
          description:
            'Avocado.',
          image: 'avocado.jpg',
          price: 1.99,
          quantity: 500
        },
        {
          name: 'Lime',
          category: categories[2]._id,
          description:
            'Lime.',
          image: 'lime.jpg',
          price: .99,
          quantity: 500
        },
        {
          name: 'Lemon',
          category: categories[2]._id,
          description:
            'Lemon.',
          image: 'lemon.jpg',
          price: .99,
          quantity: 100
        },
        {
          name: 'Sparkling Water',
          category: categories[3]._id,
          description:
            'La Croix watermelon flavoured sparkling water.',
          image: 'lacroix-watermelon.jpg',
          price: 1.29,
          quantity: 300
        },
        {
          name: 'Sparkling Water',
          category: categories[3]._id,
          description:
            'La Croix hibiscus flavoured sparkling water.',
          image: 'lacroix-hibiscus.jpg',
          price: 1.29,
          quantity: 100
        },
        {
          name: 'Sparkling Water',
          category: categories[3]._id,
          description:
            'La Croix mango flavoured sparkling water.',
          image: 'lacroix-mango.jpg',
          price: 1.29,
          quantity: 100
        },
        {
          name: 'Kombucha',
          category: categories[3]._id,
          description: 'Hoochy Booch Bellini kombucha.',
          image: 'bellini-kombucha.jpg',
          price: 2.99,
          quantity: 100
        },
        {
          name: 'Kombucha',
          category: categories[3]._id,
          description:
            'Hoochy Booch Blue Valentine kombucha.',
          image: 'blue-kombucha.jpg',
          price: 2.99,
          quantity: 100
        },
        {
          name: 'Chocloate Oat Milk',
          category: categories[3]._id,
          description:
            'Two Bears frothed chocolate oat milk.',
          image: 'bears-chocolate.jpg',
          price: 2.59,
          quantity: 100
        },
        {
          name: 'Oat Milk Latte',
          category: categories[3]._id,
          description:
            'Two Bears matcha tea oat milk latte',
          image: 'bears-matcha.jpg',
          price: 2.59,
          quantity: 100
        },
        {
            name: 'Granola Bar',
            category: categories[4]._id,
            description:
              'Welo chocolate chip probiotic bar.',
            image: 'welo-chip.jpg',
            price: 1.99,
            quantity: 100
          },
          {
              name: 'Granola Bar',
              description:
                'Welo banana probiotic bar.',
              image: 'welo-banana.jpg',
              category: categories[4]._id,
              price: 1.99,
              quantity: 500
            },
            {
              name: 'Granola Bar',
              description:
                'Welo apple crumble probitoic bar.',
              image: 'welo-apple.jpg',
              category: categories[4]._id,
              price: 1.99,
              quantity: 500
            },
            {
              name: 'Chips',
              category: categories[4]._id,
              description:
                'Beanfields Nacho bean chips.',
              image: 'beanfields-nacho.jpg',
              price: 3.99,
              quantity: 500
            },
            {
              name: 'Chips',
              category: categories[4]._id,
              description:
                'Que Pasa Ranch tortilla chips.',
              image: 'pasa-ranch.jpg',
              price: 3.99,
              quantity: 500
            },
            {
              name: 'Chips',
              category: categories[4]._id,
              description:
                'Que Pasa nacho tortilla chips.',
              image: 'pasa-nacho.jpg',
              price: 3.99,
              quantity: 100
            },
            {
              name: 'Chips',
              category: categories[4]._id,
              description:
                'Beanfields Pico de Gallo bean chips.',
              image: 'beanfields-pico.jpg',
              price: 3.99,
              quantity: 300
            },
            {
              name: 'Crackers',
              category: categories[4]._id,
              description:
                'Hippie snacks guacamole avocado crisps.',
              image: 'hippie-avocado.jpg',
              price: 3.99,
              quantity: 100
            },
            {
              name: 'Crackers',
              category: categories[4]._id,
              description:
                'Hippie snacks classic ranch cauliflower crisps.',
              image: 'hippie-cauli.jpg',
              price: 3.99,
              quantity: 100
            },
            {
              name: 'Crackers',
              category: categories[4]._id,
              description: 'Laiki black rice with cheddar crackers.',
              image: 'laiki-black.jpg',
              price: 2.99,
              quantity: 100
            },
            {
              name: 'Crackers',
              category: categories[4]._id,
              description:
                'Laiki red rice with cracked black pepper crackers.',
              image: 'laiki-red.jpg',
              price: 2.99,
              quantity: 100
            },
            {
              name: 'Bagels',
              category: categories[5]._id,
              description:
                'Silver Hills Organic Sprouted Everything Bagels',
              image: 'everything-bagel.jpg',
              price: 4.59,
              quantity: 100
            },
            {
              name: 'Bagels',
              category: categories[5]._id,
              description:
                'Silver Hills Organic sporuted cinnamon raisin bagels',
              image: 'raisin-bagel.jpg',
              price: 4.59,
              quantity: 100
            },
            {
                name: 'Tortillas',
                category: categories[5]._id,
                description:
                  'Lita\'s Mexican Foods whole wheat flour tortillas.',
                image: 'lita-wholewheat.jpg',
                price: 3.99,
                quantity: 100
              },
              {
                name: 'Tortillas',
                category: categories[5]._id,
                description:
                  'Lita\'s Mexican Foods white flour tortillas.',
                image: 'lita-white.jpg',
                price: 3.99,
                quantity: 300
              },
              {
                name: 'Bread',
                category: categories[5]._id,
                description:
                  'Silver Hills "Squirrelly" organic sprouted wheat bread',
                image: 'squirrelly-bread.jpg',
                price: 4.99,
                quantity: 100
              },
              {
                name: 'Bread',
                category: categories[5]._id,
                description:
                  'Silver Hills "The Big 16" organic sprouted wheat bread.',
                image: 'big-bread.jpg',
                price: 4.99,
                quantity: 100
              },
              {
                name: 'Bread',
                category: categories[5]._id,
                description: 'Silver Hills "Soft Wheat" organic sprouted wheat bread.',
                image: 'softwheat-bread.jpg',
                price: 4.99,
                quantity: 100
              },
              {
                name: 'Bread',
                category: categories[5]._id,
                description:
                  'Silver Hills "Organic Multigrain" organic sprouted wheat bread.',
                image: 'multigrain-bread.jpg',
                price: 4.99,
                quantity: 100
              },
              {
                name: 'Brown Rice',
                category: categories[6]._id,
                description:
                  'Lundberg organic brown short grain rice.',
                image: 'shortgrain.jpg',
                price: 7.99,
                quantity: 100
              },
              {
                name: 'Jasmine White Rice',
                category: categories[6]._id,
                description: 'Lundberg Organic California White Jasmine Rice.',
                image: 'white-jasmine.jpg',
                price: 7.99,
                quantity: 100
              },
              {
                name: 'Jasmine Brown Rice',
                category: categories[6]._id,
                description:
                  'Lundberg Organic California Brown Jasmine Rice.',
                image: 'jasmine-brown.jpg',
                price: 7.99,
                quantity: 100
              },
              {
                name: 'Basmati Rice',
                category: categories[6]._id,
                description:
                  'Lundberg Organic California White Basmati Rice',
                image: 'white-basmati.jpeg',
                price: 7.99,
                quantity: 100
              },
              {
                name: 'Red Lentils',
                category: categories[6]._id,
                description:
                  'Bob\'s Red Mill Red Lentils heritage Beans',
                image: 'red-lentil.jpg',
                price: 7.99,
                quantity: 100
              },
              {
                  name: 'Green Lentils',
                  category: categories[6]._id,
                  description:
                    'Bob\'s Red Mill petite French Green Lentils',
                  image: 'green-lentil.jpg',
                  price: 7.99,
                  quantity: 100
                },
                {
                  name: 'Chickpeas',
                  category: categories[6]._id,
                  description:
                    'Organic raw chickpeas',
                  image: 'chickpea.jpg',
                  price: 5.99,
                  quantity: 300
                },
                {
                  name: 'Black Beans',
                  category: categories[6]._id,
                  description:
                    'Organic Black Beans',
                  image: 'black-bean.jpg',
                  price: 5.99,
                  quantity: 100
                },
                {
                  name: 'Cannellini Beans',
                  category: categories[6]._id,
                  description:
                    'Organic Cannellini Beans',
                  image: 'white-bean.jpg',
                  price: 5.99,
                  quantity: 100
                }
                
  ]);

  console.log('products seeded');

  await User.deleteMany();

  await User.create({
    firstName: 'john',
    lastName: 'doe',
    email: 'johndoe@gmail.com',
    password: 'password',
    orders: []
  });

 
  console.log('users seeded');

  process.exit();
});
