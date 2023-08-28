import React, {FC, useState} from 'react'
import Box from '@mui/material/Box'
import InputBase from '@mui/material/InputBase'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { StyledButton } from '../styled-button'
import {encode} from "querystring";

const HomeNewsLetter: FC = () => {
    const [email,setEmail] = useState('');
    const [status,setStatus] = useState('');

    const handleChange = (e: { target: { name: any; value: any } }) => {
        const {name, value} = e.target
        if (name === 'email' ){
            return setEmail(value)
        }
    }

    const handleSubmit = (e: { preventDefault: () => void }) => {
        const data = {"email": email}

        fetch("/", {
            method: "POST",
            // headers: { "Content-Type": 'multipart/form-data; boundary=random' },
            body: encode(data)
        })
            .then(() => setStatus("Form Submission Successful!!"))
            .catch(error => setStatus("Form Submission Failed!"));

        e.preventDefault();
    };

  return (
    <Box sx={{ backgroundColor: 'background.paper', py: { xs: 8, md: 10 } }}>
      <Container>
        <Box
          sx={{
            backgroundColor: 'secondary.main',
            borderRadius: 10,
            py: { xs: 4, md: 10 },
            px: { xs: 4, md: 8 },
            textAlign: 'center',
          }}
        >
          <Typography variant="h1" component="h2" sx={{ mb: 1, fontSize: { xs: 32, md: 42 } }}>
            Subscribe to Our News Letter
          </Typography>
          <Typography sx={{ mb: 6 }}>Subscribe to our newsletter to get information about our AI bot.</Typography>

          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              flexDirection: { xs: 'column', md: 'row' },
              justifyContent: 'space-around',
              width: { xs: '100%', md: 560 },
              mx: 'auto',
            }}
          >
            <InputBase
              sx={{
                backgroundColor: 'background.paper',
                borderRadius: 3,
                width: '100%',
                height: 48,
                px: 2,
                mr: { xs: 0, md: 3 },
                mb: { xs: 2, md: 0 },
              }}
              placeholder="Enter your Email Address"
              type="email" name="email" value={email} onChange={handleChange}
            />
            <Box>
              <StyledButton onClick={handleSubmit} disableHoverEffect size="large">
                Subscribe
              </StyledButton>
            </Box>
              <h3>{status}</h3>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default HomeNewsLetter
