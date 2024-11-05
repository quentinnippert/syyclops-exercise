from app.database import engine
from app.schemas.user import User, UserUpdateBody
from sqlalchemy import text

def read_active_users() -> list[User]:
    with engine.connect() as connection:
        result = connection.execute(text("""
                                         SELECT u.*, g.name AS gender_name
                                         FROM users u
                                         INNER JOIN genders g
                                         ON g.id = u.gender_id
                                         WHERE u.status = 1
                                         ORDER BY u.created_at DESC
                                         """))
        users = [row._mapping for row in result]

        return users

def read_user_by_id(user_id: int) -> User:
    with engine.connect() as connection:
        result = connection.execute(text("SELECT * FROM users WHERE id = :id LIMIT 1"), {"id": user_id})
        return result.fetchone()
    
def update_user(user_id: int, user: UserUpdateBody) -> User:
    with engine.connect() as connection:
        with connection.begin():
            result = connection.execute(
                text(
                    """UPDATE users SET
                    first_name = :first_name,
                    last_name = :last_name,
                    birth_date = :birth_date,
                    gender_id = :gender_id,
                    email = :email,
                    phone = :phone,
                    last_updated_at = NOW()
                    WHERE id = :id
                    RETURNING
                    *,
                    (SELECT name
                    FROM genders
                    WHERE id = :gender_id) AS gender_name
                    """
                ),
                {
                    "id": user_id,
                    "first_name": user.first_name,
                    "last_name": user.last_name,
                    "birth_date": user.birth_date,
                    "gender_id": user.gender_id,
                    "email": user.email,
                    "phone": user.phone
                }
            )
        
        return result.fetchone()


