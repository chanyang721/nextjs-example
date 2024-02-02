import { Box, Button } from '@mui/material'
import { useState } from 'react'


export default function UploadFiles () {
  const [uploadImages, setUploadImages] = useState({
    imageFiles: [],
    imageUrls: [],
  });

  const uploadFiles = async (e: any) => {
    const { files } = e.target

    const formData = new FormData()
    formData.append('file', files[0])
    formData.append('data', JSON.stringify({
      name: 'test'
    }))

    await fetch('http://localhost:8080/api/users', {
      method: 'post',
      body: formData
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));
  }


  return (
    <>
      <div>
        Upload Files
      </div>
      <form>
        <input
          type="file"
          name="file"
          onChange={ uploadFiles }
        />
        <input type="submit" value="Upload"/>
      </form>
      <Box>
        <Button onClick={ uploadFiles }>tests</Button>
      </Box>
    </>
  )
}