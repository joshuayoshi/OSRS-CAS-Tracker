import { Link } from "wouter";   

function Home() {
  return(
    <>
      <h1>capoo</h1>
      <Link href="/CasTracker">Go to CasTracker</Link>
      <br /><br />
      <Link href="/PrettyCasTracker">Go to CasTracker but with Mantine</Link>
    </>
  );
}

export default Home;
