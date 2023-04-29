import React, { useCallback, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import GlobalStyles from "@mui/material/GlobalStyles";
import { Box, Modal, Stack } from "@mui/material";
import Dropzone, { useDropzone } from "react-dropzone";
import CloseIcon from "@mui/icons-material/Close";
import { grey } from "@mui/material/colors";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  // width: 500,
  // height: 300,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Header = () => {
  const onDrop = useCallback((acceptedFiles) => {
    if (acceptedFiles) {
      setName(acceptedFiles[0].name);
      setFiles([...acceptedFiles]);
    }
  }, []);
  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [name, setName] = useState("");
  const [files, setFiles] = useState([]);
  return (
    <>
      <GlobalStyles
        styles={{ ul: { margin: 0, padding: 0, listStyle: "none" } }}
      />
      <CssBaseline />
      <AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
      >
        <Toolbar sx={{ flexWrap: "wrap" }}>
          <Typography
            variant="h5"
            ml={2}
            color="inherit"
            noWrap
            sx={{ flexGrow: 1 }}
          >
            <b>AnswerAI</b>
          </Typography>
          <Button
            href="#"
            variant="outlined"
            sx={{ my: 1, mx: 1.5 }}
            onClick={handleOpen}
          >
            Upload
          </Button>

          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                bgcolor: "background.paper",
                border: "2px solid #000",
                boxShadow: 24,
                height: { xs: "400px", lg: "300px" },
                width: { xs: "300px", lg: "500px" },
                display: "flex",
                flexDirection: "column",
              }}
              // sx={{ xs: {}, sm: {} }}
            >
              <Typography id="modal-modal-title" variant="h6" component="h2">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    margin: "0",
                  }}
                >
                  <Button
                    sx={{
                      color: "black",
                      my: 1,
                      mr: 0.5,
                      p: 0.3,
                    }}
                    variant="text"
                    onClick={handleClose}
                  >
                    <CloseIcon />
                  </Button>
                </div>
              </Typography>

              <Typography
                component={"div"}
                id="modal-modal-description"
                sx={{ mt: 2 }}
              >
                <Dropzone>
                  {() => (
                    <Stack
                      {...getRootProps()}
                      justifyContent={"center"}
                      alignItems={"center"}
                      style={{
                        // position: "absolute",
                        margin: "0px 30px 10px 30px",
                        padding: 16,
                        // inset: 60,
                        borderRadius: 20,
                        heigth: "100%",
                        border: "2px dashed blue",
                      }}
                    >
                      <input {...getInputProps()} />
                      <img
                        src={"/file.svg"}
                        style={{ width: "70px", margin: "1rem" }}
                      />

                      {files.length ? (
                        <Typography variant="h6"> {name} </Typography>
                      ) : (
                        <Typography variant="subtitle1">
                          Drop files here or{" "}
                          <Typography
                            component={"span"}
                            variant="subtitle1"
                            color="primary"
                            style={{ cursor: "pointer" }}
                          >
                            Click here{" "}
                          </Typography>
                          to Upload
                        </Typography>
                      )}
                    </Stack>
                  )}
                </Dropzone>
                {/* <Button variant="contained">Upload</Button> */}
              </Typography>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <Button
                  href="#"
                  variant="contained"
                  sx={{ my: 1, mx: 1.5, width: "30%" }}
                  onClick={handleOpen}
                >
                  Upload
                </Button>
              </div>
            </Box>
          </Modal>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
