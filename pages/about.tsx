import Link from "next/link";
import DarkLayout from "../components/layouts/DarkLayout";
import MainLayout from "../components/layouts/MainLayout";
import { ReactElement } from "react";

const AboutPage = () => {
  return (
    <>
      <h1>About page</h1>

      <h1 className="title">
        Ir al <Link href="/">Home</Link>
      </h1>
    </>
  );
};

export default AboutPage;
AboutPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <MainLayout>
      <DarkLayout>{page}</DarkLayout>
    </MainLayout>
  );
};
