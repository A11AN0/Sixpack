const requestBeers = async (filter) => {
    if (filter === "none")
        return (
            await fetch("https://api.punkapi.com/v2/beers?page=1&per_page=80")
        ).json();
    if (filter === "abv")
        return (
            await fetch("https://api.punkapi.com/v2/beers?abv_gt=6")
        ).json();
    if (filter === "classic")
        return (
            await fetch(
                "https://api.punkapi.com/v2/beers?brewed_before=01-2010",
            )
        ).json();
    if (filter === "acidity")
        return (
            await fetch("https://api.punkapi.com/v2/beers?page=1&per_page=80")
        ).json();
};

export const getBeers = async (filter) => {
    const beerArray = await requestBeers(filter);

    return !filter
        ? await requestBeers("none")
        : filter === "acidity"
        ? await requestBeers("none")
        : beerArray;

    //this could be refactored to
};
