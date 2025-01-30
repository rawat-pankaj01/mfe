# MicroFrontEnds Architecture with React & Vue

This repository demonstrates a **MicroFrontEnds (MFE)** architecture using **React** and **Vue.js**, built with the **Module Federation Plugin** of Webpack.

It includes four applications:
- **Container (Host)** – The shell application
- **Dashboard** – A Vue.js-based MFE
- **Auth** – A React-based MFE
- **Marketing** – A React-based MFE

## 🚀 Features
✅ **MicroFrontEnds using Module Federation**  
✅ **React & Vue apps working together**  
✅ **CI/CD Pipeline for Deployment**  
✅ **Hosted on AWS with CloudFront**  

---

## 📂 Project Structure
```
/mfe-project
  ├── /container  (Host app - React)
  ├── /dashboard  (React MFE)
  ├── /auth       (React MFE)
  ├── /marketing  (Vue.js MFE)
  ├── README.md
```
---

## 🛠 Tech Stack
- **Webpack Module Federation** for MicroFrontEnds
- **React 18** for Container, Dashboard, and Auth
- **Vue 3** for Marketing
- **TypeScript** (Optional)
- **AWS CloudFront** for hosting
- **GitHub Actions** for CI/CD

---

## 🔧 Setup & Installation

### 1️⃣ Clone the Repo
```sh
git clone https://github.com/your-repo-name.git
cd mfe-project
```

### 2️⃣ Install Dependencies
```sh
npm install
```

### 3️⃣ Run Individual Apps
```sh
cd container && npm start
cd dashboard && npm start
cd auth && npm start
cd marketing && npm start
```

---

## 🚀 CI/CD Pipeline
The project uses **GitHub Actions** to automate deployments to **AWS CloudFront**.  
Each app is deployed to an **S3 bucket** and served via **CloudFront**.

### Workflow Overview
1. **Push to `master` branch** triggers deployment  
2. **Build & Upload to AWS S3**  
3. **CloudFront cache invalidation**  

---

## 📜 License
This project is **open-source** under the **MIT License**.

---

🚀 **Enjoy building scalable MicroFrontEnds!** Let me know if you need modifications! 🎉
