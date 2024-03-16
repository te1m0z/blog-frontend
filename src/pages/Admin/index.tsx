import { useEffect, useState } from 'react'
import ReactQuill from 'react-quill'
import { http } from '@/app/config/axios'
import 'react-quill/dist/quill.snow.css'
import { Button } from '@/shared'

export function Component() {
  const [value, setValue] = useState('')

  useEffect(() => {
    async function fetchData() {
      const a = await http.get('user')
      console.log(a)
    }

    fetchData()
  }, [])

  const modules = {
    toolbar: [
      [{ 'header': [1, 2, false] }],
      ['bold', 'italic', 'underline', 'code', 'blockquote'],
      [{'list': 'ordered'}, {'list': 'bullet'}],
      ['link', 'image']
    ]
  }

  return (
    <div className="">
      <div className="">
        <div className="">Create note</div>
        <ReactQuill theme="snow" value={value} onChange={setValue} modules={modules} />
        <Button>Create</Button>
      </div>
    </div>
  )
}

Component.displayName = 'AdminPage'
