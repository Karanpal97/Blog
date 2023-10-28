import {Client,ID,Databases,Query,Storage} from "appwrite"
import config from "../config/config";



class BlogService{
client=new Client;
databases;
bucket

constructor(){
  this.client
  .setEndpoint(config.App_Write_Url)
  .setProject(config.App_Write_Project_Id);

  this.databases=new Databases(this.client);
  this.bucket=new Storage(this.client);
} 
async createPost({tittle,content ,image,status,slug}){
    try{

    return await this.databases.createDocument(
        config.App_Write_Database_Id,
        config.App_Write_Collection_Id,
        slug,
        {
            tittle,
            content,
            image,
            status,

        }
    )
    }catch(error){
        throw error
    }
}
async Delete(slug){
   try{ await this.databases.deleteDocument(slug,
        config.App_Write_Database_Id,
        config.App_Write_Collection_Id)
    }
    catch(error){
            throw error
        }
}
async UpDate({slug,tittle,content,image,status}){

    try{
      return await this.databases.updateDocument(
        config.App_Write_Database_Id,
        config.App_Write_Collection_Id,
        slug,
        {
            tittle,
            content,
            image,
            status
        }
      )
    }catch{


    }

}
async getPost(slug){
 try {
    return await this.databases.getDocument(
        config.App_Write_Database_Id,
        config.App_Write_Collection_Id,
        slug)
}catch(error){
    throw error
}
}

async getAllPost(queries=[Query.equal("status","active")]){
    try{
        return await this.databases.listDocuments(
            config.App_Write_Database_Id,
            config.App_Write_Collection_Id,
            queries
        )
    }catch(error){
        throw error
     }
}


async deleteFile(fileId){
    try {
        await this.bucket.deleteFile(
            conf.appwriteBucketId,
            fileId
        )
        return true
    } catch (error) {
        console.log("Appwrite serive :: deleteFile :: error", error);
        return false
    }
}
 async uploadFile(file){
        try {
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
            )
        } catch (error) {
            console.log("Appwrite serive :: uploadFile :: error", error);
            return false
        }
    }
    getFilePreview(fileId){
        return this.bucket.getFilePreview(
            conf.appwriteBucketId,
            fileId
        )
    }

}

const blogservice=new BlogService();
export default blogservice