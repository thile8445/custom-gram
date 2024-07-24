import { Helmet } from "react-helmet";

export default function Home() {
  return (
    <div>
      <Helmet>
        <title>Home</title>
        <meta name="description" content="Custom Gram Home Page" />
        <meta name="keywords" content="Custom Gram, home" />
        <link rel="canonical" href="https://cutom-gram.netlify.app/" />
      </Helmet>
      home
    </div>
  );
}
