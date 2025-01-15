import { Toaster } from 'react-hot-toast'
import Router from './router/Router'
import { userControllerStore } from './store/userControllerStore'
import { useEffect } from 'react'
import { Loader } from 'lucide-react'

function App() {

  const { checkAuth, authUser, isCheckingAuth } = userControllerStore()

  useEffect(() => {
    checkAuth()
  }, [checkAuth])

  if (isCheckingAuth && !authUser) return (
    <div className='h-screen flex justify-center items-center'>
      <Loader className='size-10 animate-spin' />
    </div>
  )

  return (
    <>
      <Router />
      <Toaster />
    </>
  )
}

export default App
