export function Navigation({ children }: { children?: React.ReactNode }) {
  return (
    <nav className="mt-10 mb-24 z-20 relative w-full">
      <ul className="flex flex-row justify-center items-center dark:animate-dark-fade-in">
        {children}
      </ul>
    </nav>
  );
}
