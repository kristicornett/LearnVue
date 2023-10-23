const app = Vue.createApp({
    data(){
        return{
            cart: 0,
            product: 'Socks',
            description: 'The most comfy socks on the planet.',
            selectedVariant: 0,
            url: 'https://www.fridaysocks.com/blogs/news/the-ultimate-guide-to-womens-socks',
            brand: 'Vue Mastery',
            onSale: true,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
                { id: 2234, color: 'green', image: './assets/images/socks_green.jpg', quantity: 50 },
                { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 0 }
            ],
            sizes: [ 'xs', 'small', 'medium', 'large', 'x-large']
        }
        },
        methods: {
            addToCart(){
                this.cart += 1
            },

            updateVariant(index){
                this.selectedVariant = index
                
            },

            removeFromCart(){
                this.cart -= 1
            }
        },
        computed: {
            title() {
                return this.brand + ' ' + this.product
            },
            image(){
                return this.variants[this.selectedVariant].image
            },
            inStock() {
                return this.variants[this.selectedVariant].quantity
            },
            sale(){
                if (this.onSale)
                {
                return this.brand + ' ' + this.product + 'is on sale!' 
                }
                return ''
            }  
        }
    }
)



