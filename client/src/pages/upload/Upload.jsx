import React, { useState } from 'react'

import axios from 'axios'

import { UploadPage, UploadContainer, ImageUpload, FormSection, InputSection, Label, UploadButton } from "./Upload.styles";
import { Section, Break} from "../../components/suggested-box/SuggestedUsers.styles";

export const Upload = () => {
  const username = 'user'
  const name = 'New User'
  const avatar = 'https://i.ebayimg.com/images/g/c3IAAOSw9RlgCIT4/s-l1600.jpg'
  const [video, setVideo] = useState(null)
  const [caption, setCaption] = useState(null)
  const today = new Date()
  const timestamp = today.toISOString()

  const handleSubmit = async (e) => {
    e.preventDefault()

    const data =  {
        name: name,
        username: username,
        avatar: avatar,
        is_followed: false,
        video: video,
        caption: caption,
        likes: 0,
        comments: 0,
        timestamp: timestamp,
        button_visible: false  
      }
      axios.post('http://localhost:8001/tiktok/posts', data)
      .then((response) => {
      console.log(response)
      })
    .catch((err) => {
      console.error(err)
  })
  }

  return (
    <UploadPage>
        <br />
        <h1>Upload video</h1>
        <UploadContainer>
          <form onSubmit={handleSubmit}>
            <Section>
              <ImageUpload/>
              <FormSection>
                <InputSection>
                  <Label>Caption</Label>
                  <input
                    className='input'
                    name='caption'
                    onChange={(e) => setCaption(e.target.value)}
                  />
                </InputSection>
                <Break/>
                <InputSection>
                  <Label>Video Url</Label>
                  <input
                    className='input'
                    name='video'
                    onChange={(e) => setVideo(e.target.value)}
                  />
                </InputSection>
              </FormSection>
            </Section>			
            <UploadButton>Post</UploadButton>
          </form>
        </UploadContainer>
        <p>This video will be published to @{username}</p>
    </UploadPage>
  )
}