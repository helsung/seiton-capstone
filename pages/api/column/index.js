import prisma from '../../../prisma/prisma'
import { getSession } from 'next-auth/client'

export default async function handler(req, res) {
  const session = await getSession({ req })
  if (!session) {
    res.status(403).json({
      message: 'You must be signed in to view this page.'
    })
  } else {
    // PUT /api/column
    if (req.method === 'PUT') {
      try {
        const { id, title, projectId, index } = req.body
        const result = await prisma.column.update({
          where: { id },
          data: {
            title,
            projectId,
            index
          }
        })

        res.status(200).json(result)
      } catch (error) {
        throw new Error('Column PUT error')
      }
    }

    // POST /api/column
    else if (req.method === 'POST') {
      try {
        const { title, projectId, index } = req.body
        const newColumn = await prisma.column.create({
          data: {
            title,
            projectId,
            index
          }
        })
        console.log(newColumn)
        res.status(200).json(newColumn)
      } catch (error) {
        console.error(error)
        throw new Error('Column POST error', error)
      }
    }
  }
}
