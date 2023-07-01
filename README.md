# Three way project of a personal Time capsule

## Server

- fastify
- prisma
- SQLite
- createWriteStream to stream save file
- z from zod to validate data
- Sending code to github and getting access_token
- using jwt to encode the info and send it back to the front end
- using fastify static to expose folder with files uploaded (not good for production)

---

## Mobile

- expo-router (routes 'next-like' organized by folders
  )
- nativewind (tailwindcss for react-native)
- \_layout and Stack navigation used toguether
- SecureStore used to local store user_token (like a cookie)
- asChild on Link to use it as a touchable opacity
- expo-image-picker to send image to the backend
- Sending FormData with image file to the backend

---

## WEB

- Nextjs + Typescript
- Axios
- Tailwindcss
- jwt-decode to decode token from backend (with user infos)
- 'user client' pages for local client side rendering
- js-cookie to get cookies on a 'user client' page

## To do next

- Memory edit
- share memory
- select memory date (not just using the now)
- responsiveness
