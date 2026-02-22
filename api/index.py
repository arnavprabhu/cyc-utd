from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from api.core.config import settings as app_settings
from api.routers import contact, health, roster

app = FastAPI(
    title="Consult Your Community API",
    description="API for contact form and team roster",
    docs_url="/api/py/docs",
    openapi_url="/api/py/openapi.json",
    redoc_url="/api/py/redoc",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=app_settings.cors_origins_list,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(roster.router)
app.include_router(health.router)
app.include_router(contact.router)