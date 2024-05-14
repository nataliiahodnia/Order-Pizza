import { useAuth, usePages } from "../../store/hooks";

export const Header = () => {
  const {user, logout} = useAuth()
  const {setPage} = usePages()
  const handleLogout = () => {
    logout()
    setPage('home')
  }

  return (
    <div className=" px-2 py-2 bg-red-500 text-white font-bold flex justify-between items-centre text-4xl">
      <h3>Hello, bitch!</h3>
      <p className="text-2xl">{user.email}</p>
      <div className="flex gap-4 text-xl">
        <button onClick={()=>setPage('home')}>Home</button>
        <button onClick={()=>setPage('pizzas')}>Pizzas</button>
      <button className='btn' onClick={handleLogout}>
        Logout</button>
      </div>
    </div>
  );
};
