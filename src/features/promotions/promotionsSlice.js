import { PROMOTIONS } from '../../App/shared/PROMOTIONS';

export const selectFeaturedPromotion = () => {
    return PROMOTIONS.find(promotion => promotion.featured);
};