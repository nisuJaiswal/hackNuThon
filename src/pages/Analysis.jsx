import React from "react";
import Header from "../components/Header";
import { styled } from "@mui/joy/styles";
import Sheet from "@mui/joy/Sheet";
import Grid from "@mui/joy/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
// import Button from "@mui/joy/Button";
import IconButton from "@mui/material/IconButton";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ZoomInIcon from "@mui/icons-material/ZoomIn";
import ZoomOutIcon from "@mui/icons-material/ZoomOut";
// import IconButton from "@mui/joy/IconButton";
// import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import { green } from "@material-ui/core/colors";
import { grey } from "@mui/material/colors";
import "../styles/analysis.css";
import { OutlinedInput, TextField } from "@mui/material";

const Analysis = () => {
    const Item = styled(Sheet)(({ theme }) => ({
        backgroundColor:
            theme.palette.mode === "dark" ? theme.palette.background.level1 : "#fff",
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: "center",
        borderRadius: 4,
        color: theme.vars.palette.text.secondary,
    }));

    return (
        <>
            <Header />
            <Grid
                style={{ margin: 0 }}
                container
                spacing={2}
                columns={16}
                sx={{ flexGrow: 1 }}
            >
                <Grid
                    // sx={{ background: "green" }}
                    // sx={{ background: "green" }}
                    xs={8}
                >
                    <Item>
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <Typography variant="h6" ml={3} color="black">
                                <b>We need a science project - The Atlantic</b>
                            </Typography>
                            <Button style={{ marginLeft: "auto" }} variant="contained">
                                View PDF
                            </Button>
                        </div>
                    </Item>
                    <Item>
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <Button sx={{ my: 1, mx: 1.5 }} variant="text">
                                Summary
                            </Button>

                            <Button sx={{ my: 1 }} variant="text">
                                Viewer
                            </Button>

                            <Button
                                color="secondary"
                                sx={{ my: 1, p: 0.3 }}
                                style={{
                                    marginLeft: "auto",
                                    color: "#000000",
                                    borderColor: "#757575",
                                }}
                                variant="outlined"
                            >
                                <b>1</b>
                            </Button>

                            <Button
                                color="secondary"
                                sx={{
                                    my: 1,
                                    p: 0.3,
                                    ml: 1,
                                    color: grey[600],
                                    borderColor: grey[600],
                                }}
                                variant="outlined"
                            >
                                <KeyboardArrowUpIcon />
                            </Button>

                            <Button
                                color="secondary"
                                // sx={{ my: 1}}
                                sx={{ my: 1, p: 0.3, color: grey[600], borderColor: grey[600] }}
                                variant="outlined"
                            >
                                <KeyboardArrowDownIcon />
                            </Button>

                            <Button
                                color="secondary"
                                // sx={{ my: 1}}
                                sx={{
                                    my: 1,
                                    p: 0.3,
                                    ml: 2,
                                    color: grey[600],
                                    borderColor: grey[600],
                                }}
                                variant="outlined"
                            >
                                <ZoomInIcon />
                            </Button>

                            <Button
                                color="secondary"
                                // sx={{ my: 1}}
                                sx={{
                                    my: 1,
                                    p: 0.3,
                                    color: grey[600],
                                    borderColor: grey[600],
                                }}
                                variant="outlined"
                            >
                                <ZoomOutIcon />
                            </Button>
                        </div>
                    </Item>
                    <Item>
                        <embed
                            src="210120702006_Vatsal.pdf#toolbar=0"
                            width="100%"
                            height="600px"
                        />
                    </Item>
                </Grid>

                <Grid
                    //  sx={{ background: "pink" }}
                    sx={{ borderLeft: "1px solid grey" }}
                    xs={8}
                >
                    <Item>
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                height: "87vh",
                                padding: "0px",
                            }}
                        >
                            <div
                                style={{
                                    margin: "1.3rem",
                                    justifyContent: "flex-start",
                                    padding: "0px",
                                }}
                            >
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                Corrupti blanditiis unde porro velit quod minus, quaerat
                                asperiores dolore, quae, reprehenderit voluptatem esse
                                consequatur maiores dignissimos aspernatur nemo beatae iusto
                                eaque vero ab nihil incidunt repellat. Consectetur ratione sit
                                delectus corporis officia minima soluta amet, id maxime corrupti
                                similique, molestias ipsum, accusantium tempore repellat
                                sapiente quod omnis esse ipsam aliquid error eligendi! Sequi
                                ducimus excepturi, doloribus aut quaerat id culpa, assumenda
                                ullam velit necessitatibus esse eveniet aperiam nobis, fuga
                                atque dolorem dicta dolores nihil ipsam obcaecati! Magnam sed
                                porro aliquid nobis. Nobis, quaerat voluptatum. Ducimus
                                perspiciatis et delectus? Nemo, magni cumque! Lorem ipsum dolor
                                sit amet consectetur adipisicing elit. A voluptas reiciendis
                                pariatur ipsa accusantium asperiores, odit fugiat repellat
                                reprehenderit ut. Eligendi ullam ab labore maxime possimus
                                incidunt amet vel laborum enim eos corrupti, fuga omnis nam
                                ratione ea voluptas. Aspernatur iusto eum voluptatibus? Animi
                                itaque culpa, nemo ut adipisci tenetur ullam pariatur ipsum quo
                                asperiores qui, optio sunt, voluptatum harum. Nobis quia
                                expedita aliquam incidunt perspiciatis iure, nesciunt iusto,
                                ipsa inventore deleniti et exercitationem! Nesciunt, quia
                                dignissimos esse id tenetur sequi, laudantium quaerat cupiditate
                                obcaecati quae eligendi. Id officia ex veritatis eos eligendi
                                tempora, fugit dolorum corporis. Voluptates, adipisci minus.
                            </div>
                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    marginTop: "auto",
                                }}
                            >
                                <Button
                                    color="secondary"
                                    size="small"
                                    sx={{ ml: 1, mr: 1, my: 1 }}
                                    style={{
                                        color: "#000000",
                                        borderColor: "#757575",
                                    }}
                                    variant="outlined"
                                >
                                    Summarize
                                </Button>
                                <Button
                                    color="secondary"
                                    size="small"
                                    sx={{ mx: 1, my: 1 }}
                                    style={{
                                        color: "#000000",
                                        borderColor: "#757575",
                                    }}
                                    variant="outlined"
                                >
                                    Explain
                                </Button>
                                <Button
                                    color="secondary"
                                    size="small"
                                    sx={{ mx: 1, my: 1 }}
                                    style={{
                                        color: "#000000",
                                        borderColor: "#757575",
                                    }}
                                    variant="outlined"
                                >
                                    Examples
                                </Button>
                                <Button
                                    color="secondary"
                                    size="small"
                                    sx={{ mx: 1, my: 1 }}
                                    style={{
                                        color: "#000000",
                                        borderColor: "#757575",
                                    }}
                                    variant="outlined"
                                >
                                    Questions
                                </Button>
                            </div>
                            <div>
                                {/* <TextField
                                    // className={removeUpDownArrow}
                                    style={{
                                        color: "#000000",
                                        borderColor: "#757575",
                                    }}
                                    fullWidth
                                    id="outlined-multiline-flexible"
                                    placeholder="Ask anything about the document!"
                                    multiline
                                    maxRows={1}
                                /> */}
                                <OutlinedInput
                                    fullWidth
                                    sx={{ mx: 1, my: 1 }}
                                    placeholder="Ask anything about the document!"
                                    id="component-outlined"
                                    multiline
                                />
                            </div>
                        </div>
                    </Item>
                </Grid>
            </Grid>
        </>
    );
};

export default Analysis;
