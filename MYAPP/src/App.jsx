import { useEffect } from 'react'
import './App.css'
import axios from 'axios';

const BASE_URL = "http://localhost:4000/";


function App() {
  {/* CRUD Operations
  const getUsers = async () => {
    const response = await axios.get(BASE_URL + "users");
    console.log(response.data);
  }

  const getUserById = async (id) => {
    const response = await axios.get(BASE_URL + "users/" + id);
    console.log(response.data);
  }

  const createUser = async (newUser) => {
    await axios.post(BASE_URL + "users", {
      name: newUser.name,
      email: newUser.email
    });
  }

  const updateUser = async (id, updatedUser) => {
    await axios.put(BASE_URL + "users/" + id, {
      name: updatedUser.name,
      email: updatedUser.email
    });
  } 
  const deleteUser = async (id) => {
    await axios.delete(BASE_URL + "users/" + id);
  }
     */}



  const getUserPostById = async (id) => {
    const response = await axios.get(BASE_URL + "users/" + id);
    return response.data.postId;
  }

  const getPostById = async (postId) => {
    getUserPostById
    const response = await axios.get("http://jsonplaceholder.typicode.com/posts/" + postId);
    console.log(response.data);
  }

  useEffect(() => {
    getPostById(7);
  }, []);
  
  return (
    <>
      <div className="App">
        <h1>My App</h1>
      </div>
    </>
  )
}

export default App
