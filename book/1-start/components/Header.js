import Link from 'next/link';

const Header = () => (
  <div>
    {/* Static code only, no data to wait for */}
    <Link prefetch href="/login">
      <a style={{ margin: '0px 20px 0px auto' }}>Log in</a>
    </Link>
  </div>
);

export default Header;
