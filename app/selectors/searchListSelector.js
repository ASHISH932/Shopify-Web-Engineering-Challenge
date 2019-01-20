export default (searchList = [], favourites = []) => {
    return searchList.map(sl => {
        const exist = favourites.find( waste => waste.id === sl.id );
        if(exist) {
            return { ...sl, favourite: true }
        } else {
            return { ...sl, favourite: false }
        }
    })
}