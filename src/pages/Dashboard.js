import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {

  const navigate = useNavigate();

  const userValid = () => {
    let token = localStorage.getItem("userdbtoken");
    console.log(token)
    if (token) {
      console.log("user valid")
    } else {
      navigate("*")
    }
  }

  useEffect(() => {
    userValid();
  }, [])
  return (
    <div>Dashboard</div>
  )
}

export default Dashboard