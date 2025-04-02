import CertificationsAndTeaching from "./certification/page";
import TeachingExperience from "./experience/page";
import Hero from "./hero/page";
import Projects from "./Project/page";
import Skills from "./skills/page";


export default function Home() {
  return (
    <>  
      
      <Hero />
      <Skills />
      <Projects/>
      <CertificationsAndTeaching />
      <TeachingExperience />
    
    </>
  );
}
