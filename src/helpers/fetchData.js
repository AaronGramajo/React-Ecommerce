const productos = [{
        id: '1',
        title: 'producto 1',
        price: 100,
        description:'El AMD Ryzen™ 7 5800X3D es el primer procesador de escritorio con caché L3 apilada que ofrece unos inigualables 96 MB de caché L3 emparejados con núcleos increíblemente rápidos para crear el procesador de escritorio para juegos más rápido del mundo',
        foto: '../../FotoDeProducto/ryzen_7_3000x.jpg'
    },
    {
        id: '2',
        title: 'producto 2',
        price: 200,
        description:'El AMD Ryzen™ 7 5800X3D es el primer procesador de escritorio con caché L3 apilada que ofrece unos inigualables 96 MB de caché L3 emparejados con núcleos increíblemente rápidos para crear el procesador de escritorio para juegos más rápido del mundo',
        foto: '../../FotoDeProducto/ryzen_7_3000x.jpg'
    },
    {
        id: '3',
        title: 'producto 3',
        price: 300,
        description:'El AMD Ryzen™ 7 5800X3D es el primer procesador de escritorio con caché L3 apilada que ofrece unos inigualables 96 MB de caché L3 emparejados con núcleos increíblemente rápidos para crear el procesador de escritorio para juegos más rápido del mundo',
        foto: '../../FotoDeProducto/ryzen_7_3000x.jpg'
    }
]

export const fetchData = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const filtrar = id ? productos.find(producto => producto.id === id) : productos
            resolve(filtrar)
        }, 2000)
    })
}