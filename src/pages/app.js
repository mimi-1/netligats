import React from "react"
import { Router } from "@reach/router"

const Dashboard = () => <h1>Dushboard</h1>
const Profile = () => <h1>Profile</h1>
const Default = () => <h1>Main App</h1>
const Login = () => <h1>Login</h1>

const App = () => {
  return (
    <Router basepath="/app">
      <Dashboard path="/dashboard" />
      <Profile path="/profile" />
      <Login path="/login" />
      <Default path="/" />
    </Router>
  )
}

export default App
