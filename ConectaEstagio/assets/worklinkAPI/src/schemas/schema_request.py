from pydantic import BaseModel


class Sch_Request(BaseModel):
    name: str
    phone: str