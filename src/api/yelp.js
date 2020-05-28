import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer HO036aiEWEnDp5KxTBInv-In-pu8RNAJbmwcfTYGKsxRVWy6KkN0abO0fqTLxqeAb-T1x0H78eb7SHmD1PPutmzSRud82uQrswxzQYrFnal7iX0uZr1MtD5J_OrFXnYx'
    }
})