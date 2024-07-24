import { Helmet } from "react-helmet";

export default function Search() {
  return (
    <div>
      <Helmet>
        <title>Search</title>
        <meta name="description" content="Custom Gram Search Page" />
        <meta name="keywords" content="Custom Gram, search" />
        <link rel="canonical" href="https://cutom-gram.netlify.app/search" />
      </Helmet>
      Search
    </div>
  );
}
