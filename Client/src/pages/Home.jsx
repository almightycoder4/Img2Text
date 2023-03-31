import React, { useState, useEffect } from "react";
export default function Home() {
  const [image, setimage] = useState(null);
  const [Previmg, setPrevimg] = useState(null);
  const [data, setdata] = useState("");
  const [route, setroute] = useState("");
  const [submit, setsubmit] = useState(false);
  useEffect(() => {
    if (submit) {
      console.log("fetching");
      const formData = new FormData();
      console.log(image);
      formData.append("image", image);
      console.log(route);
      fetch(`http://localhost:3035/${route}`, {
        method: "POST",
        body: formData,
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setdata(data);
          setsubmit(false);
        })
        .catch((error) => {
          setdata(error);
          console.error("Error:", error);
          setsubmit(false);
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
          <h3>Copy JSON Data Format:</h3>
          <div
            style={{
              display: "flex",
              backgroundColor: "#F8F8F8",
              border: "1px solid #DDD",
              borderRadius: "5px",
              padding: "10px",
              fontFamily: "monospace",
              fontSize: "14px",
              color: "#d12222",
            }}
          >
            <pre>
              <p>{JSON.stringify(data, null, 4)}</p>
            </pre>
          </div>
        </div>
        <button id="uploadbtn" onClick={handleSubmit}>
          Get JSON Data
        </button>
      </>
    </>
  );
}
