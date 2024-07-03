export const Review = {
    product: (parent:any, __:any, {db}:any)=>{
        console.log(parent);
        return db.reviews.filter((review:any)=>(review.productId === parent.id))
    }
}