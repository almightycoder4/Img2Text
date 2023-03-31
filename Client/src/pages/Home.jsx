import React, { useState, useEffect } from "react";
import Loader from "../components/Loader";
export default function Home() {
  const [image, setimage] = useState(null);
  const [Previmg, setPrevimg] = useState(null);
  const [load, setload] = useState(false);
  const [data, setdata] = useState("");
  const [route, setroute] = useState("");
  const [submit, setsubmit] = useState(false);
  useEffect(() => {
    if (submit) {
      setload(true);
      const formData = new FormData();
      formData.append("image", image);
      fetch(`https://parallel-super-rain.glitch.me/${route}`, {
        method: "POST",
        body: formData,
      })
        .then((res) => res.json())
        .then((data) => {
          setdata(data);
          setsubmit(false);
          setload(false);
        })
        .catch((error) => {
          setdata(error);
          console.error("Error:", error);
          setsubmit(false);
          setdata("error");
          setload(false);
        });
      setsubmit(false);
    }
  }, [submit, image, route]);
  const handleimage = (event) => {
    const file = event.target.files[0];
    setimage(file);
    setPrevimg(URL.createObjectURL(file));
  };
  const handleRoute = () => {
    let route = document.getElementById("idtype").value;
    setroute(route);
  };
  const handleSubmit = (event) => {
    setsubmit(true);
  };
  return (
    <>
      <>
        <h1>Image2JSON</h1>
        <h3>In this application you can get Govt ID details in JSON format.</h3>
        <h3>Supported ID Proofs:</h3>
        <p>
          Adhar Card{" (New/Old)"}, Pan Card, Driving License{" (New)"}, Other
          Text Image Files
        </p>

        <div id="">
          <div id="chooseimg">
            <select name="" id="idtype" onChange={handleRoute}>
              <option value="select">Select Document Type</option>
              <option value="readpan">Pan Card</option>
              <option value="readAadhar">Adhar Card</option>
              <option value="readDL">Driving License</option>
              <option value="readother">Read Document</option>
            </select>
            <input type="file" name="" id="image" onChange={handleimage} />
          </div>
          <div id="imgprev">
            {image && (
              <img
                src={Previmg}
                alt=""
                style={{ width: "500px", height: "250px" }}
              />
            )}
          </div>
        </div>
        <div id="jsonbox">
          <h3>JSON Data Format:</h3>

          <div
            style={{
              backgroundColor: "#F8F8F8",
              border: "1px solid #DDD",
              borderRadius: "5px",
              padding: "10px",
              fontFamily: "monospace",
              fontSize: "14px",
              color: "#d12222",
              width: "800px",
              height: "auto",
              margin: "auto",
            }}
          >
            {load ? (
              <Loader />
            ) : (
              data && (
                <pre style={{ display: "flex" }}>
                  {JSON.stringify(data, null, 4)}
                </pre>
              )
            )}
          </div>
        </div>
        <button id="uploadbtn" onClick={handleSubmit}>
          Get JSON Data
        </button>
      </>
      <br />
      <br />
      <footer>
        Design and Developed By Pawan Singh @{" "}
        <a href="https://pawandev.netlify.app">https://pawandev.netlify.app</a>
      </footer>
    </>
  );
}
