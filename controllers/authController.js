export const getData = async(req,res) => {
  try {
    res.json({
      data: 'data'
    })
  } catch (error) {
    res.error(error)
  }
}