require('dotenv').config()
const app = require('./app')
const connectDB = require('./database/connection')

const PORT = process.env.PORT || 5000

const startServer = async () => {
  try {
    await connectDB()
    app.listen(PORT, () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`)
      console.log(`📦 Environment: ${process.env.NODE_ENV}`)
      console.log(`🔗 Client URL: ${process.env.CLIENT_URL}`)
    })
  } catch (error) {
    console.error('Failed to start server:', error)
    process.exit(1)
  }
}

startServer()
