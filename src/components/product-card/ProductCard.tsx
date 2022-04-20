import React, { useContext } from 'react';
import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';
import { ProductDTO } from '../../types/ProductDTO';
import 'swiper/swiper.scss';
import 'swiper/modules/navigation/navigation.scss';
import classes from './ProductCard.module.scss';
import iconSafeDeal from '../../assets/icons/iconSafeDeal.svg';
import iconExchange from '../../assets/icons/iconExchange.svg';
import IconLikeHead from '../iconLikeHeart';
import { AdsDTO } from '../../types/AdsDTO';
import AdminApiService from '../../services/AdminApiService';
import ContextCurrentUserRole from '../../app/context/ContextCurrentUserRole';
import ContextRemoveElemFunc from '../../context/ContextRemoveElemFunc';

SwiperCore.use([Navigation]);

const ProductCard:React.FC<ProductDTO | AdsDTO> = ({
  itemName, itemSize, photo, price, likesCount, id,
}) => {
  const api: AdminApiService = new AdminApiService();
  const contextFunc = useContext(ContextRemoveElemFunc);
  const { removeAdsElement } = contextFunc;

  const imageElem = photo && photo.map((item) => (
    <SwiperSlide key={Math.random() * 100}>
      <img className={classes.photoProduct} src={item} alt="product" />
    </SwiperSlide>
  ));

  const currentUserRole = useContext(ContextCurrentUserRole);

  const btnAdmin = currentUserRole === 'admin' && (
  <>
    <button type="button" onClick={() => api.approveAd(id).then(() => removeAdsElement(id))}>Принять</button>
    <button type="button" onClick={() => api.rejectAd(id).then(() => removeAdsElement(id))}>Отклонить</button>
  </>
  );

  return (
    <div className={classes.productCardContainer}>
      <div className={classes.swiperContainer}>
        <Swiper navigation className="mySwiper">
          <IconLikeHead likesCount={likesCount} />
          {imageElem}
        </Swiper>
      </div>
      <div className={classes.productInformation}>
        <div className={classes.informationDeal}>
          <img className={classes.iconSafeDeal} src={iconSafeDeal} alt="iconSafeDeal" />
          <img className={classes.iconExchange} src={iconExchange} alt="iconExchange" />
        </div>
        <div className={classes.productName}>{itemName}</div>
        <div className={classes.productSize}>{itemSize}</div>
        <div className={classes.btn}>
          <button type="button" className={classes.productPrice}>{`${price} руб.`}</button>
          {btnAdmin}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
