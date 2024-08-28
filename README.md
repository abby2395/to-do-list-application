# To-Do List Application

A simple To-Do List application built with React for the frontend and Django for the backend. This app allows users to create, view, complete, and delete tasks.

## Features

- Add new tasks with an optional description.
- View a list of tasks with options to mark them as complete or delete them.
- Responsive design for a better user experience on different devices.

## Technologies Used

- **Frontend:** React, Material UI
- **Backend:** Django, Django REST Framework

## Getting Started

### Prerequisites

- **Node.js** and **npm/yarn** for running the frontend
- **Python** and **pip** for running the backend
- **Django** and **Django REST Framework** for the backend

### Backend Setup

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/your-username/your-repo.git
   cd your-repo/backend
   ```

2. **Create and Activate a Virtual Environment:**
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows use `venv\Scripts\activate`
   ```

3. **Install Backend Dependencies:**
   ```bash
   pip install -r requirements.txt
   ```

4. **Apply Migrations:**
   ```bash
   python manage.py migrate
   ```

5. **Run the Development Server:**
   ```bash
   python manage.py runserver
   ```
   Your Django backend should now be running at `http://localhost:8000/api/tasks/`.

### Frontend Setup

1. **Navigate to the Frontend Directory:**
   ```bash
   cd ../frontend
   ```

2. **Install Frontend Dependencies:**
   ```bash
   npm install  # or `yarn install`
   ```

3. **Run the Development Server:**
   ```bash
   npm start  # or `yarn start`
   ```
   Your React frontend should now be running at `http://localhost:3000`.

## Configuration

### CORS Configuration

Ensure that your Django backend allows requests from the frontend. In `settings.py`, configure `CORS_ALLOWED_ORIGINS`:

```python
CORS_ALLOWED_ORIGINS = [
    "http://localhost:3000",
]
```

### Axios Configuration

In your React app, ensure that Axios requests use the correct URL:

```javascript
await axios.post('http://localhost:8000/api/tasks/', { title, description });
```

## Deployment

### Deploying the Frontend

1. **Vercel:**
   - Go to [Vercel](https://vercel.com/) and sign up or log in.
   - Click "New Project" and connect your GitHub, GitLab, or Bitbucket account.
   - Import your frontend repository.
   - Ensure build settings are correct (`npm run build` or `yarn build`).
   - Click "Deploy" and wait for the deployment. Vercel will provide a URL for your live site.

2. **Netlify:**
   - Go to [Netlify](https://www.netlify.com/) and sign up or log in.
   - Click "New site from Git" and connect your GitHub, GitLab, or Bitbucket account.
   - Select your frontend repository.
   - Ensure build settings are correct (`npm run build` or `yarn build`).
   - Click "Deploy site" and wait for the deployment. Netlify will provide a URL for your live site.

### Deploying the Backend

1. **Render:**
   - Go to [Render](https://render.com/) and sign up or log in.
   - Click "New" and select "Web Service."
   - Connect your GitHub, GitLab, or Bitbucket account and select your backend repository.
   - Configure build and start commands (`pip install -r requirements.txt` and `gunicorn your_project_name.wsgi`).
   - Click "Create Web Service" and wait for the deployment. Render will provide a URL for your backend.

2. **Railway:**
   - Go to [Railway](https://railway.app/) and sign up or log in.
   - Click on "New Project" and connect your GitHub account.
   - Select your backend repository.
   - Configure build and start commands (`pip install -r requirements.txt` and `gunicorn your_project_name.wsgi`).
   - Click "Deploy" and wait for the deployment. Railway will provide a URL for your backend.

## Testing

1. **Verify Backend API:**
   - Open a web browser and navigate to `http://localhost:8000/api/tasks/` to see if the API responds with the expected JSON data.

2. **Verify Frontend:**
   - Open a web browser and navigate to `http://localhost:3000` to ensure the frontend loads correctly and interacts with the backend.

3. **Check Browser Console:**
   - Use the browser console and network tab to check for any errors or issues with requests.

## Troubleshooting

- **Network Errors:** Verify that the frontend and backend servers are running and the URLs are correctly configured.
- **CORS Issues:** Ensure `CORS_ALLOWED_ORIGINS` in Django is correctly set.
- **Deployment Issues:** Check deployment logs for errors and ensure all environment variables and configurations are correctly set.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements

- React and Material UI for the frontend
- Django and Django REST Framework for the backend
- Vercel, Netlify, Render, and Railway for free hosting solutions
```
This `README.md` file should provide clear instructions for setting up, running, and deploying your application. Adjust any specific details like repository URLs or project names as needed.
