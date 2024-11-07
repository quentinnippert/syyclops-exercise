from sqlalchemy import Column, Integer, String, SmallInteger, ForeignKey, Text, TIMESTAMP, Date
from sqlalchemy.orm import relationship
from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()

class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    first_name = Column(String(255), nullable=False)
    last_name = Column(String(255), nullable=False)
    birth_date = Column(Date, nullable=False)
    gender_id = Column(Integer, ForeignKey("genders.id"), nullable=False)
    email = Column(Text, nullable=False)
    phone = Column(String(255), nullable=False)
    status = Column(SmallInteger, nullable=False, comment="0: inactive, 1: active, 2: archived, 3: waiting for approval")
    created_at = Column(TIMESTAMP, nullable=False)
    last_updated_at = Column(TIMESTAMP, nullable=False)
    gender = relationship("Gender")