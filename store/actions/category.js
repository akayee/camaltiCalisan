export const CATEGORY_CHANGE = 'CATEGORY_CHANGE';

export const categoryChange = (categoryId) => {
    return {
        type: CATEGORY_CHANGE,
        categoryData: { id:categoryId }
    };
};