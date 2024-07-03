export const Mutation = {
    addCategory: (_:any, {input}:any, {db, randomUID}:any)=>{
        const {name} = input
        console.log(randomUID());
        const newCategory = {
            id: `${randomUID()}`,
            name: name
        }
        db.categories.push(newCategory);
        return newCategory;
    },
    addProduct: (_:any, {input}:any, {randomUID, db}:any)=>{
        const {name, description, quantity, image, price, onSale, categoryName} = input;
        const category = db.categories.find((elem:any)=> (elem.name)?.toLowerCase() === categoryName.toLowerCase())
        if(category){
            const newProduct = {
                id: randomUID(),
                name,
                description,
                quantity,
                image,
                price,
                onSale,
                category
            }

            db.products.push(newProduct);
            return newProduct;
        }
        return null;
    },
    addReview: (_:any, {input}:any, {products, randomUID, reviews}:any)=>{
        const {title, comment, rating, productId} = input;
        const product = products.find((elem:any)=> elem.id === productId);
        if(product && (rating > 0 && rating <= 5)){
            let currentDate = new Date().toISOString();
            let dateRegex = /\d{4}\-\d{2}\-\d{2}/ig;
            let fullDate = currentDate.match(dateRegex)[0];
            const newReview = {
                id: randomUID(),
                title,
                comment,
                rating,
                productId,
                date: fullDate
            }
            reviews.push(newReview);
            return newReview;
        }
    },
    deleteCategory: (_:any, {id}:any, {db})=>{
        const foundCategories = db.categories.find((elem:any)=>elem.id === id);
        db.categories = db.categories.filter((category:any) => category.id !== id);
        if(foundCategories){
            db.products = db.prodcuts.map((product:any) => {
                if(product.categoryId === id){
                    return {
                        ...product,
                        categoryId: null
                    }
                }
                return product;
            })
            return true;
        }
        return false;
    },
    deleteProduct: (_:any, {id}:any, {db}:any)=>{
        const foundProduct = db.products.find((product:any)=>(product.id == id));
        if(foundProduct){
            db.products = db.products.filter((product:any)=>product.id !== id);
            db.reviews = db.reviews.filter((review:any)=>review.productId !== review.productId);
            return true
        }
        return false;
    },
    deleteReview: (_:any, {id}:any, {db}:any)=>{
        const foundReview = db.reviews.find((review:any)=> review.id === id);
        if(foundReview){
            db.reviews = db.reviews.filter((review:any)=>review.id !== id);
            return true
        }
        return false
    },
    updateCategory: (_:any, {id, input}:any, {db}:any)=>{
        // Check whether id is within category
        const foundCategory = db.categories.find((category:any)=>category.id === id);
        if(foundCategory && input){
            const {name} = input;
            db.categories = db.categories.map((category:any)=>{
                if(category.id === id){
                    return {
                        ...category,
                        name:name
                    };
                }
                return category;
            })
            return true
        }
        return false
    },
    updateProduct: (_:any, {id, input}:any, {db}:any)=>{
        const productIndex = db.products.findIndex((product:any)=>product.id == id);
        if(productIndex >= 0 && Boolean(input)){
            db.products[productIndex] = {
                ...db.products[productIndex],
                ...input
            }
            return true;
        }
        return false
    },
    updateReview: (_:any, {id, input}:any, {db}:any)=>{
        const reviewIndex = db.reviews.findIndex((review:any)=>review.id == id);
        if(reviewIndex >= 0 && Boolean(input)){
            let currentDate = new Date().toISOString();
            let dateRegex = /\d{4}\-\d{2}\-\d{2}/ig;
            let fullDate = currentDate.match(dateRegex)[0];
            db.reviews[reviewIndex] = {
                ...db.reviews[reviewIndex],
                date: fullDate,
                ...input
            }
            return true;
        }
        return false;
    }
}