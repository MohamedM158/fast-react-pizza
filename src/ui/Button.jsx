import { Link } from 'react-router-dom';

function Button({ children, disabled, to, type, onClick }) {
  const base =
    'focus:ring-bg-yellow-300 text-sm focus:ring-offset-2 inline-block rounded-full bg-yellow-400 font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 disabled:cursor-not-allowed';
  const styles = {
    primary: base + ' px-4 py-3 md:px-6 md:py-4',
    small: base + ' px-4 py-2 md:px-5 md:py-2.5 text-xsm',
    round: base + ' px-2.5 py-1 md:px-3.5 md:py-2 text-sm rounded-full',
    secondary:
      'focus:bg-stone-300 text-sm px-4 hover:text-stone-800 focus:text-stone-800 py-2.5 md:px-6 md:py-3.5 focus:ring-offset-2 inline-block rounded-full border-2 border-stone-300 font-semibold uppercase tracking-wide text-stone-400 transition-colors duration-300 hover:bg-stone-300 focus:outline-none focus:ring focus:ring-stone-200 disabled:cursor-not-allowed',
  };

  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );

  if (onClick)
    return (
      <button onClick={onClick} disabled={disabled} className={styles[type]}>
        {children}
      </button>
    );

  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}

export default Button;
