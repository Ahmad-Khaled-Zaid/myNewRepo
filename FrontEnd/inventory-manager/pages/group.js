import axios from 'axios'
import Modal from '../components/Modal'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import Header from '../components/Header'
import SideBar from '../components/SideBar'
import { getAuthToken } from '../utils/functions'


export default function User() {
  const submitForm = (e) => {
    e.preventDefault()
    console.log(e)
    axios.post("http://127.0.0.1:8000/app/group", { name: e.target[0].value, belongs_to: e.target[1].value }, getAuthToken())
    console.log(data)

  }
  const [showModal, setShowModal] = useState(false)
  const usersData = async () => {
    const headers = getAuthToken()
    let response = await axios.get('http://localhost:8000/app/group', headers)
    setData(response.data.results)

  }
  const [data, setData] = useState([])
  useEffect(() => {
    data.length <= 0 && usersData()
  }, [data])


  const [query, setQuery] = useState("")
  console.log(query)


  return (
    <div >


      <Head>
        <title>Inventer</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <SideBar />
      <main>
        <button onClick={() => { setShowModal(true) }} type="submit" class=" adduser bg-green-500 text-white border-2 border-green-500 rounded-full px-12 py-2 inline-block font-semibold hover:bg-white hover:text-green-500 hover:border-green ">
          Add Group
        </button>

        <div class="overflow-x-auto relative  sm:rounded-lg UsersTable">
          <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400 mt-20 border-collapse border"  >
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr class="bg-green-500">
                <th scope="col" class="p-4 ">
                  <div class="flex items-center">
                  </div>
                </th>
                <th scope="col" class="py-3 px-6 text-white">
                  Name
                </th>
                <th scope="col" class="py-3 px-6 text-white">
                  Belongs To
                </th>
                <th scope="col" class="py-3 px-6 text-white">
                  Total Items
                </th>
                <th scope="col" class="py-3 px-6 text-white">
                  Created At
                </th>
                <th scope="col" class="py-3 px-6 text-white">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((ele) => {
                if (ele.fullname.toLowerCase().includes(query)) {
                  return (
                    <tr key={ele.id} class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                      <td class="p-4 w-4">
                        <div class="flex items-center">

                        </div>
                      </td>
                      <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {ele.name}
                      </th>
                      <td class="py-4 px-6">
                        {ele.belongs_to}
                      </td>
                      <td class="py-4 px-6">
                        {ele.total_items}
                      </td>
                      <td class="py-4 px-6">
                        {ele.created_at}
                      </td>
                      <td class="flex items-center py-4 px-6 space-x-3">
                        <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                        <a href="#" class="font-medium text-red-600 dark:text-red-500 hover:underline">Remove</a>
                      </td>
                    </tr>
                  )
                }
              })}

            </tbody>
          </table>
          <Modal isVisible={showModal} onClose={() => setShowModal(false)}  >
            <div class="py-6 px-6 lg:px-8">
              <form class="space-y-6" onSubmit={submitForm}>
                <div>
                  <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Name</label>
                  <input type="name" name="name" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder=" eg.. Furniture " required />
                </div>
                <div>
                  <label for="Name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Belongs To</label>
                  <input type="Name" name="Name" id="Name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500  dark:text-white" required />


                </div>
                <div class="flex justify-between">
                  <div class="flex items-start">
                  </div>
                </div>
                <button type="submit" class="w-full text-white bg-green-500   hover:border-green-500  font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Add Group</button>
                <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
                </div>
              </form>
            </div>

          </Modal>
        </div>


        {/* <div className='flex justify-between mt-5 search'> */}
        <p> Users Page</p>
        <form class=" search flex items-center ">
          <label for="simple-search" class="sr-only">Search</label>
          <div class="relative ">
            <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
            </div>
            <input type="text" id="simple-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  focus:ring-blue-500 focus:border-blue-500 block w-48 pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" onChange={(e) => setQuery(e.target.value)} />
          </div>

        </form>
        {/* </div> */}
      </main>
    </div >
  )
}