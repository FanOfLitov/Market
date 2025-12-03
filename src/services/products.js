// Добавьте эту строку В САМОМ НАЧАЛЕ файла:
export const PRODUCTS_API = process.env.REACT_APP_PRODUCTS_URL || 'http://localhost:8072/productservice/api/v1';

// Затем остальные функции:
export const getProductById = async (id) => {
    try {
        const response = await fetch(`${PRODUCTS_API}/products/${id}`);
        if (!response.ok) return null;
        return await response.json();
    } catch {
        return null;
    }
};

export const getProductAttachments = async (id) => {
    try {
        const response = await fetch(`${PRODUCTS_API}/products/${id}/attachments`);
        if (!response.ok) return [];
        return await response.json();
    } catch {
        return [];
    }
};

export const getProducts = async () => {
    try {
        const response = await fetch(`${PRODUCTS_API}/products`);
        if (!response.ok) return [];
        return await response.json();
    } catch {
        return [];
    }
};

export const createProduct = async (productData, token) => {
    try {
        const response = await fetch(`${PRODUCTS_API}/products`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(productData)
        });
        return await response.json();
    } catch {
        return null;
    }
};

export const updateProduct = async (id, productData, token) => {
    try {
        const response = await fetch(`${PRODUCTS_API}/products/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(productData)
        });
        return await response.json();
    } catch {
        return null;
    }
};

export const deleteProduct = async (id, token) => {
    try {
        const response = await fetch(`${PRODUCTS_API}/products/${id}`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        return response.ok;
    } catch {
        return false;
    }
};

export const uploadAttachment = async (productId, file, token) => {
    const formData = new FormData();
    formData.append('file', file);

    try {
        const response = await fetch(`${PRODUCTS_API}/products/${productId}/attachments`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`
            },
            body: formData
        });
        return await response.json();
    } catch {
        return null;
    }
};

export const setMainAttachment = async (productId, attachmentId, token) => {
    try {
        const response = await fetch(`${PRODUCTS_API}/products/${productId}/attachments/${attachmentId}/main`, {
            method: 'PUT',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        return response.ok;
    } catch {
        return false;
    }
};

export const deleteAttachment = async (productId, attachmentId, token) => {
    try {
        const response = await fetch(`${PRODUCTS_API}/products/${productId}/attachments/${attachmentId}`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        return response.ok;
    } catch {
        return false;
    }
};

//import { apiFetch } from './api';
//
//const PRODUCTS_API = process.env.REACT_APP_PRODUCTS_URL || 'http://localhost:8072/productservice/api/v1';
//
//export const getProducts = async (params = {}) => {
//    const queryParams = new URLSearchParams(params).toString();
//    const url = `${PRODUCTS_API}/products${queryParams ? `?${queryParams}` : ''}`;
//    return apiFetch(url);
//};
//
//export const getProductById = async (id) => {
//    return apiFetch(`${PRODUCTS_API}/products/${id}`);
//};
//
//export const createProduct = async (productData) => {
//    return apiFetch(`${PRODUCTS_API}/products`, {
//        method: 'POST',
//        body: JSON.stringify(productData),
//    });
//};
//
//export const updateProduct = async (id, productData) => {
//    return apiFetch(`${PRODUCTS_API}/products/${id}`, {
//        method: 'PATCH',
//        body: JSON.stringify(productData),
//    });
//};
//
//export const deleteProduct = async (id) => {
//    return apiFetch(`${PRODUCTS_API}/products/${id}`, {
//        method: 'DELETE',
//    });
//};
//
//export const getProductAttachments = async (productId) => {
//    return apiFetch(`${PRODUCTS_API}/products/${productId}/attachments`);
//};
//
//export const uploadAttachment = async (productId, file) => {
//    const formData = new FormData();
//    formData.append('file', file);
//
//    const token = localStorage.getItem('jwtToken');
//    const response = await fetch(`${PRODUCTS_API}/products/${productId}/attachments`, {
//        method: 'POST',
//        headers: {
//            'Authorization': `Bearer ${token}`,
//        },
//        body: formData,
//    });
//
//    if (!response.ok) {
//        throw new Error('Upload failed');
//    }
//
//    return response.json();
//};
//
//export const deleteAttachment = async (productId, attachmentId) => {
//    return apiFetch(`${PRODUCTS_API}/products/${productId}/attachments/${attachmentId}`, {
//        method: 'DELETE',
//    });
//};
//
//export const setMainAttachment = async (productId, attachmentId) => {
//    return apiFetch(`${PRODUCTS_API}/products/${productId}/attachments/${attachmentId}/set-main`, {
//        method: 'PATCH',
//    });
//};