CREATE TYPE OS AS ENUM ('Windows', 'Linux', 'Mac OS');

CREATE TABLE IF NOT EXISTS developer_infos (
	id SERIAL PRIMARY KEY,
	developerSince DATE NOT NULL, 
	preferredOS OS NOT NULL 
);


CREATE TABLE IF NOT EXISTS developers (
	id SERIAL PRIMARY KEY,
	name VARCHAR(50) NOT NULL, 
	email VARCHAR(50) NOT NULL UNIQUE, 
	developerInfoId INTEGER UNIQUE,
	FOREIGN KEY (developerInfoId) REFERENCES developer_infos(id) ON DELETE CASCADE
);


CREATE TABLE IF NOT EXISTS projects (
	id SERIAL PRIMARY KEY,
	name VARCHAR(50) NOT NULL, 
	description TEXT NOT NULL,
	estimatedTime VARCHAR(20) NOT NULL,
	repository VARCHAR(120) NOT NULL,
	startDate DATE NOT NULL,
	endDate DATE
);

ALTER TABLE 
	projects 
ADD COLUMN "developerId" INTEGER NOT NULL;

ALTER TABLE 
	projects 
ADD FOREIGN KEY ("developerId") REFERENCES developers("id");

CREATE TABLE IF NOT EXISTS technologies (
	id SERIAL PRIMARY KEY,
	name VARCHAR(30) NOT NULL
);

INSERT INTO technologies (name)
VALUES ('JavaScript'),('Python'),('React'),('Express.js'),('HTML'),('CSS'),('Django'),('PostgreSQL'),('MongoDB');

CREATE TABLE IF NOT EXISTS projects_technologies (
	id SERIAL PRIMARY KEY,
	"projectsId" INTEGER NOT NULL,
	FOREIGN KEY ("projectsId") REFERENCES projects("id") ON DELETE CASCADE,
	"technologiesId" INTEGER NOT NULL,
	FOREIGN KEY ("technologiesId") REFERENCES technologies("id"),
	addedIn DATE NOT NULL
);
