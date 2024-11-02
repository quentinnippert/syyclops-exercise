from pydantic import BaseModel
from datetime import datetime

class Gender(BaseModel):
    
    id: int
    name: str
    status: bool
    created_at: datetime

    class Config:
        orm_mode = True