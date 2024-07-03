export const Product = {
    category: ({categoryId}:any, __:any, {db}:any)=>{
        return db.products.find((product)=>product.categoryId === categoryId)
    },
    reviews: ({ id }, _:any, { db }) => {
        return db.reviews.filter((review:any) => review.productId === id);
    }
}