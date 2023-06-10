import React from "react"

export const GetUserSort = (users, sort) => {
    const sortingUser = React.useMemo(() => {
        if (sort){
            return [...users.sort((a, b) => a[sort].localeCompare(b[sort]))]
        }
        return users

    }, [users, sort])
    return sortingUser
}


const SortAndSearch = (users, sort, query) => {
    const userSorting = GetUserSort(users, sort)
    const sortAndSearch = React.useMemo(() => {
        return userSorting.filter(title => title.first_name.toLowerCase().includes(query.toLowerCase()))
    }, [userSorting, query])
    return sortAndSearch
}

export default SortAndSearch