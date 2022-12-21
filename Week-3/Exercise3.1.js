function memoize(fn){
    const hmap = new Map();
    return function(...args){
        const key = args.toString();
        if (hmap.has(key)){
            return hmap.get(key)
        }
        hmap.set(key, fn(...args));
        return hmap.get(key)
    }
}
