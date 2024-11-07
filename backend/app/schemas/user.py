from pydantic import BaseModel
from typing import Optional
from datetime import datetime, date

class User(BaseModel):
    id: int
    first_name: str
    last_name: str
    birth_date: date
    gender_id: int
    gender_name: str
    email: str
    phone: str
    status: int
    created_at: datetime
    last_updated: Optional[datetime] = None

    class Config:
        orm_mode = True

class UserUpdateBody(BaseModel):
    first_name: str
    last_name: str
    birth_date: date
    gender_id: int
    email: str
    phone: str

class UserGender (BaseModel):
    id: int
    name: str

class UserReadList(BaseModel):
    id: int
    first_name: str
    last_name: str
    birth_date: date
    gender: UserGender
    email: str
    phone: str
    status: int
    created_at: datetime
    last_updated: Optional[datetime] = None
