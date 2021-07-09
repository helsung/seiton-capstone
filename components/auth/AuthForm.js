import React, { useState } from 'react'
import { tw } from 'twind'
import { signIn, signOut, useSession } from 'next-auth/client'
import { useRouter } from 'next/router'
import Link from 'next/link'

export default function AuthForm() {
  const [session] = useSession()
  const router = useRouter()

  // const [email, setEmail] = useState('')
  // const [password, setPassword] = useState('')

  // if (!session) {
  return (
    <div className={tw`container mx-auto px-10 mt-72`}>
      <h1>Organize your workflow.</h1>
      <p className={tw`text-2xl`}>
        Inspired by the 5S of Japanese workplace organization methodology,
        <br />
        Seiton will help you and your team to arrange your workflow efficiently.
      </p>
      <br />
      {/* <form method="POST" action="/api/login" className={tw`mt-8 max-w-md`}>
          <div>
            <label htmlFor="username" className={tw`text-gray-700`}>
              Email
            </label>
            <input
              name="email"
              type="text"
              className={tw`mt-1 block w-full rounded-md`}
            />
          </div>
          <div>
            <label htmlFor="password" className={tw`text-gray-700`}>
              Password
            </label>
            <input
              name="password"
              type="password"
              className={tw`mt-1 block w-full rounded-md`}
            />
          </div>
          <div> */}
      <button
        type="submit"
        className={tw`bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow`}
        onClick={() => signIn()}
      >
        Sign In or Sign Up
      </button>
      {/* </div> */}
      {/*error && error.response && <div> {error.response.data} </div>*/}
      {/* </form> */}
      <button
        type="submit"
        className={tw`bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow`}
        onClick={() => signIn('github')}
      >
        LOG IN WITH GITHUB
      </button>
      <button
        type="submit"
        className={tw`bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow`}
        onClick={() => signIn('google')}
      >
        LOG IN WITH GOOGLE
      </button>
    </div>
  )
  // } else {
  //redirect to dashboard
  // router.push('/project')
  // return <p className={tw`text-center`}>Redirecting...</p>
  // <button
  //   type="submit"
  //   className={tw`bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow`}
  //   onClick={() => signOut()}
  // >
  //   SIGN OUT
  // </button>
  // }
}