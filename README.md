

## 🚧 Project Progress

### ✅ Backend (Completed)
- [x] **User Registration**
  - Users are stored in MongoDB with role, email, password, etc.
- [x] **Mock Login Endpoint**
  - Validates email + password and returns role
- [x] **JWT-Based In-Memory Sessions**
  - Used for basic session handling
- [x] **Role-Based Login Response**
  - Sends role info for frontend redirection
- [x] **Book Listings**
  - Add Book (Owner only)
  - Edit/Delete Book (Owner only)
  - Mark Book as Rented/Exchanged
- [x] **Get All Listings**
  - Supports filtering/search by title and location
- [x] **Backend Deployment**
  - Live on [Railway](https://railway.app)

---

### ✅ Frontend (Completed)
- [x] **Hero Section**
  - Intro to PagePal with CTA
- [x] **Register/Login Screens**
  - Fields: name, email, mobile, password, role
- [x] **Routing Based on Role**
  - Redirects Owner/Seeker to their respective dashboards
- [x] **Dark Mode Styling**
- [x] **Responsive Design**

---

### 🧩 Frontend (To-Do)
- [ ] **Owner Dashboard**
  - Add new book
  - Edit/Delete listings
  - Mark as Rented/Exchanged
- [ ] **Seeker Dashboard**
  - Browse available listings
  - View owner contact info
- [ ] **Book Listing UI**
  - Display: Title, Author, Location, Owner Info, Genre (optional)
- [ ] **Search/Filter**
  - Filter books by title, location (optional: genre)
- [ ] **Frontend Deployment**
  - Plan: Vercel

---

### 🧩 Backend (To-Do)
- [] Remove books that are exchanged from the listings