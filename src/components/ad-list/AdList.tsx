import React from 'react';
import { AdsDTO } from '../../types/AdsDTO';
import ProductCard from '../product-card';

const AdList = ({ dataList }: any) => dataList.map((item: AdsDTO) => <ProductCard {...item} key={item.id} />);

export default AdList;
