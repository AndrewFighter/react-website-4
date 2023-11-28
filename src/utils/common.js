export const shuffle = (arr) => [...arr].sort(() => 0.5 - Math.random);

export const Build_Url = (url, params) => {
    let urlWithParams = url;
    Object.entries(params).forEach(([key, value], i) => {
        let sign = !i ? '?' : '&';
        urlWithParams += `${sign}${key}=${value}`
    })

    return urlWithParams;
}

export const sumBy = (arr) => {
    return arr.reduce((prev, curr) => {
        return prev + curr
    }, 0)
}

