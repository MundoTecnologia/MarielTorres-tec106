from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .routes.route_send_sms_from_whatsapp import route_send_sms_from_whatsapp

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  
    allow_credentials=True,
    allow_methods=["*"],   
    allow_headers=["*"],   
)

app.include_router(route_send_sms_from_whatsapp)
