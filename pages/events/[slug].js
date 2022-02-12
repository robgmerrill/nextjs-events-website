// import { useRouter } from "next/router";
import Layout from "@/components/Layout";
import { API_URL } from "@/config/index";

export default function EventPage({ evt }) {
  //   const router = useRouter();
  return (
    <Layout>
      <h1>{evt.name}</h1>
    </Layout>
  );
}

export async function getStaticPaths() {
  const res = await fetch(`${API_URL}/api/events`);
  const events = await res.json();

  const paths = events.map((evt) => ({
    params: { slug: evt.slug },
  }));
  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params: { slug } }) {
  //   console.log("hello", context.query.slug);

  const res = await fetch(`${API_URL}/api/events/${slug}`);
  const events = await res.json();
  //   console.log(events);
  return {
    props: {
      evt: events[0],
    },
  };
}

// pass in a context - destructure query: slug
// export async function getServerSideProps(context) {
//   console.log("hello", context.query.slug);

//   const res = await fetch(`${API_URL}/api/events/${context.query.slug}`);
//   const events = await res.json();
//   //   console.log(events);
//   return {
//     props: {
//       evt: events[0],
//     },
//   };
// }
