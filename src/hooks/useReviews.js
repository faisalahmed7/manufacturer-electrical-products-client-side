import { useEffect, useState } from "react";


const useReviews = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        const url = 'http://localhost:5000/review'
        fetch(url)
            .then(res => res.json())
            .then(data => setReviews(data))

    }, [])

    return [reviews, setReviews]
};

export default useReviews;