import config from "../config/config";
import {Client,Account} from "appwrite"

export class AppService {
  client =new Client
  account;

  constructor(){
    this.client
       .setEndpoint(config.App_Write_Url)
       .setProject(config.App_Write_Project_Id);

       this.account=new Account(this.client)
  }

  async createUser({email,password}){
     try{ const user = await this.account.create(email,password);
    if(user){
           this.login({email,password})
    }else{
      return user
    }}
    catch(error){
      throw error
    }
  }

  async login({email,password}){
  try{
    return this.account.createEmailSession(email,password)
  }catch(error){
  throw error;
  }

  }
   async getUser(){
    try{
      const user=this.account.get();
      return user;
    }
    catch(error){
      throw error
    }
    return null;
  }
  async logOut(){
    try{
     return  this.account.deleteSession();

    }
    catch(error){
      throw error
    }
  }



}

const appService=new AppService();
export default appService
