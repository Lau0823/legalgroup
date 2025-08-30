"use client";

import {
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  Typography,
  Toolbar,
} from "@mui/material";

export default function ContactUs() {
  return (
    <Box component="main" sx={{ backgroundColor: "#f5f2eb", minHeight: "100vh" }}>
      {/* Este Toolbar empuja el contenido hacia abajo para despegarlo del header */}
      <Toolbar />

      <Box display="flex" justifyContent="center" alignItems="center" py={6}>
        <Card
          sx={{
            maxWidth: 600,
            width: "100%",
            borderRadius: 3,
            boxShadow: 3,
          }}
        >
          <CardContent>
            <Typography
              variant="overline"
              textAlign="center"
              display="block"
              gutterBottom
            >
              A WORLDWIDE NETWORK
            </Typography>

            <Typography
              variant="h4"
              component="h2"
              textAlign="center"
              fontFamily='"Playfair Display", serif'
              fontWeight={700}
              gutterBottom
            >
              Contact us
            </Typography>

            <Typography
              variant="body1"
              textAlign="center"
              color="text.secondary"
              mb={4}
              fontFamily='"Open Sans", sans-serif'
            >
              Fill out form to get in touch with us
            </Typography>

            <Box component="form" noValidate autoComplete="off">
              <TextField
                label="First Name"
                variant="outlined"
                fullWidth
                margin="normal"
              />
              <TextField
                label="Last Name"
                variant="outlined"
                fullWidth
                margin="normal"
              />
              <TextField
                label="Email address"
                type="email"
                variant="outlined"
                fullWidth
                margin="normal"
              />
              <TextField
                label="Company (if any)"
                variant="outlined"
                fullWidth
                margin="normal"
              />
              <TextField
                label="Additional Message"
                multiline
                rows={4}
                variant="outlined"
                fullWidth
                margin="normal"
                inputProps={{ maxLength: 300 }}
                helperText="0/300"
              />

              <Box mt={2}>
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  sx={{
                    backgroundColor: "#000",
                    color: "#fff",
                    fontFamily: '"Open Sans", sans-serif',
                    textTransform: "none",
                    px: 3,
                    py: 1.5,
                    fontSize: "1rem",
                    borderRadius: 1,
                    "&:hover": {
                      backgroundColor: "#333",
                    },
                  }}
                  fullWidth
                >
                  Submit the message
                </Button>
              </Box>
            </Box>

            <Typography
              variant="caption"
              color="text.secondary"
              display="block"
              mt={3}
              textAlign="center"
              fontFamily='"Open Sans", sans-serif'
            >
              By pressing the contact button, I agree to Hussaini Legal Group
              contacting me by email and/or phone. I also understand that any
              information I’ve shared in this form is subject to Hussaini Legal
              Group Privacy Policy.
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
}
