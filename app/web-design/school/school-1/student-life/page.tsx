import ClubsOrganizations from "./ClubsOrganizations";
import PhotoGallery from "./PhotoGallery";
import SportsTeams from "./SportsTeams";
import StudentAchievements from "./StudentAchievements";

export default function StudentLife() {
  return (
    <div>
      StudentLife
      <PhotoGallery />
      <SportsTeams />
      <StudentAchievements />
      <ClubsOrganizations />
    </div>
  );
}
