
type ExtractObj<T> =  {[K in keyof T]: T[K]}


export const deepMergeOptions= <B extends ExtractObj<B>, O extends ExtractObj<O>>(base: B, options: O) =>{
    const result: any = {};
    for(let key in base){
        //ignor components
        if(key == 'components'){
            continue;
        }
        result[key] = typeof base[key] === 'object' && typeof options[key] === 'object'? 
                deepMergeOptions(base[key], options[key])
                : options.hasOwnProperty(key)? options[key]: base[key];

    }
    return result as B & O;

}