export type LayoutProps = {
  title: string;
  description?: string;
  children: React.ReactNode;
};

function Layout({ title, description, children }: LayoutProps) {
  return (
    <div className="p-4 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold text-cyan-700">{title}</h1>
      <p className="text-lg mb-10 text-gray-600">{description}</p>
      {children}
    </div>
  );
}

export default Layout;
