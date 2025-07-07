# 🍳 Grocery List Planner

A cloud-native recipe and meal planning app that helps users create, schedule, and organize meals while automatically generating a grocery list. Built with **Next.js** and powered by **AWS** for full-stack scalability.

## 🛠 Tech Stack

- **Frontend:** Next.js (App Router), React, Tailwind CSS
- **State Management:** React Context / Local State (MVP)
- **Backend:** AWS Lambda, RDS (PostgreSQL), API Gateway
- **Auth:** AWS Cognito
- **Storage:** S3 (for optional image uploads)
- **Hosting:** Next.js frontend hosted via S3 + CloudFront

## 🚀 Features

| Feature                    | Description                                                       |
|----------------------------|-------------------------------------------------------------------|
| 🔐 User Authentication     | Sign up and login using AWS Cognito                               |
| 🍽 Create Recipes           | Title, ingredients list, and step-by-step instructions            |
| 📖 View Recipes             | Browse list of recipes and view individual details                |
| 📅 Meal Planner             | Assign recipes to days of the week (Mon–Sun)                      |
| 🛒 Grocery List Generator   | Auto-combine ingredients from planned meals into a shopping list  |
| ☁️ Serverless API           | Lambda functions handle API requests to RDS via Prisma            |
| 🖼️ Image Uploads (Optional) | Upload recipe images to S3 using presigned URLs                  |
| 🌐 Deployment               | Deployed via AWS CloudFront + S3 (frontend) and Lambda (API)      |

## 📦 Folder Structure

grocery-list-planner/  
├── public/  
├── src/  
│   ├── components/  
│   ├── pages/ or app/ (Next.js)  
│   ├── lib/ (Prisma + AWS helpers)  
│   ├── styles/  
│   └── context/  
├── prisma/  
├── .env  
└── README.md  

## ⚙️ Setup Instructions

1. **Clone the repo**  
   `git clone https://github.com/yourusername/grocery-list-planner.git && cd grocery-list-planner`

2. **Install dependencies**  
   `npm install`

3. **Configure AWS & Database**  
   - Set up AWS Cognito, RDS (PostgreSQL), S3, and Lambda  
   - Add your environment variables to `.env`:

```
DATABASE_URL=postgresql://...
NEXT_PUBLIC_COGNITO_USER_POOL_ID=...
NEXT_PUBLIC_COGNITO_CLIENT_ID=...
AWS_REGION=...
S3_BUCKET_NAME=...
```

4. **Generate Prisma Client**  
   `npx prisma generate`

5. **Start Development Server**  
   `npm run dev`

## 🧪 Optional Enhancements

- AI-generated recipes via OpenAI API  
- Weekly email summary with planned meals and grocery list  
- Mobile-first enhancements using React Native  

## 📸 Screenshots

_Add screenshots of the recipe list, meal planner, and grocery list._

## 📄 License

MIT — build, customize, and expand freely.
