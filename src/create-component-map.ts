

/**
 * Create a map of component from components 
 * imported from a folder
 * @param components 
 * 
 * @example 
 * import * as components fron './components'
 * createPlugin({
 *  components: createComponentMap(components)
 * })
 * @returns 
 */
export const createComponentMap = (components: any)=>{

    const comps: any = {};
    for(let i in components){
        //@ts-ignore
        let item = components[i];
        if(item.setup){
            comps[i] = item;
        }
        //add named mdules
        for(let key in item){
            const mod = item[key];
            if(mod.setup){
                comps[key] = mod;
            }
        }
    }
    return comps;
}