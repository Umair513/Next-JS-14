import Link from "next/link";
export default function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <Link href="/blog">Blog</Link>
      <br></br>
      <Link href="/products">Products</Link>
    </div>
  );
}
