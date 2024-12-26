export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section>
      <h2>Inner layout</h2>
      {children}
    </section>
  );
}
