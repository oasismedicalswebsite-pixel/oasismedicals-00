import { Card, CardContent } from "@/components/ui/card";
import { Shield, Award, Eye, Users, Target } from "lucide-react";

const MedicalDirector = () => {
  return (
    <div className="mb-20">
      <h3 className="text-3xl font-bold text-center mb-12">
        Meet Our <span className="text-primary">Medical Director</span>
      </h3>
      
      <Card className="overflow-hidden bg-gradient-to-br from-background to-primary/5 border-2 border-primary/10 shadow-xl">
        <CardContent className="p-0">
          <div className="grid lg:grid-cols-5 gap-0">
            {/* Medical Director Image */}
            <div className="lg:col-span-2">
              <div className="relative h-full min-h-[600px]">
                <img 
                  src="/lovable-uploads/dr-timothy-olugbode.jpg" 
                  alt="Dr. Timothy Olayemi Olugbode - Medical Director and CEO of OASIS MEDICALS"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-background/10"></div>
              </div>
            </div>
            
            {/* Medical Director Bio */}
            <div className="lg:col-span-3 p-8 lg:p-12">
              <div className="space-y-8">
                {/* Header */}
                <div className="text-center lg:text-left">
                  <h4 className="text-3xl font-bold text-foreground mb-2">Dr. Timothy Olayemi Olugbode</h4>
                  <p className="text-xl text-primary font-semibold">Medical Director & Chief Executive Officer</p>
                </div>
                
                {/* Professional Background */}
                <div>
                  <h5 className="text-lg font-semibold text-primary mb-3 flex items-center">
                    <Shield className="w-5 h-5 mr-2" />
                    Professional Background
                  </h5>
                  <p className="text-muted-foreground leading-relaxed">
                    Dr. Timothy Olayemi Olugbode is the Medical Director and Chief Executive Officer of O.A.S.I.S. MEDICALS, 
                    where he provides strategic leadership and drives the vision of delivering world-class, patient-centered healthcare services. 
                    With over a decade of professional experience as a Medical Laboratory Scientist and Medical Sonographer, 
                    he has built a strong reputation for excellence in medical diagnostics, imaging, and research.
                  </p>
                </div>
                
                {/* Education & Certifications */}
                <div>
                  <h5 className="text-lg font-semibold text-primary mb-3 flex items-center">
                    <Award className="w-5 h-5 mr-2" />
                    Education & Certifications
                  </h5>
                  <p className="text-muted-foreground leading-relaxed">
                    He holds a professional certificate in Medical Laboratory Technology (MLT), Bachelor's degree and a Master's degree in Medical Microbiology, 
                    which laid the foundation for his expertise in laboratory medicine, infectious disease management, and diagnostic microbiology. 
                    Expanding his professional competence into diagnostic imaging, he obtained Certificate in Obstetrics and Gynecology Medical Sonography 
                    from the Centre for Ultrasound and Research Education (CURE) at the Lagos University Teaching Hospital (LUTH) and Postgraduate Diploma 
                    in General Sonography from the Radiographers Registration Board of Nigeria (RRBN).
                  </p>
                </div>
                
                {/* Research & Academic Excellence */}
                <div>
                  <h5 className="text-lg font-semibold text-primary mb-3 flex items-center">
                    <Eye className="w-5 h-5 mr-2" />
                    Research & Academic Excellence
                  </h5>
                  <p className="text-muted-foreground leading-relaxed">
                    Dr. Timothy Olayemi Olugbode is a passionate researcher whose work integrates laboratory science and diagnostic imaging 
                    to improve patient outcomes and healthcare delivery. He is currently in the final stages of completing his PhD thesis, 
                    further cementing his role as an academic and professional authority in his field.
                  </p>
                </div>
                
                {/* Recognition & Awards */}
                <div>
                  <h5 className="text-lg font-semibold text-primary mb-3 flex items-center">
                    <Users className="w-5 h-5 mr-2" />
                    Recognition & Awards
                  </h5>
                  <p className="text-muted-foreground leading-relaxed">
                    In recognition of his outstanding contributions to medicine, diagnostics, and community healthcare, 
                    he has received an Honorary Doctorate degree along with numerous awards of recognition from professional 
                    and community-based organizations.
                  </p>
                </div>
                
                {/* Leadership Vision */}
                <div>
                  <h5 className="text-lg font-semibold text-primary mb-3 flex items-center">
                    <Target className="w-5 h-5 mr-2" />
                    Leadership Vision
                  </h5>
                  <p className="text-muted-foreground leading-relaxed">
                    As a healthcare leader, Dr. Timothy Olugbode combines clinical expertise, research-driven innovation, 
                    and visionary leadership to advance medical practice. At O.A.S.I.S. MEDICALS, he remains committed to 
                    delivering quality, accessible, and innovative healthcare solutions, while mentoring the next generation 
                    of healthcare professionals.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default MedicalDirector;