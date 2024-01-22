import AllCourses from "./AllCourses";
import BecomeTutor from "./BecomeTutor";
import ClientCategory from "./ClientCategory";
import Footer from "./Footer";
import Hero from "./Hero";
import OnTheGo from "./OnTheGo";
import Plans from "./Plans";
import StartLearn from "./StartLearn";
import TryCourse from "./TryCourse";
import Tutors from "./Tutors";

function MainPage() {
    return (
        <div>
            <Hero/>
            <Tutors/>
            <Plans/>
            <TryCourse/>
            <AllCourses/>
            <StartLearn/>
            <OnTheGo/>
            <ClientCategory/>
            <BecomeTutor/>
            <Footer/>
        </div>
    );
}

export default MainPage;