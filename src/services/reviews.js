import { apiFetch } from './api';

const REVIEWS_API = process.env.REACT_APP_REVIEWS_URL || 'http://localhost:8072/reviewservice/api/v1';

export const getProductReviews = async (productId, params = {}) => {
    const queryParams = new URLSearchParams(params).toString();
    return apiFetch(`${REVIEWS_API}/reviews/product/${productId}${queryParams ? `?${queryParams}` : ''}`);
};

export const getProductRating = async (productId) => {
    return apiFetch(`${REVIEWS_API}/reviews/product/${productId}/rating`);
};

export const postReview = async (productId, reviewData, token) => {
    return apiFetch(`${REVIEWS_API}/reviews`, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({
            productId,
            ...reviewData,
        }),
    });
};

export const updateReview = async (reviewId, reviewData) => {
    return apiFetch(`${REVIEWS_API}/reviews/${reviewId}`, {
        method: 'PUT',
        body: JSON.stringify(reviewData),
    });
};

export const deleteReview = async (reviewId) => {
    return apiFetch(`${REVIEWS_API}/reviews/${reviewId}`, {
        method: 'DELETE',
    });
};