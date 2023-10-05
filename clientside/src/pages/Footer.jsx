

function Footer() {
  // styles
  const footerStyle = {
    position: "fixed",
    left: "0",
    bottom: "0",
    width: "100%",
    backgroundColor: "red",
    color: "white",
    textAlign: "center",
    height: '50px'
  };
  
  return (
    <footer className={"footer mt-auto py-3 bg-body-tertiary"} style={footerStyle}>
      <div className="container">
        <span className="text-body-secondary">
        © 2023 Mwamuziscodev As, Inc
        </span>
      </div>
    </footer>
  );
}

export default Footer;
