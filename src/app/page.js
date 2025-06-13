import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div>
      <header>
        <nav>
          <Link href="/">Home</Link>
          <Link href="/grocery-list">Grocery List</Link>
          <Link href="/recipes">Recipes</Link>
          <Link href="/not-found">Not Found</Link>
          <Link href="/planner">Planner</Link>
          <Link href="/settings">Settings</Link>

        </nav>
      </header>
      <main style={{marginTop: "50px"}}>
        Home Page
      </main>
      <footer className={styles.footer}>
      </footer>
    </div>
  );
}
