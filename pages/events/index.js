import Layout from "@/components/Layout";
// import { API_URL } from "@/config/index";

export default function EventsPage() {
  // console.log({ events });
  return (
    <Layout>
      <h1>My Events</h1>
    </Layout>
  );
}

// export async function getServerSideProps() {
//   const res = await fetch(`${API_URL}/api/events`);
//   const events = await res.json();

//   console.log(events);
//   return {
//     props: { events },
//   };
// }
