type DashboardLayoutProps = {
  children: React.ReactNode;
  notifications: React.ReactNode;
  revenue: React.ReactNode;
};

export default function DashboardLayout({
  children,
  notifications,
  revenue,
}: DashboardLayoutProps) {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-56 border p-5">Sidebar</aside>

      {/* Main Section */}
      <main className="flex-1 flex flex-col p-5">
        {/* MAIN PAGE CONTENT */}
        <section className="flex-1 border p-5 mb-5">{children}</section>

        {/* PARALLEL ROUTES */}
        <section className="flex gap-5 border-b pb-5">
          <div>{notifications}</div>
          <div>{revenue}</div>
        </section>
      </main>
    </div>
  );
}
