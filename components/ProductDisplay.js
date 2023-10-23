app.component('product-display', {
    props: {
        premium: {
            type: Boolean,
            required: true
        }
    },
    template: 
   /*html*/ 
    ` <div class="product-display">
    <div class="product-container">
      <h1>{{ title }}</h1>
      <p v-if="inStock > 10">In Stock</p>
      <p v-else-if="inStock <= 10 && inStock > 0">Almost sold out</p>
      <!--v-show for toggle elements visibilty-->
      <p v-else="inStock == 0">Out of Stock</p>
      <p>Shipping: {{ shipping }} </p>
      <div>
      <p> {{ sale }}</p>
    </div>
    <div class="product-image">
      <!--v-bind: shorthand is just :-->
      <a :href="url">
        <img :class="{ 'out-of-stock-img' : !inStock }" :src="image">
    </a>

    </div>
    <ul>
      <li v-for="detail in details">{{ detail }}</li>
    </ul>
    <ul>
      <li v-for="size in sizes">{{ size}}</li>
    </ul>
    <!--on the style binding {} equals JavaScript for this reason the backgroundColor is in camel case @-->
    <div v-for="(variant, index) in variants" :key="variant.id" @mouseover="updateVariant(index)" class="color-circle" :style="{ backgroundColor: variant.color }">{{ variant.color }}</div>
    <!--v-on: shorthand is @-->
     <button class="button" :class="{ disabledButton: !inStock }" :disabled="!inStock" @click="addToCart">Add to Cart</button>
     <button class="button" @click="removeFromCart">Remove from Cart</button>
     </div> 
  <p>{{ description }}</p>
    </div>`,
    data(){
        return{
            
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
                return this.brand + ' ' + this.product + ' are on sale!' 
                }
                return ''
            },
            shipping(){
                if (this.premium){
                    return 'Free'
                }

                return '$2.99'
            }
        }
})

