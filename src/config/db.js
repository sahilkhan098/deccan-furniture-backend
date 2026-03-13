const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error('DB connection error:', error);
    process.exit(1);
  }
};

// Product data from frontend (all categories)
const seedProducts = [
  // Sofas
  { category: 'sofa', name: "Royal Velvet Sofa", originalPrice: 85000, offerPrice: 65000, description: "Luxurious 3-seater velvet sofa with premium cushioning and elegant wooden legs.", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80" },
  { category: 'sofa', name: "Modern L-Shape Sofa", originalPrice: 120000, offerPrice: 95000, description: "Contemporary L-shaped sectional sofa perfect for spacious living rooms.", image: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=800&q=80" },
  { category: 'sofa', name: "Classic Chesterfield", originalPrice: 95000, offerPrice: 78000, description: "Timeless Chesterfield design with deep button tufting and rolled arms.", image: "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=800&q=80" },
  { category: 'sofa', name: "Minimalist Fabric Sofa", originalPrice: 55000, offerPrice: 42000, description: "Clean lines and neutral tones for the modern minimalist home.", image: "https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=800&q=80" },
  // Chairs
  { category: 'chair', name: "Executive Leather Chair", originalPrice: 35000, offerPrice: 28000, description: "Premium leather office chair with ergonomic design and lumbar support.", image: "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?w=800&q=80" },
  { category: 'chair', name: "Accent Armchair", originalPrice: 25000, offerPrice: 19500, description: "Statement armchair with bold fabric and golden metal legs.", image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=800&q=80" },
  { category: 'chair', name: "Rocking Chair", originalPrice: 18000, offerPrice: 14500, description: "Classic wooden rocking chair for comfort and relaxation.", image: "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=800&q=80" },
  { category: 'chair', name: "Dining Chair Set", originalPrice: 32000, offerPrice: 26000, description: "Set of 4 elegant dining chairs with upholstered seats.", image: "https://images.unsplash.com/photo-1503602642458-232111445657?w=800&q=80" },
  // Tables
  { category: 'table', name: "Marble Coffee Table", originalPrice: 45000, offerPrice: 36000, description: "Stunning marble top coffee table with gold-finished metal base.", image: "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?w=800&q=80" },
  { category: 'table', name: "Wooden Center Table", originalPrice: 28000, offerPrice: 22000, description: "Solid wood center table with intricate carved details.", image: "https://images.unsplash.com/photo-1532372320572-cda25653a26d?w=800&q=80" },
  { category: 'table', name: "Glass Side Table", originalPrice: 15000, offerPrice: 11500, description: "Tempered glass side table with sleek chrome frame.", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80" },
  { category: 'table', name: "Nesting Tables Set", originalPrice: 22000, offerPrice: 17500, description: "Set of 3 nesting tables in different sizes for versatile use.", image: "https://images.unsplash.com/photo-1499933374294-4584851497cc?w=800&q=80" },
  // Office
  { category: 'office', name: "Executive Desk", originalPrice: 75000, offerPrice: 62000, description: "Spacious executive desk with built-in storage and cable management.", image: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=800&q=80" },
  { category: 'office', name: "Bookshelf Unit", originalPrice: 35000, offerPrice: 28000, description: "Modern bookshelf with adjustable shelves and contemporary design.", image: "https://images.unsplash.com/photo-1594620302200-9a762244a156?w=800&q=80" },
  { category: 'office', name: "Filing Cabinet", originalPrice: 18000, offerPrice: 14000, description: "3-drawer filing cabinet with lock for secure document storage.", image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80" },
  { category: 'office', name: "Conference Table", originalPrice: 95000, offerPrice: 78000, description: "10-seater conference table with cable ports and premium finish.", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80" },
  // Dining
  { category: 'dining', name: "6-Seater Dining Set", originalPrice: 85000, offerPrice: 68000, description: "Complete dining set with solid wood table and upholstered chairs.", image: "https://images.unsplash.com/photo-1617806118233-18e1de247200?w=800&q=80" },
  { category: 'dining', name: "Marble Dining Table", originalPrice: 120000, offerPrice: 98000, description: "Luxurious 8-seater marble dining table with brass accents.", image: "https://images.unsplash.com/photo-1615968679312-9b7ed9f04e79?w=800&q=80" },
  { category: 'dining', name: "Round Dining Table", originalPrice: 55000, offerPrice: 44000, description: "Elegant round dining table perfect for intimate family gatherings.", image: "https://images.unsplash.com/photo-1604578762246-41134e37f9cc?w=800&q=80" },
  { category: 'dining', name: "Extendable Dining Set", originalPrice: 95000, offerPrice: 78000, description: "Smart extendable dining table that grows with your needs.", image: "https://images.unsplash.com/photo-1595514535116-d3195399a9e9?w=800&q=80" }
];

const seedDB = async () => {
  try {
    await connectDB();
    const Product = require('../models/Product');
    await Product.deleteMany({});
    await Product.insertMany(seedProducts.map(p => ({ ...p, frontendId: p.id || Math.random() }))); // Add frontendId for matching
    console.log('Products seeded successfully');
    process.exit(0);
  } catch (error) {
    console.error('Seeding error:', error);
  }
};

if (require.main === module) {
  seedDB();
}

module.exports = connectDB;

