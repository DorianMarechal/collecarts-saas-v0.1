import Link from "next/link";

export default function Home() {
  return (
    <>
      <Link href={"/fr/auth/sign-in"}>Connexion</Link>
      <Link href={"/fr/auth/sign-up"}>Inscription</Link>
    </>
  );
}