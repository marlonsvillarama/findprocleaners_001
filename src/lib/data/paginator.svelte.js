let order = $state('asc');
let page = $state(1);
let slug = $state('');
let sort = $state('name');
let types = $state([]);

// export const paginatorData = $state({
//     order: '',
//     page: 1,
//     slug: '',
//     sort: '',
//     types: []
// });

// export const applyFilters = ({ sort, types }) => {};

// export const gotoPage = ({ page }) => {};

export const createPaginatorData = () => {
    return {
        get order() { return order; },
        get page() { return page; },
        get slug() { return slug; },
        get sort() { return sort; },
        get types() { return types; },

        set order(value) { order = value; },
        set page(value) { page = value; },
        set slug(value) { slug = value; },
        set sort(value) { sort = value; },
        set types(value) { types = value; },

        applyFiltersToUrl() {
            // let sortParts = sort.split('|');
            let url = `/search/${slug}?page=${page}&sort=${sort}`;

            // if (sortParts.length > 1) {
                url = `${url}&order=${order}`;
            // }

            if (this.types.length > 0) {
                url = `${url}&types=${this.types.join(',')}`
            }

            // console.log('applyFilters url', url);
            // window.location = url;
            return url;
        },

        printFilters() {
            console.log('paginator filters', {
                order,
                page,
                slug,
                sort,
                types
            });
        }
    };
}