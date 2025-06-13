export default function GroceryListPage() {
  return (
    <div>
      <header>
        <nav>
          <a href="/">Home</a>
          <a href="/grocery-list">Grocery List</a>
          <a href="/recipes">Recipes</a>
          <a href="/not-found">Not Found</a>
          <a href="/planner">Planner</a>
          <a href="/settings">Settings</a>
        </nav>
      </header>
      <main style={{ marginTop: "50px" }}>
        Grocery List Page
      </main>
    </div>
  );
}