from fastapi import FastAPI, Request
from fastapi.templating import Jinja2Templates
from fastapi.staticfiles import StaticFiles

app = FastAPI()
templates = Jinja2Templates(directory="templates/html")

app.mount("/static", StaticFiles(directory="templates/static"), name="static")


@app.get("/")
async def home(request: Request):
    return templates.TemplateResponse("contents/abouts/index.html", {"request": request, "title": "Home Page"})

@app.get("/about")
async def about(request: Request):
    return templates.TemplateResponse("contents/abouts/about.html", {"request": request, "title": "About Us"})

@app.get("/history")
async def history(request: Request):
    return templates.TemplateResponse("contents/abouts/history.html", {"request": request, "title" : "History of KIS"})

@app.get("/mission-vision")
async def request_role(request: Request):
    return templates.TemplateResponse("contents/abouts/mission-vision.html", {"request": request, "title" : "Mission and Vision"})

@app.get("/core-values")
async def request_role(request: Request):
    return templates.TemplateResponse("contents/abouts/core-values.html", {"request": request, "title" : "Core Values"})

@app.get("/request-role")
async def request_role(request: Request):
    return templates.TemplateResponse("login.html", {"request": request, "title" : "Login - KIS"})
