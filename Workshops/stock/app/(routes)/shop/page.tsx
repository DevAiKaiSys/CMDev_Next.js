import { ProductData } from '@/models/product.model';
import { ACCESS_TOKEN_KEY } from '@/utils/constant';
import { cookies } from 'next/headers';
import React from 'react';

type Props = {};

export default async function Shop({}: Props) {
  const cookieStore = cookies();
  const token = cookieStore.get(ACCESS_TOKEN_KEY);

  const result = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL_API}/stock/product`,
    {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${token?.value}`,
      },
    }
  );

  // console.log(result);

  const products = (await result.json()) as ProductData[];

  // return <div>Shop</div>;
  return (
    <div>
      {products?.length > 0 &&
        products.map((p) => <div key={p.id}>{p.name}</div>)}
    </div>
  );
}
