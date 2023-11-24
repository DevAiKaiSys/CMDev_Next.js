import React from 'react';

type Props = {};

export default async function AboutUs({}: Props) {
  await new Promise((resolve, reject) => {
    setTimeout(resolve, 3000);
  });
  return <div>AboutUs</div>;
}
