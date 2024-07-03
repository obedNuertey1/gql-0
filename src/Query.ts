export const Query = {
    hello: ()=>("Hello World!"),
    products: (_:any, {filter}:any, {db}:any)=>{
        let filteredProducts = db.products;
        if(filter){
            if(filter.onSale === true){
                filteredProducts = filteredProducts.filter((product:any)=> product.onSale);
            }else if(filter.onSale === false){
                filteredProducts = filteredProducts.filter((product:any)=> product.onSale === false);
            }
            const {avgRating} = filter;
            if ([1, 2, 3, 4, 5].includes(avgRating)) {
                filteredProducts = filteredProducts.filter((product:any) => {
                  let sumRating = 0;
                  let numberOfReviews = 0;
                  db.reviews.forEach((review:any) => {
                    if (review.productId === product.id) {
                      sumRating += review.rating;
                      numberOfReviews++;
                    }
                  });
                  const avgProductRating = sumRating / numberOfReviews;
        
                  return avgProductRating >= avgRating;
                });
              }
        }
        return filteredProducts;
    },
    product: (/*Takes three parameters: parent, args, context*/_:any, {id}:any, {db}:any)=>{
        return db.products.find((product:any)=>(product.id == id))
    },
    categories: (_:any, __:any, {db}:any)=>(db.categories),
    category: (_:any, {id}:any, {db}:any)=>{
        return db.categories.find((category)=>(category.id == id))
    },
    review: (_:any, {productId}:any, {db}:any)=>{
      return db.reviews.filter((review:any)=>review.productId == productId);
    },
    reviewWithId: (_:any, {id}:any, {db}:any) => {
      return db.reviews.find((review:any)=>review.id == id);
    }
}
