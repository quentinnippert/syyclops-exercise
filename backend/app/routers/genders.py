from fastapi import APIRouter, HTTPException
from app.crud.genders import get_active_genders
from app.schemas.gender import Gender

router = APIRouter()

@router.get('/genders', response_model=list[Gender])
def read_genders():
    genders = get_active_genders()
    
    return genders
