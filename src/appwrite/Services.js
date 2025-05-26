import {client,Databases,ID} from 'appwrite'
import conf from '../config/Conf'

export class Services{

    client=new client();
    Databases;

    constructor(){

        this.client
        .setEndpoint(conf.appwriteUrl)
     .setProject(conf.appwriteProjectId)

     this.Databases=new Databases(this.client);

    }


    //methods

    // create user and collect all details

    async createProfile({MobileNo,Company,Name,UserId,IsAgency}){
        try {
            const Profile=await this.Databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteUserCollectionId,
                ID.unique(),
                {
                    UserId,
                    Name,
                    MobileNo,
                    Company,
                    IsAgency

                }
            )
            if(Profile){
                console.log("Profile created Succesfully");
            }
            return Profile;
            
        } catch (error) {
            console.log("Error in profile",error);
            throw error;
            
        }
    }


    //method to get userDetails
    async getProfileDetails(UserId){
        
        try {
            const response=await this.Databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteUserCollectionId
                [Query.equal('UserId',UserId)]
            );

            return response.documents[0];


                
           
            
        } catch (error) {
            console.log("Appwrite error in getting Profile Details",error) ;
            return null;  
        }

    }












}