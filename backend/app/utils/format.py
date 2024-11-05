from app.schemas.user import User, UserReadList

def format_users(users: list[User]) -> list[UserReadList]:
    formatted_users = []
    for user in users:
        formatted_user = {
            "id": user.id,
            "first_name": user.first_name,
            "last_name": user.last_name,
            "birth_date": user.birth_date.strftime("%Y-%m-%d"),
            "gender": {
                "id": user.gender_id,
                "name": user.gender_name
            },
            "email": user.email,
            "phone": user.phone,
            "status": user.status,
            "created_at": user.created_at.strftime("%Y-%m-%d %H:%M:%S"),
            "last_updated_at": user.last_updated_at.strftime("%Y-%m-%d %H:%M:%S") if user.last_updated_at else None
        }
        formatted_users.append(formatted_user)

    return formatted_users