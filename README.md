# 🍳 Recipe Planner App

A cloud-native recipe and meal planning app that helps users create, organize, and schedule meals while automatically generating a grocery list. Built with **Next.js** and powered by **AWS** for full-stack scalability, using **Plain CSS + CSS Modules** for maintainable, scoped styling.

## 🛠 Tech Stack

- **Frontend:** Next.js (App Router), React, Plain CSS + CSS Modules
- **State Management:** React Local State (Planner, Recipes)
- **Backend:** AWS Lambda, RDS (PostgreSQL), API Gateway
- **Auth:** AWS Cognito
- **Storage:** S3 (for optional image uploads)
- **Hosting:** Frontend hosted via S3 + CloudFront

## 🚀 Features

| Feature                    | Description                                                       |
|----------------------------|-------------------------------------------------------------------|
| 🔐 User Authentication     | Sign up and login using AWS Cognito                               |
| 🍽 Create Recipes           | Title, ingredients list, and step-by-step instructions            |
| 📖 View Recipes             | Browse list of recipes and view individual details                |
| 📅 Weekly Planner           | Assign recipes to days of the week (Mon–Sun)                      |
| 🛒 Grocery List Generator   | Auto-combine ingredients from planned meals into a shopping list  |
| ☁️ Serverless API           | Lambda functions handle API requests to RDS via Prisma            |
| 🖼️ Image Uploads (Optional) | Upload recipe images to S3 using presigned URLs                  |
| 🌐 Deployment               | Deployed via AWS CloudFront + S3 (frontend) and Lambda (API)      |

## 📦 Folder Structure

recipe-planner-app/  
├── public/  
├── src/  
│   ├── components/  
│   ├── pages/ or app/ (Next.js App Router)  
│   ├── styles/ (Plain CSS / CSS Modules)  
│   ├── lib/ (Prisma + AWS helpers)  
│   └── hooks/  
├── prisma/  
├── .env  
└── README.md  

## ⚙️ Setup Instructions

1. **Clone the repo**  
   `git clone https://github.com/yourusername/recipe-planner-app.git && cd recipe-planner-app`

2. **Install dependencies**  
   `npm install`

3. **Configure AWS & Database**  
   - Set up AWS Cognito, RDS (PostgreSQL), S3, and Lambda  
   - Add your environment variables to `.env`:

