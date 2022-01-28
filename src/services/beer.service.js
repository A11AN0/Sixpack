export const getBeers = async(filter)=>{
    if(filter === 'none') return await ((await fetch('https://api.punkapi.com/v2/beers?page=1&per_page=80')).json())
    if(filter === 'abv') return await (( await fetch('https://api.punkapi.com/v2/beers?abv_gt=6')).json())
    if(filter === 'classic') return await ((await fetch('https://api.punkapi.com/v2/beers?brewed_before=01-2010')).json())
    if(filter === 'acidity') return await (await ((await fetch('https://api.punkapi.com/v2/beers?page=1&per_page=80')).json())).filter((beer)=>beer.ph < 4)
}