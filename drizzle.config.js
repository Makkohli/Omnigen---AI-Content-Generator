/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.tsx",
    dialect: 'postgresql',
    dbCredentials: {
      url:'postgresql://manishkohli030:MAnJ6vjHCE8V@ep-proud-sun-a5x72p4u.us-east-2.aws.neon.tech/AI-Content_Gen?sslmode=require',
    }
  };