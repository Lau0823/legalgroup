// components/ContactUs.tsx
"use client";

import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  TextField,
  Typography,
  Toolbar,
} from "@mui/material";

export default function ContactUs() {
  return (
    <Box
      component="main"
      sx={{
        backgroundColor: "#f5f2eb",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Toolbar />

      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexGrow={1}
        py={{ xs: 2, md: 6 }}
        px={{ xs: 2, md: 8 }}
      >
        <Card
          sx={{
            maxWidth: 1600, // Aumentado para un formulario más ancho
            width: "100%",
            borderRadius: 3,
            boxShadow: 3,
          }}
        >
          <CardContent sx={{ p: { xs: 3, md: 5 } }}>
            <Typography
              variant="overline"
              textAlign="center"
              display="block"
              sx={{ color: '#070300ff' }}
              mb={1}
            >
              A WORLDWIDE NETWORK
            </Typography>

            <Typography
              variant="h6"
              component="h1"
              textAlign="center"
              fontWeight={700}
              sx={{ color: '#0e0801ff' }}
              mb={1}
            >
              Contact us
            </Typography>

            <Typography
              variant="body1"
              textAlign="center"
              color="text.secondary"
              sx={{ color: '#030200ff' }}
              mb={4}
            >
              Fill out form to get in touch with us
            </Typography>

      

            <Box component="form"  noValidate autoComplete="off">
              <Grid container spacing={2}
               >
                <Grid size={6}   > 
                  <TextField
                    label="First Name"
                    placeholder="e.g. John"
                    variant="outlined"
                    
                    fullWidth
                   sx={{
  
  "& .MuiInputLabel-root": {
    fontSize: "1rem", 
    color: "#5E4740", 
  },
  
  "& .MuiInputBase-input": {
    color: "#5E4740",
  },

  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "white", 
    },
    "&:hover fieldset": {
      borderColor: "white", 
    },
    "&.Mui-focused fieldset": {
      borderColor: "white", 
    },
  },
}}
                  />
                </Grid>
                <Grid size={6}>
                  <TextField
                    label="Last Name"
                    placeholder="e.g. Doe"
                    variant="outlined"
                    fullWidth
                                sx={{
  
  "& .MuiInputLabel-root": {
    fontSize: "1rem", 
    color: "label.contact", 
  },
  
  "& .MuiInputBase-input": {
    color: "placeholder.contact1",
  },

  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "white", 
    },
    "&:hover fieldset": {
      borderColor: "white", 
    },
    "&.Mui-focused fieldset": {
      borderColor: "white", 
    },
  },
}}
                  />
                </Grid>
              </Grid>

              <TextField
                label="Email address"
                placeholder="e.g. john.doe@example.com"
                type="email"
                variant="outlined"
                sx={{
  mt: 2,
  "& .MuiInputLabel-root": {
    fontSize: "1rem",
    color: "label.contact",
  },
  "& .MuiInputBase-input": {
    color: "placeholder.contact1",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "white",
    },
    "&:hover fieldset": {
      borderColor: "white",
    },
    "&.Mui-focused fieldset": {
      borderColor: "white",
    },
  },
}}
              />
              <TextField
                label="Company"
                placeholder="e.g. Company XYZ"
                variant="outlined"
                fullWidth
            sx={{
  mt: 2,
  "& .MuiInputLabel-root": {
    fontSize: "1rem",
    color: "label.contact",
  },
  "& .MuiInputBase-input": {
    color: "placeholder.contact1",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "white",
    },
    "&:hover fieldset": {
      borderColor: "white",
    },
    "&.Mui-focused fieldset": {
      borderColor: "white",
    },
  },
}}
              />
              <TextField
                label="Additional Message"
                placeholder="Example Text"
                multiline
                rows={5}
                variant="outlined"
                fullWidth
                sx={{
  mt: 2,
  "& .MuiInputLabel-root": {
    fontSize: "1rem",
    color: "label.contact",
  },
  "& .MuiInputBase-input": {
    color: "placeholder.contact1",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "white",
    },
    "&:hover fieldset": {
      borderColor: "white",
    },
    "&.Mui-focused fieldset": {
      borderColor: "white",
    },
  },
}}
                inputProps={{ maxLength: 300 }}
              />

              <Grid container spacing={2} alignItems="center" sx={{ mt: 4 }}>
                <Grid size={2}>
                  <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    sx={{
                      textTransform: "none",
                      fontSize: "1rem",
                      borderRadius: 1,
                      py: 1.5,
                      backgroundColor: "#000",
                      color: "#fff",
                      "&:hover": {
                        backgroundColor: "#333",
                      },
                      width: '100%',
                    }}
                  >
                    Submit the message
                  </Button>
                </Grid>

                <Grid size={10}>
                  <Typography
                    variant="caption"
                    color="text.secondary"
                    display="block"
                    textAlign={{ xs: 'center', md: 'left' }}
                    sx={{ lineHeight: 1.4 }}
                  >
                    By pressing the contact button, I agree to Hussaini Legal Group
                    contacting me by email and/or phone. I also understand that any
                    information I’ve shared in this form is subject to Hussaini Legal
                    Group Privacy Policy.
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
}