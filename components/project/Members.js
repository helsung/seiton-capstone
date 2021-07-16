import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useRouter } from 'next/router'
import { fetchProject, fetchRemoveUserProject } from '../../store/projectSlice'
import ProjectInvite from './ProjectInvite'

export default function Members() {
  const project = useSelector(state => state.project)
  const dispatch = useDispatch()
  const router = useRouter()
  const { query = {} } = router || {}
  const { id = 0 } = query || {}
  const [show, setShow] = useState(false)

  useEffect(() => {
    if (id) {
      ;(async () => {
        dispatch(fetchProject(id))
      })()
    }
  }, [dispatch, project])

  const users = project.users || []
  // console.log('⭐️', id, users)
  // console.log('project in members', project)

  const removeUser = userId => {
    const body = { userId: userId, projectId: id }
    dispatch(fetchRemoveUserProject(body))
  }

  return (
    <React.Fragment>
      <h1 className="font-ibm text-6xl font-bold text-red-800 dark:text-red-200 text-center mt-8">
        {project.name} / Members
      </h1>

      <div>
        <h1>Members</h1>
        <button
          type="submit"
          className="bg-gray-300 text-gray-900 rounded hover:bg-gray-200 p-4 py-2 focus:outline-none"
          onClick={() => setShow(true)}
        >
          Send Invite!
        </button>

        {users.map(user => (
          <div key={user.userId} className="flex">
            <h2 key={user.userId}>{user.user.name}</h2>
            {user.isAdmin ? <p>Admin</p> : <p>Collaborater</p>}
            <button
              className="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white border border-red-500 hover:border-transparent rounded-full"
              onClick={() => removeUser(user.userId)}
            >
              X
            </button>
          </div>
        ))}
      </div>
      <ProjectInvite
        show={show}
        onClose={() => setShow(false)}
        project={project}
      />
      <div id="projectInviteModal"></div>
    </React.Fragment>
  )
}
