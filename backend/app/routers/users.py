from fastapi import APIRouter, HTTPException
from app.crud.users import read_active_users, read_user_by_id, update_user
from app.schemas.user import User, UserUpdateBody
from app.utils.validation import ConstraintsList
from app.utils.validation import Validation
router = APIRouter()

@router.get("/users", response_model=list[User])
def read(): 
    users = read_active_users()

    return users

@router.put('/users/{id}', response_model=User)
def update(id: int, user: UserUpdateBody):

    userExists = read_user_by_id(id)

    constraintsList = ConstraintsList()
    constraints = constraintsList.users('PUT')

    validation = Validation(constraints)
    errors = validation.validate(user)

    if errors:
        raise HTTPException(status_code=400, detail=errors)

    if not userExists:
        raise HTTPException(status_code=404, detail="User not found")
    
    updatedUser = update_user(id, user)
    
    return updatedUser