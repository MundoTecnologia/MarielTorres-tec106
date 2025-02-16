from typing import List
from fastapi import APIRouter
from ..schemas.schema_request import Sch_Request
from ..services.service_send_sms_from_whatsapp import Ser_send_sms_from_whatsapp


route_send_sms_from_whatsapp = APIRouter(
    prefix="/whatsapp",
)

@route_send_sms_from_whatsapp.get("")
async def send_sms_from_whatsapp():

    return {"massege": "Esta consumindo a API do workLink"}


@route_send_sms_from_whatsapp.post("")
async def send_sms_from_whatsapp(req: List[Sch_Request]):
    
    res = await Ser_send_sms_from_whatsapp(req)
    
    return res