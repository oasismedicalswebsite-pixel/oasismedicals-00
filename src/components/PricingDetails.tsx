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
  const [openCategories, setOpenCategories] = useState<{ [key: string]: boolean }>({});
  const [paymentDialog, setPaymentDialog] = useState({ open: false, serviceName: "", servicePrice: 0 });

  const toggleCategory = (category: string) => {
    setOpenCategories(prev => ({
      ...prev,
      [category]: !prev[category]
    }));
  };

  const pricingData = {
    fever: {
      title: "Fever packages",
      icon: Thermometer,
      color: "from-orange-500 to-red-500",
      description: "Know the cause of your reoccurring Fever and get proper treatment now. It's not always malaria. A proper test will help you understand the root cause and save you from wasting time and money on ineffective treatment. Get tested and discuss the result with a doctor.",
      tests: [
        { name: "Basic Package\n\t•\tFull Blood Count\n\t•\tMalaria (Thick and Thin Films)\n\t•\tWIDAL (Typhoid Test)\n\t•\tUrinalysis", price: "₦15,000" },
        { name: "Comprehensive Package\n\t•\tErythrocyte Sedimentation Rate\n\t•\tFull Blood Count\n\t•\tMalaria (Thick and Thin Films)\n\t•\tWIDAL (Typhoid Test)\n\t•\tStool Microscopy\n\t•\tUrinalysis\n\t•\tSputum AFB – Tuberculosis test", price: "₦30,000" }
      ]
    },
    menPackages: {
      title: "Men Packages",
      icon: Users,
      color: "from-blue-600 to-blue-800",
      description: "Get a clear picture of your health, then take control. Stay in touch with your general health today. Your time, your convenience, your choice. Our comprehensive health screening packages are designed to provide a detailed overview of your general body health, including cardiovascular health, blood sugar levels, kidney and liver function, and more.",
      tests: [
        { name: "Full Body Checkup (Opal)\n\t•\tFasting Blood Sugar (FBS)\n\t•\tTotal Cholesterol\n\t•\tFull Blood Count\n\t•\tUrinalysis\n\t•\tLiver Function Test\n\t•\tKidney Function Test", price: "₦45,000" },
        { name: "Full Body Checkup (Ruby)\n\t•\tFasting Blood Sugar (FBS)\n\t•\tLipid Profile\n\t•\tFull Blood Count\n\t•\tTotal Prostate Specific Antigen (Total PSA)\n\t•\tStool Microscopy\n\t•\tUrinalysis\n\t•\tLiver Function Test\n\t•\tKidney Function Test", price: "₦80,000" },
        { name: "Full Body Checkup (Diamond)\n\t•\tFasting Blood Sugar (FBS)\n\t•\tHbA1C (Glycated Heamoglobin)\n\t•\tLipid Profile\n\t•\tLiver Function Test\n\t•\tKidney Function Test\n\t•\tUric Acid\n\t•\tC-Reactive Protein CRP\n\t•\tThyroid Function Test 1 (Free T3, Free T4, TSH)\n\t•\tFull Blood Count\n\t•\tTotal Prostate Specific Antigen (Total PSA)\n\t•\tHepatitis B Surface Antigen (HBsAg) Rapid\n\t•\tHIV I & II Rapid\n\t•\tHepatitis C Virus Antibody (HCV) Rapid\n\t•\tStool Occult Blood\n\t•\tStool Microscopy\n\t•\tUrinalysis", price: "₦180,000" },
        { name: "Fertility/Hormonal Tests (Basic)\n\t•\tSeminal Fluid Analysis\n\t•\tSemen: Microscopy, Culture and Sensitivity", price: "₦15,000" },
        { name: "Fertility/Hormonal Tests (Standard)\n\t•\tFollicule Stimulating Hormone (FSH)\n\t•\tLH - Luteinizing Hormone\n\t•\tTestosterone (Total)\n\t•\tSeminal Fluid Analysis\n\t•\tSemen: Microscopy, Culture and Sensitivity", price: "₦60,000" },
        { name: "Erectile Dysfunction Package\n\t•\tFasting Blood Sugar (FBS)\n\t•\tFollicule Stimulating Hormone (FSH)\n\t•\tLH - Luteinizing Hormone\n\t•\tProlactin\n\t•\tTestosterone (Total)\n\t•\tSeminal Fluid Analysis\n\t•\tSemen: Microscopy, Culture and Sensitivity", price: "₦100,000" }
      ]
    },
    womenPackages: {
      title: "Women Packages",
      icon: Heart,
      color: "from-pink-500 to-rose-600",
      description: "Get a clear picture of your health, then take control. Stay in touch with your general health today. Your time, your convenience, your choice. Our comprehensive health screening packages are designed to provide a detailed overview of your general body health, including cardiovascular health, blood sugar levels, kidney and liver function, and more.",
      tests: [
        { name: "Full Body Checkup (Opal)\n\t•\tFasting Blood Sugar (FBS)\n\t•\tTotal Cholesterol\n\t•\tFull Blood Count\n\t•\tUrinalysis\n\t•\tLiver Function Test\n\t•\tKidney Function Test", price: "₦45,000" },
        { name: "Full Body Checkup (Ruby)\n\t•\tFasting Blood Sugar (FBS)\n\t•\tLipid Profile\n\t•\tFull Blood Count\n\t•\tStool Microscopy\n\t•\tUrinalysis\n\t•\tLiver Function Test\n\t•\tKidney Function Test", price: "₦70,000" },
        { name: "Full Body Checkup (Diamond)\n\t•\tFasting Blood Sugar (FBS)\n\t•\tHbA1C (Glycated Heamoglobin)\n\t•\tLipid Profile\n\t•\tLiver Function Test\n\t•\tKidney Function Test\n\t•\tUric Acid\n\t•\tC-Reactive Protein CRP\n\t•\tThyroid Function Test 1 (Free T3, Free T4, TSH)\n\t•\tFull Blood Count\n\t•\tHepatitis B Surface Antigen (HBsAg) Rapid\n\t•\tHIV I & II Rapid\n\t•\tHepatitis C Virus Antibody (HCV) Rapid\n\t•\tStool Occult Blood\n\t•\tStool Microscopy\n\t•\tUrinalysis\n\t•\tLiquid Based Cytology (LBC)", price: "₦200,000" },
        { name: "Fertility/Hormonal Tests (Basic)\n\t•\tEstradiol\n\t•\tFollicule Stimulating Hormone (FSH)\n\t•\tLH - Luteinizing Hormone\n\t•\tProlactin", price: "₦40,000" },
        { name: "Fertility/Hormonal Tests (Standard)\n\t•\tEstradiol\n\t•\tFollicule Stimulating Hormone (FSH)\n\t•\tLH - Luteinizing Hormone\n\t•\tProgesterone\n\t•\tProlactin", price: "₦55,000" },
        { name: "Fertility/Hormonal Tests (Comprehensive)\n\t•\tThyroid-Stimulating Hormone (TSH)\n\t•\tEstradiol\n\t•\tFollicule Stimulating Hormone (FSH)\n\t•\tLH - Luteinizing Hormone\n\t•\tProgesterone\n\t•\tProlactin\n\t•\tAnti Mullerian Hormone (AMH)", price: "₦150,000" }
      ]
    },
    domesticStaff: {
      title: "Domestic Staff Screening",
      icon: UserCheck,
      color: "from-green-600 to-emerald-600",
      description: "Are you employing the services of stewards, home caregivers, nannies, drivers, cooks, gardeners, etc? Here are some important tests you need to do on them to know more about their health status and ensure a safe working environment.",
      tests: [
        { name: "Basic Screening Package\n\t•\tPCV\n\t•\tHepatitis B Surface Antigen (HBsAg) Rapid\n\t•\tHIV I & II Rapid\n\t•\tBHCG- Qualitative (Pregnancy Test) for female\n\t•\tSputum AFB - Tuberculosis test\n\t•\tHepatitis A Rapid", price: "₦20,000" },
        { name: "Standard Screening Package\n\t•\tHb Electrophoresis/Genotype (Qualitative)\n\t•\tPCV\n\t•\tHepatitis B Surface Antigen (HBsAg) Rapid\n\t•\tHIV I & II Rapid\n\t•\tBHCG- Qualitative (Pregnancy Test) for female\n\t•\tHepatitis C Virus Antibody (HCV) Rapid\n\t•\tSputum AFB - Tuberculosis test\n\t•\tHepatitis A Rapid", price: "₦30,000" }
      ]
    },
    premarital: {
      title: "Pre-marital Screening",
      icon: Heart,
      color: "from-purple-600 to-violet-600",
      description: "Our Pre-Marital Tests Packages provide essential health evaluations to ensure you and your partner are in optimal health before your wedding day. These comprehensive screenings help identify any health concerns early and ensure a healthy start to your marriage.",
      tests: [
        { name: "Pre-marital Test (Basic) - Male and Female\n\t•\tBlood Grouping (ABO & Rh Typing)\n\t•\tHb Electrophoresis/Genotype (Qualitative)\n\t•\tHepatitis B Surface Antigen (HBsAg) Rapid\n\t•\tHIV I & II Rapid", price: "₦12,000" },
        { name: "Pre-marital Test (Standard) - Female\n\t•\tBlood Grouping (ABO & Rh Typing)\n\t•\tHb Electrophoresis/Genotype (Qualitative)\n\t•\tFull Blood Count\n\t•\tHepatitis B Surface Antigen (HBsAg) Rapid\n\t•\tHepatitis C Antibody (HCV) Rapid\n\t•\tHIV I & II Rapid\n\t•\tBHCG- Qualitative (Pregnancy Test)", price: "₦20,000" },
        { name: "Pre-marital Test (Comprehensive) - Female\n\t•\tBlood Grouping (ABO & Rh Typing)\n\t•\tHb Electrophoresis/Genotype (Qualitative)\n\t•\tFull Blood Count\n\t•\tFollicule Stimulating Hormone (FSH)\n\t•\tLH - Luteinizing Hormone\n\t•\tProlactin\n\t•\tProgesterone\n\t•\tHepatitis B Surface Antigen (HBsAg) Rapid\n\t•\tHepatitis C Antibody (HCV) Rapid\n\t•\tHIV I & II Rapid\n\t•\tBHCG- Qualitative (Pregnancy Test)", price: "₦100,000" },
        { name: "Pre-marital Test (Comprehensive) - Male\n\t•\tBlood Grouping (ABO & Rh Typing)\n\t•\tHb Electrophoresis/Genotype (Qualitative)\n\t•\tFull Blood Count\n\t•\tFollicule Stimulating Hormone (FSH)\n\t•\tLH - Luteinizing Hormone\n\t•\tTestosterone (Total)\n\t•\tHepatitis B Surface Antigen (HBsAg) Rapid\n\t•\tHepatitis C Antibody (HCV) Rapid\n\t•\tHIV I & II Rapid\n\t•\tSeminal Fluid Analysis\n\t•\tSemen: Microscopy, Culture and Sensitivity", price: "₦120,000" }
      ]
    },
    ultrasound: {
      title: "Ultrasound Scan",
      icon: Heart,
      color: "from-medical-cyan to-blue-500",
      description: "Our advanced ultrasound imaging services provide detailed visualization of internal organs and structures. These non-invasive diagnostic scans help detect and monitor various medical conditions with precision and safety.",
      tests: [
        { name: "Pelvic/Obstetrics Scan", price: "₦2,500" },
        { name: "Abdominal Scan", price: "₦7,000" },
        { name: "Abdominopelvic Scan", price: "₦10,000" },
        { name: "Upper Abdominal Scan", price: "₦5,000" },
        { name: "Lower Abdominal Scan", price: "₦5,000" },
        { name: "Breast Scan", price: "₦7,000" },
        { name: "Neck/Thyroid Scan", price: "₦10,000" },
        { name: "Transvaginal Pelvic Scan (TVS)", price: "₦10,000" },
        { name: "Prostate scan (Transrectal)", price: "₦7,000" },
        { name: "Folliculometry", price: "₦30,000" },
        
        { name: "Scrotal Scan", price: "₦7,000" },
        { name: "Specialized Area Scan", price: "CALL" }
      ]
    },
    haematology: {
      title: "Haematology",
      icon: TestTube,
      color: "from-red-500 to-pink-500",
      description: "Our comprehensive blood analysis services evaluate your blood cells, clotting function, and related disorders. These tests are essential for diagnosing anemia, bleeding disorders, infections, and blood cancers.",
      tests: [
        { name: "Full Blood count (Automation)", price: "₦7,000" },
        { name: "Haemoglobin (HB)", price: "₦2,000" },
        { name: "Pack cell volume (PCV)", price: "₦2,000" },
        { name: "WBC (Total)", price: "₦3,000" },
        { name: "WBC (Differential)", price: "₦4,000" },
        { name: "Platelet Count", price: "₦5,000" },
        { name: "E.S.R", price: "₦3,000" },
        { name: "HB Genotype", price: "₦2,000" },
        { name: "Bleeding time (BT)", price: "₦5,000" },
        { name: "Clotting Time", price: "₦5,000" },
        { name: "Thrombin time (TT)", price: "₦10,000" },
        { name: "Prothrombin time (PT)", price: "₦10,000" },
        { name: "Blood Grouping (ABO & Rh)", price: "₦2,000" }
      ]
    },
    chemistry: {
      title: "Chemistry",
      icon: TestTube,
      color: "from-green-500 to-emerald-500",
      description: "Our chemical pathology tests analyze blood and body fluids to assess organ function, metabolic processes, and detect diseases. These tests are crucial for monitoring diabetes, kidney function, liver health, and cardiovascular risk factors.",
      tests: [
        { name: "Diabetes Monitoring Package\n\t•\tFasting blood sugar\n\t•\tRandom blood sugar\n\t•\t2Hr Post-P blood sugar\n\t•\tHbA1c", price: "₦18,000" },
        { name: "Glucose Tolerance Test", price: "₦10,000" },
        { name: "Kidney Function Package\n\t•\tE/U/Cr\n\t•\tUrea\n\t•\tCreatinine\n\t•\tFull electrolytes", price: "₦43,000" },
        { name: "Liver Function Test Package", price: "₦18,000" },
        { name: "Lipid Profile Package\n\t•\tFull Lipid Profile\n\t•\tTotal Cholesterol", price: "₦23,000" },
        { name: "Additional Chemistry Tests", price: "CALL" }
      ]
    },
    microbiology: {
      title: "Microbiology & Serology",
      icon: TestTube,
      color: "from-purple-500 to-violet-500",
      description: "Our microbiology and serology services identify infectious diseases, parasites, and immune responses. These tests help diagnose bacterial, viral, and parasitic infections while monitoring your immune system status.",
      tests: [
        { name: "Stool Analysis Package\n\t•\tSTOOL: Microscopy\n\t•\tSTOOL: M/C/S\n\t•\tSTOOL: Occult Blood", price: "₦15,000" },
        { name: "Blood Infection Screening\n\t•\tMalaria Parasites\n\t•\tWidal Reaction\n\t•\tV.D.R.L\n\t•\tCulture & Sensitivity", price: "₦18,000" },
        { name: "Advanced Blood Tests\n\t•\tH.Pylori\n\t•\tTB (Serum)\n\t•\tMicrofilaria\n\t•\tTrypanosome\n\t•\tLeishmania", price: "₦25,000" },
        { name: "Urine Analysis Package\n\t•\tMicroscopy for Shistosoma oval\n\t•\tUrinalysis\n\t•\tM/C/S", price: "₦12,000" },
        { name: "Respiratory Analysis\n\t•\tSPUTUM: ZN Stain (A-AFB)\n\t•\tSPUTUM: M/C/S\n\t•\tSPUTUM: GenXpert", price: "₦22,000" },
        { name: "Reproductive Health Tests\n\t•\tSEMINAL FLUID: Analysis\n\t•\tSEMINAL FLUID: M/C/S", price: "₦25,000" },
        { name: "Skin & Swab Tests\n\t•\tSKIN: Snips For Microfilaria\n\t•\tSKIN: Fungal Element\n\t•\tSWAB: HVS M/C/S\n\t•\tSWAB: Urethral M/C/S", price: "₦29,000" },
        { name: "Viral Screening Package\n\t•\tHIV Screening test\n\t•\tHepatitis A, B, C Screening\n\t•\tPregnancy Test (Blood)", price: "₦14,000" },
        { name: "Hepatitis Profile & Viral Load", price: "CALL" }
      ]
    },
    hormonal: {
      title: "Hormonal/Endocrine Profiles",
      icon: Heart,
      color: "from-medical-magenta to-pink-500",
      description: "Our hormonal testing services evaluate your endocrine system function, fertility status, and hormonal balance. These tests are essential for diagnosing hormonal disorders, fertility issues, and metabolic conditions.",
      tests: [
        { name: "Male Fertility Profile\n\t•\tFSH\n\t•\tLH\n\t•\tTestosterone\n\t•\tProlactin", price: "₦50,000" },
        { name: "Female Fertility Profile\n\t•\tFSH\n\t•\tLH\n\t•\tEstrogen (E2)\n\t•\tProgesterone\n\t•\tProlactin", price: "₦50,000" },
        { name: "Advanced Fertility Testing\n\t•\tAMH (Anti-Müllerian Hormone)", price: "₦40,000" },
        { name: "Thyroid Function Package\n\t•\tTFT (Complete)\n\t•\tTSH", price: "₦65,000" },
        { name: "Prostate Health\n\t•\tPSA (Prostate Specific Antigen)", price: "₦10,000" },
        { name: "Additional Hormonal Tests", price: "CALL" }
      ]
    },
    histology: {
      title: "Histology & Cytology",
      icon: TestTube,
      color: "from-orange-500 to-red-500",
      description: "Our histopathology services examine tissue samples and cells to diagnose diseases, including cancer detection and tissue abnormalities. These detailed microscopic analyses provide crucial diagnostic information.",
      tests: [
        { name: "Small Tissue Analysis", price: "₦30,000" },
        { name: "Medium Tissue Analysis", price: "₦35,000" },
        { name: "Large Tissue Analysis", price: "₦40,000" },
        { name: "Complex Tissue Analysis", price: "₦45,000" },
        { name: "Cytology Examination", price: "CALL" }
      ]
    },
    ecg: {
      title: "Electrocardiograph (ECG)",
      icon: Activity,
      color: "from-medical-cyan to-blue-600",
      description: "Our ECG services monitor your heart's electrical activity to detect heart rhythm abnormalities, heart attacks, and other cardiac conditions. This non-invasive test is essential for cardiovascular health assessment.",
      tests: [
        { name: "Resting ECG", price: "₦8,000" },
        { name: "Exercise Stress Test (Pre & Post Exercise)", price: "₦12,000" }
      ]
    },
    xray: {
      title: "X-Ray with Radiological Report",
      icon: X,
      color: "from-gray-600 to-slate-700",
      description: "Our advanced digital X-ray imaging services provide detailed radiological reports for accurate diagnosis of bone fractures, lung conditions, and internal abnormalities. All images are reviewed by qualified radiologists.",
      tests: [
        { name: "Head & Neck Imaging Package\n\t•\tSkull (AP & Lat)\n\t•\tSinuses\n\t•\tMandibles\n\t•\tCervical Spine", price: "₦40,000" },
        { name: "Chest & Respiratory Package\n\t•\tChest (PA)\n\t•\tChest (AP & Lat)\n\t•\tThoracic Inlet", price: "₦30,000" },
        { name: "Spine & Back Package\n\t•\tLumbosacral (AP & Lat)\n\t•\tThoracic Spine (AP & Lat)\n\t•\tCervical Spine (with Obliques)", price: "₦45,000" },
        { name: "Abdominal & Pelvic Package\n\t•\tAbdomen (AP & Lat)\n\t•\tPelvis\n\t•\tHips", price: "₦45,000" },
        { name: "Upper Limb Package\n\t•\tShoulder joint\n\t•\tArm (Humerus)\n\t•\tElbow Joint\n\t•\tWrist Joint\n\t•\tHands/Fingers", price: "₦50,000" },
        { name: "Lower Limb Package\n\t•\tKnee (AP & Lat)\n\t•\tLeg (Tibia & fibular)\n\t•\tAnkle Joint\n\t•\tFoot (AP & Oblique)\n\t•\tFemur or Thigh", price: "₦55,000" },
        { name: "Specialized Imaging\n\t•\tHystero-Salpingogram (HSG)\n\t•\tCustom imaging studies", price: "CALL" }
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

        <div className="space-y-8">
          {Object.entries(filteredCategories).map(([key, category]) => {
            const IconComponent = category.icon;
            const isOpen = openCategories[key];
            
            return (
              <div key={key} className="space-y-6">
                {/* Always visible section with title and description */}
                <div className={`bg-gradient-to-r ${category.color} p-8 rounded-xl text-white`}>
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
                      <IconComponent className="w-8 h-8" />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-3xl font-bold mb-2">{category.title}</h2>
                      <div className="flex items-center space-x-3">
                        <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                          2025 Pricing
                        </Badge>
                        <span className="text-white/80 text-sm">{category.tests.length} packages available</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Description always visible */}
                  {(category as any).description && (
                    <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm border border-white/20">
                      <p className="text-white/95 leading-relaxed text-lg">
                        {(category as any).description}
                      </p>
                    </div>
                  )}
                </div>

                {/* Accordion for Package Details */}
                <Card className="border-2 hover:border-primary/20 transition-colors">
                  <Collapsible open={isOpen} onOpenChange={() => toggleCategory(key)}>
                    <CollapsibleTrigger asChild>
                      <CardHeader className="cursor-pointer hover:bg-gray-50 transition-colors py-6">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                              <IconComponent className="w-5 h-5 text-primary" />
                            </div>
                            <div>
                              <h3 className="text-xl font-semibold text-foreground">
                                View Available {category.title} Packages
                              </h3>
                              <p className="text-sm text-muted-foreground">
                                Click to see all package options and pricing details
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2">
                            <span className="text-sm text-muted-foreground hidden sm:block">
                              {isOpen ? 'Hide' : 'Show'} packages
                            </span>
                            <ChevronDown className={`w-6 h-6 text-primary transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
                          </div>
                        </div>
                      </CardHeader>
                    </CollapsibleTrigger>
                    
                    <CollapsibleContent>
                      <CardContent className="pt-0 pb-6">
                        {/* Package Cards Grid */}
                        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                          {category.tests.map((test, index) => (
                            <Card key={index} className="border-2 hover:border-primary/30 hover:shadow-lg transition-all duration-300 group">
                              <CardContent className="p-6">
                                {/* Package Name */}
                                <div className="mb-4">
                                  <h4 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                                    {test.name.split('\n')[0]}
                                  </h4>
                                </div>
                                
                                {/* Tests Included */}
                                <div className="mb-6">
                                  <h5 className="text-sm font-semibold text-muted-foreground mb-3 uppercase tracking-wide">
                                    Tests Included:
                                  </h5>
                                  <div className="space-y-2">
                                    {test.name.split('\n').slice(1).map((line, lineIndex) => {
                                      if (line.trim().startsWith('•') || line.trim().startsWith('\t•')) {
                                        return (
                                          <div key={lineIndex} className="flex items-start space-x-2">
                                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2.5 flex-shrink-0"></div>
                                            <span className="text-sm text-muted-foreground leading-relaxed">
                                              {line.replace(/^\t*•\t*/, '').trim()}
                                            </span>
                                          </div>
                                        );
                                      }
                                      return null;
                                    })}
                                  </div>
                                </div>
                                
                                {/* Price and Book Button */}
                                <div className="border-t pt-4 space-y-4">
                                  <div className="text-center">
                                    <span className={`text-3xl font-bold ${
                                      test.price === 'CALL' 
                                        ? 'text-accent' 
                                        : 'text-primary'
                                    }`}>
                                      {test.price}
                                    </span>
                                  </div>
                                  <Button 
                                    onClick={() => handleBookService(test.name, test.price)}
                                    className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-3"
                                    size="lg"
                                  >
                                    {test.price === 'CALL' ? 'Call for Details' : 'Book Now'}
                                  </Button>
                                </div>
                              </CardContent>
                            </Card>
                          ))}
                        </div>

                        {/* Contact Section */}
                        <Card className="mt-6 bg-gradient-to-r from-gray-50 to-white border-2 border-gray-100">
                          <CardContent className="p-6">
                            <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
                              <div className="text-center sm:text-left">
                                <h4 className="font-semibold text-foreground mb-1">Need help choosing the right package?</h4>
                                <p className="text-sm text-muted-foreground">Contact us for personalized recommendations and immediate scheduling</p>
                              </div>
                              <Button 
                                onClick={openWhatsApp}
                                className="bg-gradient-to-r from-medical-cyan to-medical-magenta hover:opacity-90 text-white px-8"
                                size="lg"
                              >
                                <MessageCircle className="w-5 h-5 mr-2" />
                                Contact Us
                              </Button>
                            </div>
                          </CardContent>
                        </Card>
                      </CardContent>
                    </CollapsibleContent>
                  </Collapsible>
                </Card>
              </div>
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