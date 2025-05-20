import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import FilterSort from '../components/FilterSort';
import ProductCard from '../components/ProductCard';
import { products, filterProducts, sortProducts, getAllCategories } from '../data/products';
import { FilterOptions } from '../types/types';

const Products: React.FC = () => {
  const { category } = useParams<{ category?: string }>();
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [filters, setFilters] = useState<FilterOptions>({});
  const [sortBy, setSortBy] = useState('featured');
  
  // Get all available filters
  const allMaterials = [...new Set(products.flatMap(product => product.materials))];
  const allColors = [...new Set(products.flatMap(product => product.colors))];
  const priceRange = {
    min: Math.min(...products.map(product => product.discountPrice || product.price)),
    max: Math.max(...products.map(product => product.price))
  };
  
  // Apply category filter from URL param
  useEffect(() => {
    if (category) {
      setFilters(prev => ({ ...prev, category }));
    } else {
      // If no category, remove category filter
      const { category, ...rest } = filters;
      setFilters(rest);
    }
  }, [category]);
  
  // Apply filters and sorting
  useEffect(() => {
    let result = [...products];
    
    // Apply filters
    result = filterProducts(result, filters);
    
    // Apply sorting
    result = sortProducts(result, sortBy);
    
    setFilteredProducts(result);
  }, [filters, sortBy]);

  const handleFilterChange = (newFilters: FilterOptions) => {
    setFilters(newFilters);
  };

  const handleSortChange = (newSortBy: string) => {
    setSortBy(newSortBy);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-serif font-bold mb-2">
          {category ? `${category.charAt(0).toUpperCase() + category.slice(1)}s` : 'All Products'}
        </h1>
        <p className="text-gray-600">
          {category 
            ? `Browse our collection of premium ${category}s crafted with the finest materials and designed for modern living.`
            : 'Explore our full collection of premium furniture and home accessories.'}
        </p>
      </div>
      
      <FilterSort 
        onFilterChange={handleFilterChange}
        onSortChange={handleSortChange}
        availableFilters={{
          categories: getAllCategories(),
          priceRange,
          materials: allMaterials,
          colors: allColors
        }}
        currentCategory={category}
      />
      
      {filteredProducts.length === 0 ? (
        <div className="text-center py-12">
          <h3 className="text-xl font-medium mb-2">No products found</h3>
          <p className="text-gray-600">Try adjusting your filters to find what you're looking for.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Products;