

export default (state) => {
    // do your calculations here...
    const { daily } = state;

    const dailyLength = daily && daily.length || 0;

    return Promise.resolve({
        dailyLength,
        calculated: true
    })
}