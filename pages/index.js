import Link from "next/link";

const Blablabla = () => {
  return (
    <div>
      <Link href="/about">
        <button>About</button>
      </Link>
      <Link href="/contacts">
        <a>Contacts</a>
      </Link>
      <h1>Main Page</h1>
    </div>
  );
};

// ОБЯЗАТЕЛЬНО!!!!! НУЖЕН!!! default!!!
export default Blablabla;
