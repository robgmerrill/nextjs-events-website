import Layout from "@/components/Layout";
import { API_URL } from "@/config/index";

export default function HomePage({ events }) {
  return (
    <Layout title="DJ">
      <h1>Upcoming Events</h1>
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch(`${API_URL}/api/events`);
  const events = await res.json();

  return {
    props: { events },
    // 1 second delay if the data has changed
    revalidate: 1,
  };
}
