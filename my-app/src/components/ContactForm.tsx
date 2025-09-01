// Código optimizado para el componente ContactUs
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
      >
        <Card
          sx={{
            maxWidth: 800,
            width: "100%",
            borderRadius: 3,
            boxShadow: 3,
            p: 2,
          }}
        >
          <CardContent sx={{ p: { xs: 2, md: 4 } }}>
            <Typography
              variant="overline" // Esta variante ya tiene el estilo de "Inter"
              textAlign="center"
              display="block"
              sx={{ color: "#d1a27e", fontSize: "0.875rem" }}
              gutterBottom
            >
              A WORLDWIDE NETWORK
            </Typography>

            <Typography
              variant="h4" // Esta variante ahora tiene el estilo de "Inter"
              component="h2"
              textAlign="center"
              fontWeight={700}
              gutterBottom
              sx={{ color: "#321d00" }}
            >
              Contact us
            </Typography>

            <Typography
              variant="body1" // Esta variante ahora tiene el estilo de "Inter"
              textAlign="center"
              color="text.secondary"
              mb={4}
              sx={{ color: "#54463a" }}
            >
              Fill out form to get in touch with us
            </Typography>

            <Box component="form" noValidate autoComplete="off">
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="First Name"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    size="small"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Last Name"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    size="small"
                  />
                </Grid>
              </Grid>

              <TextField
                label="Email address"
                type="email"
                variant="outlined"
                fullWidth
                margin="normal"
                size="small"
              />
              <TextField
                label="Company (if any)"
                variant="outlined"
                fullWidth
                margin="normal"
                size="small"
              />
              <TextField
                label="Additional Message"
                multiline
                rows={5}
                variant="outlined"
                fullWidth
                margin="normal"
                inputProps={{ maxLength: 300 }}
              />

              <Box mt={2}>
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  sx={{
                    backgroundColor: "#000",
                    color: "#fff",
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
              variant="caption" // Esta variante ahora tiene el estilo de "Inter"
              color="text.secondary"
              display="block"
              mt={3}
              textAlign="center"
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