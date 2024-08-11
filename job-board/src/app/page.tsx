import { addOrgAndUserData, JobModel } from "@/models/Job";
import Hero from "./components/Hero";
import Jobs from "./components/Jobs";
import { getUser } from "@workos-inc/authkit-nextjs";

export default async function Home() {
  const {user} = await getUser();
  const latestJobs = await addOrgAndUserData(
    await JobModel.find({}, {}, {limit:5,sort:'-createdAt'}),
    user,
  );
  return (
    <>
      <Hero />
      <Jobs header={''} jobs={latestJobs} />
    </>
  );
}
