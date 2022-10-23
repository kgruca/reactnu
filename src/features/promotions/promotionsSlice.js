// import { PROMOTIONS } from '../../app/shared/oldData/PROMOTIONS';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { mapImageURL } from '../../utils/mapImageURL';
import { baseUrl } from '../../app/shared/baseUrl';


export const fetchPromotions = createAsyncThunk(
    'promotions/fetchedPromotions',
    async () => {
        const response = await fetch(baseUrl + 'promotions');
        if (!response.ok) {
            return Promise.reject('Unable to fetch, status: ' + response.status);
        }
        const data = await response.json();
        return data;
    }
);

const initialState = {
    promotionsArray: [],
    isLoading: true,
    errMsg: ''
};

const promotionsSlice = createSlice({
    name: 'partners',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchPromotions.pending]: state => {
            state.isLoading = true;
        },
        [fetchPromotions.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.errMsg = '';
            state.promotionsArray = mapImageURL(action.payload);
        },
        [fetchPromotions.rejected]: (state, action) => {
            state.isLoading = false;
            state.errMsg = action.error ? action.error.message : 'Fetch failed';
        }
    }
});

export const promotionsReducer = promotionsSlice.reducer;

export const selectFeaturedPromotion = (state) => {
    return {
        featuredItem: state.promotions.promotionsArray.find(
            promotion => promotion.featured
        ),
        isLoading: state.promotions.isLoading,
        errMsg: state.promotions.errMsg
    };
};