import Link from "next/link";

const Navbar = () => {
  const styles = {
    display: 'flex',
    backgroundColor: 'grey',
    padding: '1rem',
    justifyContent: 'space-around'
  };

  return (
    <div style={styles}>
      <Link href="/">
        <a>Main</a>
      </Link>
      <Link href="/about">
        <button>About</button>
      </Link>
      <Link href="/contacts">
        <a>Contacts</a>
      </Link>
    </div>
  );
};

export default Navbar;
