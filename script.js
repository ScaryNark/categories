// const data = {
//     burgers: [
//         {
//             name: 'super burger',
//             img: 'https://ichef.bbci.co.uk/food/ic/food_16x9_832/recipes/black_and_blue_burger_95881_16x9.jpg',
//             price:100,
//             category:'burgers'
//         },
//         {
//             name: 'pro burger',
//             img: 'https://images.immediate.co.uk/production/volatile/sites/30/2013/05/Cheeseburger-3d7c922.jpg',
//             price:150,
//             category:'burgers'
//         },
//         {
//             name: 'extra burger',
//             img: 'https://mcdonalds.com.au/sites/mcdonalds.com.au/files/MCD_Category_Burgers_375x268.png',
//             price:180,
//             category:'burgers'
//         },
//     ],
//     pizzas: [
//         {
//             name: 'italian pizza',
//             img: 'https://media-cdn.tripadvisor.com/media/photo-s/1a/7b/99/6f/pizzas-de-ate-40cm-com.jpg',
//             price:300,
//             category:'pizzas'
//         },
//         {
//             name: 'meat pizza',
//             img: 'https://media-cdn.tripadvisor.com/media/photo-s/1d/74/13/63/pizzas-garage-medellin.jpg',
//             price:400,
//             category:'pizzas'
//         },

//     ],
//     drinks: [
//         {
//             name: 'pivo',
//             img: 'https://media-cdn.tripadvisor.com/media/photo-s/11/b9/6d/b0/nase-rezane-pivo.jpg',
//             price:500,
//             category:'drinks'
//         },
//         {
//             name: 'vino',
//             img: 'https://www.tastingtable.com/img/gallery/the-best-way-to-drink-chilled-red-wine/l-intro-1660412521.jpg',
//             price:1000,
//             category:'drinks'
//         },
//         {
//             name: 'vodka',
//             img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4zJnVB3ClNwB4qV_mSiepqNfI6eQaidjLyw&usqp=CAU',
//             price:2000,
//             category:'drinks'
//         },
//         {
//             name: 'tequila',
//             img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_FnYASy60LXK2iwxu01N6oBpKKEwJ4d6DKg&usqp=CAU',
//             price:3000,
//             category:'drinks'
//         },
//     ]
// }

// const { burgers, pizzas, drinks } = data

// const all = [...burgers, ...pizzas, ...drinks]

// const categoriesRender = (data) => {
//     const output = document.querySelector('.output')
//     output.innerHTML = ''

//     data.forEach(el => {
//         const image = document.createElement('img')
//         const name = document.createElement('p')
//         const price = document.createElement('p')
//         const categories = document.createElement('p')
//         const wrap = document.createElement('div')

//         wrap.className = 'wrap'

//         name.textContent = el.name
//         price.textContent = el.price
//         categories.textContent = el.category
//         image.src = el.img

//         wrap.append(categories, image, name, price)
//         output.append(wrap)
//     })

// }
// categoriesRender(all)

// const categoriesChoiseData = [
//     {
//         title: 'all',
//         dataForRender: all
//     },
//     {
//         title: 'burgers',
//         dataForRender: burgers
//     },
//     {
//         title: 'pizzas',
//         dataForRender: pizzas
//     },
//     {
//         title: 'drinks',
//         dataForRender: drinks
//     },

// ]


// categoriesChoiseData.forEach(el=>{
//     const categories = document.querySelector('.categories__choise')
//     const button = document.createElement('button')

//     button.className = 'color'
//     button.textContent = el.title

//     categories.append(button)

//     button.addEventListener('click', () => {
//         categoriesRender(el.dataForRender)
//     })
// })

// const color = document.querySelectorAll('.color')
// color[0].classList.add('colorDel')
// color[0].disabled = true

// for(let i = 0; i<color.length; i++){

//     color[i].addEventListener('click', () => {
//         color.forEach((el, index)=>{
//             if(i === index){
//                 // el.classList.add('colorClick')
//                 el.classList.add('colorDel')

