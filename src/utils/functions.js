export function textSclicer(text,maxLength=70){
    if(text.length>= maxLength)
        return `${text.slice(0,maxLength)}`
    
    else
        return text
    
}