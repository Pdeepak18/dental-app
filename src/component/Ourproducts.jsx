import * as React from "react";
import AppBar from "@mui/material/AppBar";
import CameraIcon from "@mui/icons-material/PhotoCamera";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
// import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Navbar from "./Navbar";
import Footer from "./Footer";
import img from "../images/micro-surgery-instruments-hd.jpg";
import { Carousel, Typography, Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import prod_1 from "../images/prod-1.jpg";
import prod_2 from "../images/prod-2.jpg";
import prod_3 from "../images/prod-3.jpg";
import prod_4 from "../images/prod-4.jpg";
import prod_5 from "../images/prod-5.jpg";
import prod_6 from "../images/prod-6.jpg";
import prod_7 from "../images/prod-7.jpg";
import prod_8 from "../images/prod-8.jpg";
import prod_9 from "../images/prod-9.jpg";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  backgroundColor: "white",
};

const style2 = {
  // -webkit-backdrop-filter: "blur(5px)",
  // backdrop-filter: "blur(5px)",
};

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var count = [
  prod_1,
  prod_2,
  prod_3,
  prod_4,
  prod_5,
  prod_6,
  prod_7,
  prod_8,
  prod_9,
];

var temp = 0;
var temp2 = 0;

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Ourproducts() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = (card) => {
    setOpen(true);
    console.log(card);
  };

  const handleClose = () => setOpen(false);

  
  return (
    <>
      <Navbar />
      {/* Image banner */}
      <div className="md:rounded-xl h-[200px] md:h-[250px]">
        <div className="relative h-full w-full">
          <img
            src={img}
            alt="image 1"
            className="h-full w-full  md:object-cover"
          />
          <div className="absolute inset-0 grid h-full w-full p-10 md:p-20 bg-black/55">
            <div className="w-4/4  md:w-2/4 opacity-95">
              <Typography
                variant="h1"
                color="white"
                className="mb-4 text-2xl md:text-3xl lg:text-5xl"
              >
                Our Products Range
              </Typography>
              <Typography
                variant="lead"
                color="white"
                className="mb-12 opacity-80 smll-font"
              >
                <p className="italic"><a href="/" className="hover:text-light-blue-900">Home</a>  /<a href="/" className="hover:text-light-blue-900"> Our Products</a></p>
              </Typography>
            </div>
          </div>
        </div>
      </div>

      {/* description */}

      <h1 className="text-black text-2xl md:text-3xl my-8 px-5 md:px-20">
        {" "}
        Our Product Range{" "}
      </h1>
      <div className="about1  px-5 md:px-20 w-full">
        <p className="text-[14px] md:text-lg text-justify font-bold	 font-poppins ">
          Established in the year 1983 we, "FRAGLOT", are a well known name
          engaged in manufacturing and supplying an array of Surgical
          Instruments. Our products are accepted and appreciated for features
          such as rust resistant, precisely designed and efficient functioning.
          We have been able to create a niche in the domain by providing
          international quality products to our customers.
        </p>
        <p className=" text-[14px] text-justify md:text-lg mt-10  font-bold ">
          We are backed by a state-of-the-art manufacturing facility, which
          helps us in meeting the bulk requirements of our customers within the
          stipulated time frame. It is installed with latest technology and
          machinery that are required for carrying out production process
          smoothly and accurately. In addition to this, we have a team of expert
          professionals, which keeps a regular touch with the customers for
          knowing their ever growing demands and requirements in a better way.
          It also enables us to supply our range across the global market for
          meeting the needs of our international customers. We offer our
          products under the own brand name like Gomel, Adson and Adarsh.
        </p>
      </div>

      <Typography
        component="h1"
        variant="h2"
        align="center"
        color="text.primary"
        gutterBottom
      >
        {/* <div className='w-full'>
            
              <p className='mt-8 text-2xl  md:text-4xl'>Our Product List</p> 
              <div className="w-6 h-1 bg-green-400	 mx-auto mt-4 mb-2"></div>

             </div> */}
      </Typography>
      <Stack sx={{ pt: 4 }} direction="row" spacing={2} justifyContent="center">
        <Button variant="contained">
          <p className="text-xl">Our Product List</p>{" "}
        </Button>
      </Stack>

      <Container sx={{ py: 8 }} maxWidth="lg">
        {/* End hero unit */}
        <Grid container spacing={4}>
          {cards.map((card, temp = 0, temp2 = 0) => (
            <Grid item key={card} xs={12} sm={6} md={4}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <CardMedia
                  component="div"
                  sx={{
                    // 16:9
                    pt: "56.25%",
                  }}
                  image={count[temp]}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Heading
                  </Typography>
                  <Typography>
                    This is a media card. You can use this section to describe
                    the content.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" onClick={() => handleOpen(card)}>
                    View{console.log(temp2)}
                  </Button>
                  
                  <Button size="small">
                    <Link to="/contactus">
                      {" "}
                      <p className="text-white"> Contact Us</p>
                    </Link>
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      {/*  */}
      <hr className="bg-[#666666] h-[0.09rem]" />
      <Footer />
    </>
  );
}
