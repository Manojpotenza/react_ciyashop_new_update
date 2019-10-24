import ProductsList from '../api/product.json';

export const  fetchProducts = (product, times) => (
     setTimeout(() => product(ProductsList), times || 150)
)

export const getProductsBegin = () => ({
    type: "GET_PRODUCTS_VALUE"
});


export const getProducts = products => ({
    type: "ACTUAL_PRODUCTS",
    products
})

export const ProductsData = () => dispatch => {
    dispatch(getProductsBegin());
    fetchProducts(products => {
        dispatch(getProducts(products));
        return products;
    })
}