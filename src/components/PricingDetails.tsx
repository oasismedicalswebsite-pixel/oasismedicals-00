import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Input } from "@/components/ui/input";
import { Heart, TestTube, Activity, X, Search, ChevronDown, MessageCircle, Thermometer, Users, UserCheck, Stethoscope } from "lucide-react";
import { useState } from "react";
import PaymentDialog from "./PaymentDialog";

const PricingDetails = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [openCategories, setOpenCategories] = useState<{ [key: string]: boolean }>({
    ultrasound: true,
    fever: true,
    menPackages: true
  });
  const [paymentDialog, setPaymentDialog] = useState({ open: false, serviceName: "", servicePrice: 0 });

  const toggleCategory = (category: string) => {
    setOpenCategories(prev => ({
      ...prev,
      [category]: !prev[category]
    }));
  };

  const pricingData = {
    fever: {
      title: "Fever Packages",
      icon: Thermometer,
      color: "from-orange-500 to-red-500",
      tests: [
        { name: "Basic Package (FBC, Malaria Test, WIDAL, Urinalysis)", price: "₦15,000" },
        { name: "Standard Package (ESR, FBC, Malaria, WIDAL, Stool Microscopy, Urinalysis, Sputum AFB)", price: "₦30,000" }
      ]
    },
    menPackages: {
      title: "Men's Health Packages",
      icon: Users,
      color: "from-blue-600 to-blue-800",
      tests: [
        { name: "Full Body Checkup (Opal) - FBS, Total Cholesterol, FBC, Urinalysis, LFT, KFT", price: "₦45,000" },
        { name: "Full Body Checkup (Ruby) - FBS, Lipid Profile, FBC, PSA, Stool Microscopy, Urinalysis, LFT, KFT", price: "₦80,000" },
        { name: "Full Body Checkup (Diamond) - Complete comprehensive screening with HbA1C, Lipid Profile, LFT, KFT, CRP, TFT, FBC, PSA, Hepatitis B/C, HIV, Stool tests, Urinalysis", price: "₦180,000" },
        { name: "Fertility/Hormonal Tests (Basic) - Seminal Fluid Analysis, Semen M/C/S", price: "₦15,000" },
        { name: "Fertility/Hormonal Tests (Standard) - FSH, LH, Testosterone, Seminal Fluid Analysis, Semen M/C/S", price: "₦60,000" },
        { name: "Erectile Dysfunction Package - FBS, FSH, LH, Prolactin, Testosterone, Seminal Fluid Analysis, Semen M/C/S", price: "₦100,000" }
      ]
    },
    womenPackages: {
      title: "Women's Health Packages",
      icon: Heart,
      color: "from-pink-500 to-rose-600",
      tests: [
        { name: "Full Body Checkup (Opal) - FBS, Total Cholesterol, FBC, Urinalysis, LFT, KFT", price: "₦45,000" },
        { name: "Full Body Checkup (Ruby) - FBS, Lipid Profile, FBC, Stool Microscopy, Urinalysis, LFT, KFT", price: "₦70,000" },
        { name: "Full Body Checkup (Diamond) - Complete comprehensive screening with HbA1C, Lipid Profile, LFT, KFT, CRP, TFT, FBC, Hepatitis B/C, HIV, Stool tests, Urinalysis, LBC", price: "₦200,000" },
        { name: "Fertility/Hormonal Tests (Basic) - Estradiol, FSH, LH, Prolactin", price: "₦40,000" },
        { name: "Fertility/Hormonal Tests (Standard) - Estradiol, FSH, LH, Progesterone, Prolactin", price: "₦55,000" },
        { name: "Fertility/Hormonal Tests (Comprehensive) - TSH, Estradiol, FSH, LH, Progesterone, Prolactin, AMH", price: "₦150,000" }
      ]
    },
    domesticStaff: {
      title: "Domestic Staff Screening",
      icon: UserCheck,
      color: "from-green-600 to-emerald-600",
      tests: [
        { name: "Basic Package - PCV, HBsAg, HIV I & II, Pregnancy Test (female), Sputum AFB, Hepatitis A", price: "₦20,000" },
        { name: "Standard Package - Hb Electrophoresis/Genotype, PCV, HBsAg, HIV I & II, Pregnancy Test (female), HCV, Sputum AFB, Hepatitis A", price: "₦30,000" }
      ]
    },
    premarital: {
      title: "Pre-marital Screening",
      icon: Heart,
      color: "from-purple-600 to-violet-600",
      tests: [
        { name: "Basic (Male & Female) - Blood Grouping, Genotype, HBsAg, HIV I & II", price: "₦12,000" },
        { name: "Standard (Male & Female) - Blood Grouping, Genotype, FBC, HBsAg, HCV, HIV I & II, Pregnancy Test (female)", price: "₦20,000" },
        { name: "Comprehensive (Female) - Blood Grouping, Genotype, FBC, FSH, LH, Prolactin, Progesterone, HBsAg, HCV, HIV I & II, Pregnancy Test", price: "₦100,000" },
        { name: "Comprehensive (Male) - Blood Grouping, Genotype, FBC, FSH, LH, Testosterone, HBsAg, HCV, HIV I & II, Seminal Fluid Analysis, Semen M/C/S", price: "₦120,000" }
      ]
    },
    ultrasound: {
      title: "Ultrasound Scan",
      icon: Heart,
      color: "from-medical-cyan to-blue-500",
      tests: [
        { name: "Pelvic/Obstetrics", price: "₦2,500" },
        { name: "Abdominal", price: "₦7,000" },
        { name: "Abdominopelvic", price: "₦10,000" },
        { name: "Upper Abdominal", price: "₦5,000" },
        { name: "Lower Abdominal", price: "₦5,000" },
        { name: "Breast", price: "₦7,000" },
        { name: "Neck/Thyroid", price: "₦10,000" },
        { name: "Transvaginal Pelvic Scan (TVS)", price: "₦10,000" },
        { name: "Prostate scan (Transrectal)", price: "₦7,000" },
        { name: "Folliculometry", price: "₦30,000" },
        { name: "Sonohysterosalpigogram (HSG)", price: "₦50,000" },
        { name: "Scrotal Scan", price: "₦7,000" },
        { name: "For other area of Scan", price: "CALL" }
      ]
    },
    haematology: {
      title: "Haematology",
      icon: TestTube,
      color: "from-red-500 to-pink-500",
      tests: [
        { name: "Full Blood count (Automation)", price: "₦7,000" },
        { name: "Haemoglobin (HB)", price: "₦2,000" },
        { name: "Pack cell volume (PCV)", price: "₦1,500" },
        { name: "WBC (Total)", price: "₦3,000" },
        { name: "WBC (Differential)", price: "₦4,000" },
        { name: "Platelet Count", price: "₦5,000" },
        { name: "E.S.R", price: "₦3,000" },
        { name: "HB Genotype", price: "₦2,000" },
        { name: "Bleeding time (BT)", price: "₦5,000" },
        { name: "Clotting Time", price: "₦5,000" },
        { name: "Thrombin time (TT)", price: "₦10,000" },
        { name: "Prothrombin time (PT)", price: "₦10,000" },
        { name: "Blood Grouping (ABO & Rh)", price: "₦1,500" }
      ]
    },
    chemistry: {
      title: "Chemistry",
      icon: TestTube,
      color: "from-green-500 to-emerald-500",
      tests: [
        { name: "Fasting blood sugar", price: "₦1,500" },
        { name: "Random blood sugar", price: "₦1,500" },
        { name: "2Hr Post-P blood sugar", price: "₦5,000" },
        { name: "Glucose tolerance test G.T.T", price: "₦10,000" },
        { name: "HbA1c", price: "₦10,000" },
        { name: "E/U/Cr", price: "₦18,000" },
        { name: "Urea", price: "₦5,000" },
        { name: "Full electrolytes", price: "₦15,000" },
        { name: "Creatinine", price: "₦5,000" },
        { name: "LFT", price: "₦18,000" },
        { name: "Total Billirubin", price: "₦5,000" },
        { name: "Direct Billirubin", price: "₦5,000" },
        { name: "Full Lipid Profile", price: "₦18,000" },
        { name: "Total Cholesterol", price: "₦5,000" },
        { name: "For other", price: "CALL" }
      ]
    },
    microbiology: {
      title: "Microbiology & Serology",
      icon: TestTube,
      color: "from-purple-500 to-violet-500",
      tests: [
        { name: "STOOL: Microscopy", price: "₦3,000" },
        { name: "STOOL: M/C/S", price: "₦5,000" },
        { name: "STOOL: Occult Blood", price: "₦7,000" },
        { name: "BLOOD: Malaria Parasites", price: "₦2,000" },
        { name: "BLOOD: Widal Reaction", price: "₦2,000" },
        { name: "BLOOD: V.D.R.L", price: "₦2,000" },
        { name: "BLOOD: Culture & Sensitivity", price: "₦12,000" },
        { name: "BLOOD: H.Pylori", price: "₦5,000" },
        { name: "BLOOD: TB (Serum)", price: "₦5,000" },
        { name: "BLOOD: Microfilaria", price: "₦5,000" },
        { name: "BLOOD: Trypanosome", price: "₦5,000" },
        { name: "BLOOD: Leishmania", price: "₦5,000" },
        { name: "URINE: Microscopy for Shistosoma oval", price: "₦3,000" },
        { name: "URINE: Urinalysis", price: "₦2,000" },
        { name: "URINE: M/C/S", price: "₦7,000" },
        { name: "SPUTUM: ZN Stain (A-AFB) x 1", price: "₦5,000" },
        { name: "SPUTUM: M/C/S", price: "₦10,000" },
        { name: "SPUTUM: GenXpert", price: "₦7,000" },
        { name: "SEMINAL FLUID: Analysis", price: "₦10,000" },
        { name: "SEMINAL FLUID: M/C/S", price: "₦15,000" },
        { name: "SKIN: Snips For Microfilaria", price: "₦5,000" },
        { name: "SKIN: Fungal Element", price: "₦5,000" },
        { name: "SWAB: HVS M/C/S", price: "₦6,000" },
        { name: "SWAB: Urethral M/C/S", price: "₦8,000" },
        { name: "SWAB: Others M/C/S", price: "₦10,000" },
        { name: "HIV Screening test", price: "₦4,000" },
        { name: "Hepatitis 'A' Screening", price: "₦5,000" },
        { name: "Hepatitis 'B' Screening", price: "₦2,000" },
        { name: "Hepatitis 'C' Screening", price: "₦3,000" },
        { name: "Hepatitis Profile", price: "CALL" },
        { name: "Viral Load", price: "CALL" },
        { name: "Pregnancy Test (Blood for early detection)", price: "₦2,000" }
      ]
    },
    hormonal: {
      title: "Hormonal/Endocrine Profiles",
      icon: Heart,
      color: "from-medical-magenta to-pink-500",
      tests: [
        { name: "Male Infertility/erectile dysfunction Profile", price: "₦50,000" },
        { name: "Female Infertility/Hirsutism Profile", price: "₦50,000" },
        { name: "FSH", price: "₦10,000" },
        { name: "LH", price: "₦10,000" },
        { name: "PROL", price: "₦10,000" },
        { name: "TEST", price: "₦10,000" },
        { name: "PROG", price: "₦10,000" },
        { name: "E2", price: "₦10,000" },
        { name: "AMH", price: "₦40,000" },
        { name: "PSA", price: "₦10,000" },
        { name: "TFT", price: "₦50,000" },
        { name: "TSH", price: "₦15,000" },
        { name: "Others", price: "CALL" }
      ]
    },
    histology: {
      title: "Histology & Cytology",
      icon: TestTube,
      color: "from-orange-500 to-red-500",
      tests: [
        { name: "Histology studies (Small)", price: "₦30,000" },
        { name: "Histology studies (Medium)", price: "₦35,000" },
        { name: "Histology studies (Large)", price: "₦40,000" },
        { name: "Histology studies (Complex)", price: "₦45,000" },
        { name: "Cytology", price: "CALL" }
      ]
    },
    ecg: {
      title: "Electrocardiograph (ECG)",
      icon: Activity,
      color: "from-medical-cyan to-blue-600",
      tests: [
        { name: "Pre & Post Exercise", price: "₦12,000" }
      ]
    },
    xray: {
      title: "X-Ray with Radiological Report",
      icon: X,
      color: "from-gray-600 to-slate-700",
      tests: [
        // Head and Neck
        { name: "Skull (AP & Lat)", price: "₦12,000" },
        { name: "Skull (All views)", price: "₦15,000" },
        { name: "Mandibles", price: "₦10,000" },
        { name: "Mastoids", price: "₦10,000" },
        { name: "Sinuses", price: "₦10,000" },
        { name: "Post Nasal Space", price: "₦10,000" },
        { name: "Cervical Spine (AP & lat)", price: "₦10,000" },
        { name: "Cervical Spine (with Obliges)", price: "₦10,000" },
        // Trunk
        { name: "Chest (PA)", price: "₦10,000" },
        { name: "Chest (AP & Lat)", price: "₦12,000" },
        { name: "Thoracic Inlet", price: "₦12,000" },
        { name: "Clavicle", price: "₦10,000" },
        { name: "Abdomen (AP & Lat)", price: "₦15,000" },
        { name: "Pelvis", price: "₦15,000" },
        { name: "Hips", price: "₦15,000" },
        { name: "Lumbosacral (AP & Lat)", price: "₦15,000" },
        { name: "Thoracic Spine (AP & Lat)", price: "₦15,000" },
        { name: "Abdomen for missing ICUD", price: "₦15,000" },
        // Upper and Lower Limbs
        { name: "Shoulder joint (AP & lat)", price: "₦10,000" },
        { name: "Arm (Humerus) (AP & Lat)", price: "₦10,000" },
        { name: "Elbow Joint (AP & lat)", price: "₦10,000" },
        { name: "Forearm (Radius & Ulna)", price: "₦10,000" },
        { name: "Wrist Joint", price: "₦10,000" },
        { name: "Hands/Fingers & Palm", price: "₦10,000" },
        { name: "Knee (AP & Lat)", price: "₦10,000" },
        { name: "Leg (Tibia & fibular)(AP & Lat)", price: "₦10,000" },
        { name: "Ankle Joint", price: "₦10,000" },
        { name: "Foot (AP & Oblique)", price: "₦10,000" },
        { name: "Femur or Thigh (AP & Lat)", price: "₦12,000" },
        // Special Investigation
        { name: "Hystero-Salpingogram (HSG)", price: "CALL" },
        { name: "Others", price: "CALL" }
      ]
    }
  };

  const openWhatsApp = () => {
    window.open('https://wa.me/2348058135226', '_blank');
  };

  const handleBookService = (serviceName: string, priceString: string) => {
    if (priceString === "CALL") {
      openWhatsApp();
      return;
    }
    // Convert price string like "₦15,000" to number
    const priceNumber = parseInt(priceString.replace(/[₦,]/g, ''));
    setPaymentDialog({ open: true, serviceName, servicePrice: priceNumber });
  };

  // Filter tests based on search term
  const filteredCategories = Object.entries(pricingData).reduce((acc, [key, category]) => {
    const filteredTests = category.tests.filter(test =>
      test.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      test.price.toLowerCase().includes(searchTerm.toLowerCase())
    );
    
    if (filteredTests.length > 0 || category.title.toLowerCase().includes(searchTerm.toLowerCase())) {
      acc[key] = { ...category, tests: filteredTests.length > 0 ? filteredTests : category.tests };
    }
    
    return acc;
  }, {} as typeof pricingData);

  return (
    <section id="pricing" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Complete <span className="bg-gradient-to-r from-medical-cyan to-medical-magenta bg-clip-text text-transparent">Price List 2025</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Transparent pricing for all our diagnostic services. Search for specific tests or browse by category.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-md mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <Input
                type="text"
                placeholder="Search for tests (e.g., 'blood sugar', 'x-ray chest')"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-3 text-lg"
              />
            </div>
          </div>
        </div>

        <div className="space-y-6">
          {Object.entries(filteredCategories).map(([key, category]) => {
            const IconComponent = category.icon;
            const isOpen = openCategories[key];
            
            return (
              <Card key={key} className="overflow-hidden border-2 hover:border-primary/20 transition-all duration-300">
                <Collapsible open={isOpen} onOpenChange={() => toggleCategory(key)}>
                  <CollapsibleTrigger asChild>
                    <CardHeader className={`cursor-pointer bg-gradient-to-r ${category.color} text-white hover:opacity-90 transition-opacity`}>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                            <IconComponent className="w-6 h-6" />
                          </div>
                          <div className="text-left">
                            <CardTitle className="text-2xl">{category.title}</CardTitle>
                            <p className="text-white/80 text-sm">{category.tests.length} tests available</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-4">
                          <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                            2025 Pricing
                          </Badge>
                          <ChevronDown className={`w-6 h-6 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
                        </div>
                      </div>
                    </CardHeader>
                  </CollapsibleTrigger>
                  
                  <CollapsibleContent>
                    <CardContent className="p-0">
                      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-0">
                         {category.tests.map((test, index) => (
                           <div 
                             key={index} 
                             className="p-4 border-b border-r border-gray-100 hover:bg-gray-50 transition-colors group"
                           >
                             <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                               <div className="flex-1 pr-4">
                                 <h4 className="font-medium text-foreground group-hover:text-primary transition-colors">
                                   {test.name}
                                 </h4>
                               </div>
                               <div className="flex items-center gap-3">
                                 <span className={`font-bold text-lg ${
                                   test.price === 'CALL' 
                                     ? 'text-accent' 
                                     : 'text-primary'
                                 }`}>
                                   {test.price}
                                 </span>
                                 <Button 
                                   size="sm" 
                                   onClick={() => handleBookService(test.name, test.price)}
                                   className="bg-primary hover:bg-primary/90 text-white"
                                 >
                                   {test.price === 'CALL' ? 'Call Now' : 'Book Now'}
                                 </Button>
                               </div>
                             </div>
                           </div>
                         ))}
                      </div>
                      
                      <div className="p-6 bg-gradient-to-r from-gray-50 to-white">
                        <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
                          <div className="text-center sm:text-left">
                            <h4 className="font-semibold text-foreground mb-1">Ready to book?</h4>
                            <p className="text-sm text-muted-foreground">Contact us for immediate scheduling</p>
                          </div>
                          <Button 
                            onClick={openWhatsApp}
                            className="bg-gradient-to-r from-medical-cyan to-medical-magenta hover:opacity-90"
                          >
                            <MessageCircle className="w-4 h-4 mr-2" />
                            Book {category.title}
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </CollapsibleContent>
                </Collapsible>
              </Card>
            );
          })}
        </div>

        {Object.keys(filteredCategories).length === 0 && (
          <div className="text-center py-12">
            <Search className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-foreground mb-2">No tests found</h3>
            <p className="text-muted-foreground">Try searching with different keywords or browse our categories</p>
          </div>
        )}

        {/* Contact for unlisted tests */}
        <Card className="mt-12 bg-gradient-to-r from-primary/10 to-accent/10 border-2 border-primary/20">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">Don't see your test?</h3>
            <p className="text-muted-foreground mb-6">
              We offer many more specialized tests. Contact us for pricing on tests not listed above.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button onClick={openWhatsApp} className="bg-gradient-to-r from-medical-cyan to-medical-magenta hover:opacity-90">
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp: 08058135226
              </Button>
              <Button variant="outline" onClick={() => window.open('tel:+2347033600770', '_self')}>
                📞 Call: 07033600770
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <PaymentDialog
        open={paymentDialog.open}
        onOpenChange={(open) => setPaymentDialog(prev => ({ ...prev, open }))}
        serviceName={paymentDialog.serviceName}
        servicePrice={paymentDialog.servicePrice}
      />
    </section>
  );
};

export default PricingDetails;