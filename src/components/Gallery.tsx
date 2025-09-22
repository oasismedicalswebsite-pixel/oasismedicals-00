import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Download, Eye, ImageIcon } from "lucide-react";
import { useState } from "react";
const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const galleryImages = [{
    src: "/lovable-uploads/clinic-exterior.png",
    name: "Clinic Exterior View",
    category: "Facility"
  }, {
    src: "/lovable-uploads/waiting-area.png",
    name: "Waiting Area",
    category: "Facility"
  }, {
    src: "/lovable-uploads/interior-poster.png",
    name: "Interior Information Poster",
    category: "Facility"
  }, {
    src: "/lovable-uploads/3f2ea8ce-8e6d-4383-9fce-900ffef57f89.png",
    name: "Patient Reception Service",
    category: "Services"
  }, {
    src: "/lovable-uploads/scientist-at-work.png",
    name: "Scientist at work",
    category: "Services"
  }, {
    src: "/lovable-uploads/hematology-department.png",
    name: "Hematology Department",
    category: "Services"
  }, {
    src: "/lovable-uploads/microbiology-department.png",
    name: "Microbiology Department",
    category: "Services"
  }, {
    src: "/lovable-uploads/xray-department.png",
    name: "Radiographer at work/X-ray Department",
    category: "Services"
  }, {
    src: "/lovable-uploads/ultrasound-department.jpg",
    name: "Ultrasound Department",
    category: "Services"
  }, {
    src: "/lovable-uploads/chemistry-department-1.jpg",
    name: "Chemistry Department",
    category: "Services"
  }, {
    src: "/lovable-uploads/chemistry-department-2.jpg",
    name: "Chemistry Department",
    category: "Services"
  }, {
    src: "/lovable-uploads/b37e74d6-ddb5-4e25-ac78-9c8350905184.png",
    name: "Medical Team Photo",
    category: "Team"
  }, {
    src: "/lovable-uploads/8047a331-d422-41ec-9a8a-ca357f059dd9.png",
    name: "Clinical Setup",
    category: "Services"
  }, {
    src: "/lovable-uploads/8960ec25-3a43-493a-8dd2-da5b605beca0.png",
    name: "Medical Documentation",
    category: "Services"
  }, {
    src: "/lovable-uploads/a8f39a80-491f-4105-ba93-59e1e8e84f10.png",
    name: "Patient Care Area",
    category: "Facility"
  }, {
    src: "/lovable-uploads/fc70eb34-882e-4a20-9da3-39a20773fb7c.png",
    name: "Medical Center Interior",
    category: "Facility"
  }];
  const categories = ["All", ...new Set(galleryImages.map(img => img.category))];
  const [selectedCategory, setSelectedCategory] = useState("All");
  const filteredImages = selectedCategory === "All" ? galleryImages : galleryImages.filter(img => img.category === selectedCategory);
  const handleImageClick = (src: string) => {
    setSelectedImage(src);
  };
  const closeModal = () => {
    setSelectedImage(null);
  };
  const downloadImage = (src: string, name: string) => {
    const link = document.createElement('a');
    link.href = src;
    link.download = name;
    link.click();
  };
  return <section id="gallery" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Our <span className="bg-gradient-to-r from-medical-cyan to-medical-magenta bg-clip-text text-transparent">Gallery</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Take a visual tour of our state-of-the-art medical facility and professional services
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {categories.map(category => <Button key={category} variant={selectedCategory === category ? "default" : "outline"} onClick={() => setSelectedCategory(category)} className={selectedCategory === category ? "bg-gradient-to-r from-medical-cyan to-medical-magenta text-white" : "hover:bg-primary/10"}>
                <ImageIcon className="w-4 h-4 mr-2" />
                {category}
              </Button>)}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredImages.map((image, index) => <Card key={index} className="group overflow-hidden hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20">
              <div className="relative aspect-square overflow-hidden">
                <img 
                  src={image.src} 
                  alt={image.name} 
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" 
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2">
                  <Button
                    size="sm"
                    variant="secondary"
                    onClick={() => handleImageClick(image.src)}
                    className="bg-white/20 text-white border-white/30 hover:bg-white/30"
                  >
                    <Eye className="w-4 h-4" />
                  </Button>
                  <Button
                    size="sm"
                    variant="secondary"
                    onClick={() => downloadImage(image.src, image.name)}
                    className="bg-white/20 text-white border-white/30 hover:bg-white/30"
                  >
                    <Download className="w-4 h-4" />
                  </Button>
                </div>
              </div>
              
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-foreground mb-1 line-clamp-2">
                      {image.name}
                    </h3>
                    <Badge variant="outline" className="text-xs">
                      {image.category}
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>)}
        </div>

        {filteredImages.length === 0 && <div className="text-center py-12">
            <ImageIcon className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-foreground mb-2">No images found</h3>
            <p className="text-muted-foreground">Try selecting a different category</p>
          </div>}

        {/* Image Modal */}
        {selectedImage && <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4" onClick={closeModal}>
            <div className="relative max-w-4xl max-h-full">
              <img src={selectedImage} alt="Selected gallery image" className="max-w-full max-h-full object-contain rounded-lg" onClick={e => e.stopPropagation()} />
              <Button variant="secondary" size="sm" onClick={closeModal} className="absolute top-4 right-4 bg-white/20 text-white border-white/30 hover:bg-white/30">
                ✕
              </Button>
            </div>
          </div>}
      </div>
    </section>;
};
export default Gallery;