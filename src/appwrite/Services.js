import { Client, Databases, Query } from "appwrite";
import conf from "../config/Conf";

export class Services {
  client = new Client();
  Databases;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);

    this.Databases = new Databases(this.client);
  }

  //methods

  // create user and collect all details

  async createProfile({ MobileNo, Company, Name, UserId, email }) {
    try {
      const Profile = await this.Databases.createDocument(
        conf.appwriteDatabaseId,
        conf.appwriteUserCollectionId,
        UserId,
        {
          Name,
          MobileNo,
          Company,

          email,
        }
      );
      if (Profile) {
        console.log("Profile created Succesfully");
      }
      return Profile;
    } catch (error) {
      console.log("Error in profile", error);
      throw error;
      return null;
    }
  }

  //method to get userDetails

  async getProfileDetails(userId) {
    try {
      const profile = await this.Databases.getDocument(
        conf.appwriteDatabaseId,
        conf.appwriteUserCollectionId,
        userId
      );
      return profile;
    } catch (error) {
      console.error("Error fetching profile", error);
      return null;
    }
  }
}

const service = new Services();
export default service;
