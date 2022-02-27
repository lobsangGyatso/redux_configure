import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { userLogin } from './redux/thunks/login';

function App() {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  const dispatch = useDispatch();
  console.log(dispatch, 'dispatch')
  const settingUserName = (e)=>{
    e.preventDefault();
    setUserName(e.target.value)
}

const userPassword = (e)=>{
    e.preventDefault();
    setPassword(e.target.value)
}

  const loginForm = (e) =>{
    e.preventDefault();
    console.log(username, password)
    // let a = userLogin({username, password}, dispatch, navigate);
    dispatch(userLogin({username, password}))
    
    }
  return (
    <div >
    <div className='grid-rows-1'>
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
        <div className="relative py-3 w-11/12 max-w-xl sm:mx-auto">
            <div className="relative p-8 bg-white shadow-sm sm:rounded-xl">
            <form className="w-full" onSubmit={loginForm}>
                <div className="mb-5 relative">
                <input type="email" id="email" className="peer pt-8 border border-gray-200 focus:outline-none rounded-md focus:border-gray-500 focus:shadow-sm w-full p-3 h-16 placeholder-transparent" placeholder="name@example.com" autocomplete="off" onChange={ settingUserName} />
                <label for="email" className="peer-placeholder-shown:opacity-100   opacity-75 peer-focus:opacity-75 peer-placeholder-shown:scale-100 scale-75 peer-focus:scale-75 peer-placeholder-shown:translate-y-0 -translate-y-3 peer-focus:-translate-y-3 peer-placeholder-shown:translate-x-0 translate-x-1 peer-focus:translate-x-1 absolute top-0 left-0 px-3 py-5 h-full pointer-events-none transform origin-left transition-all duration-100 ease-in-out">Email address</label>
                </div>
                <div className="mb-5 relative">
                <input type="password" id="password" className="peer pt-8 border border-gray-200 focus:outline-none rounded-md focus:border-gray-500 focus:shadow-sm w-full p-3 h-16 placeholder-transparent" placeholder="password" autocomplete="off" onChange={userPassword} />
                <label for="password" className="peer-placeholder-shown:opacity-100   opacity-75 peer-focus:opacity-75 peer-placeholder-shown:scale-100 scale-75 peer-focus:scale-75 peer-placeholder-shown:translate-y-0 -translate-y-3 peer-focus:-translate-y-3 peer-placeholder-shown:translate-x-0 translate-x-1 peer-focus:translate-x-1 absolute top-0 left-0 px-3 py-5 h-full pointer-events-none transform origin-left transition-all duration-100 ease-in-out">Password</label>
                </div>
                <button onclick="javascript:void(0);" className="w-full bg-indigo-600 text-white p-3 rounded-md">Submit</button>
            </form>
            </div>
        </div>
        </div>
    </div>
</div>
  );
}

export default App;
