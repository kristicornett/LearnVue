const app = Vue.createApp({
    data(){
        return{
            product: 'Socks',
            description: 'The most comfy socks on the planet.',
            image: './assets/images/socks_green.jpg',
            url: 'https://www.fridaysocks.com/blogs/news/the-ultimate-guide-to-womens-socks',
            inventory: 10,
            onSale: false,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
                { id: 2234, color: 'green' },
                { id: 2235, color: 'blue' }
            ],
            sizes: [ 'xs', 'small', 'medium', 'large', 'x-large']
        }
    }
})
