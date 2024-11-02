from app.database import engine
from sqlalchemy import text
from app.schemas.gender import Gender

def get_active_genders() -> list[Gender]:
    with engine.connect() as connection:
        result = connection.execute(text("SELECT * FROM genders WHERE status = True"))
        genders = [row._mapping for row in result]
        return genders
    
def gender_exists(id: int) -> bool:
    with engine.connect() as connection:
        result = connection.execute(text("SELECT EXISTS(SELECT 1 FROM genders WHERE id = :id)"), {"id": id})
        return result.fetchone()[0]