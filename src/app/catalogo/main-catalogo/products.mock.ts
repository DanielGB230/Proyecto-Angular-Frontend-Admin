export const productsList:Product[] =[
    {id: 1, category: 'Computadora' , brand:'AMD', price: 2200, description: 'RX 6400 4GB RYZEN 5 5600G 8GB RAM',  imgUrl: 'https://velocitymicro.com/img/PC/SX3/500/SX3_reverse_500.png'},
    {id: 2, category: 'Computadora' ,brand:'Intel', price: 4690, description: 'I7 10700T 2.00 GHZ, RAM 16GB', imgUrl: 'https://velocitymicro.com/img/PC/SX3/1000/SX3_angle_1000_v2.png'},
    {id: 3, category: 'Computadora' ,brand:'Intel', price: 3740, description: 'I5-10210U 24" 1TB HDD 8GB RAM', imgUrl: 'https://velocitymicro.com/img/category-thumbnails/nx2-category-thumbnail.png'},
    {id: 4, category: 'Computadora' ,brand:'AMD', price: 1098, description: 'ATHLON 3000G 8GB 480GB SSD', imgUrl: 'https://velocitymicro.com/img/category-thumbnails/mx5-category-thumbnail.png'},
]

export interface Product{
    id: number | string;
    category: string;
    brand: string;
    price: number;
    description?: string;
    imgUrl: string;
}