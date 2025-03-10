import mongoose from "mongoose";

const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Product name is required']
    },
    description: {
        type: String,
        required: [true, 'Product description is required']
    },
    price: {
        type: Number,
        required: [true, 'Product price is required'],
        min: [0, 'Price cannot be less than 0']
    },
    productType: {
        type: String,
        enum: ["family", "couple", "wedding", "male", "female", "children"],
        required: [true, 'Product type is required']
    },
    images: {
        type: [String],
        required: [true, 'At least one image is required']
    }
}, {
    timestamps: true
});

const Product = mongoose.model('Product', productSchema);

export default Product;
