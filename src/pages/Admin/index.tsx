import { useEffect } from 'react'
import { http } from '@/app/config/axios'

export function Component() {

    useEffect(() => {
        async function fetchData() {
            const a = await http.get('user')
            console.log(a)
        }

        fetchData()
    }, [])

  return (
    <div className="">HEY HEY admin</div>
  )
}

Component.displayName = 'AdminPage'
