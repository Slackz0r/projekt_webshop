# Webshop 🛍️

![Next.js](https://img.shields.io/badge/Next.js-black?logo=next.js)
![React](https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)
![Tailwind](https://img.shields.io/badge/Tailwind-06B6D4?logo=tailwindcss&logoColor=white)
![JSON Server](https://img.shields.io/badge/JSON--server-green)
![Status](https://img.shields.io/badge/status-work%20in%20progress-orange)

This is a school project where I built an admin interface for a webshop using primarily **Next.js**, **React** and **TypeScript**.

The main purpose of this project was for me to get a better understanding of **searchParams**, the difference between **server/client components**, **CRUD operations**, and the connection between **database** and **frontend visualization/interactivity**.

My primary focus has been getting the features in place and working correctly rather than spending too much time making something visually stunning. In my opinion, that's the easy part, which I decided to save — apart from the absolute basic layout — for last. Mostly due to the limited time given for this project.

This is still very much a work in progress, but I'm learning a lot along the way and getting a deeper understanding of how to work with the URL, as well as architecture and the component tree.

## Demo 🎬

This project is not yet deployed to Vercel due to a couple of unfinished features that need to be fixed before I can successfully deploy.

## Install ⚙️

If you want to run this project locally, you can run the following commands in your terminal:

```bash
git clone https://github.com/Slackz0r/projekt_webshop.git
cd projekt_webshop
npm install
npm run dev:full
```

_This will install and run both the project and the data server._

## Features ✨

- View all available products

- Database search with URLSearchParams

- Filter on either category or text content

- Real-time stock status for products

- Edit/Delete/Add product (in progress)

## Tech stack 🧰

- Next.js

- React

- TypeScript

- Tailwind

- JSON-server

<details> <summary><strong>Reasoning 💭</strong></summary>

<br>

**Frameworks:**
I'm a frontend developer yearning to become fullstack, so React/Next.js was the obvious choice for this project. It's used by many companies and is a great way of learning how to build fullstack applications.

**Styling:**
I have previously preferred to write my CSS from scratch using "vanilla" CSS, CSS Modules or SASS. I like to think architecture, come up with thought-out solutions and be in control of how things are structured. Partly for learning purposes and partly because then I can structure things how I want for a better overview. This time, however, I chose Tailwind to get more accustomed to working with those types of libraries and also because of the amount of time and effort it takes to write clean and well thought-out CSS.

**Database:**
My initial thought on the database was to use Supabase with Prisma. However, after some initial research along with a fair bit of trial and error, I came to the conclusion that JSON Server with properly set mock data would be enough for now. Since my purpose with this project was not to set up a database, but rather to work with searchParams, server/client components and interactivity/dynamic functionality, I figured that JSON Server had all the features needed for the purpose of this project.

</details>

## What's next? 🚀

- Finish Edit/Delete/Add product functionality

- Pagination for product list

- SVGs for different product categories

- Improved styling

- Deployment

## Future development 🔮

- Replace JSON Server with Supabase

- Customer interface

- Login and authentication

## Author 👤

_Gustav Aldenberg_ aka _Slackz0r_
