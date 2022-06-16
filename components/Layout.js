import Head from "next/dist/shared/lib/head"
import Navbar from "./Navbar"

export default function Layout(props) {
  return (
    <div>
      <Head>
         <title>{props.title}</title>
      </Head>
      <Navbar/>
      
        {props.children}
    </div>
  )
}
