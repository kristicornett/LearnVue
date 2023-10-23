const app = Vue.createApp({
    data(){
        return{
            cart: 0,
            product: 'Socks',
            description: 'The most comfy socks on the planet.',
            image: './assets/images/socks_green.jpg',
            url: 'https://www.fridaysocks.com/blogs/news/the-ultimate-guide-to-womens-socks',
            inventory: 10,
            onSale: false,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
                { id: 2234, color: 'green', image: './assets/images/socks_green.jpg' },
                { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg' }
            ],
            sizes: [ 'xs', 'small', 'medium', 'large', 'x-large']
        }
        },
        methods: {
            addToCart(){
                this.cart += 1
            },

            updateImage(variantImage){
                this.image = variantImage
            },

            removeFromCart(){
                this.cart -= 1
            }
        }
    }
)



