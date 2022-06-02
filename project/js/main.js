const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

const app = new Vue({
    el: '#app',
    data: {
        catalogUrl: '/catalogData.json',
        products: [],
        imgCatalog: 'https://via.placeholder.com/200x150',
        baket: [],
        searchLine:"",
        isVisibleCart: false,
        isVisibleProduct: true,
    },
    methods: {
        getJson(url) {
            return fetch(url)
                .then(result => result.json())
                .catch(error => {
                    console.log(error);
                })
        },
        addProduct(product) {

            let productBukket = this.baket.find(item => item.id_product == product.id_product);

            if (productBukket === undefined) {
                product.quality = 1;
                this.baket.push(product);
            }
            else {
                product.quality += 1;
            }
            this.$forceUpdate();
        },
        showBaket()
        {
            this.isVisibleCart = !this.isVisibleCart;
        },
        filterGoods(searchLine)
        {
            let patern = searchLine.trim().toLowerCase()
            if (patern)
            {
                this.products.forEach(element => {
                    element.isVisibleProduct = element.product_name.toLowerCase().includes(patern)
                });
            }
            else
            {
                this.products.forEach(element => {
                    element.isVisibleProduct = true;
                });
            }
        },
    },
    created() {
        console.log('created');
        this.getJson(`${API + this.catalogUrl}`)
            .then(data => {
                for (let el of data) {
                    el.isVisibleProduct = true;
                    this.products.push(el);
                }
            });
    },

});
