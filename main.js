const app = Vue.createApp({
    data(){
        return{
            product: 'Socks',
            description: 'The most comfy socks on the planet.',
            image: './assets/images/socks_green.jpg',
            url: 'https://www.fridaysocks.com/blogs/news/the-ultimate-guide-to-womens-socks',
            inStock: false
        }
    }
})
