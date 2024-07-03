export const Category={
    products: ({id:categoryId, filter}:any, _:any, {db}:any)=>{
        const categoryProducts = db.products.filter(
            (product:any) => product.categoryId === categoryId
          );
          let filteredCategoryProducts = categoryProducts;
      
          if (filter) {
            if (filter.onSale === true) {
              filteredCategoryProducts = filteredCategoryProducts.filter(
                (product:any) => {
                  return product.onSale;
                }
              );
            }
            let {avgRating} = filter;
            if([1, 2, 3, 4, 5].includes(avgRating)){
                filteredCategoryProducts = filteredCategoryProducts.filter((product:any)=>{
                    let sumRating = 0;
                    let numberOfReviews = 0;
                    db.reviews.forEach((review:any)=>{
                        if(review.productId === product.id){
                            sumRating += review.rating;
                            numberOfReviews++;
                        }
                    });
                    const avgProductRating = sumRating / numberOfReviews;

                    return avgProductRating >= avgRating;
                });
            }
          }
          return filteredCategoryProducts;
    }
}