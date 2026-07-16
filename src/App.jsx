const username = 'Ranit'

const isLoggedIn = false;

const App = () => {
  return (
    <>
      <h1 className="title">To Do List</h1>
      {isLoggedIn && <p>Hello, {username}</p>}
      
     

    </>
  )
}

export default App