//                 el.disabled = true
//             }else{
//                 // el.classList.remove('colorClick')
//                 el.classList.remove('colorDel')
//                 el.disabled = false
//             }
//         })
//     })
// }




const dataAlt = [

    {
        name: 'super burger',
        img: 'https://ichef.bbci.co.uk/food/ic/food_16x9_832/recipes/black_and_blue_burger_95881_16x9.jpg',
        price: 100,
        category: 'burgers'
    },
    {
        name: 'pro burger',
        img: 'https://images.immediate.co.uk/production/volatile/sites/30/2013/05/Cheeseburger-3d7c922.jpg',
        price: 150,
        category: 'burgers'
    },
    {
        name: 'extra burger',
        img: 'https://mcdonalds.com.au/sites/mcdonalds.com.au/files/MCD_Category_Burgers_375x268.png',
        price: 180,
        category: 'burgers'
    },
    {
        name: 'italian pizza',
        img: 'https://media-cdn.tripadvisor.com/media/photo-s/1a/7b/99/6f/pizzas-de-ate-40cm-com.jpg',
        price: 300,
        category: 'pizzas'
    },
    {
        name: 'meat pizza',
        img: 'https://media-cdn.tripadvisor.com/media/photo-s/1d/74/13/63/pizzas-garage-medellin.jpg',
        price: 400,
        category: 'pizzas'
    },
    {
        name: 'pivo',
        img: 'https://media-cdn.tripadvisor.com/media/photo-s/11/b9/6d/b0/nase-rezane-pivo.jpg',
        price: 500,
        category: 'drinks'
    },
    {
        name: 'vino',
        img: 'https://www.tastingtable.com/img/gallery/the-best-way-to-drink-chilled-red-wine/l-intro-1660412521.jpg',
        price: 1000,
        category: 'drinks'
    },
    {
        name: 'vodka',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4zJnVB3ClNwB4qV_mSiepqNfI6eQaidjLyw&usqp=CAU',
        price: 2000,
        category: 'drinks'
    },
    {
        name: 'tequila',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_FnYASy60LXK2iwxu01N6oBpKKEwJ4d6DKg&usqp=CAU',
        price: 3000,
        category: 'drinks'
    },
]




const output = document.querySelector('.output')


const categoriesRender = (data) => {
    output.innerHTML = ''

    data.forEach(el => {
        const image = document.createElement('img')
        const name = document.createElement('p')
        const price = document.createElement('p')
        const categories = document.createElement('p')
        const wrap = document.createElement('div')
        
        const info = document.createElement('button')

        wrap.className = 'wrap'
        info.className = 'info'
        name.className = 'show'
        price.className = 'show'

        name.textContent = el.name
        price.textContent = el.price
        categories.textContent = el.category
        image.src = el.img
        info.textContent = 'info'

        info.addEventListener('click', () =>{
            name.classList.toggle('show')
            price.classList.toggle('show')
        })
        
        wrap.append(categories, image, info,name, price)
        output.append(wrap)

    })
    

}
categoriesRender(dataAlt)


const renderButtons = () => {
    const categoryItems = ['all', 'burgers', 'pizzas', 'drinks']
    const buttonWrap = document.querySelector('.categories__choise')

    categoryItems.forEach(el => {
        const button = document.createElement('button')
        button.className = 'btns'
        button.textContent = el

        button.addEventListener('click', () => {
            if (el === 'all') {
                categoriesRender(dataAlt)
            } else {
                const result = dataAlt.filter(item => {
                    return item.category === el
                })
                categoriesRender(result)
            }
        })

        buttonWrap.append(button)
    })

}
renderButtons()


const searchItems = () => {
    const input = document.querySelector('#search')
    const form = document.querySelector('#form')

    form.addEventListener('submit', (e) => {
        e.preventDefault()
        const filteredItems = dataAlt.filter(el => {
            return el.name.toLowerCase().includes(input.value.toLowerCase())
        })
        if (filteredItems.length > 0) {
            categoriesRender(filteredItems)
        }else{
            output.textContent = 'Таких товаров нет!'
        }
        
    })
}
searchItems()