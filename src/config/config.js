

const config={
App_Write_Url:import.meta.env.VITE_APP_WRITE_URL,
App_Write_Database_Id:import.meta.env.VITE_APP_WRITE_DATABASE_ID,
App_Write_Collection_Id:import.meta.env.VITE_APP_WRITE_COLLECTION_ID,
App_Write_Bucket_Id:import.meta.env.VITE_APP_WRITE_BUCKET_ID,
App_Write_Project_Id:import.meta.env.VITE_APP_WRITE_PROJECT_ID,

}
console.log(import.meta.env.VITE_APP_WRITE_URL)
console.log(config.App_Write_Bucket_Id)

export default config