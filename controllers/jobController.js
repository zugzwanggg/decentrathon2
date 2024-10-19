import {db} from "../database.js";

export const createJob = async(req,res) => {
  try {
    
    const { title, description, reqiurements, contract_type,status,company_id } = req.body;

    await db.query('INSERT INTO jobs(title, description, reqiurements, contract_type, status,company_id) VALUES ($1,$2,$3,$4,$5,$6)',
    [title,description,reqiurements, contract_type, status, company_id]);

    res.status(200).send({
      status: "succesfully"
    })

  } catch (error) {
    res.status(500).json(error)
  }
}

export const getJobs = async(req,res) => {
  try {
    const jobs = await db.query("SELECT * FROM jobs");

    res.status(200).json(jobs.rows)
  } catch (error) {
    res.status(200).json(error)
  }
}