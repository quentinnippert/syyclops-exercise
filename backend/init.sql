-- initial data structure --

-- Genders
CREATE TABLE IF NOT EXISTS genders (
    id            SERIAL PRIMARY KEY,
    name          VARCHAR(255) NOT NULL,
    status        BOOLEAN NOT NULL,
    created_at    TIMESTAMP NOT NULL
);

COMMENT ON COLUMN genders.status IS 'true = active, false = inactive';

-- Users
CREATE TABLE IF NOT EXISTS users (
    id                SERIAL PRIMARY KEY,
    first_name        VARCHAR(255) NOT NULL,
    last_name         VARCHAR(255) NOT NULL,
    birth_date        DATE NOT NULl,
    gender_id         INTEGER NOT NULL,
    email             TEXT NOT NULL,
    phone             VARCHAR(255) NOT NULL,
    status            SMALLINT NOT NULL,
    created_at        TIMESTAMP NOT NULL DEFAULT (NOW() AT TIME ZONE 'utc'),
    last_updated_at   TIMESTAMP DEFAULT NULL,
    CONSTRAINT fk_users_genders
        FOREIGN KEY     (gender_id)
        REFERENCES      genders(id)
);

COMMENT ON COLUMN users.status IS '0: inactive, 1: active, 2: archived, 3: waiting for approval';

-- Insert data
INSERT INTO genders (id, name, status, created_at)
    VALUES
    (1, 'male', true, NOW() AT TIME ZONE 'utc'),
    (2, 'female', true, NOW() AT TIME ZONE 'utc'),
    (3, 'other', true, NOW() AT TIME ZONE 'utc');

INSERT INTO users (first_name, last_name, birth_date, gender_id, email, phone, status, created_at)
    VALUES
    ('John', 'Doe', '1994-06-01', 1, 'john@doe.com', '123-456-7890', 1, NOW() AT TIME ZONE 'utc'),
    ('Jane', 'Doe', '1994-06-02', 2, 'jan@doe.com', '123-456-7890', 1, NOW() AT TIME ZONE 'utc'),
    ('Alice', 'Doe', '1994-06-03', 2, 'alice@doe.com', '123-456-7890', 1, NOW() AT TIME ZONE 'utc'),
    ('Bob', 'Doe', '1994-06-04', 1, 'bob@doe.com', '123-456-7890', 1, NOW() AT TIME ZONE 'utc'),
    ('Charlie', 'Doe', '1994-06-05', 1, 'charlie@doe.com', '123-456-7890', 1, NOW() AT TIME ZONE 'utc');
