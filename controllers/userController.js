import {db} from '../database.js';

export const createUser = async(req,res) => {
  try {
    const {tg_id, first_name, last_name, user_img, user_description, user_resume, company_id, role} = req.body;

    await db.query('INSERT INTO users(tg_id, first_name, last_name, user_img, user_description, user_resume, company_id, role) VALUES ($1,$2,$3,$4,$5,$6,$7, $8)',
    [tg_id, first_name, last_name, user_img, user_description, user_resume, company_id, role]
    )

  } catch (error) {
    res.status(500).json(error)
    console.log(error);
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