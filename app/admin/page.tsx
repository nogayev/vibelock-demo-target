export default function AdminPage() {
  // Deliberately missing server-side authorization.
  return (
    <main>
      <h1>Admin Dashboard</h1>
      <p>Anyone can see this page if they know the URL.</p>
    </main>
  );
}
