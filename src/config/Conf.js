const conf={
    appwriteUrl:String(import.meta.env.VITE_APPWRITE_URL),
    appwriteProjectId:String(import.meta.env.VITE_APPWRITE_PROJECTID),
    appwriteDatabaseId:String(import.meta.env.VITE_APPWRITE_DATABASEID),
    appwriteUserCollectionId:String(import.meta.env.VITE_APPWRITE_USERCOLLECTIONID)
}
export default conf;