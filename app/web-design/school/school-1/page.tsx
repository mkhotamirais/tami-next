import ContactUs from "./ContactUs";
import RecentNews from "./RecentNews";
import UpcommingEvents from "./UpcommingEvents";
import WelcomeMessage from "./WelcomeMessage";

export default function School1() {
  return (
    <div className="relative">
      <WelcomeMessage />
      <RecentNews />
      <UpcommingEvents />
      <ContactUs />
    </div>
  );
}
