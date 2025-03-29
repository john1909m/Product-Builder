export const productValidation=(product)=>{
    const errors={
        title:"",
        description:"",
        imageURL:"",
        price:''
    }
    const validUrl=/^(ftp|http|https):\/\/[^ "]+$/
    if(!product.title.trim() || product.title<10 ||product.title>80){
        errors.title="Product title must be between 10 and 80 characters"
    }
    if(!product.description.trim() || product.description<10 ||product.description>900){
        errors.description="Product description must be between 10 and 80 characters"
    }
    if(!product.imageURL.trim() || !validUrl){
        errors.imageURL="Valid image Url is required"
    }
    if(!product.price.trim() || isNaN(product.price)){
        errors.price="Product price must be a number"
        errors.price="Valid price is required"
    }
    return errors
}