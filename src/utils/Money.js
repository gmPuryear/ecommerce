export const convertToUSDFormat = (price) => {
    return (price).toLocaleString(
        "en-US",
        {
            style: "currency",
            currency: "usd"
        }
    )
}