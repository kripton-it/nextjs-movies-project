import Link from "next/link";

const Blablabla = () => {
  return (
    <div>
      <h1>Main Page</h1>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/contacts">
        <a>Contacts</a>
      </Link>
    </div>
  );
};

// ОБЯЗАТЕЛЬНО!!!!! НУЖЕН!!! default!!!
export default Blablabla;
