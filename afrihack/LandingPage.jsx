import backgroundImage from "./images/background.png";

function LandingPage() {
    const bodyStyle = {
        margin: "0",
        border:"0",
        height: "100vh", // Make the div fill the viewport height
        width: "100%", // Full width

    }
  const divStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundsize: "100% 100%",
    backgroundSize: "cover", // Ensure the image covers the entire element
    backgroundPosition: "center", // Center the image
    height: "100vh", // Make the div fill the viewport height
    width: "100%", // Full width
  };

  return (
    <body style={bodyStyle}>
      {/* Your content goes here */}
      <img style={divStyle} src={backgroundImage}></img>
    </body>
  );
}

export default LandingPage;
