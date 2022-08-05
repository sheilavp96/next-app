import MainLayout from "../components/layouts/MainLayout";
import Link from "next/link";

//LO QUE SE CREE DENTRO DE PAGES TERMINA SIENDO UNA RUTA DE NAVEGACIÓN
export default function HomePage() {
  return (
    <MainLayout>
      <main className={"main"}>
        <h1>Home page</h1>
        <h1 className={"title"}>
          Ir al <Link href="/about">about!</Link>
        </h1>
      </main>
    </MainLayout>
  );
}

// echo "# next-app" >> README.md
// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/sheilavp96/next-app.git
// git push -u origin main

// git remote add origin https://github.com/sheilavp96/next-app.git
// git branch -M main
// git push -u origin main
