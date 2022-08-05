import * as React from "react";
import { CSSProperties, FC } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Interface } from "readline";

//style lo ponemos fuera del componente para que no se renderize cada que se renderiza el componente
const style: CSSProperties = {
  color: "#0070f3",
  textDecoration: "underline",
};

interface Props {
  text: string;
  href: string;
}
export const ActiveLink: FC<Props> = ({ text, href }) => {
  //utilizamos un hook de next que es el useRouter, esto para poder aplicar el active link
  const { asPath } = useRouter();
  return (
    <Link href={href}>
      <a style={asPath == href ? style : undefined}>{text}</a>
    </Link>
  );
};
