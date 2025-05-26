import { Client,Account,ID } from "appwrite";
import conf from "../config/Conf";


export class Authservice{
client=new Client();
account;



constructor(){
this.client
.setProject(conf.appwriteProjectId)
.setEndpoint(conf.appwriteUrl)

this.account=new Account(this.client);


}

//methods

// 1) to create account

async createAccount({email,password,Name}){
    try {
        const userAccount= await this.account.create(
            ID.unique(),email,password,Name
        );

        if(userAccount){
            console.log("Account created Succesfully");
            return this.Login({email,password});
        }
        
    } catch (error) {
        console.log("Appwrite error in creating account",error);
        throw error;
        
    }
}


//2) Login method

async Login ({email, password}){
    try {
        const currentSession = await this.getCurrentUser();
        if (currentSession) {
            console.log("User already logged in");
            return currentSession;
        }

        const session=await this.account.createEmailPasswordSession(email,password);
        console.log("Login success");
        return session;
        
    } catch (error) {
        console.log(error,"error in Login");
        throw error;
     
        
    }

}

// to get the current user

async getCurrentUser(){
    try {
        return await this.account.get();
        
    } catch (error) {
        console.log("Appwrite error in getting current user",error);
        throw error;
        
    }
}

// to logout

async Logout(){
    try {
        return await this.account.deleteSessions()
        
    } catch (error) {
        console.log("Appwrite error Logout",error);
        
    }
}




}

const authService= new Authservice();
export default authService;