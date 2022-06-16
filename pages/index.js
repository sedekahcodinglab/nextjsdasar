import Layout from "../components/Layout";

export default function Home() {
 
  return (
    <Layout title={process.env.appName}>
      <h1 className="font-bold text-5xl text-blue-600">Home</h1>
    </Layout>
  )
}
