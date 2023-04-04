# 📊 IMG2JSON

This project is a backend program built using Node.js, Express, Tesseract JS, Google Vision AI, Morgan, Multer, and CORS. It extracts data from images of client's Aadhar Card, PAN Card, and Driving License, and outputs client details in JSON format.

#### Website is Live on : https://imgtojson.netlify.app/

![image](https://user-images.githubusercontent.com/113767530/229311543-68dc69b6-8fb1-40a3-a1e0-cdb9b4941856.png)



This is a free Glitch Server which takes 30s-50s to getting alive and then it ready to work.

#### You can also run on your local system by following instruction...

## 👇

## 🚀Getting Started

To get started, you'll need to install Node.js and npm on your machine. Then, clone this repository and install the dependencies:

```bash
git clone https://github.com/almightycoder4/Img2Text.git
cd Img2Text

```

Switch to the Server folder.

```bash
cd Server
npm install
nodemon index.js
```

You'll also need to set up credentials for Google Vision AI, and update the .env file with your credentials:

```bash
PRIVATE_KEY="YOUR GOOGLE VISON API PRIVATE KEY"
CLIENT_EMAIL="YOUR GOOGLE VISON API CLIENT_EMAIL ID"
```

![App Screenshot](https://github.com/almightycoder4/Img2Text/blob/main/ScreenShot/Server1.png?raw=true)

Server will start on http://localhost:3035/
## API Routes
#### Pan Card:- http://localhost:3035/readpan
#### Adhar Card:- http://localhost:3035/readAadhar
#### Driving License Card:- http://localhost:3035/readDL
#### Other Text Images:- http://localhost:3035/readother

### You can use any API Platform, I used POSTMAN API

Create a Request select POST option and then select body.
Change none to form-data and put key as "image" the select image file from local disk.
![App Screenshot](https://github.com/almightycoder4/Img2Text/blob/main/ScreenShot/Postman.png?raw=true)

## 🙏 Acknowledgments

This project was made possible thanks to the following technologies:

- Node.js
- Express
- Tesseract.js
- Sharp
- Google Vision AI
- Morgan
- Multer
- CORS
  #### Thank you to the developers of these amazing tools and technologies!
