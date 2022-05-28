import { useEffect, useState } from "react";


const useReviews = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        const url = 'https://obscure-spire-95539.herokuapp.com/review'
        fetch(url)
            .then(res => res.json())
            .then(data => setReviews(data))

    }, [])

    return [reviews, setReviews]
};

export default useReviews;