import { FaRegEnvelope } from 'react-icons/fa';
import { MdLockOutline } from 'react-icons/md';
import { useRouter } from 'next/router'
function SignUp() {
  let router = useRouter()
  const signInHandler = () => {
    router.push('Login')
  }
  return (
    <div className="flex flex-col item-center justify-center min-h-screen py-2 bg-gray-100">
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <div className="bg-white rounded-2xl shadow-2xl flex  w-2/3 max-w-4xl">
          <div className="w-3/5 p-5">
            <div className="text-left font-bold">
              <span className="text-green-600"> INVENTORY</span> MS
            </div>
            <div className="py-10">
              <h2 className="text-3xl font-bold text-green-500 mb-2">Create New Account </h2>
              <div className="border-t-2 w-10 border-green-500 inline-block mb-2"></div>

              <div className='flex flex-col items-center'>
                <div className='bg-gray-100 w-64 p-2 flex items-center mb-3'>
                  <FaRegEnvelope className='text-gray-400 m-2' />
                  <input type="email " name='email' placeholder='Email' className='bg-gray-100 flex-1'></input>
                </div>
                <div className='bg-gray-100 w-64 p-2 flex items-center'>
                  <MdLockOutline className='text-gray-400 m-2' />
                  <input type="password" name='password' placeholder='Password' className='bg-gray-100 flex-1'></input>
                </div>
                <div className='bg-gray-100 w-64 p-2 flex items-center mt-3'>
                  <MdLockOutline className='text-gray-400 m-2' />
                  <input type="password" name='password' placeholder='Confirm Password' className='bg-gray-100 flex-1 '></input>
                </div>
                <a href="www.google.com" className="border-2 border-green-600 rounded-full px-12 py-2 inline-block font-semibold hover:bg-green-500 hover:text-white mt-5">Sign Up</a>
              </div>
            </div>
          </div>
          <div className="w-2/5 bg-green-600 text-white rounded-tr-2xl rounded-br-2xl py-20 px-12 ">
            <h1 className="text-2xl font-bold  mb-2">Already have Account?</h1>
            <div className="border-t-2 w-10 border-white inline-block mb-2"></div>
            <p className="mb-10">Sign in to Now to Manage your stock</p>
            <a onClick={signInHandler} className="border-2 border-white rounded-full px-12 py-2 inline-block font-semibold hover:bg-white hover:text-green-600 ">Sign in </a>
          </div>
        </div>
      </main >
    </div>
  )
}
export default SignUp
