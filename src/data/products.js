const dataProduct = [
    {
        id: 1,
        imageUrl: 'https://i.allo.ua/media/catalog/product/cache/1/image/710x600/602f0fa2c1f0d1ba5e241f914e856ff9/x/i/xim5433.jpg',
        name: 'Xiaomi Redmi 9A 2/32GB Peacock Green',
        count: 4,
        size: {
            width: 200,
            height: 200
        },
        price: '2999грн',
        weight: '200g',
        comments: [
            {
                id: 1,
                productId: 1,
                user_name: 'Виктория',
                description: 'Очен классный, мне нравится, все функции работают',
                date: '14:00 22.08.2021'
            },
            {
                id: 2,
                productId: 1,
                user_name: 'олександр',
                description: 'все подобаїться',
                date: '14:00 22.09.2021'
            }
        ]
    },
    {
        id: 2,
        imageUrl: 'https://i.allo.ua/media/catalog/product/cache/1/image/710x600/602f0fa2c1f0d1ba5e241f914e856ff9/j/6/j6b-__1.jpg',
        name: 'Xiaomi Redmi Note 9 Pro 6/128GB Interstellar Grey',
        count: 40,
        size: {
            width: 200,
            height: 200
        },
        price: '6999грн',
        weight: '209g',
        comments: [
            {
                id: 1,
                productId: 2,
                user_name: 'Евгений',
                description: 'после Редми 5плюс, этот просто ураган, камера совсем другого поколения, батарея к концу дня около 60%. несмотря на то что скоро выйдет одинадцатая линейка, я не считаю что девятая сильно устарела, у меня 128/6 вполне послужит года 4 точно',
                date: '11:25 22.08.2021'
            },
            {
                id: 2,
                productId: 2,
                user_name: 'Александр',
                description: 'Отличный телефон за свою цену.',
                date: '17:23 22.01.2021'
            }
        ]
    },
];

export default dataProduct;