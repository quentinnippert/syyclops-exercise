from sqlalchemy import Column, Integer, String, SmallInteger, TIMESTAMP
from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()

class Gender(Base):
    __tablename__ = "genders"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(255), nullable=False)
    status = Column(SmallInteger, nullable=False, comment="0: inactive, 1: active")
    created_at = Column(TIMESTAMP, nullable=False)