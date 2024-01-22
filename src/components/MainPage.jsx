import AllCourses from "./AllCourses";
import Hero from "./Hero";
import Plans from "./Plans";
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
        </div>
    );
}

export default MainPage;