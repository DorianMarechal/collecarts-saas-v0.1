import { ChangeLocale } from "@/components/change-locale";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <ChangeLocale />
      <Link href={"/fr/auth/sign-in"}>Connexion</Link>
      <Link href={"/fr/auth/sign-up"}>Inscription</Link>
    </>
  );
}