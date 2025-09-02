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

import { useState } from "react";

export default function ContactUs() {
  const [message, setMessage] = useState('');
  const maxLength = 300;

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

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
            maxWidth: 1600,
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

            <Box component="form" noValidate autoComplete="off">
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="First Name"
                    placeholder="e.g. John"
                    variant="standard"
                    fullWidth
                    sx={{
                      "& .MuiInputLabel-root": {
                        fontSize: "1rem",
                        color: "#5E4740",
                      },
                      "& .MuiInputBase-input": {
                        color: "#5E4740",
                      },
                      "& .MuiInput-underline:before": {
                        borderBottomColor: "#E6E6E6",
                      },
                      "&:hover .MuiInput-underline:before": {
                        borderBottomColor: "#E6E6E6",
                      },
                      "& .MuiInput-underline:after": {
                        borderBottomColor: "#E6E6E6",
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Last Name"
                    placeholder="e.g. Doe"
                    variant="standard"
                    fullWidth
                    sx={{
                      "& .MuiInputLabel-root": {
                        fontSize: "1rem",
                        color: "#5E4740",
                      },
                      "& .MuiInputBase-input": {
                        color: "#5E4740",
                      },
                      "& .MuiInput-underline:before": {
                        borderBottomColor: "#E6E6E6",
                      },
                      "&:hover .MuiInput-underline:before": {
                        borderBottomColor: "#E6E6E6",
                      },
                      "& .MuiInput-underline:after": {
                        borderBottomColor: "#E6E6E6",
                      },
                    }}
                  />
                </Grid>
              </Grid>
              <TextField
                label="Email address"
                placeholder="e.g. john.doe@example.com"
                type="email"
                variant="standard"
                fullWidth
                sx={{
                  mt: 2,
                  "& .MuiInputLabel-root": {
                    fontSize: "1rem",
                    color: "#5E4740",
                  },
                  "& .MuiInputBase-input": {
                    color: "#5E4740",
                  },
                  "& .MuiInput-underline:before": {
                    borderBottomColor: "#E6E6E6",
                  },
                  "&:hover .MuiInput-underline:before": {
                    borderBottomColor: "#E6E6E6",
                  },
                  "& .MuiInput-underline:after": {
                    borderBottomColor: "#E6E6E6",
                  },
                }}
              />
              <TextField
                label="Company"
                placeholder="e.g. Company XYZ"
                variant="standard"
                fullWidth
                sx={{
                  mt: 2,
                  "& .MuiInputLabel-root": {
                    fontSize: "1rem",
                    color: "#5E4740",
                  },
                  "& .MuiInputBase-input": {
                    color: "#5E4740",
                  },
                  "& .MuiInput-underline:before": {
                    borderBottomColor: "#E6E6E6",
                  },
                  "&:hover .MuiInput-underline:before": {
                    borderBottomColor: "#E6E6E6",
                  },
                  "& .MuiInput-underline:after": {
                    borderBottomColor: "#E6E6E6",
                  },
                }}
              />
              <Box sx={{ position: 'relative' }}>
                <TextField
                  label="Additional Message"
                  placeholder="Example Text"
                  multiline
                  rows={5}
                  variant="outlined"
                  fullWidth
                  value={message}
                  onChange={handleChange}
                  inputProps={{ maxLength: maxLength }}
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
                        borderColor: "#E6E6E6",
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
                <Typography
                  variant="caption"
                  sx={{
                    position: 'absolute',
                    bottom: 8,
                    right: 14,
                    color: 'text.secondary',
                  }}
                >
                  {`${message.length}/${maxLength}`}
                </Typography>
              </Box>

              <Grid container spacing={2} alignItems="center" sx={{ mt: 4 }}>
                <Grid item xs={6} md={2}>
                  <Button
                    size="small"
                    variant="contained"
                    color="primary"
                    type="submit"
                    sx={{
                      textTransform: "none",
                      fontSize: { xs: "0.6rem", md: "0.8rem" },
                      fontWeight: { xs: 400, md: 700 },
                      borderRadius: 1,
                      py: 1.5,
                      backgroundColor: "#000",
                      color: "#fff",
                      "&:hover": {
                        backgroundColor: "#333",
                      },
                      // Estilo para pantallas pequeñas
                      width: { xs: '140px', md: '100%' }, 
                      height: { xs: '40px', md: 'auto' },
                      padding: { xs: '16px', md: '12px 16px' }
                    }}
                        md={{
                      textTransform: "none",
                      fontSize: "0.8rem",
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
                <Grid item xs={6} md={10}>
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