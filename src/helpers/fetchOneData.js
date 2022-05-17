// esto es solo para el desafio. usare el fetchData donde ya tengo filtrado los productos con un find.
const unProducto = {
    id: '1',
    title: 'producto 1',
    price: 100,
    description:'El AMD Ryzen™ 7 5800X3D es el primer procesador de escritorio con caché L3 apilada que ofrece unos inigualables 96 MB de caché L3 emparejados con núcleos increíblemente rápidos para crear el procesador de escritorio para juegos más rápido del mundo',
    foto: '../../FotoDeProducto/ryzen_7_3000x.jpg'
}

export const fetchOneData = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(unProducto)
        }, 2000)
    })
}