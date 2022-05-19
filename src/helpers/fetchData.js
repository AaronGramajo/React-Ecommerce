const productos = [{
        id: '1',
        title: 'procesador Ryzen 7',
        categoria: 'Procesadores',
        price: 7000,
        description:'El AMD Ryzen™ 7 5800X3D es el primer procesador de escritorio con caché L3 apilada que ofrece unos inigualables 96 MB de caché L3 emparejados con núcleos increíblemente rápidos para crear el procesador de escritorio para juegos más rápido del mundo',
        foto: '../../FotoDeProducto/ryzen_7_3000x.jpg'
    },
    {
        id: '2',
        title: 'procesador Ryzen 7',
        categoria: 'Procesadores',
        price: 14000,
        description:'El AMD Ryzen™ 7 5800X3D es el primer procesador de escritorio con caché L3 apilada que ofrece unos inigualables 96 MB de caché L3 emparejados con núcleos increíblemente rápidos para crear el procesador de escritorio para juegos más rápido del mundo',
        foto: '../../FotoDeProducto/ryzen_7_3000x.jpg'
    },
    {
        id: '3',
        title: 'procesador Ryzen 7',
        categoria: 'Procesadores',
        price: 28000,
        description:'El AMD Ryzen™ 7 5800X3D es el primer procesador de escritorio con caché L3 apilada que ofrece unos inigualables 96 MB de caché L3 emparejados con núcleos increíblemente rápidos para crear el procesador de escritorio para juegos más rápido del mundo',
        foto: '../../FotoDeProducto/ryzen_7_3000x.jpg'
    },
    {
        id: '4',
        title: 'MotherBoard AMD',
        categoria: 'MotherBoards',
        price: 15000,
        description:'Tarjeta madre para juegos AMD X570 ATX con PCIe 4.0, 2.5 Gbps e Intel Gigabit LAN, Wi-Fi 6',
        foto: '../../FotoDeProducto/asus-am4-rog-strix-x570f.jpg'
    },
    {
        id: '5',
        title: 'MotherBoard AMD',
        categoria: 'MotherBoards',
        price: 20000,
        description:'Tarjeta madre para juegos AMD X570 ATX con PCIe 4.0, 2.5 Gbps e Intel Gigabit LAN, Wi-Fi 6',
        foto: '../../FotoDeProducto/asus-am4-rog-strix-x570f.jpg'
    },
    {
        id: '6',
        title: 'MotherBoard AMD',
        categoria: 'MotherBoards',
        price: 30000,
        description:'Tarjeta madre para juegos AMD X570 ATX con PCIe 4.0, 2.5 Gbps e Intel Gigabit LAN, Wi-Fi 6',
        foto: '../../FotoDeProducto/asus-am4-rog-strix-x570f.jpg'
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