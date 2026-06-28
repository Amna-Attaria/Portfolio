# 🚀 Amna Khan — Premium MERN Portfolio

A world-class, production-ready portfolio website built with the MERN stack, featuring premium animations, glassmorphism design, and full backend integration.

---

## ✨ Features

- **Premium Dark UI** — Glassmorphism, gradients, and soft shadows
- **Framer Motion** — Cinematic scroll animations, stagger effects, page transitions
- **Animated Hero** — Particle system, typewriter roles, floating cards
- **All Sections** — Hero, About, Skills, Services, Projects, Experience, Testimonials, Education, Certifications, Stats, Blog, Contact
- **Contact Form** — React Hook Form + backend API + Nodemailer email notifications
- **Custom Cursor** — Magnetic cursor with smooth trailing ring
- **Scroll Progress Bar** — Linear gradient progress indicator
- **Responsive** — Mobile-first, works on all screen sizes
- **SEO Ready** — Meta tags, Open Graph, JSON-LD structured data

---

## 🗂 Project Structure

```
portfolio/
├── client/                 # React + Vite frontend
│   ├── src/
│   │   ├── animations/     # Framer Motion variants
│   │   ├── components/     # All section components
│   │   ├── constants/      # All data (projects, skills, etc.)
│   │   ├── layouts/        # MainLayout
│   │   ├── pages/          # Home page
│   │   └── routes/         # React Router
│   └── .env                # Frontend env vars
│
├── server/                 # Node.js + Express backend
│   ├── src/
│   │   ├── controllers/    # contactController.js
│   │   ├── database/       # MongoDB connection
│   │   ├── middleware/      # Error handler
│   │   ├── models/         # Contact Mongoose model
│   │   ├── routes/         # contactRoutes.js
│   │   ├── services/       # emailService.js (Nodemailer)
│   │   ├── validations/    # express-validator rules
│   │   ├── app.js          # Express app setup
│   │   └── server.js       # Entry point
│   └── .env                # Backend env vars
│
└── README.md
```

---

## 🚀 Quick Start

### 1. Clone & Install

```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio

# Install all dependencies
npm run install:all
```

### 2. Configure Environment Variables

**Frontend** (`client/.env`):
```env
VITE_API_URL=http://localhost:5000
VITE_EMAILJS_SERVICE_ID=your_service_id      # Optional: EmailJS
VITE_EMAILJS_TEMPLATE_ID=your_template_id    # Optional: EmailJS
VITE_EMAILJS_PUBLIC_KEY=your_public_key      # Optional: EmailJS
```

**Backend** (`server/.env`):
```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/portfolio
NODE_ENV=development
CLIENT_URL=http://localhost:5173

EMAIL_USER=your-gmail@gmail.com
EMAIL_PASS=your-gmail-app-password   # See Gmail App Password setup below
JWT_SECRET=your-secret-key
```

### 3. Run Development Servers

```bash
# Run both frontend + backend simultaneously
npm run dev

# Or separately:
npm run dev:client   # Frontend → http://localhost:5173
npm run dev:server   # Backend  → http://localhost:5000
```

---

## 📧 Gmail App Password Setup (Nodemailer)

1. Go to [Google Account Security](https://myaccount.google.com/security)
2. Enable **2-Step Verification**
3. Go to **App passwords** → Select app: "Mail" → Generate
4. Copy the 16-character password into `EMAIL_PASS` in `server/.env`

---

## 🔌 Contact Form — Option 2: EmailJS (Frontend Only)

If you prefer not to use a backend, replace the fetch call in `Contact.jsx` with:

```jsx
import emailjs from '@emailjs/browser'

const onSubmit = async (data) => {
  setLoading(true)
  try {
    await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      data,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
    toast.success('Message sent!')
    reset()
  } catch {
    toast.error('Failed to send. Please try again.')
  } finally {
    setLoading(false)
  }
}
```

---

## 🎨 Customization Guide

### Update Personal Info
Edit `client/src/constants/data.js`:
- `PERSONAL_INFO` — name, email, social links, resume URL
- `PROJECTS` — your real projects with images and links
- `SKILLS` — adjust percentages
- `EXPERIENCE` — your actual work history
- `EDUCATION` — your credentials

### Replace Resume
Update `PERSONAL_INFO.resumeUrl` in `data.js` to your actual resume PDF URL.

### Change Colors
Edit CSS variables in `client/src/index.css`:
```css
:root {
  --blue: #3B82F6;
  --purple: #8B5CF6;
}
```

---

## 🌐 Deployment

### Frontend (Vercel)
```bash
cd client && npm run build
# Deploy /dist to Vercel
```

### Backend (Railway / Render)
```bash
# Set all env vars in your hosting dashboard
# Start command: node src/server.js
```

---

## 🛠 Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React 18, Vite, Tailwind CSS |
| Animations | Framer Motion |
| Forms | React Hook Form |
| Notifications | React Hot Toast |
| Carousel | Swiper.js |
| Backend | Node.js, Express.js |
| Database | MongoDB, Mongoose |
| Email | Nodemailer (Gmail) |
| Security | Helmet, CORS, Rate Limiting |
| Validation | express-validator |

---

## 📄 API Reference

### POST `/api/contact`
Submit a contact form message.

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "service": "MERN Stack App",
  "message": "I need a full-stack app built..."
}
```

**Response:**
```json
{
  "success": true,
  "message": "Message received! I'll get back to you within 24 hours.",
  "data": { "id": "..." }
}
```

### GET `/api/health`
Health check endpoint.

---

## 📝 License
MIT — Free to use and customize.

---

Built with ❤️ by **Amna Khan** — MERN Stack Developer
