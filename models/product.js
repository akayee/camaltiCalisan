class Product {

    constructor(id, ownerId, title, imageUrl, description, price ,catId) {
        this.id = id;
        this.ownerId = ownerId;
        this.imageUrl = imageUrl;
        this.title = title;
        this.description = description;
        this.price = price;
        this.catId=catId

    }
}

export default Product;