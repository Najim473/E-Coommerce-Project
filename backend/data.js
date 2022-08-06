import bcrypt from 'bcryptjs';
const data = {
    users: [
        {
            name: 'Najim',
            email: 'admin@example.com',
            password: bcrypt.hashSync('123456'),
            isAdmin: true
        },
        {
            name: 'uddin',
            email: 'najim7305@gmail.com',
            password: bcrypt.hashSync('123456'),
            isAdmin: false
        }
    ],
    products: [
        {
            // _id: '1',
            name: 'Slim Shirt',
            slug: 'Slim-Shirt',
            category: 'Shirts',
            image: '/assets/ProductImg/femaleTshirt01.jpg',
            price: 120,
            countInStock: 10,
            brand: 'N/D',
            rating: 4.5,
            numReviews: 10,
            description: 'High Quality Shirt '
        }
        ,
        {
            // _id: '2',
            name: 'Shirt',
            slug: 'T-Shirt',
            category: 'T-Shirts',
            image: '/assets/ProductImg/femaleTshirt03.jpg',
            price: 220,
            countInStock: 0,
            brand: 'N/D',
            rating: 4.2,
            numReviews: 13,
            description: 'High Quality T-Shirt '
        },
        {
            // _id: '1',
            name: 'Slim Shirt 02',
            slug: 'Slim-Shirt 02',
            category: 'Shirts',
            image: '/assets/ProductImg/femaleTshirt01.jpg',
            price: 120,
            countInStock: 10,
            brand: 'N/D',
            rating: 4.5,
            numReviews: 10,
            description: 'High Quality Shirt '
        }
        ,
        {
            // _id: '2',
            name: 'Shirt 02 ',
            slug: 'T-Shirt 02',
            category: 'T-Shirts',
            image: '/assets/ProductImg/femaleTshirt03.jpg',
            price: 220,
            countInStock: 10,
            brand: 'N/D',
            rating: 4.2,
            numReviews: 13,
            description: 'High Quality T-Shirt '
        },
    ]
}
export default data;
