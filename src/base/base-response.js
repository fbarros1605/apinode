function response(data, status, page, page_count, items_per_page, count) {
    return {
        _page: page,
        _page_count: page_count,
        _items_per_page: items_per_page,
        _count: count,
        _data: data,
        _status: status,
    }
}

module.exports = response;