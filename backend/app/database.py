import os
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

postgresUser = os.getenv("POSTGRES_USER")
postgresPassword = os.getenv("POSTGRES_PASSWORD")
postgresHost = os.getenv("POSTGRES_HOST")
postgresPort = os.getenv("POSTGRES_PORT")
postgresDb = os.getenv("POSTGRES_DB")

DATABASE_URL = "postgresql://" + postgresUser + ":" + postgresPassword + "@" + postgresHost + ":" + postgresPort + "/" + postgresDb

engine = create_engine(DATABASE_URL)