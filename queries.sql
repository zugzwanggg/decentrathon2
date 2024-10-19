CREATE TABLE users(
  id INT PRIMARY KEY,
  tg_id INT,
  first_name VARCHAR(100),
  last_name VARCHAR(100),
  user_img VARCHAR(),
  user_description TEXT(),
  user_resume VARCHAR(),
  role BIT,
  company_id INT by default NULL,
  FOREIGN KEY company_id REFERENCES companies(id)
);

CREATE TABLE companies(
  id INT PRIMARY KEY,
  name VARCHAR(50),
  description TEXT(),
  company_img VARCHAR(),
);

-- CREATE TABLE job_tags(
--   id INT PRIMARY KEY,
--   tag_name: VARCHAR(50)
-- );

CREATE TABLE jobs(
  id INT PRIMARY KEY,
  title VARCHAR(100),
  description TEXT NOT NULL,
  requirements TEXT NOT NULL,
  contract_type VARCHAR(50) NOT NULL,
  status VARCHAR(20) DEFAULT 'open'
)