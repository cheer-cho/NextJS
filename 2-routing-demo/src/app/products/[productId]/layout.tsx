const getRandomInt = (count: number) => {
  return Math.floor(Math.random() * count);
};

export default function Layout({ children }: { children: React.ReactNode }) {
  const random = getRandomInt(2);

  if (random === 1) {
    throw new Error('Error loading product');
  }

  return (
    <section>
      {children}
      <h2>Features products</h2>
    </section>
  );
}
