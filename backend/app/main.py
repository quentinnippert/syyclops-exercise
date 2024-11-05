from fastapi import FastAPI
from app.routers import users, genders
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

origins = [
    "http://localhost:3000",
    "http://127.0.0.1:3000"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["GET", "PUT"],
    allow_headers=["*"],
)

app.include_router(users.router)
app.include_router(genders.router)

@app.get("/")
def read_root():
    return {"Hello": "World"}