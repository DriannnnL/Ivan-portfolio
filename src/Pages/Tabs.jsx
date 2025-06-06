import React, { useEffect, useState } from "react";
import { db, collection } from "../firebase";
import { getDocs } from "firebase/firestore";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CardProject from "../Components/Card";
import Certificate from "../Components/Certificate";
import PIcon from "../Components/CardIcon";
import AOS from "aos";
import "aos/dist/aos.css";
import { styled } from "@mui/system";

function TabPanel(props) {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

const staticProjects = [
  {
    id: 1,
    Img: "/Dashboard.png",
    Title: "Frontend Web Developer",
    Name: "Homedevs",
    Description: "HTML | CSS | JS | Tailwind CSS | ReactJs",
    Link: "https://example.com/project1",
  },
  {
    id: 2,
    Img: "/BeCreative.png",
    Title: "Frontend Web Developer",
    Name: "Faust Aegis Network",
    Description: "HTML | CSS | JS | Tailwind CSS | ReactJs | Redux",
    Link: "https://example.com/project2",
  },
  {
    id: 3,
    Img: "/TAP2EARN.png",
    Title: "Frontend Web Developer",
    Name: "TAP2EARN Crypto Game",
    Description: "Next.js | CSS | JS | Tailwind CSS ",
    Link: "https://example.com/project3",
  },
  // {
  //   id: 4,
  //   Img: "/portofolio-labella.png",
  //   Title: "Frontend Web Developer",
  //   Name: "Labella Online Strore",
  //   Description: "HTML | CSS | JS | Bootstrap | Laravel (PHP)",
  //   Link: "https://example.com/project3",
  // },
  // {
  //   id: 5,
  //   Img: "/portofolio-icas.png",
  //   Title: "Backtend Web Developer",
  //   Name: "INTERNATIONAL CONFERENCE ON APPLIED SCIENCE 2024",
  //   Description: "Laravel (PHP) | MySQL",
  //   Link: "https://example.com/project3",
  // },
  // {
  //   id: 6,
  //   Img: "/portofolio-ptksn.png",
  //   Title: "Frontend Web Developer",
  //   Name: "PT KSN",
  //   Description: "HTML | CSS | JS | Bootstrap | Laravel (PHP)",
  //   Link: "https://example.com/project3",
  // },
  // {
  //   id: 7,
  //   Img: "/portofolio-sneakers.png",
  //   Title: "Frontend Web Developer",
  //   Name: "Naira Sneakers",
  //   Description: "HTML | CSS | JS | Bootstrap | Laravel (PHP)",
  //   Link: "https://example.com/project3",
  // },
  // {
  //   id: 8,
  //   Img: "/portofolio-njy.png",
  //   Title: "Fullstack Web Developer",
  //   Name: "Nata Jaya Electro",
  //   Description: "HTML | CSS | JS | Bootstrap | Laravel (PHP) | MySQL",
  //   Link: "https://example.com/project3",
  // },
  // {
  //   id: 9,
  //   Img: "/portofolio-silancar.png",
  //   Title: "Backtend Web Developer",
  //   Name: "Silancar Nakertranskonut",
  //   Description: "Laravel (PHP) | MySQL",
  //   Link: "https://example.com/project3",
  // },
  // {
  //   id: 10,
  //   Img: "/portofolio-dipinus.png",
  //   Title: "Backtend Web Developer",
  //   Name: "Dipinus",
  //   Description: "Laravel (PHP) | MySQL",
  //   Link: "https://example.com/project3",
  // },
  // {
  //   id: 11,
  //   Img: "/portofolio-bpskljawa.png",
  //   Title: "Fullstack Web Developer",
  //   Name: "BPSKL Jawa",
  //   Description: "HTML | CSS | JS | Bootstrap | Laravel (PHP) | MySQL",
  //   Link: "https://example.com/project3",
  // },
  // {
  //   id: 12,
  //   Img: "/portofolio-destinasi.png",
  //   Title: "Fullstack Web Developer",
  //   Name: "Wisata Alam",
  //   Description: "HTML | CSS | JS | Bootstrap | Laravel (PHP) | MySQL",
  //   Link: "https://example.com/project3",
  // },
  // {
  //   id: 13,
  //   Img: "/portofolio-bakul.png",
  //   Title: "Frontend Web Developer",
  //   Name: "Beasiswa Kuliah (Bakul)",
  //   Description: "HTML | CSS | JS | Bootstrap | Laravel (PHP)",
  //   Link: "https://example.com/project3",
  // },
];

export default function FullWidthTabs() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  const [projects, setProjects] = useState([]);
  const [certificates, setCertificates] = useState([]);
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [showAllCertificates, setShowAllCertificates] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const projectCollection = collection(db, "projects");
        const certificateCollection = collection(db, "certificates");
        const projectQuerySnapshot = await getDocs(projectCollection);
        const certificateQuerySnapshot = await getDocs(certificateCollection);

        const projectData = projectQuerySnapshot.docs.map((doc) => doc.data());
        const certificateData = certificateQuerySnapshot.docs.map((doc) =>
          doc.data()
        );

        setProjects(projectData);
        setCertificates(certificateData);
      } catch (error) {
        console.error("Error fetching data from Firebase:", error);
      }
    };

    fetchData();
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleShowMoreProjects = () => {
    setShowAllProjects(true);
  };

  const handleShowMoreCertificates = () => {
    setShowAllCertificates(true);
  };

  const handleShowLessProjects = () => {
    setShowAllProjects(false);
  };

  const handleShowLessCertificates = () => {
    setShowAllCertificates(false);
  };

  return (
    <div
      className="md:px-[10%]  md:mt-20 mt-10"
      id="Tabs"
      data-aos="fade-up"
      data-aos-duration="800"
    >
      <Box sx={{ width: "100%" }}>
        <AppBar
          position="static"
          sx={{ bgcolor: "transparent" }}
          className="px-[6%]"
        >
          <Tabs
            value={value}
            onChange={handleChange}
            textColor="secondary"
            indicatorColor="secondary"
            variant="scrollable"
            scrollButtons="auto"
            sx={{
              display: "flex",
              justifyContent: "center",
              width: "auto",
              margin: "0 auto",
            }}
          >
            <Tab
              label="Project"
              {...a11yProps(0)}
              sx={{
                fontWeight: "Bold",
                color: "#ced4d7",
                fontSize: ["1rem", "2rem"],
              }}
            />
            <Tab
              label="Certificate"
              {...a11yProps(1)}
              sx={{
                fontWeight: "Bold",
                color: "#ced4d7",
                fontSize: ["1rem", "2rem"],
              }}
            />
            <Tab
              label="Tech Stack"
              {...a11yProps(2)}
              sx={{
                fontWeight: "Bold",
                color: "#ced4d7",
                fontSize: ["1rem", "2rem"],
              }}
            />
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={value}
          onChangeIndex={setValue}
        >
          <TabPanel value={value} index={0} dir={theme.direction}>
            <div className="container mx-auto flex justify-center items-center overflow-hidden ">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {staticProjects.map((project, index) => (
                  <div
                    className="w-ful h-[100%] rounded-lg overflow-hidden object-fill"
                    key={project.id}
                    data-aos={
                      index % 3 === 0
                        ? "fade-up-right"
                        : index % 3 === 1
                        ? "fade-up"
                        : "fade-up-left"
                    }
                    data-aos-duration={
                      index % 3 === 0
                        ? "1000"
                        : index % 3 === 1
                        ? "1200"
                        : "1000"
                    }
                  >
                    <CardProject
                      Img={project.Img}
                      Title={project.Title}
                      Name={project.Name}
                      Description={project.Description}
                      Link={project.Link}
                      id={project.id}
                    />
                  </div>
                ))}

                {/* {(showAllProjects ? projects : projects.slice(0, 6)).map(
                  (project, index) => (
                    <div
                      key={index}
                      data-aos="fade-up"
                      data-aos-duration="1000"
                    >
                      <CardProject
                        Img={project.Img}
                        Title={project.Title}
                        Description={project.Description.split(".")[0] + "."} // Ambil kalimat pertama saja
                        Link={project.Link}
                      />
                    </div>
                  )
                )} */}
              </div>
            </div>
            {projects.length > 6 && (
              <div className="mt-4 text-[#ced4d7] ">
                {showAllProjects ? (
                  <button
                    onClick={handleShowLessProjects}
                    className="opacity-75 italic text-sm"
                  >
                    See Less
                  </button>
                ) : (
                  <button
                    onClick={handleShowMoreProjects}
                    className="opacity-75 text-sm"
                  >
                    See More
                  </button>
                )}
              </div>
            )}
          </TabPanel>
          <TabPanel value={value} index={1} dir={theme.direction}>
            <div className="container mx-auto flex justify-center items-center overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-3 md:gap-5 gap-4">
                {(showAllCertificates
                  ? certificates
                  : certificates.slice(0, 6)
                ).map((Sertifikat, index) => (
                  <div key={index} data-aos="fade-up" data-aos-duration="1000">
                    <Certificate ImgSertif={Sertifikat.Img} />
                  </div>
                ))}
              </div>
            </div>
            {certificates.length > 6 && (
              <div className="mt-4 text-[#ced4d7]">
                {showAllCertificates ? (
                  <button
                    onClick={handleShowLessCertificates}
                    className="opacity-75 italic text-sm"
                  >
                    See Less
                  </button>
                ) : (
                  <button
                    onClick={handleShowMoreCertificates}
                    className="opacity-75 text-sm"
                  >
                    See More
                  </button>
                )}
              </div>
            )}
          </TabPanel>
          <TabPanel value={value} index={2} dir={theme.direction}>
            <div className="container mx-auto flex justify-center items-center overflow-hidden">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
                {/* Programming icon / tech stack  */}
                <PIcon PIcon="html.svg" Language="HTML" />
                <PIcon PIcon="css.svg" Language="CSS" />
                <PIcon PIcon="javascript.svg" Language="JavaScript" />
                <PIcon PIcon="tailwind.svg" Language="Tailwind CSS" />
                <PIcon PIcon="reactjs.svg" Language="ReactJS" />
                <PIcon PIcon="vite.svg" Language="Vite" />
                <PIcon PIcon="redux.svg" Language="Redux" />
                <PIcon PIcon="bootstrap.svg" Language="Bootstrap" />
                <PIcon PIcon="vercel.svg" Language="Vercel" />
                <PIcon PIcon="MUI.svg" Language="Material UI" />
                <PIcon PIcon="nextjs.svg" Language="NextJs" />
                <PIcon PIcon="git.svg" Language="Git" />
              </div>
            </div>
          </TabPanel>
        </SwipeableViews>
      </Box>
    </div>
  );
}
