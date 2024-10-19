import {db} from '../database.js';

export const createUser = async(req,res) => {
  try {
    const {tg_id, first_name, last_name, user_img, user_description, user_resume, company_id} = req.body;

    await db.query('INSERT INTO users(tg_id, first_name, last_name, user_img, user_description, user_resume, company_id) VALUES ($1,$2,$3,$4,$5,$6,$&)'
    ,[tg_id, first_name, last_name, user_img, user_description, user_resume, company_id]
    )
  } catch (error) {
    res.status(500).json(error)
  }
}

export const getUser = async(req,res) => {
  try {
    const {tg_id} = req.body;
    const user = await db.query('SELECT * FROM users WHERE tg_id = $1', [tg_id]);
    res.status(200).json(user.rows[0]);
  } catch (error) {
    res.status(500).json(error)
  }
}