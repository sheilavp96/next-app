import React from "react";
import Link from "next/link";

import MainLayout from "../../components/layouts/MainLayout";
import { ReactElement } from "react";

const pricing = () => {
  return (
    <>
      <h1>Prices page</h1>

      <h1 className="title">
        Ir al <Link href="/">Home</Link>
      </h1>
    </>
  );
};

export default pricing;
pricing.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};
