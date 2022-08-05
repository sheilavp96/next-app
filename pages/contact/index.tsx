import Link from "next/link";
import MainLayout from "../../components/layouts/MainLayout";

const contact = () => {
  return (
    <MainLayout>
      {/* estilos globales se le aplican, en este caso se puede poner entre comillas  */}
      <main className={"main"}>
        <h1>Contact page</h1>

        <h1 className="title">
          Ir al <Link href="/">Home</Link>
        </h1>
      </main>
    </MainLayout>
  );
};

export default contact;
