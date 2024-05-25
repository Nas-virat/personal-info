import { Project } from '../interface/project';

const BASE_IMG_URL = '../assets';

export const Allprojects: Project[] = [
    {
        name: "Pfin Personal-Finance Website",
        description: "PFin is a personal-finance website created for user to track personal financial status include Revenue, Expense, Asset, Debt and etc. PFin allows user to add their financial record and view their financial status in a dashboard",
        image: BASE_IMG_URL + '/pfin.png',
        link: "https://github.com/Nas-virat/PFin-personal-finance",
        tag: ["all","web"],
        skill: " Golang, Fiber, Next.js, PostgreSQL"
    },
    {
      name: "Thailand Tourist flow Dashboard",
      description: "Use Looker Data Studio to visualize the flow of the number of foreign tourist travel to Thailand",
      image: BASE_IMG_URL + '/Tourist_dashboard.png',
      link: "https://lookerstudio.google.com/reporting/693f2c97-d253-4014-a18f-b183efd6940e/page/oBXPD",
      tag: ["all","data"],
      skill: " Looker Data Studio"
    },
    {
      name: "Logistic Regression Prediction Telco Customer Churn",
      description: "This project use Logistic Regression to prediction customer churn and handling imbalance dataset by using SMOTE technique.",
      image: BASE_IMG_URL + '/TelecoChurn.png',
      link: "https://github.com/Nas-virat/Telco-Customer-Churn",
      tag: ["all","data"],
      skill: " Sci-kit Learn, Python, SMOTE, Logistic Regression"
    },
    {
      name: " Online Hotel Reservation Prediction using Machine Learning Algorithm",
      description: "Using machine learning algorithm to predict customer who likely to cancel the reservation.Exploratory Data Analysis and Data Visualization.",
      image: BASE_IMG_URL + '/HotelReservation.png',
      link: "https://github.com/Nas-virat/Hotel_reservation",
      tag : ["all","data"],
      skill: " Sci-kit Learn, Python, Machine Learning"
    },
    {
      name: "HR Management System",
      description: "Develop website for HR to manage employees in the company. For the front-end, we use React library and React Bootstrap framework. For the back-end, we use MySQL.",
      image: BASE_IMG_URL + '/HRMS.png',
      link: "https://github.com/Nas-virat/HR_management",
      tag : ["all","web"],
      skill: " React, Javascript, Node.js, MySql, Express.js"
    },
    {
      name: "Text Analysis on Medium Article",
      description: "Text Analysis on Medium Article using Python., Analyse Word Frequency and Exploratory Data Analysis and Data Visualization.",
      image: BASE_IMG_URL + '/Medium_text_analysis.png',
      link: "https://www.kaggle.com/code/nasvirat/medium-article-explore",
      tag : ["all","data"],
      skill: " Text Analysis"
    },
    {
      name : "SPFNA Stock Simulation Investment Game Platform",
      description:"Develop web application for investors to share their stock idea and simulate stock competition leaderboard for user",
      image: BASE_IMG_URL + '/stock.png',
      link: "https://github.com/Nas-virat/SPFNA-stock-idea",
      tag : ["all","web"],
      skill: " React, Typescript, Node.js, MongoDB, Express.js, Chart.js"
    },
    {
      name : "Food Delivery App using Flutter",
      description:"Create Food Delivery Front End Development using Flutter. This project is a part of the course Mobile Application Development. The project is about creating a food delivery app",
      image: BASE_IMG_URL + '/foodDelivery.jpg',
      link: "https://github.com/Nas-virat/SPFNA-stock-idea",
      tag : ["all","app"],
      skill: " Flutter"
    },
    
]