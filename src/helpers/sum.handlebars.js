module.exports.sum = (a, b) => a + b;

module.exports.sort = (column, sort) => {
    const types = {
        asc: "oi oi-sort-ascending",
        desc: "oi oi-sort-descending",
        default: "oi oi-elevator"
    }

    let ret = {
        icon: types.default,
        link: "?sort&column=" + column + "&type=asc",
    }
    if(column === sort.column) {
        switch(sort.type) {
            case 'asc':
                ret.icon = types.asc;
                ret.link = "?sort&column=" + column + "&type=desc";
                break;
            case 'desc':
                ret.icon = types.desc;
                ret.link = "?sort&column=" + column + "&type=asc";
                break;
            case 'default':
                ret.icon = types.default;
                ret.link = "?sort&column=" + column + "&type=asc";
                break;
        }
    }

    return `<a href="${ret.link}"><span class="${ret.icon}"></span></a>`;
}