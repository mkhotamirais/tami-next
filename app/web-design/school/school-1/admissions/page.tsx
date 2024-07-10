import AdmissionRequirements from "./AdmissionRequirements";
import EnrollmentProcess from "./EnrollmentProcess";
import OnlienApplicationForm from "./OnlienApplicationForm";
import TuitionFees from "./TuitionFees";

export default function Admissions() {
  return (
    <div>
      Admissions
      <AdmissionRequirements />
      <EnrollmentProcess />
      <OnlienApplicationForm />
      <TuitionFees />
    </div>
  );
}
