import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"

export default function Home() {
  return (
  <div style={{ color: `purple` }}>
    <Link to="/contact/">Contact</Link>
    <Header headerText="Gruesome Comics" />
    <p>Terrifically Terrifying</p>
    <img src="https://images.unsplash.com/photo-1509248961158-e54f6934749c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt="gruesome clown" height="200px" width="300px"/>
  </div>
  );
}